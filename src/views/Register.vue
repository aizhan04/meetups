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

				<div class="form-group check">
					<div class="checkbox" @click="handleCheckboxChange">
						<img v-if="isChecked" src="@/assets/tick.png" />
					</div>
					<span>Я согласен с условиями</span>
				</div>

				<p v-if="validationError" class="error-text">{{ validationError }}</p>

				<!-- Should be one button -->

				<v-button buttonText="Зарегестрироваться" :loading="loading" />
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
import VButton from "@/components/VButton.vue";
import axios from "axios";

export default {
	name: "Register",
	components: { VButton },
	data() {
		return {
			email: "",
			userName: "",
			password: "",
			passwordSecond: "",
			isChecked: false,
			validationError: "",
			loading: false,
		};
	},

	methods: {
		async submitForm() {
			if (this.password !== this.passwordSecond) {
				this.validationError = "Пароли не совпадают";

				return;
			}

			if (!this.email && !this.userName && !this.password) {
				this.validationError = "Заполните все поля";

				return;
			}

			if (this.isChecked === false) {
				this.validationError = "Я согласен с условиями";

				return;
			}

			const newUserInfo = {
				email: this.email,
				fullname: this.userName,
				password: this.password,
			};

			this.loading = true;

			try {
				const res = await axios.post(
					"https://course-vue.javascript.ru/api/auth/register",
					newUserInfo
				);

				if (res.status === 201) {
					const userData = res.data;

					this.$store.commit("setUser", userData);
					localStorage.setItem("user", JSON.stringify(userData));
					this.$router.push("/");

					// reset form fields
				}
			} catch (err) {
				console.log(err);
				// err.response.status === ???
			} finally {
				this.loading = false;
			}
		},
		handleCheckboxChange() {
			console.log(123);

			this.isChecked = !this.isChecked;
		},
	},
};
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
	/* display: none; */
	margin-bottom: 20px;
}

.active {
	display: block;
}

.checkbox {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 8px;
	border: 1px solid black;
	cursor: pointer;
}

.check {
	display: flex;
	align-items: center;
	column-gap: 15px;
	flex-direction: row !important;
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
