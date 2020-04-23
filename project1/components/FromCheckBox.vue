<template>
  <div>
    <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          I agree that
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a target="_blank" href="http://vuetifyjs.com" @click.stop v-on="on">Vuetify</a>
            </template>
            Opens in new window
          </v-tooltip>is awesome
        </div>
      </template>
    </v-checkbox>

    <v-container fluid>
      <v-row class="light--text">
        <v-col cols="4">Check In</v-col>
        <v-col cols="4">Check Out</v-col>
        <v-col cols="4">Ghi Chú</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-checkbox
            v-model="checkbox1"
            :label="`Bạn đã check in vào lúc: ${new Date().toLocaleString()}`"
            :disabled="isDisable1"
          ></v-checkbox>
        </v-col>
        <v-col cols="4">
          <v-checkbox
            v-model="checkbox2"
            :label="`Checkbox 2: ${new Date().toLocaleString()}`"
            :disabled="isDisable2"
          ></v-checkbox>
        </v-col>
        <v-col cols="4">
          <h4>{{ mesage }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-btn v-on:click="handlerClickCheckIn()">SubmitCheckIn</v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn v-on:click="handlerClickCheckOut()">SubmitCheckOut</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      isDisable1: false,
      isDisable2: false,
      mesage:
        'Bạn sẽ không thể thực hiện lại các thao tác sau khi đã nhấn submit'
    }
  },
  methods: {
    handlerClickCheckIn() {
      this.checkbox1 = true
      this.isDisable1 = true
    },
    handlerClickCheckOut() {
      this.checkbox2 = true
      this.isDisable2 = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
