<template>
  <div class="container">
    <div class="form-wrapper">
      <h2>Регистрация</h2>

      <form class="login-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-group__label" for="email">Email</label>
          <input
            class="form-froup__input"
            type="email"
            id="email"
            placeholder="email"
            v-model="email"
          />
        </div>

        <div class="form-group">
          <label class="form-group__label" for="text">Имя</label>
          <input
            class="form-froup__input"
            type="text"
            id="text"
            placeholder="имя"
            v-model="userName"
          />
        </div>

        <div class="form-group">
          <label class="form-group__label">
            <span>Пароль</span>
            <input
              class="form-froup__input"
              type="password"
              placeholder="password"
              v-model="password"
            />
          </label>
        </div>

        <div class="form-group">
          <label class="form-group__label" for="password">Повтор пароля</label>
          <input
            class="form-froup__input"
            type="password"
            placeholder="password"
            v-model="passwordSecond"
          />
        </div>

        <div class="form-group">
          <label class="checkbox">
            <input
              type="checkbox"
              class="checkbox__input"
              :class="[isChecked ? 'checked' : '']"
              @change="handleCheckboxChange"
            />
            <span class="checkbox__span"></span>
            <span class="checkbox__text">Я согласен с условиями</span>
          </label>
        </div>

        <!-- <p :class="{ active: isEmpty }" class="error-text">
					Заполните все поля
				</p>
				<p :class="{ active: !isValid }" class="error-text">
					Неверный логин или пароль
				</p> -->

        <!-- Should be one button -->
        <button>
          <v-loader v-if="loading" />
          <span v-else>Зарегестрироваться</span>
        </button>
      </form>

      <p class="form-question">
        Уже есть акканут?<router-link to="/login" class="question-text">
          Войдите</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import VLoader from '@/components/VLoader.vue'
import axios from 'axios'

export default {
  name: 'Register',
  components: { VLoader },
  data() {
    return {
      email: '',
      userName: '',
      password: '',
      passwordSecond: '',
      isChecked: false,
      validationError: '',
      loading: false,
    }
  },

  methods: {
    async submitForm() {
      // Finish validation
      // Validate email, fullname and password
      // Validate password should be equal to passwordConfirm
      // Validate checkbox should be true
      const newUserInfo = {
        email: this.email,
        fullname: this.userName,
        password: this.password,
      }

      this.loading = true

      try {
        const res = await axios.post(
          'https://course-vue.javascript.ru/api/auth/register',
          newUserInfo
        )

        if (res.status === 201) {
          const userData = res.data

          this.$store.commit('setUser', userData)
          localStorage.setItem('user', JSON.stringify(userData))
          this.$router.push('/')

          // reset form fields
        }
      } catch (err) {
        console.log(err)
        // err.response.status === ???
      } finally {
        this.loading = false
      }
    },
    handleCheckboxChange() {
      this.isChecked = !this.isChecked
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

.checkbox__input {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.checkbox__span {
  position: absolute;
  width: 28px;
  height: 28px;
  border: 2px solid #b8c5e2;
  border-radius: 8px;
}

.checkbox__input:checked + .checkbox__span {
  background-color: yellow;
}

.checkbox__text {
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
}
.form-group .form-group__label {
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 10px;
}

.form-group .form-froup__input {
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

.form-group .form-froup__input:focus {
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
