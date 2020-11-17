<template>
  <div id="app">
    <v-card
        id="card"
        class="mx-2 my-2"
        height="85vh"
    >
      <v-card-title class="mx-1 display-1">Heart Electricity</v-card-title>
      <v-card-subtitle class="mx-2 white--text">Electrocardiograms</v-card-subtitle>
      <v-divider ></v-divider>

      <v-card-text>
        <div>
          <p justify-content="left" class="text--primary">
            Electrical waves (coloured yellow) pass through the heart to
            trigger contraction of the muscular walls. The heart needs
            coordinated electrical waves and smooth contraction to pump
            effectively.
          </p>
          <br>
          <p class="text--primary">
            The electrical waves in the heart can be measured by placing
            electrodes on the chest. This is called an electrocardiogram
            (ECG) recording, as shown at the right.
          </p>
        </div>


        <v-responsive>
          <v-img
            class="ma-3"
            src="https://www.msdmanuals.com/-/media/manual/home/images/cvs_ecg_reading.gif?thn=0&sc_lang=en"
          ></v-img>
        </v-responsive>

      </v-card-text>

      <v-divider></v-divider>
      <v-card-text>
        <p align="left" class="text--primary">
         Click on fibrillation below to see what happens when this smooth
          electrical activity is disrupted.
        </p>
      </v-card-text>

      <v-card-actions>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                id="fibrillation-btn"
              small
              class="green darken-3 white--text mx-5"
              fab
              v-bind="attrs"
              v-on="on"
            >
            <v-icon>mdi-heart-pulse</v-icon>
          </v-btn>
          </template>
          <span>Fibrillation</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
  name: "Elec",
  data: () => ({
  }),
  methods: {
  }
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

   #fibrillation-btn {
     margin-bottom: 20px;
   }

   #card {
     background-color: rgba(15, 158, 0, .5);
     overflow-y: scroll;
     scroll-behavior: smooth;
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