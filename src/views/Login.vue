<template>
	<div class="container">
		<div class="form-wrapper">
			<h2>Вход</h2>

			<form class="login-form">
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" />
				</div>

				<div class="form-group">
					<label for="password">Пароль</label>
					<input type="password" id="password" />
				</div>

				<button>Войти</button>
			</form>

			<!-- <p class="form-question">
				Нет аккаунта?<router-link to="/register">Зарегестрируйтесь</router-link>
			</p> -->
		</div>
	</div>
</template>

<script>
export default {
	name: "Login",
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

	color: white;
}

.form-wrapper button:hover {
	background-color: #b8c5e2;
}
/* 
.form-question {
	margin-top: 40px;
	text-align: center;
	font-size: 20px;
	line-height: 28px;
} */
</style>