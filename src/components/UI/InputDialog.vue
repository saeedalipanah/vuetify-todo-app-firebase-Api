<template>
  <div>
    <v-btn
      class="add"
      absolute
      fab
      color="cyan accent-2"
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      persistent
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <v-card class="dialog">
        <v-toolbar color="purple darken-4" class="white--text text-h6 ">{{
          $t("dashboard.addProjectTooltip")
        }}</v-toolbar>
        <v-card-text>
          <v-form class="ma-4" v-model.trim="formIsvalid" ref="form">
            <v-text-field
              v-model.trim="title"
              clearable
              outlined
              counter="30"
              :label="`${$t('dashboard.projectTitle')}`"
              append-icon="mdi-folder-edit"
              :rules="[
                rules.required,
                rules.whiteSpaceInBegin,
                rules.titleLength,
              ]"
            ></v-text-field>
            <v-textarea
              v-model.trim="information"
              clearable
              class=""
              outlined
              :label="`${$t('dashboard.information')}`"
              append-icon="mdi-pencil"
              :rules="[rules.required, rules.whiteSpaceInBegin,rules.informationLength]"
            ></v-textarea>

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
              
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model.trim="date"
                  :label="`${$t('dashboard.dueDate')}`"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="[rules.required]"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>

            <v-btn
              :loading="isLoading"
              :disabled="!formIsvalid || isLoading"
              @click="submitForm()"
              class="float-right"
              >add project</v-btn
            >
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters["projects/isLoading"];
    },
  },
  data() {
    return {
      dialog: false,
      formIsvalid: false,
      title: "",
      rules: {
        required: (v) => !!v || this.$i18n.t('rules.required'),
        whiteSpaceInBegin: (v) => {
          let reg = /^\s*$/;
          return !reg.test(v) || "invalid";
        },
        titleLength: (v) =>v == null || v.length <= 30 || "Name must be less than 30 characters",
        informationLength: 
          (v) =>v == null || v.length >= 10 || "Name must be atleast 10 characters",
      },
      information: "",
      menu: null,
      date: null
      
    };
  },
  methods: {
    submitForm() {
      if (this.formIsvalid == true) {
        const newProject = {
          title: this.title,
          information: this.information,
          date: this.date,
        };
        this.$store.dispatch("projects/addProject", newProject);
      }
      setTimeout(() => {
        this.dialog = false;
      }, 500);
    },
    closeDialog() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.dialog = false;
    },
  },
  created(){
    window.addEventListener('click', (event) => {
      if(event.target.classList.contains('v-overlay__scrim')) {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      }
    })
  }
};
</script>
<style scoped>
.dialog {
  border-radius: 20px;
}
.add {
  top: 200px !important;
  left: 160px;
}
.text-h6 {
  font-family: "Shabnam" !important;
}
</style>
