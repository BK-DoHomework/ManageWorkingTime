<template>
  <div>

    <v-form>
      <v-container>
        <h3 class="red--text">Yêu cầu nghỉ ngắn hạn</h3>
        <v-text-field>
          <template v-slot:label>
            What about
            <strong>icon</strong> here?
            <v-icon style="vertical-align: middle">mdi-find_in_page</v-icon>
          </template>
        </v-text-field>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </v-container>
    </v-form>

    <v-form class="pt-10">
      <v-container>
         <h3 class="white--text">Yêu cầu nghỉ dài hạn</h3>
        <v-text-field>
          <template v-slot:label>
            What about
            <strong>icon</strong> here?
            <v-icon style="vertical-align: middle">mdi-find_in_page</v-icon>
          </template>
        </v-text-field>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </v-container>
    </v-form>
    <v-form class="pt-10">
      <v-container>
         <h3 class="red--text">Các yêu cầu khác</h3>
        <v-text-field>
          <template v-slot:label>
            What about
            <strong>icon</strong> here?
            <v-icon style="vertical-align: middle">mdi-find_in_page</v-icon>
          </template>
        </v-text-field>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    submit: function (event) {
      // bên trong một phương thức, `this` trỏ đến đối tượng Vue
      alert('Yêu cầu của bạn đã đc gửi dến quản lí,sẽ phản hồi đến bạn khi sớm nhất!')
      // `event` là sự kiện DOM native
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
