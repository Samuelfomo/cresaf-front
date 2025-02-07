<!-- Footer.vue -->
<template>
  <footer class="bg-blue-950 pt-10 md:pt-20 flex">
    <div class="container mx-auto px-4 w-full">
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
          transition-colors duration-300 hover:border-green-600 hover:text-green-600"
        @click="router.push('/login')"
        >
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
        <div class="lg:flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="w-full lg:flex flex-wrap lg:justify-center justify-start gap-x-4 text-sm text-gray-400 lg:space-x-0 space-x-4 lg:leading-none leading-7">
            <span>Copyright © 2023 - 2025</span>
            <span class="hover:text-yellow-500 transition-colors cursor-pointer font-bold" @click="router.push('/')">
              Crédit Solidaire D'Afrique S.A
            </span>
            <span class="hidden md:inline">|</span>
            <span>Designed by</span>
            <span class="hover:text-yellow-500 transition-colors cursor-pointer font-bold" @click="openImediatis">
              IMEDIATIS
            </span>
          </div>

          <div class="flex w-full lg:justify-center justify-start">
            <a href="#" class="rounded-full h-10 w-10 flex items-center justify-center
              border border-white bg-yellow-500"
               @click="openCresafFaceBook"
            >
              <img :src="facebookIcon" alt="Facebook" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="top-full right-0 mt-auto h-full flex justify-center md:justify-end z-50 pointer-events-none lg:pb-5 lg:pr-0 pr-2">
      <a href="#" class="rounded-xl h-12 w-12 flex items-center justify-center border-2 border-purple-600 bg-white
              transition-transform hover:scale-110 pointer-events-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14f05d"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 3l0 16" />
          <path d="M16 7l-4 -4" />
          <path d="M8 7l4 -4" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup>
import {useRouter} from "vue-router";
import FaceBook from "@/assets/images/svg/facebook.svg"
import Phone from "@/assets/images/svg/phone.svg"

const router = useRouter()

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
    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life Insurance',
    phone: '+237 233 42 17 88'
  },
  {
    title: 'Agence de Yaoundé',
    address: 'Descente Mokolo Elobi, batiment Dubaï Market',
    phone: '+237 233 42 17 88'
  },
  {
    title: 'Agence de Bafoussam',
    address: 'Montée sens interdit, marché A, avant la direction régionale de la Total',
    phone: '+237 233 42 17 88'
  }
]

const openImediatis = () => {
  window.open("https://imediatis.cm/", "_blank");
}

const openCresafFaceBook = () =>{
  window.open("https://www.facebook.com/cresaf.sa", "blank");
}

</script>