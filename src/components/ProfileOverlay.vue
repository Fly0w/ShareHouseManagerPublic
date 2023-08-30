<template>
  <div class="absolute flex flex-col justify-start h-36 w-full p-2 overflow-hidden">
    <Transition type="animation" name="bgTrigger" appear>
      <div class="absolute z-2 border-teal-700 bg-teal-400/95 container"></div>
    </Transition>

    <Transition type="animation" name="textTrigger" appear>
      <div
        class="relative z-3 flex flex-col items-start justify-around px-5 w-5/6 h-full text-slate-50"
      >
        <div class="flex flex-row justify-between items-center w-full">
          <p class="text-center text-2xl tracking-wider font-bold">Profile</p>
          <p class="text-center text-lg max-[350px]:text-base font-bold text-emerald-800">
            {{ userData.roomNumber }}
          </p>
        </div>

        <div class="flex flex-row justify-start items-center max-[380px]:text-sm">
          <p class="text-emerald-800 font-bold mr-3">Name :</p>
          <p v-if="!triggerNameChange" class="">
            {{ userData.residentName }}
          </p>
          <input
            v-else
            type="text"
            maxlength="10"
            class="w-2/5 pl-2 py-0.5 text-black border-2 border-blue-500 rounded-lg"
            v-model="userData.residentName"
            @focusout.stop="changeName()"
            @keypress.enter="changeName()"
          />
          <EditIcon
            v-if="!triggerNameChange"
            class="h-4 mx-1 opacity-60"
            @click.stop="triggerNameChange = true"
          />
        </div>

        <div class="flex flex-row justify-start items-center max-[380px]:text-sm">
          <p class="text-emerald-800 font-bold mr-3">JP name :</p>
          <p v-if="!triggerKanjiChange" class="">
            {{ userData.residentNameKanji }}
          </p>
          <input
            v-else
            type="text"
            maxlength="8"
            class="w-2/5 pl-2 py-0.5 text-black border-2 border-blue-500 rounded-lg"
            v-model="userData.residentNameKanji"
            @focusout.stop="changeName()"
            @keypress.enter="changeName()"
          />
          <EditIcon
            v-if="!triggerKanjiChange"
            class="h-4 mx-1 opacity-60"
            @click.stop="triggerKanjiChange = true"
          />
        </div>

        <div class="flex flex-row justify-start items-center">
          <p class="text-emerald-800 font-bold mr-3 max-[380px]:text-sm">Emoji :</p>
          <p class="">
            {{ userData.roomEmoji }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import EditIcon from './icons/events/EditIcon.vue'
import useAuthenticationStore from '@/stores/authentication'
import useRoomsStore from '@/stores/rooms'

import { mapWritableState, mapActions } from 'pinia'

export default {
  name: 'ProfileOverlay',
  data() {
    return {
      triggerNameChange: false,
      triggerKanjiChange: false,
      animText: '',
      animBox: ''
    }
  },
  components: {
    EditIcon
  },
  methods: {
    changeName() {
      this.changeUserData()
      this.listRooms[this.userData.roomNumber.replace('-', '')].residentName =
        this.userData.residentName
      this.listRooms[this.userData.roomNumber.replace('-', '')].residentNameKanji =
        this.userData.residentNameKanji
      this.triggerNameChange = false
      this.triggerKanjiChange = false
    },
    ...mapActions(useAuthenticationStore, ['changeUserData'])
  },
  computed: {
    ...mapWritableState(useAuthenticationStore, ['userData']),
    ...mapWritableState(useRoomsStore, ['listRooms'])
  }
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
