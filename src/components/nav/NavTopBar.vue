<template>
    <div class="navbar px-10 py-4 flex items-center justify-between">
        <div class="flex items-center brand" @click="$router.push('/')">
            <!-- <i class="logo text-4xl fas fa-graduation-cap  mr-2"></i> -->
            <img src="@/assets/logo-trans.png" class="h-16" />
            <!-- <p class="font-semibold text-2xl">LTA</p> -->
        </div>
        <TransitionGroup>
            <div
                class="mb-10 mr-5"
                enter-active-class="animated rotateIn"
                leave-active-class="animated rotateOut"
            >
                <font-awesome-icon
                    v-if="!sideBarOpen"
                    key="bars"
                    icon="bars"
                    class="menu-btn absolute"
                    @click="$emit('sideBarOpened')"
                />
                <font-awesome-icon
                    v-else
                    key="close"
                    icon="times"
                    class="menu-btn absolute"
                    @click="$emit('sideBarClosed')"
                />
            </div>
        </TransitionGroup>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    sideBarOpen: { type: Boolean, required: true },
});
</script>
<style scoped>
.menu-btn {
    --animate-duration: 0.5s;
    @apply text-3xl  text-right focus:outline-none focus:text-white;
}
</style>
