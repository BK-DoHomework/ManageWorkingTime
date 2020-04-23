<template>
  <div>
    <v-card v-for="project in projects" :key="project.title" flat>
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">Project title</div>
          <div>{{ project.title }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Person</div>
          <div>{{ project.person }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Due by</div>
          <div>{{ project.due }}</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <div class="right">
            <v-chip
              small
              :class="`${project.status} white--text my-2 caption`"
              >{{ project.status }}</v-chip
            >
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  // eslint-disable-next-line vue/require-prop-types
  props: ['projects'],
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

<style lang="scss" scoped></style>
