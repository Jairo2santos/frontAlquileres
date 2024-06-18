<template>
    <div class="relative w-full md:w-auto mb-2 md:mb-0  z-20">
      <div class="relative inline-block w-full">
        <select
        class=" m-2 appearance-none w-full px-4 py-3 rounded-lg text-gray-700 border border-blue-700 focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
        aria-placeholder="Selecciona el tipo de propiedad"
      >
        <option value="" class="hidden">Departamento</option>
          <option class="py-2">Departamento</option>
          <option class="py-2">Casa</option>
          <option class="py-2">PH</option>
          <option class="py-2">Local comercial</option>
          <option class="py-2">Oficina comercial</option>
          <option class="py-2">Bodega-Galpón</option>
          <option class="py-2">Garage</option>
          <option class="py-2">Depósito</option>
          <option class="py-2">Terreno</option>
          <option class="py-2">Edificio</option>
          <option class="py-2">Campo</option>
          <option class="py-2">Fondo de comercio</option>
          <option class="py-2">Hotel</option>
          <option class="py-2">Consultorio</option>
 
        </select>
        <Icon name="mdi:chevron-down" size="20px" class="absolute top-1/2 transform -translate-y-1/2 right-1 pointer-events-none text-gray-700"/>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any necessary setup code here if needed
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>
  