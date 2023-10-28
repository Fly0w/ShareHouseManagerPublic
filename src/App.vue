<template>
  <div
    v-if="isGoodscreenWidth"
    class="w-screen h-screen flex flex-row justify-center items-center overflow-y-auto"
  >
    <router-view></router-view>
  </div>
  <div
    v-else
    class="w-screen h-screen bg-sky-200 flex flex-row justify-center items-center overflow-y-auto"
  >
    <div class="flex flex-row justify-center items-center">
      <div class="flex flex-col justify-center items-center text-center mx-10">
        <p class="text-3xl text-sky-600 font-semibold mb-5 rollingText">
          Try this app on your smartphone !
        </p>
        <img src="/qrShareHouse.png" style="width: 100%; max-width: 300px" />
      </div>

      <div class="smartphone">
        <div class="overflow-y-auto content" style="">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    isGoodscreenWidth() {
      if (window.innerWidth <= 550) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.smartphone {
  position: relative;
  width: 450px;
  height: 950px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
}
/* The horizontal line on the top of the device */
.smartphone:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
  height: 100%;
  width: 100%;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0c6b83b9;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #4672b4c0;
}

@keyframes textRoll {
  0%,
  100% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
  50% {
    filter: hue-rotate(70deg);
    transform: scale(1.03);
  }
}

.rollingText {
  animation: textRoll 5s ease-in-out infinite;
}
</style>
