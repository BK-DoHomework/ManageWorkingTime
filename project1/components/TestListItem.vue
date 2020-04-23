<template>
  <div>
    <li class="list-item">
      {{ title }}
    </li>
  </div>
</template>

<script>
  export default {
    // name: 'list-item',
    props: {
      title : {
        type :String,
        default: 'Feedback'
      }
    }
  }
</script>

<style>
.list-item {
  padding: 1.1em;
  font-size: 1.1em;
  margin: 1em 0;
  border: 1 px solid gray;
  box-shadow: 1px 1px 6px rgb(71, 59, 92,0.3);
}
</style>