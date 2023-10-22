<template>
  <div
    class="flex flex-col justify-center items-center p-7 h-screen w-screen font-montserrat overflow-y-auto"
    style="
      background-image: url('/bg-mobile-purple.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    "
  >
    <NewResidentHome v-if="screen === 'home'" :changeScreen="changeScreen" />
    <NewResidentRegister v-else-if="screen === 'register'" :changeScreen="changeScreen" />
  </div>
</template>

<script>
import NewResidentHome from './NewResidentHome.vue'
import NewResidentRegister from './NewResidentRegister.vue'

export default {
  name: 'NewResident',
  data() {
    return {
      screen: 'home'
    }
  },
  components: { NewResidentHome, NewResidentRegister },
  methods: {
    changeScreen(screenName) {
      this.screen = screenName
    }
  }
}
</script>

<style scoped></style>
