<template>
  <div
    class="flex flex-col w-5/6 h-fit absolute left-1/2 top-1/2 transform -translate-x-1/2 z-10 p-1 border-4 rounded-2xl border-slate-500 bg-slate-50 bg-opacity-90 text-lg text-emerald-950 font-montserrat font-semibold text-center"
    @click.prevent="toggle"
  >
    <div class="flex flex-row w-full h-full"></div>
  </div>
</template>

<script>
export default {
  name: 'AppGroceriesExplanation',
  components: {},
  props: { toggle: Function }
}
</script>
