<template>
  <div class="bg-white px-4 md:px-8 flex flex-col min-h-screen py-20">
    <h2 class="text-gray-400 font-light text-lg uppercase text-center pb-10">
      Nos services de transfert d'argent
    </h2>

    <div class="relative w-full overflow-hidden">
      <div class="flex transition-transform duration-300 space-x-5 px-10"
           :style="`transform: translateX(-${currentIndex * 100}%)`">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="flex-shrink-0 w-full max-w-sm max-h-20 border flex justify-center items-center"
        >
          <img :src="image.name" alt="Service logo" class="max-w-full max-h-full object-contain">
        </div>
      </div>

      <!-- Slider indicators -->
      <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <button
            v-for="(_, index) in images"
            :key="index"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'"
            @click="goToSlide(index)"
            :aria-label="`Aller à la diapositive ${index + 1}`"
        ></button>
      </div>
    </div>

    <div class="w-full text-center mt-auto pt-10 border-t">
      <h1 class="text-3xl font-semibold text-black">
        Un guichet unique pour
        <span class="text-green-600">vos finances</span>
      </h1>
      <p class="max-w-6xl mx-auto text-lg py-10 px-4 md:px-20">
        Avec le CRESAF, vous bénéficiez d'un compte courant gratuit, d'une carte bancaire personnalisable,
        d'un livret d'épargne rémunéré, d'un crédit à la consommation et bien plus encore !
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-4 py-5 px-4 md:px-10">
      <div
          v-for="(location, index) in locations"
          :key="index"
          class="border rounded-lg p-8 bg-blue-50 hover:bg-purple-600 hover:text-white transition-colors group"
      >
        <div class="rounded-full h-24 w-24 border-2 border-white flex justify-center items-center mb-7">
          <img :src="location.icon" alt="Location icon" class="h-16 w-16">
        </div>
        <p class="text-xl font-semibold group-hover:text-white">
          {{ location.titre }}
        </p>
        <h3 class="text-md py-2 group-hover:text-gray-200">
          {{ location.description }}
        </h3>
        <div class="flex text-lg font-mono items-center pt-5 group-hover:text-white">
          {{ location.suite }}
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center items-center w-full my-5 gap-4">
      <div
          v-for="(location2, index) in locations2"
          :key="index"
          class="flex items-center gap-2"
      >
        <div class="rounded-full h-4 w-4 bg-green-500 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-lg text-black">{{ location2.titre }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MoMo from "@/assets/images/momo.jpeg";
import MoneyGram from "@/assets/images/MoneyGram.jpeg";
import MoneyTrans from "@/assets/images/Moneytrans.jpeg";
import OM from "@/assets/images/om.jpeg";
import Ria from "@/assets/images/Ria.jpeg";
import Paytop from "@/assets/images/paytop.png";
import Western from "@/assets/images/Western Union.jpeg";
import Worldremit from "@/assets/images/Worldremit.jpeg";

const images = ref([
  { name: MoMo },
  { name: MoneyGram },
  { name: MoneyTrans },
  { name: OM },
  { name: Ria },
  { name: Paytop },
  { name: Western },
  { name: Worldremit }
]);

const currentIndex = ref(0);

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Placeholder for locations and locations2 - you should replace with actual data
const locations = ref([]);
const locations2 = ref([]);
</script>