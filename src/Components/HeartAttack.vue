<template>
  <div id="app">
<!--  <v-app id="info">-->
    <v-card
        id="card"
        class="mx-2 my-2"
        max-height="85vh"
    >
      <v-card-title class="mx-1 display-1">Heart Attack</v-card-title>
      <v-card-subtitle class="mx-2 white--text">Coronary Arteries</v-card-subtitle>
      <v-divider></v-divider>

      <v-card-text>
        <div>
          <p justify-content="left" class="text--primary">
            The heart pumps blood to itself through blood vessels called
            the coronary arteries (not shown in the 3D model). A heart
            attack occurs when blood flow is obstructed by a narrowing
            of these arteries.
          </p>
        </div>

        <v-responsive>
          <v-img
              src="https://scx2.b-cdn.net/gfx/news/hires/2014/heartattack.png"
          ></v-img>
        </v-responsive>

      </v-card-text>
      <v-card-actions>
        <v-btn
            small
            class="green darken-3 white--text ma-5"
        >
          <v-icon left>mdi-video-vintage</v-icon>
          <span right>Blocked-Vessel</span>
        </v-btn>
      </v-card-actions>


      <v-card-text class="my-2">
        <p align="left" class="text--primary">
          Good lifestyle choices help to keep the coronary arteries healthy
          and prevent heart attacks. Learn more about how lifestyle factors
          can affect the heart in the following movie clips.
        </p>

        <v-card-actions>
          <v-tooltip bottom>
            <template
                v-slot:activator="{ on, attrs }"
            >
              <v-btn
                  small
                  class="green darken-3 white--text mx-1"
                  fab
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-run-fast</v-icon>
              </v-btn>
            </template>
            <span>Exercise</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                class="green darken-3 white--text mx-2"
                fab
                v-bind="attrs"
                v-on="on"
              >
              <v-icon>mdi-food-apple</v-icon>
             </v-btn>
            </template>
            <span>Diet</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  small
                  class="green darken-3 white--text mx-1"
                  fab
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-smoking-off</v-icon>
              </v-btn>
            </template>
            <span>Smoking</span>
          </v-tooltip>
        </v-card-actions>

      </v-card-text>
      <v-divider></v-divider>


      <v-card-text class="text--primary">
        <p>
          Click on the tabs below to learn more about minor or severe heart attacks.
        </p>

      </v-card-text>
    </v-card>
<!--  </v-app>-->
</div>
</template>

<script>
export default {
  name: "HeartAttack",
  data: () => ({
  }),
  methods: {
  },

}
</script>

<style scoped>
   #app {
     position: absolute;
     z-index: 2;
     top: 7px;
     left: 2px;
     width: 40%;
   }

   #card {
     background-color: rgba(15, 158, 0, .5);
     overflow-y: scroll;
   }

   /* Card-scrollbar-section */
   #card {
     background-color: rgba(15, 158, 0, .5);
     scroll-behavior: smooth;
     overflow-y: scroll;
   }

   #card::-webkit-scrollbar {
     width: 8px;
   }

   #card::-webkit-scrollbar-track {
     box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
   }

   #card::-webkit-scrollbar-thumb {
     background-color: rgba(15, 158, 0, .5);
     outline: 1px solid rgba(15, 158, 0, .5);
   }

</style>