<template>
  <div class="h-screen w-screen">
    <header class="px-2 py-3 h-36 text-center bg-cyan-600">
      <h1 class="font-montserrat text-3xl max-[364px]:text-2xl font-bold text-slate-100">
        Share House Manager
      </h1>
      <h3 class="font-montserrat text-lg text-slate-100 drop-shadow-xl">Omotesando 1</h3>
      <!-- Tabs -->
      <div class="flex flex-row justify-around font-montserrat font-bold mt-2.5">
        <!-- Chores -->
        <div
          class="border-2 border-blue-300 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Chores'"
          :class="{
            'bg-blue-500 ': tab === 'Chores',
            ' bg-transparent text-black': tab !== 'Chores'
          }"
        >
          Chores
        </div>
        <!-- Rooms -->
        <div
          class="border-2 border-emerald-200 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Rooms'"
          :class="{
            'bg-teal-400': tab === 'Rooms',
            ' bg-transparent text-black': tab !== 'Rooms'
          }"
        >
          Rooms
        </div>
        <!-- Events -->
        <div
          class="border-2 border-purple-300 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Events'"
          :class="{
            'bg-purple-500 ': tab === 'Events',
            ' bg-transparent text-black': tab !== 'Events'
          }"
        >
          Events
        </div>
        <!-- Bike -->
        <div
          class="border-2 border-green-300 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Bike'"
          :class="{
            'bg-green-500 ': tab === 'Bike',
            ' bg-transparent text-black': tab !== 'Bike'
          }"
        >
          Bike
        </div>
      </div>
    </header>
    <div
      style="
        height: calc(100vh - 9rem);
        background-image: url('/bg-mobile-blue.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
      class=""
    >
      <AppEventPlanner v-if="tab === 'Events'" />
      <AppChores v-if="tab === 'Chores'" />
      <AppListRooms v-if="tab === 'Rooms'" />
      <AppBike v-if="tab === 'Bike'" />
    </div>
  </div>
</template>

<script>
import AppChores from './components/AppChores.vue'
import AppListRooms from './components/AppListRooms.vue'
import AppEventPlanner from './components/AppEventPlanner.vue'
import AppBike from './components/AppBike.vue'

export default {
  name: 'App',
  data() {
    return {
      tab: 'Events'
    }
  },
  components: {
    AppEventPlanner,
    AppChores,
    AppListRooms,
    AppBike
  }
}
</script>
