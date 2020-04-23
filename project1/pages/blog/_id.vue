<template>
  <div>
    The id is {{$route.params.id}}
    <h1>{{post}}</h1>
  </div>
</template>
<script>
export default {
  asyncData({ $axios, route }) {
    console.log(route.params.id)
    return $axios
      .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then((response) => {
        console.log(response.data)
        return {
          post: response.data
        }
      })
      //fetch() và asyncData()
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>