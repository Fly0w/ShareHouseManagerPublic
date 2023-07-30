<template>
  <div class="">
    <!-- Garbage next notification -->
    <h2
      class="mb-3 py-2 bg-white bg-opacity-80 text-teal-700 text-center text-lg font-montserrat font-bold"
    >
      Take XXX out before tomorrow night
    </h2>

    <!-- Garbage/Groceries Tabs -->
    <div
      class="flex flex-row mx-5 justify-center text-center text-lg font-montserrat font-bold border-2 border-sky-800 rounded-full"
    >
      <div
        class="px-8 py-2 w-3/6 rounded-l-full"
        @click="choreTab = 'Garbage'"
        :class="{
          'bg-sky-500 text-slate-50': choreTab === 'Garbage',
          'bg-slate-100 border-emerald-500 text-cyan-900': choreTab !== 'Garbage'
        }"
      >
        Garbage
      </div>
      <div
        class="px-8 py-2 w-3/6 rounded-r-full"
        @click="choreTab = 'Groceries'"
        :class="{
          'bg-emerald-500 text-slate-50': choreTab === 'Groceries',
          'bg-slate-100 text-emerald-900': choreTab !== 'Groceries'
        }"
      >
        Groceries
      </div>
    </div>

    <!-- Display tab -->
    <div class="flex flex-col items-center">
      <AppChoresGarbage v-if="choreTab === 'Garbage'" />
      <AppChoresGroceries v-if="choreTab === 'Groceries'" />
    </div>
  </div>
</template>

<script>
import AppChoresGarbage from './AppChoresGarbage.vue'
import AppChoresGroceries from './AppChoresGroceries.vue'

export default {
  name: 'AppChores',
  data() {
    return {
      choreTab: 'Garbage'
    }
  },
  components: {
    AppChoresGarbage,
    AppChoresGroceries
  }
}
</script>
