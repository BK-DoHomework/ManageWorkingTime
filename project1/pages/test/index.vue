<template>
  <div class="container">
    <ul class="list-container">
      <TestListItem v-for="(title, i) in titles" :key="i" :title="title" />
    </ul>
  </div>
</template>

<script>
const axios = require('axios')
import { mapState } from 'vuex'
import TestListItem from '../../components/TestListItem'
let URL = 'https://jsonplaceholder.typicode.com/posts'
export default {
  components: {
    TestListItem
  },
  async fetch({ store }) {
    const response = await axios.get(URL)
    const data = response.data
    // console.log(data)
    const titles = data.map(({ title }) => title)
    store.commit('SET_TITLES', titles);
  },
  computed: {
    ...mapState(['titles'])
  },
  // created() {
  //   console.log(this.titles)
  // },
  // mounted() {
  //   console.log(process.client);
  //   // this.titles =[]; //==> cái này chạy trước
  // },
}
</script>

<style>
.list-container {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>