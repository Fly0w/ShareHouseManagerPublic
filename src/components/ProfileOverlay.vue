<template>
  <div
    class="absolute z-1 flex flex-col justify-start h-36 w-full p-3 border-b-2 border-teal-700 bg-teal-400/95"
  >
    <div class="flex flex-col items-start justify-around px-5 w-5/6 h-full text-slate-50">
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
        <p class=""><span class="text-emerald-800 font-bold mr-3">Emoji :</span>{{ roomEmoji }}</p>
        <EditIcon class="h-4 mx-3 opacity-60" />
      </div>
    </div>
  </div>
</template>

<script>
import EditIcon from './icons/events/EditIcon.vue'

export default {
  name: 'ProfileOverlay',
  components: {
    EditIcon
  },
  props: ['roomNumber', 'residentName', 'residentNameKanji', 'roomEmoji']
}
</script>
