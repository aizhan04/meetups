<template>
	<div>
		<button>
			<v-loader v-if="loading" />
			<span v-else>{{ buttonText }}</span>
		</button>
	</div>
</template>

<script>
import VLoader from "@/components/VLoader.vue";

export default {
	components: { VLoader },
	props: {
		buttonText: {
			type: String,
			default: () => "button",
		},
		loading: {
			type: Boolean,
			default: () => false,
		},
	},
};
</script>

<style scoped>
button {
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

button span {
	color: #fff;
}

button:hover {
	background-color: red;
}
</style>