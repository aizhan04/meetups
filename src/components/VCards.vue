<template>
	<div class="main-container">
		<div class="single-card">
			<div class="single-card__left">
				<!-- <img src="@/assets/img.jpg" /> -->
			</div>
			<div class="single-card__right">
				<ul>
					<li>
						<img src="@/assets/user.png" />
						<p>Grigorii</p>
					</li>
					<li>
						<img src="@/assets/location.png" />
						<p>Learn js</p>
					</li>
					<li>
						<img src="@/assets/scedule.png" />
						<p>15 июня 2021</p>
					</li>
				</ul>
				<span class="single-card__right-span"> Учавствую</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
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
}
.single-card__right-span {
	position: absolute;

	top: 0;
	right: 0;

	color: #24a37e;
	background-color: #dff2ec;
	padding: 4px 12px;
}

.single-card__right ul {
	display: flex;
	flex-direction: column;
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
</style>