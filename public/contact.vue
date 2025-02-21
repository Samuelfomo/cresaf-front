<script setup>
import {ref} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Image from "@public/components/contact-image.vue";
import FaceBook from "@/assets/images/svg/social/facebook.svg"
import Youtube from "@/assets/images/svg/social/youtube.svg"
import Twitter from "@/assets/images/svg/social/twitter.svg"
import Linkedin from "@/assets/images/svg/social/linkedin.svg"

const logos = ref([
  {
    name :FaceBook,
    title: "logo Facebook",
    link: "https://www.facebook.com/cresaf.sa"
  },
  {
    name :Youtube,
    title: "logo Youtube",
    link: "https://www.facebook.com/cresaf.sa"
  },
  {
    name :Twitter,
    title: "logo Twitter",
    link: "https://www.facebook.com/cresaf.sa"
  },
  {
    name :Linkedin,
    title: "logo Linkedin",
    link: "https://www.facebook.com/cresaf.sa"
  },
])

const locations = ref([
  {
    city: "Douala",
    address: "Bonakouamouang, Akwa, Face Prudential Beneficial Life Insurance",
    phone: "+237 233 42 17 88"
  },
  {
    city: "Yaounde",
    address: "Descente Mokolo Elobi, batiment Dubaï Market",
    phone: "+237 233 42 17 88"
  },
  {
    city: "Bafoussam",
    address: "Montée sens interdit, marché A, avant la direction régionale de la Total",
    phone: "+237 233 42 17 88"
  }
]);

const openWhatsApp = (phone) =>{
  if (phone) {
    const phoneExemple = String(phone).replace(/\s+/g, '').replace('+', '')
    const url = `https://api.whatsapp.com/send/?phone=${phoneExemple}&image&type=phone_number&app_absent=0`;
    window.open(url, "_blank");
  } else {
    alert("Numéro de téléphone non disponible !");
  }
}
const openSocial = (link) =>{
  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Réseau social non disponible !");
  }
}

</script>

<template>
  <div class="min-h-screen bg-blue-950">
    <Header />
    <main class="flex flex-col lg:pt-24 pt-32">
      <div class="min-h-screen flex flex-wrap sm:flex-nowrap lg:pt-8 lg:pb-10">
      <div class="w-full flex flex-col
       lg:px-10 px-5 lg:text-start text-center justify-start lg:items-start items-center">
        <h1 class="text-4xl font-accent text-white lg:pb-6">Contactez nous</h1>
        <h5 class="text-gray-300 font-accent text-lg max-w-xl py-6 text-start">
          Vous souhaitez en savoir plus sur le CRESAF, nos réussites et les avantages d’une collaboration avec nous ?
          Envie de devenir partenaire ? Contactez-nous dès aujourd’hui !
        </h5>

        <div class="space-y-2 lg:pb-4">
          <h2 class="text-2xl font-semibold text-white">
            Laissez-nous <span class="text-green-500">un message</span>
          </h2>
          <div class="h-1 w-20 bg-green-500 rounded"></div>
        </div>
        <div class="flex gap-2 lg:py-4 py-10">
          <div class="flex justify-center items-center rounded-full bg-white h-8 w-8 cursor-pointer"
               v-for="(logo , index) in logos" :key="index"
                @click="openSocial(logo.link)"
          >
            <img :src="logo.name" :alt="logo.title" class=" object-cover">
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 cursor-pointer mt-auto">
        <div
            v-for="location in locations"
            :key="location.city"
            class="bg-blue-900/50 py-6 pl-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/70 transition-colors"
            @click="openWhatsApp(location.phone)"
        >
          <h3 class="text-green-500 font-bold text-xl mb-4">
            {{ location.city }}
          </h3>
          <div class="space-y-4 text-gray-200 font-accent">
            <div class="flex gap-1">
              <div>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                         stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-green-500">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              </div>

              <p class="text-sm text-left">{{ location.address }}</p>
            </div>
            <div class="flex items-center gap-1">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                    stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="text-green-500">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <p class="text-sm">{{ location.phone }}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
        <div class="w-full max-w-xl lg:py-0 py-10">
          <Image />
        </div>
      </div>
      <div class="w-full min-h-[30rem] bg-blue-50"></div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>