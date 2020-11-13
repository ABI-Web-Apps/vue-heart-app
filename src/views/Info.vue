`<template>
  <div id="app">
<!--  <v-app id="info">-->
    <v-layout row column>
      <v-card
          id="card"
          class="mx-5 my-2  hidden-xs-only"
          height="85vh"
      >
        <v-card-title class="mx-1 display-1">Te Manawa</v-card-title>
        <v-card-subtitle class="mx-2 white--text">The Heart</v-card-subtitle>
        <v-divider></v-divider>

          <v-card-text>
            <div>
              <p justify-content="left" class="text--primary">
                This is an interactive model of the heart's two main pumping chambers: the ventricles.
                Spin, zoom, drag, and open the heart using the gestures shown at the bottom. Vary the heart
                rate using the slider on the right.
              </p>
            </div>
            <v-responsive>
              <v-img
                  src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_pumping.gif"
              ></v-img>
            </v-responsive>
          </v-card-text>

          <v-card-text>
            <p align="left" class="text--primary">
              The heart pumps blood around the body to provide all the organ systems with oxygen and nutrients.
              <br>
              <span>
                The ECG trace (top right) represents the electrical waves in the heart
                that stimulate contraction and generate pressure (middle right) to pump blood.
              </span>
            </p>
          </v-card-text>

          <v-card-actions>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    id="video-btn"
                  small
                  class="green darken-3 lighten-2 white--text mx-5"
                  fab
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-video-vintage</v-icon>
                </v-btn>
              </template>
              <span>Heart</span>
            </v-tooltip>
          </v-card-actions>
      </v-card>
    </v-layout>
<!--  </v-app>-->
</div>
</template>

<script>
export default {
  name: "Info",
  data: () => ({
    dialog: false
  })
}

</script>

<style scoped>
 html {
   box-sizing: border-box;
 }

 #app {
   position: absolute;
   z-index: 2;
   top: 7px;
   left: 2px;
   width: 35%;
 }

 #video-btn {
   margin-bottom: 20px;
 }

 /* Card-scrollbar-section */
 #card {
   background-color: rgba(15, 158, 0, .5);
   scroll-behavior: smooth;
   overflow-y: scroll;
 }

 #card::-webkit-scrollbar {
   width: 10px;
 }

 #card::-webkit-scrollbar-track {
   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
 }

 #card::-webkit-scrollbar-thumb {
   background-color: green;
   outline: 0 solid green;
 }

</style>