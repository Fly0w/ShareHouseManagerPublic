<template>
  <div
    class="flex flex-col w-5/6 h-fit absolute left-1/2 top-1/2 transform -translate-x-1/2 z-10 p-1 border-4 rounded-2xl border-slate-500 bg-slate-50 bg-opacity-95 text-emerald-950 font-montserrat"
    @click.prevent="toggle"
  >
    <div
      class="flex flex-col justify-start items-start w-full h-full py-1 font-bold"
      :class="{
        'px-1': isScreenHeightLessThan670(),
        'px-3': isScreenHeightGreaterThanOrEqualTo670()
      }"
    >
      <p
        class=""
        :class="{
          'text-lg mb-2': isScreenHeightLessThan670(),
          'text-xl mb-3': isScreenHeightGreaterThanOrEqualTo670()
        }"
      >
        Need to buy something ?
      </p>
      <p
        class="italic"
        :class="{
          'text-sm mb-2': isScreenHeightLessThan670(),
          'mb-3': isScreenHeightGreaterThanOrEqualTo670()
        }"
      >
        Let the duo on duty know that they have to buy those items by...
      </p>
      <p
        class=""
        :class="{
          'text-sm ml-2': isScreenHeightLessThan670(),
          'text-md ml-3': isScreenHeightGreaterThanOrEqualTo670()
        }"
      >
        <span
          class="text-emerald-700"
          :class="{
            'text-md': isScreenHeightLessThan670(),
            'text-xl': isScreenHeightGreaterThanOrEqualTo670()
          }"
          >1. </span
        >Pressing the desired item button
      </p>
      <p
        class=""
        :class="{
          'text-sm ml-2': isScreenHeightLessThan670(),
          'text-md ml-3': isScreenHeightGreaterThanOrEqualTo670()
        }"
      >
        <span
          class="text-purple-700"
          :class="{
            'text-md': isScreenHeightLessThan670(),
            'text-xl': isScreenHeightGreaterThanOrEqualTo670()
          }"
          >2. </span
        >Confirming your choice
      </p>
      <p
        class=""
        :class="{
          'text-sm ml-2': isScreenHeightLessThan670(),
          'text-md ml-3': isScreenHeightGreaterThanOrEqualTo670()
        }"
      >
        <span
          class="text-sky-600"
          :class="{
            'text-md': isScreenHeightLessThan670(),
            'text-xl': isScreenHeightGreaterThanOrEqualTo670()
          }"
          >3. </span
        >Done !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGroceriesExplanation',
  methods: {
    isScreenHeightLessThan670() {
      return window.innerHeight < 670
    },
    isScreenHeightGreaterThanOrEqualTo670() {
      return window.innerHeight >= 670
    }
  },
  components: {},
  props: { toggle: Function }
}
</script>
