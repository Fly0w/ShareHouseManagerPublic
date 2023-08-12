<template>
  <div class="w-full h-full font-montserrat">
    <!-- Title -->
    <div
      class="flex flex-col justify-center w-full py-3 text-center bg-fuchsia-500/95"
      style="height: 10%"
    >
      <h2 class="text-white text-3xl italic tracking-widest">Upcoming events</h2>
    </div>

    <!--List of Events -->
    <div class="w-full overflow-y-auto" style="height: 90%">
      <div class="w-full" v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from './EventCard.vue'

export default {
  name: 'AppEventPlanner',
  data() {
    return {
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
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu',
            'https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu'
          ]
        },
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
        }
      ]
    }
  },
  components: { EventCard }
}
</script>
