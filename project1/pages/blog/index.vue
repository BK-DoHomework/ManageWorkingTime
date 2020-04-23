<template>
  <div>
    Blog
    <li v-for="post in posts" :key="post.id">
      <nuxt-link :to="`/blog/${post.id}`">{{post.title}}</nuxt-link>
    </li>
    <pre>{{posts}}</pre>
  </div>
</template>

<script>
  export default {
    asyncData({ $axios }) {
      console.log('tag', 'async data')
      return $axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log(response.data);
          return {
            posts: response.data
          }
        })
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>