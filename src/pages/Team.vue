<template>
  <div class="team">
    <v-container class="">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(person, i) in team"
          :key="i"
          class="col"
        >
          <v-hover v-slot="{ hover }" >
            <v-card
              :elevation="hover ? 24 : 2"
              class="my-10 text-center d-flex flex-column align-center"
            >
              <v-avatar  :size="hover ? 265 : 260" class="my-2">
                <v-img height="250" :src="person.avatar"></v-img>
              </v-avatar>

              <v-card-title class="py-2">{{ person.name }}</v-card-title>

              <v-card-text>
                <div class="text-subtitle-1">
                  {{ person.role }}
                </div>
              </v-card-text>

              <div class="linear"></div>

              <v-card-actions>
                <v-btn plain class="text-caption ">
                  <v-icon left>mdi-message-text</v-icon>
                  message
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Saeed",
          role: "Web developer",
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg",
        },
        {
          name: "Soran",
          role: "Graphic designer",
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/111554483/original/31e067d65b21bb066c75e7b562fb73ed7283fc6c/create-social-media-avatars-in-minimalist-style.jpg",
        },
        {
          name: "Nima",
          role: "Web developer",
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/111554483/original/d43403ec8cfd144786043cd6c5e9c4c966d5f61c/create-social-media-avatars-in-minimalist-style.jpg",
        },
        {
          name: "pedram",
          role: "Social media maverick",
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111144127/original/796fac190959d25a639b38c89856df0a9d1f9e94/design-minimalist-flat-line-vector-avatar-of-you.jpg",
        },
        {
          name: "ashkan",
          role: "Sales guru",
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/111144127/original/d7ff66378168acd2d6f5334504b3d13790469e73/design-minimalist-flat-line-vector-avatar-of-you.jpg",
        },
      ],
    

    }; //end of data
  },

};
</script>
<style scoped>
.linear {
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, white, black, white);
}
</style>
