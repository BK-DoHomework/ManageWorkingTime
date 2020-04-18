<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">AOE of</span>
        <span>HUST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <ul class="d-flex">
        <nuxt-link
          v-for="item in items"
          :key="item.title"
          class="link pr-10 white--text"
          :to="item.to"
          >{{ item.title }}</nuxt-link
        >
      </ul>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['items'],
  data() {
    return {}
  }
}
</script>

<style>
.link {
  text-decoration: none;
}
</style>
