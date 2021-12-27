<template>
  <div class="navbar">
    <nav>
      <v-app-bar
        app
        elevate-on-scroll
        height="90"
        class="app-bar grey lighten-2"
      >
        <v-app-bar-nav-icon
          class="pa-7"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text text-h5">
          <span class="font-weight-light ">{{$t("header.todo")}}</span>
          <span class="font-weight-bold ">{{$t("header.saeed")}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu  offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="text-lowercase mx-2 grey--text"
          color="grey lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
         <v-icon color="grey darken-2" left>mdi-earth</v-icon>
         {{ $t("header.changeLanguage") }}
         <v-icon color="grey darken-2" left right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title  style="cursor: pointer;" @click="changeLanguage('en')">English</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title style="cursor: pointer;"  @click="changeLanguage('fa')">فارسی</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn color="grey lighten-2">
          <span class="grey--text ">{{ $t("header.signout") }}</span>
          <v-icon right color="grey darken-2">mdi-logout</v-icon>
        </v-btn>
        
        


      </v-app-bar>

      <!-- navigation-drawer -->
      <v-navigation-drawer
        src="https://www.teahub.io/photos/full/29-298413_background-image-for-navigation-drawer.png"
        class="navigation-drawer"
        width="250"
        v-model="drawer"
        app
        :right="$vuetify.rtl"
      >
        <v-btn
          @click="drawer = !drawer"
          class="mt-2 mx-2"
          fab
          dark
          small
          color="grey"
        >
          <v-icon dark >
            {{ $t("header.arrowButton") }}
          </v-icon>
        </v-btn>

        <v-row class="text-center">
          <v-col class="">
            <v-avatar :size="200" class="">
              <v-img
                height="250"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg"
              ></v-img>
            </v-avatar>
            <p class="my-2 black--text text-h6 font-italic font-weight-light">
              Saeed
            </p>
            <v-tooltip top color="grey darken-4">
              <template class="" v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <input-dialog></input-dialog>
                </span>
              </template>
              <span>{{$t("dashboard.addProjectTooltip")}}</span>
            </v-tooltip>
          </v-col>
        </v-row>

        <v-list dense>
          <v-list-item to="/dashboard" class="ma-4">
            <v-list-item-icon>
              <v-icon large class="white--text">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class=" list-items white--text">
                {{$t("navigationDrawer.dashboard")}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/projects" class="ma-4">
            <v-list-item-icon>
              <v-icon large class="white--text">mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="list-items white--text"
                >{{$t("navigationDrawer.projects")}}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/team" class="ma-4">
            <v-list-item-icon>
              <v-icon large class="white--text">mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="list-items white--text"
                >{{$t("navigationDrawer.team")}}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import i18n from "../../plugins/i18n.js";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {},
  methods: {
    goToRouter(route) {
      this.$router.replace(route);
    },
    changeLanguage(lan) {
      if (lan === "en") {
        i18n.locale = "en";
        this.$vuetify.rtl = false;
      } else {
        i18n.locale = "fa";
        this.$vuetify.rtl = true;
      }
    },
  },
};
</script>
<style scoped>

.t-title {
  font-size: x-large;
}
.list-items{
  font-size: medium !important;
  line-height: 20px !important;
}


/* .font-weight-light,.font-weight-bold{
  font-family: 'Shabnam' !important;
} */

</style>
