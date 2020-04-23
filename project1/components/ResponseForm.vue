<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">{{ popup.name }}</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{ popup.title }}</v-card-title>
        <v-card-text>{{ popup.content }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="dialog = false"
            >Agree</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      popup: {
        name: 'Response',
        header: ' Use Google location service?',
        content:
          'Bạn sẽ không thể hoàn tác lại sau khi xác nhận ? Click Agree để xác nhận!'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
