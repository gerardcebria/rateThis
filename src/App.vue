<template>
  <v-app>
    <v-main>
          <v-app-bar 
          rounded 
          elevation="4"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>RATE THIS</v-toolbar-title>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
              left
              bottom
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
                >
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
          <v-spacer></v-spacer>
      <ObjectToRate/>
      </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ObjectToRate from './components/ObjectToRate.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
    ObjectToRate
  },

  data: () => ({
    //
  }),
}
</script>
