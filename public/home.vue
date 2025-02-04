<!-- Home.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow bg-blue-950 px-8 py-20">
     <div class="min-h-screen flex flex-wrap sm:flex-nowrap">
       <div v-for="(service, index) in services" :key="index" class="min-h-44 w-full flex flex-col justify-start px-10 pt-20">
         <h1 class="text-6xl font-bold text-white">
           Découvrez la nouvelle génération de
           <span class="text-green-600 font-bold">{{service.value}}</span> </h1>
         <h5 class="text-white font-medium text-xl max-w-md py-10">
           Favoriser le développement économique par l'épargne, l'octroi de crédits et la facilitation des services financiers
         </h5>
         <button type="button" @click="openWhatsApp" class="text-white text-xl font-semibold border border-white rounded-lg p-2
         flex justify-between items-center max-w-[150px] capitalize hover:text-green-600 hover:border-green-600">
           <img :src="whatsApp" alt="whatsApp Icon"> parlons-en
         </button>
       </div>
       <div class="min-h-44 w-full p-6">
<!--         <video :src="video" class="w-full h-full rounded-lg bg-blue-50" controls >-->
<!--         </video>-->
         <img :src="woman" alt="Woman image" class="w-full h-full rounded-lg">
       </div>
     </div>
    </main>
    <main class="bg-white p-8 flex flex-col min-h-screen py-20">
      <h2 class="text-gray-400 font-light text-lg uppercase text-center pb-10">nos services de transfert d'argent</h2>
      <div class="flex w-full gap-5 pb-10 px-10">
        <div class="flex justify-center items-center w-screen max-w-sm max-h-20 border" v-for="(image, index) in images" :key="index">
        <img :src="image.name" alt="all image" class="w-full h-full">
        </div>
      </div>
      <div class="flex w-full justify-center gap-2">
        <div class="rounded-full h-2 w-2 bg-gray-400"></div>
        <div class="rounded-full h-2 w-2 bg-gray-400"></div>
        <div class="rounded-full h-2 w-2 bg-blue-700"></div>
        <div class="rounded-full h-2 w-2 bg-gray-400"></div>
        <div class="rounded-full h-2 w-2 bg-gray-400"></div>
      </div>

      <div class="w-full flex flex-col justify-center items-center mt-auto">
        <h1 class="text-4xl font-semibold">Un guichet unique pour
          <span class="text-green-600 font-semibold">vos finances </span>
        </h1>
        <p class="w-full px-20 text-center max-w-6xl text-lg py-10">
          Avec le CRESAF, vous bénéficiez d'un compte courant gratuit, d'une carte bancaire personnalisable,
          d'un livret d'épargne rémunéré, d'un crédit à la consommation et bien plus encore !
        </p>
      </div>

      <div class="flex w-full h-full py-5 px-10 justify-between">
        <div v-for="(location, index) in locations" :key="index" class="h-full w-full min-h-80 max-w-sm border rounded-lg p-8 bg-blue-50  hover:bg-purple-600 hover:text-white">
          <div class="rounded-full h-24 w-24 border-2 border-white flex justify-center items-center mb-7">
            <img :src="location.icon" alt="img" class="h-16 w-16">
          </div>
            <p class="py-1 text-xl font-semibold">
             {{location.titre}}
            </p>
            <h3 class="text-md py-2">{{location.description}}</h3>
          <div class="flex text-lg font-mono justify-start items-center pt-5">
            {{location.suite}}
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
            </svg>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import {ref} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";

import WhatsApp from "@/assets/images/svg/whatsApp.svg"
// import Video from "@/assets/video/video.mp4"
import Woman from "@/assets/images/woman.png"
import MoMo from "@/assets/images/momo.jpeg"
import MoneyGram from "@/assets/images/MoneyGram.jpeg"
import MoneyTrans from "@/assets/images/Moneytrans.jpeg"
import OM from "@/assets/images/om.jpeg"
import Ria from "@/assets/images/Ria.jpeg"
import Paytop from "@/assets/images/paytop.png"
import Western from "@/assets/images/Western Union.jpeg"
import Worldremit from "@/assets/images/Worldremit.jpeg"
import Icon from"@/assets/images/logo-cref.jpg"

const whatsApp = WhatsApp
// const video = Video
const momo = MoMo
const moneygram = MoneyGram
const moneytrans = MoneyTrans
const om = OM
const ria = Ria
const paytop = Paytop
const western = Western
const worldremit = Worldremit
const woman = Woman
const icon =Icon

const images = ref([
  {
    name: momo
  },
  {
    name: moneygram
  },
  {
    name: moneytrans
  },
  {
    name: om
  },
  {
    name: ria
  },
  {
    name: paytop
  },
  {
    name: western
  },
  {
    name: worldremit
  },
])

const services =ref( [
  {
    value: 'services bancaires'
  }
])

const locations = ref([
  {
    icon:icon,
    titre:'Ouverture d\'un compte',
    description:'Simplifiez-vous la vie avec nos services personnalisés et notre soutien pour tous vos projets',
    suite:'Voir conditions'
  },
  {
    icon:icon,
    titre:'Cartes VISA',
    description:'Choisissez une carte bancaire qui vous offre plus de liberté, de sécurité et de fonctionnalités',
    suite:'Demander une carte'
  },
  {
    icon:icon,
    titre:'Investissement',
    description:'Profiter d\'un suivi et d\'un accompagnement de qualité, de la définition de votre stratégie à sa mise en œuvre',
    suite:'Start Investments'
  },
])

const openWhatsApp = () =>{
  window.open("https://api.whatsapp.com/send/?phone=23799623303&text&type=phone_number&app_absent=0", "_blank");
}

</script>