/* eslint-disable vue/no-v-html */
<template>
  <v-card max-width="1250" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title" @click>
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <ResponseForm />
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
import ResponseForm from './ResponseForm'
export default {
  components: {
    ResponseForm
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['items'],
  data: () => ({})
}
</script>

<style lang="scss" scoped></style>
