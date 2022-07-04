<template>
  <header class="container">
    <div class="header-wrapper">
      <h1><router-link to="/">meetups</router-link></h1>

      <nav>
        <ul>
          <li v-for="link in navLinks" :key="link.text">
            <router-link :to="link.path">{{ link.text }}</router-link>
          </li>

          <li @click="handleCreateMeetup">
            <a>Создать митап</a>
          </li>

          <li v-if="isAuth" @click="logout">
            <a> {{ user.fullname }} (выйти) </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import {
  authorizedLinks,
  notAuthorizedLinks,
} from '@/constants/navigationLinks.js'

export default {
  computed: {
    user() {
      return this.$store.state.user.user
    },
    isAuth() {
      return this.$store.state.user.isAuth
    },
    navLinks() {
      if (!this.isAuth) {
        return notAuthorizedLinks
      }
      return authorizedLinks
    },
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$store.commit('resetUser')
    },
    handleCreateMeetup() {
      if (this.isAuth) {
        this.$router.push('/create_meetup')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style>
.header-wrapper {
  padding: 30px;
}

.header-wrapper h1 {
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 900;

  color: #34423f;
  text-decoration: none;

  margin-bottom: 24px;
}

.header-wrapper h1 a {
  color: #34423f;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  gap: 25px;

  font-size: 25px;
}

nav a {
  color: #34423f;
  text-decoration: none;
  cursor: pointer;
}

nav a:hover {
  color: #4c6bb6;
}
</style>
