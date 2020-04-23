<template>
  <div>
    <h1 class="subheading grey--text">Gửi yêu cầu của bạn cho quản lí</h1>
    <RequestForm />
  </div>
</template>

<script>
import RequestForm from '../../components/RequestForm'
export default {
  components: {
    RequestForm
  },
  layout: 'staff'
}
</script>

<style lang="scss" scoped></style>
