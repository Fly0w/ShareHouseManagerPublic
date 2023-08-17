<template>
  <form
    @submit.prevent="EditEvent"
    class="h-full w-full flex flex-col justify-start items-center py-3 px-6 text-center overflow-y-auto"
  >
    <!-- Title -->
    <div class="flex flex-col items-center w-full">
      <label class="font-bold text-xl text-slate-800 mb-1"
        ><span class="text-red-600">* </span>Title :</label
      >
      <input
        type="text"
        class="w-4/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400"
        v-model="title"
        placeholder="Hiking day"
        required
      />
    </div>
    <!-- Description -->
    <div class="flex flex-col items-center w-full">
      <label class="font-bold text-xl text-slate-800 mb-1">Description :</label>
      <textarea
        class="w-4/5 h-24 rounded-xl px-4 py-2 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400"
        v-model="description"
        placeholder="Let's go to the mountain ! "
      ></textarea>
    </div>
    <!-- Location -->
    <div class="flex flex-col items-center w-full">
      <label class="font-bold text-xl text-slate-800 mb-1"
        ><span class="text-red-600">* </span>Location :</label
      >
      <input
        type="text"
        class="w-4/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400"
        v-model="place"
        placeholder="Mt Oyama"
        required
      />
    </div>
    <!-- Day and Time -->
    <div class="flex flex-row w-full justify-around">
      <div class="flex flex-col items-center w-3/6">
        <label class="font-bold text-xl text-slate-800 mb-1"
          ><span class="text-red-600">* </span>Day :</label
        >
        <input
          type="date"
          class="w-5/6 text-center rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400"
          v-model="date.day"
          required
        />
      </div>
      <div class="flex flex-col items-center w-3/6">
        <label class="font-bold text-xl text-slate-800 mb-1"
          ><span class="text-red-600">* </span>Time :</label
        >
        <input
          type="time"
          class="w-5/6 text-center rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400"
          v-model="date.time"
          required
        />
      </div>
    </div>
    <!-- Links -->
    <div class="flex flex-col items-center w-full">
      <label class="font-bold text-xl text-slate-800 mb-1">Links :</label>
      <div class="flex flex-col items-center w-full">
        <label class="font-bold text-md text-slate-800">Link 1</label>
        <input
          type="text"
          class="w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400"
          v-model="link1"
          placeholder="Insert URL here"
        />
        <label class="font-bold text-md text-slate-800">Link 2</label>
        <input
          type="text"
          class="w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400"
          v-model="link2"
          placeholder="Insert URL here"
        />
        <label class="font-bold text-md text-slate-800">Link 3</label>
        <input
          type="text"
          class="w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400"
          v-model="link3"
          placeholder="Insert URL here"
        />
      </div>
    </div>
    <button
      type="submit"
      class="mt-5 px-8 py-2 bg-teal-500 border-4 border-teal-600 rounded-full text-slate-100 text-xl"
    >
      Edit event
    </button>
  </form>
</template>

<script>
export default {
  name: 'EventEditForm',
  mounted() {
    // Récupérer les info de la database avec event id et les stocker dans le state de ce component.
    console.log('getting db information')
  },
  data() {
    return {
      id: '',
      author: '',
      title: '',
      description: '',
      date: {
        day: '',
        time: ''
      },
      place: '',
      links: [],
      link1: '',
      link2: '',
      link3: ''
    }
  },
  methods: {
    EditEvent() {
      // Send info to db
      const info = {
        author: this.author,
        title: this.title,
        description: this.description,
        date: {
          day: this.date.day,
          time: this.date.time
        },
        place: this.place,
        links: [this.link1, this.link2, this.link3]
      }
      console.log(info)
    }
  }
}
</script>
