<template>
  <div>
    <h1 class="subheading grey--text">{{ message }} </h1>
    <FromCheckBox />
    </div>
</template>

<script>
import FromCheckBox from '../../components/FromCheckBox'
export default {
  components: {
    FromCheckBox
  },
  layout: 'staff',
  data() {
    return {
      message: 'Check In/Check Out ngày ' + new Date().toLocaleString()
    }
  },
}
</script>

<style lang="scss" scoped></style>
