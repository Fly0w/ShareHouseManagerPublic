<template>
  <div class="flex flex-col justify-center items-center h-full text-center">
    <div class="flex flex-row justify-center items-center mb-10">
      <p class="text-3xl text-slate-800">
        Welcome
        <span class="text-4xl text-sky-600 font-semibold" style="text-shadow: white 1px 1px 2px">{{
          userData.residentName
        }}</span>
        <span class="text-4xl ml-2">{{ userData.roomEmoji }}</span> !
      </p>
    </div>
    <p class="text-lg text-center text-fuchsia-700">
      We recommend
      <span class="font-semibold text-xl text-teal-700 underline">taking a screenshot</span> of your
      credentials below
    </p>
    <div class="flex flex-col justify-center items-center mt-10">
      <div class="flex flex-col justify-center items-center mb-3">
        <p class="text-xl text-slate-800">Room n° :</p>
        <p class="ml-3 text-3xl font-semibold text-sky-700">{{ userData.roomNumber }}</p>
      </div>
      <div class="flex flex-col justify-center items-center mb-3">
        <p class="text-xl text-slate-800">Resident name :</p>
        <p class="ml-3 text-3xl font-semibold text-sky-700">{{ userData.residentName }}</p>
      </div>
      <div class="flex flex-col justify-center items-center mb-3">
        <p class="text-xl text-slate-800">Password :</p>
        <p class="ml-3 text-3xl font-semibold text-sky-700">testpassword</p>
      </div>
    </div>
    <a href="/">
      <p
        class="px-10 py-2 border-2 rounded-full border-white shine text-3xl text-white shadow-xl mt-8"
        style="text-shadow: green 2px 2px 5px"
      >
        Login
      </p>
    </a>
  </div>
</template>

<script>
import useAuthenticationStore from '@/stores/authentication'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'NewResidentDone',
  data() {
    return {}
  },
  mounted() {
    this.getUserData(this.selectedRoom)
  },
  methods: {
    ...mapActions(useAuthenticationStore, ['getUserData'])
  },
  computed: {
    ...mapState(useAuthenticationStore, ['userData'])
  },
  props: ['selectedRoom']
}
</script>

<style scoped>
.shine {
  background: linear-gradient(0.64turn, rgb(144, 209, 159), rgb(113, 148, 240));
  animation: rolling_bg infinite 10s ease-in-out;
}

@keyframes rolling_bg {
  0%,
  100% {
    filter: hue-rotate(-20deg);
  }
  50% {
    filter: hue-rotate(20deg);
  }
}
</style>
