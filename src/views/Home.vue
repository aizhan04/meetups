<template>
  <div class="container">
    <ul class="meetups-list">
      <v-meetup-card
        v-for="meetup in meetups"
        :key="meetup.id"
        :meetup="meetup"
      />
    </ul>
  </div>
</template>

<script>
// Component
// 1. Created -> created() {} => перед отрисовкой
// 2. Mount -> mounted() {} => отрисовка
// 3. Updated -> updated() {} => когда компонент ререндерится
// 4. Destroyed -> ??? => когда компонент исчезает
import VMeetupCard from '@/components/VMeetupCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: { VMeetupCard },
  data() {
    return {
      meetups: [],
    }
  },
  methods: {
    async fetchMeetups() {
      try {
        const res = await axios.get(
          'https://course-vue.javascript.ru/api/meetups'
        )

        if (res.status === 200) {
          this.meetups = res.data
        }
      } catch (err) {
        alert('Error occured')
      }
    },
  },
  created() {
    // запрос на сервер
    this.fetchMeetups()
  },
}
</script>

<style scoped>
.meetups-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  row-gap: 25px;

	margin: 30px 0;
}
</style>
