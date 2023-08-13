<template>
  <div
    class="h-full w-full"
    style="
      background-image: url('../../public/event-bg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    "
  >
    <div class="flex flex-col w-full h-44 px-1 py-1 border-t-2 bg-slate-100/80 border-violet-700">
      <p class="h-1/6 w-full text-center text-xl font-bold text-purple-900">{{ event.title }}</p>

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

export default {
  name: 'EventCard',
  props: ['event'],
  components: { DateIcon, PlaceIcon, LinkIcon, UserIcon }
}
</script>
