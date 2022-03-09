<template>
	<div class="sticky">
		<NavTopBar
			:sideBarOpen="sideBarOpen"
			@sideBarOpened="sideBarOpen = true"
			@sideBarClosed="sideBarOpen = false"
		/>
		<NavSideBar v-show="sideBarOpen" class="absolute right-0 z-50" />
	</div>
</template>
<script setup lang="ts">
// import { EventBus } from "@/event-bus";
import NavSideBar from "@/components/nav/NavSideBar.vue";
import NavTopBar from "@/components/nav/NavTopBar.vue";
import { ref, onBeforeMount } from "vue";

const sideBarOpen = ref(false);

function closeNav () {
	sideBarOpen.value = false;
}

// onBeforeMount(() => {
// 	EventBus.$on("closeNav", closeNav());
// }),
</script>

<style scoped>
/* .slide-enter-active, .slide-leave-active {
    Transition: opacity .5s;
    }
    .slide-enter, .slide-leave-to{
    opacity: 0;
    } */
</style>
