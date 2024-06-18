<template>
  <div class="bg-transparent py-8 z-20">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h1 class="text-2xl font-bold mb-4 text-blue-900">¡Encuentra el alquiler perfecto para ti!</h1>
      <div class="border-2 border-blue-700 rounded-lg shadow-md p-4 flex flex-col space-y-4 md:space-y-0 md:flex-row items-center bg-white md:w-full">
        <PropertyType />
        <input
          type="text"
          placeholder="Barrio o ubicación"
          class="flex-1 px-4 py-2 rounded-lg text-gray-700 focus:outline-none border-none"
        />
        <button class="bg-blue-700 text-white px-4 py-2 rounded-lg w-full md:w-auto">
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  
  </script>
  
  <style scoped>

  </style>
  