<template>
  <div class="w-full h-full font-montserrat">
    <!-- Title -->
    <div
      class="flex flex-col justify-center w-full py-3 text-center"
      :class="{
        'bg-fuchsia-500/95': eventTab === 'list',
        'bg-yellow-500/95': eventTab === 'create',
        'bg-teal-500/95': eventTab === 'edit'
      }"
      style="height: 10%"
    >
      <h2 v-if="eventTab === 'create'" class="text-white text-3xl italic tracking-widest">
        New Event ?
      </h2>
      <h2 v-else-if="eventTab === 'edit'" class="text-white text-3xl italic tracking-widest">
        Edit Event ?
      </h2>
      <h2 v-else class="text-white text-3xl italic tracking-widest">Upcoming events</h2>

      <button
        v-if="eventTab === 'list'"
        class="absolute z-30 right-3 top-48 flex flex-col justify-center items-center h-12 w-12 border-2 text-4xl font-bolder rounded-full bg-emerald-500 border-emerald-800 text-white"
        @click.prevent="eventTab = 'create'"
      >
        <p class="relative">+</p>
      </button>

      <button
        v-else
        class="absolute z-30 right-3 top-48 flex flex-col justify-center items-center h-12 w-12 border-2 text-4xl font-bolder rounded-full bg-slate-300 border-white text-white"
        @click.prevent="eventTab = 'list'"
      >
        <p class="absolute text-white font-semibold">↶</p>
      </button>
    </div>

    <div class="w-full" v-if="eventTab === 'create'" style="height: 90%">
      <EventNewForm :toggleTab="toggleTab" />
    </div>
    <div class="w-full" v-else-if="eventTab === 'edit'" style="height: 90%">
      <EventEditForm :toggleTab="toggleTab" />
    </div>
    <!--List of Events -->
    <div v-else class="w-full overflow-y-auto" style="height: 90%">
      <div class="w-full" v-for="event in eventList" :key="event.id">
        <EventCard :event="event" :toggleTab="toggleTab" />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from './EventCard.vue'
import EventNewForm from './EventNewForm.vue'
import EventEditForm from './EventEditForm.vue'
import useEventsStore from '@/stores/events'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'AppEventPlanner',
  data() {
    return {
      eventTab: 'list'
    }
  },
  methods: {
    ...mapActions(useEventsStore, ['addEvent']),
    toggleTab(tab) {
      this.eventTab = tab
    }
  },
  computed: {
    ...mapState(useEventsStore, ['eventList'])
  },
  components: { EventCard, EventNewForm, EventEditForm }
}
</script>
