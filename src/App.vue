<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/nav/NavBar.vue";

</script>
<template>
	<div :class="$route.name == 'chat' ? '' : 'pb-20'">
		<NavBar v-show="$route.name !== 'chat'" />
		<RouterView class="router" :class="$route.name == 'chat' ? '' : 'px-4'" />
	</div>
</template>

<style>
body {
	@apply bg-gray-100;
}

input {
	@apply bg-gray-200 focus:outline-none;
}
.cardify {
	@apply bg-white shadow-lg rounded-2xl p-4;
}

.router {
	--animate-duration: 0.1s;
}
</style>
