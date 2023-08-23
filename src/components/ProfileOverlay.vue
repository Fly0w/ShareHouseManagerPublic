<template>
  <div class="absolute flex flex-col justify-start h-36 w-full p-3 border-b-2 overflow-hidden">
    <Transition type="animation" name="bgTrigger" appear>
      <div class="absolute z-2 border-teal-700 bg-teal-400/95 container"></div>
    </Transition>

    <Transition type="animation" name="textTrigger" appear>
      <div
        class="relative z-3 flex flex-col items-start justify-around px-5 w-5/6 h-full text-slate-50"
      >
        <div class="flex flex-row justify-between items-center w-full">
          <p class="text-center text-2xl tracking-wider font-bold">Profile</p>
          <p class="text-center text-lg font-bold text-emerald-800">{{ roomNumber }}</p>
        </div>

        <div class="flex flex-row justify-center items-center">
          <p class="">
            <span class="text-emerald-800 font-bold mr-3">Name :</span>{{ residentName }}
          </p>
          <EditIcon class="h-4 mx-3 opacity-60" />
        </div>
        <div class="flex flex-row justify-center items-center">
          <p class="">
            <span class="text-emerald-800 font-bold mr-3">JP name :</span>{{ residentNameKanji }}
          </p>
          <EditIcon class="h-4 mx-3 opacity-60" />
        </div>
        <div class="flex flex-row justify-center items-center">
          <p class="">
            <span class="text-emerald-800 font-bold mr-3">Emoji :</span>{{ roomEmoji }}
          </p>
          <EditIcon class="h-4 mx-3 opacity-60" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import EditIcon from './icons/events/EditIcon.vue'

export default {
  name: 'ProfileOverlay',
  data() {
    return {
      animText: '',
      animBox: ''
    }
  },
  components: {
    EditIcon
  },
  props: ['roomNumber', 'residentName', 'residentNameKanji', 'roomEmoji']
}
</script>

<style>
@keyframes appear {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes disappear {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slideIn {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(100);
  }
}

@keyframes slideOut {
  0% {
    transform: scale(100);
  }
  100% {
    transform: scale(0.5);
  }
}

.container {
  width: 20px;
  height: 20px;
  transform: scale(100);
  top: 16%;
  right: 10%;
  border-radius: 100%;
}

.bgTrigger-enter-active {
  animation: slideIn 0.7s ease-in forwards;
}

.textTrigger-enter-active {
  animation: appear 0.5s ease-in forwards;
}
</style>
