<template>
  <div>
    <v-container>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col xs="12" sm="6" md="6" lg="4" xl="3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur aspernatur error minima laboriosam , consequatur in,
          quibusdam deserunt ut suscipit sunt sapiente illo, at exercitationem
          odio necessitatibus corrupti voluptate!
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  }
}
</script>

<style lang="scss" scoped></style>
