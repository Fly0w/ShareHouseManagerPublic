<template>
  <div
    v-if="triggerConfirmDelete"
    class="flex flex-col justify-around items-center w-full h-44 px-1 py-1 border-t-2 bg-red-600/90 border-red-700"
  >
    <p class="text-white text-2xl text-center">Are you sure you want to delete this event ?</p>
    <p class="w-full text-center text-2xl font-bold text-white">{{ event.title }}</p>
    <div class="">
      <button
        class="px-3 mx-4 rounded-lg border-2 border-slate-100 bg-red-700 text-white text-xl"
        @click="deleteEvent"
      >
        Delete event
      </button>
      <button
        class="px-3 mx-4 rounded-lg border-2 border-slate-100 bg-slate-500 text-white text-xl"
        @click="triggerConfirmDelete = !triggerConfirmDelete"
      >
        Keep event
      </button>
    </div>
  </div>

  <div
    v-if="!triggerConfirmDelete"
    class=""
    style="
      background-image: url('../../public/event-bg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    "
  >
    <div class="flex flex-col w-full h-44 px-1 py-1 border-t-2 bg-slate-100/90 border-violet-700">
      <div class="relative w-full h-full">
        <div class="absolute top-1 left-2">
          <button class="text-green-500 mx-3" @click="toggleEdit()">
            <EditIcon class="h-6 w-6" />
          </button>
          <button class="text-red-500 mx-3" @click="triggerConfirmDelete = !triggerConfirmDelete">
            <DeleteIcon class="h-6 w-6" />
          </button>
        </div>

        <p class="h-1/6 w-full text-center text-xl font-bold text-purple-900">{{ event.title }}</p>
      </div>

      <div class="flex flex-row w-full h-5/6 justify-around items-center">
        <!-- Left Panel -->
        <div class="flex flex-col justify-around w-2/5 h-full text-md font-bold text-violet-900">
          <div class="flex flex-row items-center">
            <DateIcon class="h-7 w-7 ml-1.5 mr-2" />
            <div class="flex flex-col justify-center items-center w-full text-center">
              <p class="">{{ event.date.day }}</p>
              <p class="">{{ event.date.time }}</p>
            </div>
          </div>

          <div class="flex flex-row items-center">
            <PlaceIcon class="h-7 w-6 ml-3 mr-2" />
            <p class="w-full text-center">{{ event.place }}</p>
          </div>

          <div class="flex flex-row items-center">
            <UserIcon class="h-7 w-7 ml-2 mr-2" />
            <p class="w-full text-center">{{ event.author }}</p>
          </div>
        </div>

        <!-- Right Panel -->
        <div class="flex flex-col justify-around items-center w-3/5 h-full px-1 py-2">
          <p class="text-center italic text-sm font-medium h-3/5">{{ event.description }}</p>
          <div class="flex flex-col items-center w-full">
            <p class="text-md font-bold">Links</p>
            <div class="flex flex-row w-full h-fit justify-around">
              <div v-for="link in event.links" :key="link">
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

export default {
  name: 'EventCard',
  data() {
    return {
      triggerConfirmDelete: false
    }
  },
  methods: {
    deleteEvent() {
      console.log('deleting event', this.event.id)
    }
  },
  props: ['event', 'toggleEdit'],
  components: { DateIcon, PlaceIcon, LinkIcon, UserIcon, EditIcon, DeleteIcon }
}
</script>
