<template>
  <div
    class="flex flex-col justify-center items-start px-3 py-1 my-1 w-full h-20 border-2 border-emerald-400 bg-sky-50 rounded-3xl"
  >
    <p class="font-bold text-center w-full text-slate-700">{{ entry.name }}</p>
    <p><span class="font-bold text-green-600 mr-2">Start: </span>{{ entry.startTime }}</p>
    <p><span class="font-bold text-red-700 mr-2">End: </span>{{ entry.endTime }}</p>
  </div>
</template>

<script>
export default {
  name: 'BikeHistoryCard',
  props: ['entry']
}
</script>
