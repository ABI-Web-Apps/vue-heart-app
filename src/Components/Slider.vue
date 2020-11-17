<template>
  <div id="container">
    <v-layout row wrap justify-end >
      <v-flex xs12 md4>
        <v-container>
          <h3 class="my-3 green--text">Heart Rate (beats per minute)</h3>
          <v-slider
              id="go"
              class="px-3"
              v-model="ex1.val"
              :color="ex1.color"
          >
          </v-slider>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import * as THREE from "three";


  export default {
    name: "Slider",
    components: {
    },

    data() {
      return {
        ex1: { label: 'color', val: 5, color: 'green' },
        scene: null,
        camera: null,
        renderer: null,
        mesh: null,
        light: null,
        // speed: 1,
      }
    },
    //  static() {
    //   return {
    //     scene: null,
    //     camera: null,
    //     renderer: null,
    //     mesh: null,
    //     light: null,
    //     // speed: 0.5,
    //   }
    // },
    methods: {
      init() {
        this.container = document.getElementById('container');

        //scene
        this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color("rgb(230, 230, 155)");
        this.scene.background = new THREE.Color("rgb(204, 209, 204)");

        //camera
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        )
        this.camera.position.z = 15

        //mesh
        const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
        const material = new THREE.MeshStandardMaterial({color: "green"})
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        //light
        this.light = new THREE.DirectionalLight(0xffffff, 2.5);
        this.light.position.set(10, 10, 10);
        this.scene.add(this.light);

        //renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // function render(time) {
        //   time *= 0.004;  // convert time to seconds
        //     const speed = 1;
        //     const rot = time * speed;
        //     this.mesh.rotation.x = rot;
        //     this.mesh.rotation.y = rot;
        //   this.renderer.render(this.scene, this.camera);
        //   requestAnimationFrame(render);
        // }
        //
        //   requestAnimationFrame(render);

        //
        // this.renderer.setAnimationLoop(() => {
        //   this.render();
        //   this.update();
        // });

      },

      render(time) {
        time *= 0.002;  // convert time to seconds
          const rot = time * this.ex1.val/50;
          this.mesh.rotation.x = rot;
          this.mesh.rotation.y = rot;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
      },

      onWindowUpdate() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = (window.innerWidth / window.innerHeight);
        this.camera.updateProjectionMatrix();
      },

      listener() {
        window.addEventListener("resize", this.onWindowUpdate);
      },
    },
    //========================================================================================================
    mounted() {
        this.init();
        this.onWindowUpdate();
        this.listener();
        this.render()

    },

  }
</script>

<style scoped>

  html, body {
    box-sizing: border-box;
    margin: 0;
  }

  div {
    background-color: rgb(204, 209, 204);
  }

  .container{
    width: 35%;
    display: flex;
    border:  4px solid green;
    border-radius: 25px;
    background-color: rgb(204, 209, 204);
    text-align: center;
    flex-direction: column;
    position: absolute;
    bottom: 5%;
    left: 62%;
  }

</style>

