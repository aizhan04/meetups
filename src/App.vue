<template>
	<div id="app">
		<v-header />
		<div class="main-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import VHeader from "./components/VHeader.vue";

export default {
	components: { VHeader },
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;

	font-family: "Nunito Sans", sans-serif;
	color: #34423f;
}

.container {
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 15px;
	overflow: hidden;
}

.main-content {
	background-color: #f8f9fc;
}
</style>
