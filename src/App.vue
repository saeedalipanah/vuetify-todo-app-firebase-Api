<template>
  <div class="app">
    <v-app class="my-app">
      <header>
        <navbar></navbar>
      </header>
      <v-main class="grey lighten-2 ">
        <router-view></router-view>
      </v-main>
      <footer>
        
      </footer>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
   
  },

  data() {
    return {
      
     
    };
  },
  
 
};
</script>
<style scoped>
@font-face {
  font-family: 'Shabnam';
  src: url('./assets/fonts/Shabnam/Shabnam.eot');
  src: url('./assets/fonts/Shabnam/Shabnam.eot?#iefix') format('Shabnam-opentype'),
       url('./assets/fonts/Shabnam/Shabnam.woff') format('woff'),
       url('./assets/fonts/Shabnam/Shabnam.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
/* @font-face {
  font-family: 'Shabnam';
  src: url('./assets/fonts/Shabnam/Shabnam-Bold.eot');
  src: url('./assets/fonts/Shabnam/Shabnam-Bold.eot?#iefix') format('Shabnam-opentype'),
       url('./assets/fonts/Shabnam/Shabnam-Bold.woff') format('woff'),
       url('./assets/fonts/Shabnam/Shabnam-Bold.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: 'Shabnam';
  src: url('./assets/fonts/Shabnam/Shabnam-Light.eot');
  src: url('./assets/fonts/Shabnam/Shabnam-Light.eot?#iefix') format('Shabnam-opentype'),
       url('./assets/fonts/Shabnam/Shabnam-Light.woff') format('woff'),
       url('./assets/fonts/Shabnam/Shabnam-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
} */
*{
  font-family: 'Shabnam' !important;
}


</style>
