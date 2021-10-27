<template>
  <div class="projects">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="10" lg="8">
          <v-expansion-panels hover focusable class="ex-panel">
            <v-expansion-panel v-for="(project, i) in projects" :key="i">
              <v-expansion-panel-header ripple class="font-weight-black">
                {{ project.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                  <span class="font-weight-bold">duy by :</span>
                <span class="px-3">
                  {{ project.due }}
                </span>
                <div class="font-weight-bold">content :</div>
                <div class="px-10"> {{project.content}}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>
<script>
export default {
  props:['test','obj','array','array-of-objects'],
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "pedram",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "ashkan",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "nima",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "learn vuetify",
          person: "saeed",
          due: "22th Jun 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
    
};
</script>

<style scoped>
.btn {
  border: 1px solid black !important;
  border-radius: 30px;
}
.btn:hover {
  height: 100px !important;
}
.ex-panel{
  border-radius: 30px;
}

</style>
