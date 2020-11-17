<template>
 <div class="buttons">
   <Slider class="three-window"/>
   <component v-bind:is="mimi" class="overlay"></component>


   <div class="btn-bto">
     <v-tooltip top>
       <template v-slot:activator="{on, attrs}">
         <v-btn
            fab
            medium
            class="hidden-xs-only green darken-3 white--text"
            v-bind="attrs"
            v-on="on"
            @click="mimi = 'Info'"
         >
           <v-icon class="display-1">mdi-heart-outline</v-icon>
         </v-btn>
       </template>
       <span>The Heart</span>
     </v-tooltip>

     <v-tooltip top>
       <template v-slot:activator="{on, attrs}">
          <v-btn
            fab
            medium
            class="hidden-xs-only green darken-3 white--text"
            v-bind="attrs"
            v-on="on"
            @click="mimi = 'HeartAttack'"
          >
            <v-icon class="display-1">mdi-account-heart</v-icon>
          </v-btn>
       </template>
       <span>Heart Attack</span>
     </v-tooltip>

     <v-tooltip top>
       <template v-slot:activator="{on, attrs}">
          <v-btn
            fab
            medium
            class="hidden-xs-only green darken-3 white--text"
            v-bind="attrs"
            v-on="on"
            @click="mimi = 'Elec' "
          >
            <v-icon class="display-1">mdi-flash</v-icon>
          </v-btn>
       </template>
       <span>Electricity</span>
     </v-tooltip>

     <v-tooltip top>
       <template v-slot:activator="{on, attrs}">
          <v-btn
            fab
            medium
            class="hidden-xs-only green darken-3 white--text"
            v-bind="attrs"
            v-on="on"
            @click="mimi = 'HeartFailure' "
          >
            <v-icon class="display-1">mdi-heart-broken</v-icon>
          </v-btn>
       </template>
       <span>Heart Failure</span>
     </v-tooltip>


     <v-tooltip top>
       <template v-slot:activator="{on, attrs}">
          <v-btn
            fab
            medium
            class="hidden-xs-only green darken-3 white--text"
            v-bind="attrs"
            v-on="on"
            @click="mimi = 'AboutUs'"
          >
            <v-icon class="display-1">mdi-account-multiple</v-icon>
          </v-btn>
       </template>
       <span>About Us</span>
     </v-tooltip>

   </div>
 </div>

</template>


<script>
  import AboutUs from "@/Components/AboutUs";
  import HeartFailure from "@/Components/HeartFailure";
  import Elec from "@/Components/Elec";
  import HeartAttack from "@/Components/HeartAttack";
  import Info from "@/Components/Info";
  import Slider from "@/Components/Slider";


  export default {
    name: "Home",
    components: {
      Info,
      HeartAttack,
      Elec,
      HeartFailure,
      AboutUs,
      Slider,
    },
    data() {
      return {
        mimi: {
          Info,
          HeartAttack,
          Elec,
          HeartFailure,
          AboutUs,
        },
        drawer: false,
        links: [
          {id: 'heart', route: '/heart', icon: 'mdi-heart-outline'},
          {id: 'attack', route: '/attack', icon: 'mdi-account-heart'},
          {id: 'electricity', route: '/electricity', icon: 'mdi-flash'},
          {id: 'failure', route: '/failure', icon: 'mdi-heart-broken'},
          {id: 'about', route: '/about', icon: 'mdi-account-multiple'},
        ]
      }
    },
  }
</script>

<style scoped>

  html {
    overflow: hidden;
  }

  .btn-bto{
    position: fixed;
    bottom: 20px;
    left: 20px;
  }

  .three-window{
    z-index: 1;
  }

  /*.overlay{*/
  /*  position: absolute;*/
  /*  z-index: 2;*/
  /*  top: 8px;*/
  /*  left: 1px;*/
  /*  width: 40%;*/
  /*}*/

  button {
    margin: 10px 5px;
  }
  button:hover{
    cursor: pointer;
  }

  button:active {
    transform: translateY(10%);
  }

</style>