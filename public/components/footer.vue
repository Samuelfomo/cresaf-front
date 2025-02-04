<!-- Footer.vue -->
<template>
  <footer class="bg-blue-950 pt-10 md:pt-20">
    <div class="container mx-auto px-4">
      <!-- Call to Action Section -->
      <div class="flex flex-col items-center text-center mb-40">
        <h2 class="text-white font-bold text-2xl md:text-3xl mb-4">
          Experience the next-gen banking
        </h2>
        <p class="text-gray-400 font-roboto text-base md:text-lg max-w-4xl mb-6">
          Enim sed parturient sem enim nunc sit erat velit eget hac nulla nullam et id praesent nisi ornare
          risus risus consequat nunc nisl pellentesque diam neque.
        </p>
        <button type="button"
                class="text-white border border-white rounded-lg px-6 py-3 font-semibold
          transition-colors duration-300 hover:border-green-600 hover:text-green-600">
          Open your account today
        </button>
      </div>

      <!-- Locations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
        <div v-for="(location, index) in locations" :key="index" class="text-white">
          <h3 class="font-bold text-lg mb-2">{{ location.title }}</h3>
          <p class="text-gray-300 italic font-semibold text-sm mb-2">
            {{ location.address }}
          </p>
          <div class="flex items-center space-x-2 italic font-bold">
            <img :src="phone" alt="phone icon" class="w-4 h-4" />
            <span>{{ location.phone }}</span>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-white pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex flex-wrap justify-center md:justify-start gap-x-4 text-sm text-gray-400">
            <span>Copyright © 2023 - 2025</span>
            <span class="hover:text-yellow-500 transition-colors cursor-pointer">
              Crédit Solidaire D'Afrique S.A
            </span>
            <span class="hidden md:inline">|</span>
            <span>Designed by</span>
            <span class="hover:text-yellow-500 transition-colors cursor-pointer">
              IMEDIATIS
            </span>
          </div>

          <div class="flex justify-center md:justify-end">
            <a href="#" class="rounded-full h-10 w-10 flex items-center justify-center
              border border-white bg-yellow-500 transition-transform hover:scale-110">
              <img :src="facebookIcon" alt="Facebook" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FaceBook from "@/assets/images/svg/facebook.svg"
import Phone from "@/assets/images/svg/phone.svg"

const facebookIcon = FaceBook
const phone = Phone

const locations = [
  {
    title: 'Siège social',
    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life',
    phone: '+237 233 42 17 88'
  },
  {
    title: 'Agence de Douala',
    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life',
    phone: '+237 233 42 17 88'
  },
  {
    title: 'Agence de Yaoundé',
    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life',
    phone: '+237 233 42 17 88'
  },
  {
    title: 'Agence de Bafoussam',
    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life',
    phone: '+237 233 42 17 88'
  }
]
</script>