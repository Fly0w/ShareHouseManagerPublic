<template>
  <div class="absolute flex flex-col justify-start h-36 w-full p-2 overflow-hidden">
    <Transition type="animation" name="bgTrigger" appear>
      <div class="absolute z-2 border-teal-700 bg-teal-400/95 container"></div>
    </Transition>

    <!-- Confirmation name change -->
    <div
      v-if="triggerAlertChangeName"
      class="absolute flex flex-col justify-start h-36 w-4/6 p-2 overflow-hidden"
    >
      <p class="text-red-600 font-semibold max-[390px]:text-sm max-[340px]:text-xs break-keep">
        Changing your name will change your login name too !
      </p>

      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col justify-center items-center">
          <p class="text-slate-50 text-center">New login name :</p>
          <p class="text-orange-500 font-semibold max-[355px]:text-base text-xl">
            {{ userData.residentName }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-around px-3">
          <p class="font-semibold text-center text-lg">Confirm ?</p>
          <div class="flex flex-row justify-center items-center">
            <p class="text-3xl text-green-700 mx-4" @click.stop="changeName()">✓</p>
            <p class="text-3xl text-red-600 mx-4" @click.stop="cancelChangeName()">✖</p>
          </div>
        </div>
      </div>
    </div>

    <Transition type="animation" name="textTrigger" appear>
      <div
        v-if="!triggerAlertChangeName"
        class="relative z-3 flex flex-col items-start justify-around px-5 w-5/6 h-full text-slate-50"
      >
        <div class="flex flex-row justify-between items-center w-full">
          <p class="text-center text-2xl tracking-wider font-bold">Profile</p>
          <p class="text-center text-lg max-[350px]:text-base font-bold text-emerald-800">
            {{ userData.roomNumber }}
          </p>
        </div>

        <div class="flex flex-row justify-start items-center w-full max-[380px]:text-sm">
          <p class="text-emerald-800 font-bold mr-3">Name :</p>
          <div v-if="!triggerNameChange" class="flex flex-row justify-start items-center">
            <p class="">
              {{ userData.residentName }}
            </p>
            <EditIcon class="h-4 mx-1 opacity-60" @click.stop="triggerNameChange = true" />
          </div>

          <div v-else class="flex flex-row justify-start items-center w-3/5">
            <input
              type="text"
              maxlength="10"
              class="w-full pl-2 py-0.5 text-black border-2 border-blue-500 rounded-lg"
              v-model="userData.residentName"
              @keypress.enter="triggerAlertChangeName = true"
            />

            <div
              class="relative p-3 border-2 border-green-500 rounded-full text-green-700 bg-green-50"
              @click.stop="triggerAlertChangeName = true"
            >
              <p class="absolute text-center text-base top-0.5 left-1.5">✓</p>
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-start items-center w-full max-[380px]:text-sm">
          <p class="text-emerald-800 font-bold mr-3">JP name :</p>
          <div v-if="!triggerKanjiChange" class="flex flex-row justify-start items-center">
            <p class="">
              {{ userData.residentNameKanji }}
            </p>
            <EditIcon class="h-4 mx-1 opacity-60" @click.stop="triggerKanjiChange = true" />
          </div>

          <div v-else class="flex flex-row justify-start items-center w-3/5">
            <input
              type="text"
              maxlength="8"
              class="w-full pl-2 py-0.5 text-black border-2 border-blue-500 rounded-lg"
              v-model="userData.residentNameKanji"
              @keypress.enter="changeNameKanji()"
            />

            <div
              class="relative p-3 border-2 border-green-500 rounded-full text-green-700 bg-green-50"
              @click.stop="changeNameKanji()"
            >
              <p class="absolute text-center text-base top-0.5 left-1.5">✓</p>
            </div>
          </div>
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
      triggerAlertChangeName: false,
      triggerNameChange: false,
      triggerKanjiChange: false,
      animText: '',
      animBox: '',
      nameBeforeChange: ''
    }
  },
  components: {
    EditIcon
  },
  mounted() {
    this.nameBeforeChange = this.userData.residentName
  },
  methods: {
    cancelChangeName() {
      this.triggerAlertChangeName = false
      this.userData.residentName = this.nameBeforeChange
    },
    changeName() {
      this.changeUserData()
      this.listRooms[this.userData.roomNumber.replace('-', '')].residentName =
        this.userData.residentName
      this.triggerNameChange = false
      this.triggerAlertChangeName = false
      this.nameBeforeChange = this.userData.residentName
    },
    changeNameKanji() {
      this.changeUserData()

      this.listRooms[this.userData.roomNumber.replace('-', '')].residentNameKanji =
        this.userData.residentNameKanji
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
