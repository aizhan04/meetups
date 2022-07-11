<template>
  <div class="single-card">
    <div class="single-card__left">
      <img class="img" src="@/assets/img.jpg" :alt="meetup.title" />
      <h3>{{ meetup.title }}</h3>
    </div>

    <div class="single-card__right">
      <ul>
        <li>
          <img src="@/assets/user.png" />
          <p>{{ meetup.organizer }}</p>
        </li>
        <li>
          <img src="@/assets/location.png" />
          <p>{{ meetup.place }}</p>
        </li>
        <li>
          <img src="@/assets/scedule.png" />
          <p>{{ meetupDate }}</p>
        </li>
      </ul>

      <span class="single-card__right-span"> Учавствую</span>
    </div>
  </div>
</template>

<script>
import { monthMap } from '@/utils/date'
import axios from 'axios'

export default {
  data() {
    return {
      meetupImg: null,
    }
  },
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  computed: {
    meetupDate() {
      const date = new Date(this.meetup.date)
      const day = date.getDate()
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      return `${day} ${monthMap[month]} ${year} г.`
    },
  },
  methods: {
    async getMeetupImage() {
      if (!this.meetup?.imageId) {
        return null
      }

      try {
        const res = await axios.get(
          `https://course-vue.javascript.ru/api/images/${this.meetup.imageId}/`
        )

        if (res.status === 200) {
          const file = res.data
          console.log(file)
        }
      } catch (err) {
        alert('не удалось загрузить картинку')
      }
    },
  },
  created() {
    this.getMeetupImage()
  },
}
</script>

<style scoped>
.cards-wrapper {
  margin: 0;
  padding: 0;
}
.single-card {
  width: 100%;
  height: 220px;

  display: flex;
}

.single-card__right {
  flex: 1;
  position: relative;
  background-color: #fff;

  padding: 40px;

  display: flex;
  flex-direction: column;
}

.single-card__left {
  flex: 1;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
}

.single-card__left h3 {
  color: #fff;
  font-size: 26px;
  line-height: 28px;
}
.single-card__right-span {
  position: absolute;

  top: 0;
  right: 0;

  color: #24a37e;
  background-color: #dff2ec;
  padding: 4px 12px;
  font-size: 15px;
}

.single-card__right ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
}

.single-card__right ul li {
  display: flex;
}

.single-card__right ul li img {
  width: 27px;
  height: 27px;
}

.single-card__right ul li p {
  padding-left: 10px;
  font-size: 18px;
  line-height: 28px;
}

.img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
