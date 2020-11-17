<template>
  <div id="app">
    <v-layout row>
      <v-card
          id="card"
          class="my-1"
          height="85vh"
      >
        <v-card-title class="mx-1 display-1">Heart Failure</v-card-title>
        <v-card-subtitle class="mx-2 white--text">Chronic Problems</v-card-subtitle>
        <v-divider></v-divider>


        <v-card-text>
          <div>
            <p justify-content="left" class="text--primary">
              Long term problems such as high blood pressure or untreated
              heart attacks can eventually cause the heart to fail.
            </p>
            <br>
            <p class="text--primary">
              In heart failure, the heart needs to work harder than normal
              to meet the demands of the body. This can lead to changes in
              the heart's shape and stiffness, and its ability to contract
              and relax.
            </p>
          </div>

          <v-divider class="mx-0"></v-divider>

  <!--        <v-img-->
  <!--            class="ma-3"-->
  <!--          height="300"-->
  <!--          width=""-->
  <!--          src="https://www.msdmanuals.com/-/media/manual/home/images/cvs_ecg_reading.gif?thn=0&sc_lang=en"-->
  <!--        ></v-img>-->
        </v-card-text>

  <!--      <v-divider class="mx-3"></v-divider>-->

        <v-card-text>
          <p align="left" class="text--primary">
           Click on the tabs below to learn more about the different types of heart failure.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            small
            class="green darken-3 white--text mx-1"
          >
            Healthy
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            small
            class="green darken-3 white--text mx-1"
          >
            Compensated
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            small
            class="green darken-3 white--text mx-1"
          >
            Decompensated
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>

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
     top: 13px;
     left: 23px;
     width: 35%;
   }

  /* Card-scrollbar-section*/
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