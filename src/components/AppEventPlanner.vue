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
        class="absolute z-30 right-3 top-48 flex flex-col justify-center items-center h-12 w-12 border-2 text-4xl font-bolder rounded-full bg-slate-400 border-white text-white"
        @click.prevent="eventTab = 'list'"
      >
        <p class="font-bold">⬅</p>
      </button>
    </div>

    <div class="w-full" v-if="eventTab === 'create'" style="height: 90%">
      <EventNewForm />
    </div>
    <div class="w-full" v-else-if="eventTab === 'edit'" style="height: 90%">
      <EventEditForm />
    </div>
    <!--List of Events -->
    <div v-else class="w-full overflow-y-auto" style="height: 90%">
      <div class="w-full" v-for="event in events" :key="event.id">
        <EventCard :event="event" :toggleEdit="toggleEdit" />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from './EventCard.vue'
import EventNewForm from './EventNewForm.vue'
import EventEditForm from './EventEditForm.vue'

export default {
  name: 'AppEventPlanner',
  data() {
    return {
      eventTab: 'list',
      // In db
      events: [
        {
          id: '0001',
          title: 'Beach day',
          author: 'Florian',
          date: { day: '2023/08/13', time: '12:30' },
          place: 'Zushi',
          description:
            "Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",
          links: [
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu'
          ]
        },
        {
          id: '0002',
          title: 'Hiking day',
          author: 'Florian',
          date: { day: '2023/08/13', time: '12:30' },
          place: 'Mt Fuji',
          description:
            "Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",
          links: [
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu'
          ]
        },
        {
          id: '0003',
          title: 'Skydiving',
          author: 'Siyun',
          date: { day: '2023/08/13', time: '12:30' },
          place: 'Chiba',
          description:
            "Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",
          links: [
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu'
          ]
        },
        {
          id: '0004',
          title: 'Camping',
          author: 'Yusei',
          date: { day: '2023/08/13', time: '12:30' },
          place: 'Okutama',
          description:
            "Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",
          links: [
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu'
          ]
        }
      ]
    }
  },
  methods: {
    toggleEdit() {
      this.eventTab = 'edit'
    }
  },
  components: { EventCard, EventNewForm, EventEditForm }
}
</script>
