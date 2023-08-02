<template>
  <div v-if="roomNumber.includes(houseSelect[0])">
    <div
      class="w-full h-16 px-1 mb-3 flex rounded-full items-center border-4 bg-white bg-opacity-60 font-montserrat"
      :class="{
        ' border-cyan-500 flex-row text-teal-700': houseSelect === 'A house',
        ' border-purple-500 flex-row-reverse text-violet-600': houseSelect === 'B house'
      }"
    >
      <div
        class="ml-3 mr-1 w-2/6 font-bold text-lg tracking-wider"
        :class="{
          'text-left': houseSelect === 'A house',
          'text-right': houseSelect === 'B house'
        }"
      >
        <p>
          {{ roomNumber }}
        </p>
      </div>
      <div class="flex flex-col text-lg text-center w-3/6">
        <p class="text-xl font-semibold tracking-wider">
          {{ residentName }}
        </p>
        <p>
          {{ residentNameKanji }}
        </p>
      </div>
      <p class="w-1/6 font-bold text-2xl text-red-500 text-center">!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRoom',
  props: ['roomNumber', 'residentName', 'residentNameKanji', 'houseSelect']
}
</script>
