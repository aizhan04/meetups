<template>
	<header class="container">
		<div class="header-wrapper">
			<h1><router-link to="/">meetups</router-link></h1>

			<nav>
				<ul>
					<li>
						<router-link to="/login">Вход</router-link>
					</li>
					<li>
						<router-link to="/register">Регистрация</router-link>
					</li>
					<li>
						<router-link to="create_meetup">Создать митап</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {};
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
}

nav a:hover {
	color: #4c6bb6;
}
</style>