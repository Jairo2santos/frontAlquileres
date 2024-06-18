<template>
  <div>
    <!-- Desktop Navbar -->
    <nav
      class="fixed top-0 left-0 h-full flex flex-col items-center bg-blue-950 text-white p-2 transition-all z-20 duration-75 ease-in-out"
      :class="{'w-16': !sidebarStore.isExpanded, 'w-64': sidebarStore.isExpanded, 'hidden': sidebarStore.isMobile}"
    >
      <button @click="sidebarStore.toggleNavbar" class="focus:outline-none mb-4">
        <Icon name="mdi:menu" v-if="!sidebarStore.isExpanded" size="24px" />
        <Icon name="mdi:close" v-else size="24px" />
      </button>
      <div class="mt-4 flex flex-col items-center space-y-4 flex-1 justify-center">
        <NuxtLink to="/" class="mb-4">
          <Icon name="mdi:home" size="24px" />
        </NuxtLink>
        <button v-if="!sidebarStore.isExpanded" class="mb-4">
          <Icon name="mdi:heart" size="24px" />
        </button>
        <div v-if="sidebarStore.isExpanded" class=" w-full px-4 py-2 text-center space-y-4 ">
          <button class="w-full  h-12 bg-green-500 rounded flex items-center justify-start px-4 ">
            <Icon name="mdi:heart" size="20px" class="mr-2" />
            <span>Favoritos</span>
          </button>
          <NuxtLink to="/login" class="w-full  h-12 bg-red-500 rounded flex items-center   justify-start px-4">
            <Icon name="mdi:login" size="20px" class="mr-2" />
            <span>Acceder</span>
          </NuxtLink>
          <NuxtLink to="/register" class="w-full h-12 bg-yellow-500 rounded flex items-center   justify-start px-4">
            <Icon name="mdi:account-plus" size="20px" class="mr-2" />
            <span>Registrarse</span>
          </NuxtLink>
        </div>
      </div>
    </nav>
        <!-- Mobile Navbar -->
        <nav v-if="sidebarStore.isMobile" class="fixed top-0 left-0 w-full bg-blue-900 text-white flex items-center justify-between p-2 z-22">
      <NuxtLink to="/">
        <Icon name="mdi:home" size="24px" />
      </NuxtLink>
      <button @click="sidebarStore.toggleMobileNavbar" class="focus:outline-none">
        <Icon name="mdi:menu" v-if="!sidebarStore.isMobileExpanded" size="24px" />
        <Icon name="mdi:close" v-else size="24px" />
      </button>
    </nav>
    <div v-if="sidebarStore.isMobile && sidebarStore.isMobileExpanded" class="fixed top-12 left-0 w-full bg-blue-900 text-white flex flex-col items-center p-4 space-y-4 transition-all duration-300 ease-in-out z-50">
      <button class="w-full h-12 bg-green-500 rounded flex items-center justify-start px-4 ease-in-out">
        <Icon name="mdi:heart" size="20px" class="mr-2" />
        <span>Favoritos</span>
      </button>
      <NuxtLink to="/login" class="w-full h-12 bg-red-500 rounded flex items-center justify-start px-4 ease-in-out">
        <Icon name="mdi:login" size="20px" class="mr-2" />
        <span>Acceder</span>
      </NuxtLink>
      <NuxtLink to="/register" class="w-full h-12 bg-yellow-500 rounded flex items-center justify-start px-4 ease-in-out">
        <Icon name="mdi:account-plus" size="20px" class="mr-2" />
        <span>Registrarse</span>
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <main class="flex-1" :class="{'ml-16': !sidebarStore.isExpanded && !sidebarStore.isMobile, 'ml-64': sidebarStore.isExpanded && !sidebarStore.isMobile}">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useSidebarStore } from '~/stores/sidebar'

const sidebarStore = useSidebarStore()

const handleResize = () => {
  sidebarStore.checkMobile()
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
<style scoped>


</style>

