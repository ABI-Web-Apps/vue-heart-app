<template>
  <div id="app">
<!--  <v-app id="info">-->
    <v-card
        id="card"
        class=" ma-2 "
        height="85vh"
    >
      <v-card-title class="mx-1 display-1">About Us</v-card-title>
      <v-divider></v-divider>
      <v-card-actions >
            <v-btn
              medium
              class=" green darken-3 white--text mx-4 my-3"
            >
            <v-icon>mdi-magnify-plus</v-icon>
              <span>Our Research</span>
          </v-btn>
      </v-card-actions>
      <v-card-actions>
            <v-btn
              medium
              class="green darken-3 white--text mx-4"
            >
            <v-icon left>mdi-account-group</v-icon>
              <span>Our Team</span>
          </v-btn>
      </v-card-actions>

      <v-card-text>
        <p justify-content="left" class="text--primary">
          Visit our online form to give us your valuable feedback about this app.
        </p>
        <v-btn
            class="green darken-3 white--text ma-1"
            small
        >
          <v-icon left>mdi-format-float-left</v-icon>
          <span>Online-Form</span>
        </v-btn>
      </v-card-text>
    </v-card>
<!--  </v-app>-->
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

  #app{
    position: absolute;
    z-index: 2;
    top: 8px;
    left: 1px;
    width: 40%;
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