<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <ViewProfile />
    </v-container>
  </div>
</template>

<script>
import ViewProfile from '../../components/ViewProfile'
export default {
  layout: 'admin',
  components: {
    ViewProfile
  },
  data() {
    return {
      team: [
        {
          name: 'The Net Ninja',
          role: 'Web developer',
          avatar: '/avatar-1.png'
        },
        {
          name: 'Ryu',
          role: 'Graphic designer',
          avatar: '/avatar-2.png'
        },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        {
          name: 'Gouken',
          role: 'Social media maverick',
          avatar: '/avatar-4.png'
        },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  }
}
</script>