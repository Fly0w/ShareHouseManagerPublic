<template>
  <div class="flex flex-col justify-start items-center w-full h-4/6 text-center">
    <Transition name="title1">
      <div v-show="zone1" class="mb-12 mt-5">
        <p class="text-xl text-violet-600 mb-3">
          Welcome to
          <span class="font-semibold text-white" style="text-shadow: purple 1px 1px 10px"
            >Share House
          </span>
          !
        </p>
        <p class="text-4xl text-purple-500 font-bold" style="text-shadow: white 2px 2px 5px">
          Share house 1
        </p>
      </div>
    </Transition>
    <Transition name="title2">
      <p v-show="zone2" class="text-violet-700 mb-12">
        This website is an app that provides tools to the housemates, making life in the sharehouse
        easier for everyone !
      </p>
    </Transition>
    <Transition name="title3">
      <p v-show="zone3" class="text-fuchsia-700 font-semibold text-xl mb-10">
        Let's add your name to the list of amazing people in this house !
      </p>
    </Transition>
    <Transition name="title4">
      <p
        v-show="zone4"
        class="px-5 py-2 border-2 rounded-full border-white shine text-xl text-white shadow-xl"
        style="text-shadow: purple 2px 2px 5px"
        @click="changeScreen('register')"
      >
        Create my profile
      </p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'NewResidentHome',
  data() {
    return {
      zone1: false,
      zone2: false,
      zone3: false,
      zone4: false
    }
  },
  props: ['changeScreen'],
  mounted() {
    this.zone1 = true
    setTimeout(() => {
      this.zone2 = true
    }, 1200)
    setTimeout(() => {
      this.zone3 = true
    }, 3000)
    setTimeout(() => {
      this.zone4 = true
    }, 5000)
  }
}
</script>

<style scoped>
.title1-enter-from,
.title2-enter-from,
.title3-enter-from,
.title4-enter-from {
  opacity: 0;
}

.title1-enter-active,
.title2-enter-active,
.title3-enter-active,
.title4-enter-active {
  transition: opacity 0.6s ease-in;
}

.shine {
  background: linear-gradient(0.38turn, rgb(254, 244, 210), rgb(223, 137, 247));
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
