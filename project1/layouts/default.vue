<template>
  <v-app>
    <Navbar v-bind:items="items" />
    <nuxt />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  },

  data() {
    return {
      items: [
        {
          title: 'Home',
          to: '/home/home'
        },
        {
          title: 'About',
          to: '/home/about'
        },
        {
          title: 'Contact',
          to: '/home/contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>