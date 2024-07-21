<template>
  <div class="home-container flex flex-col items-center   justify-center min-h-screen bg-cover bg-center">
    <h1 class="title xs:mt-40  text-4xl lg:text-5xl font-extrabold ml-8 text-blue-900 sm:mt-20">
      Buscador de alquileres
    </h1>
     
       <div class="flex lg:flex-row  items-center justify-around w-full  p-8">
        <img src="/assets/css/images/mudados.png" alt="Alquiler Image" class="h-auto rounded-lg mb-8  lg:mb-0" />

        <div class="flex flex-col items-center ">
              <Searcher  class="lg:w-2/3 "/>
              <CardsHome /> 
         </div>
        </div>
  </div>
</template>

  <script setup lang="ts">
  </script>
  
  <style scoped>

  </style>
  