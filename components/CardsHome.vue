<template>
    <div class="container relative ">
      <div class="overflow-x-auto whitespace-nowrap scroll-smooth">
        <div v-for="property in visibleProperties" :key="property.url" class="inline-block bg-white shadow-md rounded-lg overflow-hidden w-80 mx-2">
          <img :src="property.images[0]" alt="Property Image" class="w-full h-full h-44 object-cover">
          <div class="p-4 h-48">
            <h2 class="text-lg font-semibold">{{ property.price }}</h2>
            <p class="text-gray-500">{{ property.location.address }}</p>
            <p class="text-gray-700">{{ property.location.neighborhood }}, {{ property.location.province }}</p>
            <img :src="property.real_estate_image" alt="Real Estate Logo" class="h-12 mt-2">
            <p class="text-sm text-gray-600">{{ property.details }}</p>
            <p class="text-sm text-gray-600">{{ property.expenses }}</p>
          </div>
        </div>
      </div>
      <button @click="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md">Prev</button>
      <button @click="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md">Next</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const { data: properties } = await useFetch('/api/realtor');
  const startIndex = ref(0);
  
  // Mostrar solo 3 propiedades a la vez
  const visibleProperties = computed(() => properties.value.slice(startIndex.value, startIndex.value + 3));
  
  const next = () => {
    if (startIndex.value + 3 < properties.value.length) {
      startIndex.value += 3;
    }
  };
  
  const prev = () => {
    if (startIndex.value > 0) {
      startIndex.value -= 3;
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>
  