<template>
  <!-- Confirmation delete display -->
  <div
    v-if="triggerConfirm === 'confirm'"
    class="flex flex-col justify-around items-center w-full h-44 px-1 py-1 border-t-2 bg-red-600/90 border-red-700"
  >
    <p class="text-white text-2xl text-center">Are you sure you want to delete this event ?</p>
    <p class="w-full text-center text-2xl font-bold text-white">{{ event.title }}</p>
    <div class="flex flex-row">
      <button
        class="px-3 mx-4 rounded-lg border-2 border-slate-100 bg-red-700 text-white text-xl"
        @click="deleteEvent()"
      >
        Delete event
      </button>
      <button
        class="px-3 mx-4 rounded-lg border-2 border-slate-100 bg-slate-500 text-white text-xl"
        @click="triggerConfirm = 'none'"
      >
        Keep event
      </button>
    </div>
  </div>

  <!-- Done delete display -->
  <div
    v-if="triggerConfirm === 'done'"
    class="flex flex-row justify-start items-center w-full h-44 px-3 py-1 border-t-2 bg-sky-600/90 border-sky-700"
  >
    <div class="flex flex-col w-4/6 pl-3">
      <p class="text-white text-lg mb-3">Successfully deleted the event :</p>
      <p class="text-white text-2xl font-bold">{{ event.title }}</p>
    </div>
    <p class="w-2/6 text-green-400 text-7xl font-bold text-center">✓</p>
  </div>

  <!-- Event info -->
  <div class="relative w-full h-full">
    <!-- Background -->
    <img
      v-if="triggerConfirm === 'none'"
      src="/event-bg-min.png"
      class="absolute -z-5 w-full h-full"
    />
    <!-- Content -->
    <div
      v-if="triggerConfirm === 'none'"
      class="relative z-5 flex flex-col w-full h-44 px-1 py-1 border-b-2 bg-slate-100/90 border-violet-700"
    >
      <!-- Edit and delete, and title -->
      <div class="relative w-full h-1/5">
        <div class="flex flex-row justify-center absolute top-1 left-2">
          <button class="text-green-500 mx-3" @click="triggerEditEvent()">
            <EditIcon class="h-6 w-6" />
          </button>
          <button class="text-red-500 mx-3" @click="triggerConfirm = 'confirm'">
            <DeleteIcon class="h-6 w-6" />
          </button>
        </div>
        <p class="h-1/6 w-full text-center text-xl font-bold text-purple-900">{{ event.title }}</p>
      </div>

      <div class="flex flex-row w-full h-4/5 justify-around items-center">
        <!-- Left Panel -->
        <div class="flex flex-col justify-around w-2/5 h-full">
          <div class="flex flex-row items-center h-2/6">
            <DateIcon class="h-7 w-7 ml-1.5 mr-2" />
            <div
              class="flex flex-col justify-center items-center w-full text-center text-sm font-semibold text-emerald-500"
            >
              <p class="">{{ event.date.day }}</p>
              <p class="">{{ event.date.time }}</p>
            </div>
          </div>

          <div class="flex flex-row items-center h-2/6">
            <PlaceIcon class="h-7 w-6 ml-3 mr-2" />
            <p class="w-full text-center text-sky-500 font-semibold">{{ event.place }}</p>
          </div>

          <div class="flex flex-row items-center h-2/6">
            <UserIcon class="h-8 w-8 ml-2.5 mr-2" />
            <p class="w-full text-center text-orange-600 font-semibold">{{ event.author }}</p>
          </div>
        </div>

        <!-- Right Panel -->
        <div class="flex flex-col justify-around items-center w-3/5 h-full px-1 py-2">
          <p class="text-center italic text-sm font-medium h-3/5 break-word overflow-y-auto">
            {{ event.description }}
          </p>
          <div class="flex flex-col items-center w-full">
            <p class="text-md font-bold">Links</p>
            <div class="flex flex-row w-full h-fit justify-around">
              <div v-for="link in event?.links" :key="link">
                <a :href="link" target="_blank"><LinkIcon class="h-8 w-8" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateIcon from './icons/events/DateIcon.vue'
import PlaceIcon from './icons/events/PlaceIcon.vue'
import LinkIcon from './icons/events/LinkIcon.vue'
import UserIcon from './icons/events/UserIcon.vue'
import EditIcon from './icons/events/EditIcon.vue'
import DeleteIcon from './icons/events/DeleteIcon.vue'

import useEventsStore from '@/stores/events'
import { mapWritableState, mapActions } from 'pinia'

export default {
  name: 'EventCard',
  data() {
    return {
      triggerConfirm: 'none'
    }
  },
  methods: {
    ...mapActions(useEventsStore, ['setEventList']),
    triggerEditEvent() {
      this.editEvent = this.event
      this.toggleTab('edit')
    },
    deleteEvent() {
      this.triggerConfirm = 'done'
      setTimeout(() => {
        const newList = this.eventList.filter((e) => e.id !== this.event.id)
        this.eventList = newList
        this.setEventList()
        this.triggerConfirm = 'none'
      }, 2000)
    }
  },
  computed: {
    ...mapWritableState(useEventsStore, ['eventList', 'editEvent'])
  },
  props: ['event', 'toggleTab'],
  components: { DateIcon, PlaceIcon, LinkIcon, UserIcon, EditIcon, DeleteIcon }
}
</script>
