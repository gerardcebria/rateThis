<template>
  <v-app>
    <v-main>
      <ObjectToRate/>
      //<HelloWorld/>
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
