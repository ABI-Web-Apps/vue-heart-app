Tutorial
=========

This project is a great example to show what components are and how they can pass data to each other.

Project setup
~~~~~~~~~~~~~~~~
- install `vue.js <https://vuejs.org/v2/guide/installation.html>`_  which is a progressive framework for building user interfaces.
- Import/Install `three.js <https://threejs.org/>`_,  then create or load a `3D model <https://github.com/mrdoob/three.js/blob/dev/README.md>`_.
- Create a range slider to control the 3D model.
- Create child components that interact with App.vue(parent component) based on `props <https://vuejs.org/v2/guide/components-props.html>`_ (in Vue, props (or properties), are the way that we pass data from a parent component down to its child components.) and `Custom Events <https://vuejs.org/v2/guide/components-custom-events.html>`_. Visit `Components <https://vuejs.org/v2/guide/components.html>`_ to learn more.

The following example shows how to create a slider:

.. code-block:: html

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

and:

.. code-block:: javascript

    export default {
       name: "Slider",
       data() {
          return {
            ex1: { label: 'color', val: 5, color: 'green' },
          }
       }
    }
