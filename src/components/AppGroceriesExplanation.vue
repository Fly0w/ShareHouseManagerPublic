<template>
  <div
    class="flex flex-col w-5/6 h-60 absolute left-1/2 top-1/2 transform -translate-x-1/2 z-10 p-1 border-4 rounded-2xl border-slate-500 bg-slate-50 bg-opacity-95 text-emerald-950 font-montserrat"
    @click.prevent="toggle"
  >
    <div class="flex flex-col justify-around items-center w-full h-full p-2">
      <p class="w-full text-center text-xl font-bold">Need to buy something ?</p>
      <p class="w-full text-center font-semibold">Let the duo on duty know by :</p>
      <p class="w-full">
        <span class="text-emerald-700 font-bold">1. </span>Pressing the desired item button
      </p>
      <p class="w-full"><span class="text-purple-700 font-bold">2. </span>Confirming your choice</p>
      <p class="w-full"><span class="text-sky-600 font-bold">3. </span>Done !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGroceriesExplanation',
  components: {},
  props: { toggle: Function }
}
</script>
