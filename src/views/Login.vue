<template>
  <div class="container">
    <div class="form-wrapper">
      <h2>Вход</h2>

      <form class="login-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="email" v-model="email" />
        </div>

        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            v-model="password"
          />
        </div>

        <p :class="{ active: isEmpty }" class="error-text">
          Заполните все поля
        </p>
        <p :class="{ active: !isValid }" class="error-text">
          Неверный логин или пароль
        </p>

        <!-- Should be one button -->
        <button>
          <v-loader v-if="loading" />
          <span v-else>Вход</span>
        </button>
      </form>

      <p class="form-question">
        Нет аккаунта?<router-link to="/register" class="question-text">
          Зарегестрируйтесь</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import VLoader from '@/components/VLoader.vue'
export default {
  components: { VLoader },

  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      isEmpty: false,
      isValid: true,
      loading: false,
    }
  },

  methods: {
    async submitForm() {
      // reset validation errors
      if (this.isEmpty) {
        this.isEmpty = false
      }

      if (!this.isValid) {
        this.isValid = true
      }

      if (!this.email || !this.password) {
        this.isEmpty = true
        return
      }

      const info = {
        email: this.email,
        password: this.password,
      }

      this.loading = true

      try {
        const response = await fetch(
          'https://course-vue.javascript.ru/api/auth/login/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(info),
          }
        )

        if (response.status === 403) {
          throw new Error('403 is unacceptable for me!')
        }

        const userData = await response.json()

        this.$store.commit('setUser', userData)
        localStorage.setItem('user', JSON.stringify(userData))

        this.email = ''
        this.password = ''

        this.$router.push('/')
      } catch (error) {
        this.isValid = false
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
h2 {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;

  text-align: center;
  margin-bottom: 30px;
}

.form-wrapper {
  width: 100%;
  max-width: 374px;
  margin: 0 auto;

  padding: 48px 0;
}
.login-form .form-group {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.error-text {
  color: #db3851;
  display: none;
  margin-bottom: 20px;
}

.active {
  display: block;
}
.form-group label {
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 10px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  height: 52px;
  border-radius: 8px;
  border: 2px solid #b8c5e2;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  outline: none;
  -webkit-box-shadow: none;
  transition: all 0.2s;

  box-shadow: none;
}

.form-group input:focus {
  border-color: #4c6bb6;
}

.form-wrapper button {
  width: 100%;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  border: 4px solid transparent;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #4c6bb6;
  cursor: pointer;
  text-decoration: none;

  border-radius: 5px;
}

.form-wrapper button span {
  color: #fff;
}

.form-wrapper button:hover {
  background-color: #b8c5e2;
}

.form-question {
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
}

.question-text {
  text-decoration: none;
  color: #98aace;
}
</style>
