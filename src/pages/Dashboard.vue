<template>
  <div class="dashboard">
    <v-snackbar
      shaped
      timeout="5000"
      class="my-2"
      v-model="snackbar"
    >
      <span class="font-weight-bold text-h6">
        Awesome!
      </span>
      project has been added to your projects.
      <v-btn small @click="!snackbar">close</v-btn>
    </v-snackbar>
    <v-container>
      <v-row class=" align-center">
        
        <div class="text-subtitle-1 grey--text">
          {{$t("dashboard.sortBy")}}
        </div>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              small
              class="mx-4"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-folder</v-icon>
              <span class="text-caption text-lowercase">{{$t("dashboard.projectName")}}</span>
            </v-btn>
          </template>
          <span>{{$t("dashboard.projectNameTooltip")}}</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              small
              class="mx-4"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-account</v-icon>
              <span class=" text-caption text-lowercase">{{$t("dashboard.person")}}</span>
            </v-btn>
          </template>
          <span>{{$t("dashboard.personTooltip")}}</span>
        </v-tooltip>
        <v-spacer></v-spacer>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
              fab
              class="grey lighten-2"
              @click="setComponent('dummy-dialog')"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
          </template>
          <span>{{$t("dashboard.addProjectTooltip")}}</span>
        </v-tooltip>

        <base-dialog
          :title="`${$t('dashboard.addProjectTooltip')}`"
          :open="selectedComponent === 'dummy-dialog'"
        >
          <template v-slot:content>
            <v-form class="" v-model.trim="formIsvalid" ref="form">
              <v-text-field
                v-model.trim="title"
                clearable
                outlined
                :label="`${$t('dashboard.projectTitle')}`"
                append-icon="mdi-folder-edit"
                :rules="[rules.required,rules.titleLength,rules.whiteSpaceInBegin]"
              ></v-text-field>
              <v-textarea
                v-model.trim="information"
                clearable
                class=""
                outlined
                :label="`${$t('dashboard.information')}`"
                append-icon="mdi-pencil"
                :rules="[rules.required,rules.informationLength,rules.whiteSpaceInBegin]"
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
            </v-form>
          </template>
          <template v-slot:action>
            <v-btn
              class="mx-2"
              :disabled="!formIsvalid"
              :loading="isLoading"
              @click="submitForm"
              >save</v-btn
            >
            <v-btn class="mx-2" @click="cancelDialog">cancel</v-btn>
          </template>
        </base-dialog>
      </v-row>

      <v-row class="justify-center" v-if="isLoading">
        <v-progress-circular
          :size="100"
          :width="6"
          color="deep-purple accent-4"
          indeterminate
        ></v-progress-circular>
      </v-row>

      <v-row
        v-else
        class="space-around white"
        :class="project.status"
        v-for="project in projects"
        :key="project.title"
      >
        <v-col cols="12" sm="10" md="6" class="col d-flex flex-column">
          <div class="text-subtitle-2 grey--text">{{$t("dashboard.projectTitle")}}</div>
          <div>
            {{ project.title }}
          </div>
        </v-col>

        <v-col cols="5" sm="4" md="2" class="">
          <div class="text-caption grey--text">{{$t("dashboard.person")}}</div>
          <div>
            {{ project.person }}
          </div>
        </v-col>
        <v-col cols="5" sm="4" md="2" class="">
          <div class="text-caption grey--text">{{$t("dashboard.dueBy")}}</div>
          <div>
            {{ project.due }}
          </div>
        </v-col>
        <v-col cols="1" sm="2" md="2" class="">
          <div class="text-caption ml-10 grey--text ">{{$t("dashboard.status")}}</div>
          <v-chip
            small
            class="chip ml-10"
            :class="project.status"
            text-color="white"
          >
            {{ project.status }}
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      snackbar: false,
      isSorted: false,
      selectedComponent: "",
      formIsvalid: false,
      title: "",
      information: "",
      menu: null,
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
      date: null
    };
  },
  computed: {
    projects() {
      return this.$store.getters["projects/projects"];
    },
    // ...mapGetters(['projects/projects'])
    isLoading() {
      return this.$store.getters["projects/isLoading"];
    },
  },
  created() {
    this.loadProjects();
  },

  methods: {
    sortBy(sortParam) {
      this.projects.sort(function(a, b) {
        if (a[sortParam] > b[sortParam]) {
          return 1;
        }
        if (a[sortParam] < b[sortParam]) {
          return -1;
        }
        return 0;
      });
    },
    setComponent(component) {
      this.selectedComponent = component;
    },
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
        this.selectedComponent = "";
        this.snackbar = true
      }, 500);
    },
    loadProjects() {
      this.$store.dispatch("projects/loadProjects");
    },
    cancelDialog(){
      this.selectedComponent = ''
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    }
  },
};
</script>
<style scoped>
.row {
  /* border: 1px solid #c4c4c4 !important; */
  margin: 8px 0px;
  padding: 10px 1px 10px 20px;
}
.row.ongoing {
  border-left: 6px solid purple !important;
  border-radius: 5px;
}

.row.complete {
  border-left: 6px solid #008507 !important;
  border-radius: 5px;
}
.row.overdue {
  border-left: 6px solid #be0000 !important;
  border-radius: 5px;
}
.chip.ongoing {
  background-color: purple !important;
}
.chip.complete {
  background-color: #008507 !important;
}
.chip.overdue {
  background-color: #be0000 !important;
}
.text-subtitle-1,.text-caption,.text-subtitle-2{
  font-family: 'Shabnam' !important;
}
</style>
