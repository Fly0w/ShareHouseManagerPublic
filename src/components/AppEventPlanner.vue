<template>
  <div class="w-full h-full font-montserrat">
    <!-- Title -->
    <div
      class="flex flex-col justify-center w-full py-3 text-center h-16"
      :class="{
        'bg-fuchsia-500/95': eventTab === 'list',
        'bg-yellow-500/95': eventTab === 'create',
        'bg-teal-500/95': eventTab === 'edit'
      }"
    >
      <h2 v-if="eventTab === 'create'" class="text-white text-3xl italic tracking-widest">
        New Event ?
      </h2>
      <h2 v-else-if="eventTab === 'edit'" class="text-white text-3xl italic tracking-widest">
        Edit Event ?
      </h2>
      <h2 v-else class="text-white text-3xl italic tracking-widest">Upcoming events</h2>
    </div>

    <div class="flex flex-row justify-center items-center h-14 w-full">
      <p
        v-if="eventTab === 'list'"
        @click.prevent="eventTab = 'create'"
        class="px-8 py-1 rounded-full border-2 border-slate-200 bg-purple-600 text-slate-100"
      >
        Create new event
      </p>
      <p
        v-else
        @click.prevent="eventTab = 'list'"
        class="px-8 py-1 rounded-full border-2 border-slate-100 bg-gray-500 text-slate-100"
      >
        Cancel
      </p>
    </div>

    <div class="w-full" v-if="eventTab === 'create'" style="height: 75%">
      <EventNewForm :toggleTab="toggleTab" />
    </div>
    <div class="w-full" v-else-if="eventTab === 'edit'" style="height: 75%">
      <EventEditForm :toggleTab="toggleTab" />
    </div>
    <!--List of Events -->
    <div v-else class="flex flex-col w-full h-full overflow-y-auto" style="height: 75%">
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
