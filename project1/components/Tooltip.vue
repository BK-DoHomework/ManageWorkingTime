<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn small flat color="grey" @click="sortBy('person')" slot="activator" v-on="on">
          <v-icon small left>mdi-human</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
      </template>
      <span>Sort by project author</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>