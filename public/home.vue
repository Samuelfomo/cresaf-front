<!-- Home.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow bg-blue-950 px-8 pt-32 pb-12">
     <div class="min-h-screen flex flex-wrap sm:flex-nowrap">
       <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-center justify-center lg:items-start items-center">
         <h1 class="text-6xl font-accent text-white pb-6">
           Découvrez la nouvelle génération de
           <span class="text-green-600 font-bold">{{service.value}}</span>
         </h1>
         <h5 class="text-white font-accent text-xl max-w-lg py-6">
           Favoriser le développement économique par l'épargne, l'octroi de crédits et la facilitation des services financiers
         </h5>
         <button type="button" @click="openWhatsApp" class="text-white text-xl font-semibold border border-white rounded-lg p-2
         flex justify-between items-center w-full max-w-[150px] capitalize hover:text-green-600 hover:border-green-600 lg:m-0 mb-10">
           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                 stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                 class="transition-colors duration-200">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
             <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
           </svg>
           parlons-en
         </button>
       </div>
       <div class="min-h-44 w-full px-6">
         <Header1 />
       </div>
     </div>
    </main>
    <div class="bg-white px-8 flex flex-col min-h-screen py-20 z-40">
      <h2 class="text-gray-400 font-light text-lg uppercase text-center pb-10">nos services de transfert d'argent</h2>
<!--      <div class="relative w-full overflow-hidden hidden">-->
<!--        <div class="flex transition-transform duration-300 space-x-5 mb-20"-->
<!--             :style="`transform: translateX(-${currentIndex * 100}%)`">-->
<!--          <div-->
<!--              v-for="(image, index) in images"-->
<!--              :key="index"-->
<!--              class="flex-shrink-0 w-full max-w-xs max-h-20 flex justify-center items-center"-->
<!--          >-->
<!--            <img :src="image.name" alt="Service logo" class="max-w-full max-h-full rounded-lg border">-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Slider indicators &ndash;&gt;-->
<!--        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">-->
<!--          <button-->
<!--              v-for="(image, index) in images"-->
<!--              :key="index"-->
<!--              class="w-3 h-3 rounded-full transition-colors duration-300"-->
<!--              :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'"-->
<!--              @click="goToSlide(index)"-->
<!--              :aria-label="`Aller à la diapositive ${index + 1}`"-->
<!--          ></button>-->
<!--        </div>-->
<!--      </div>-->

      <Image2 />

      <div class="w-full h-full flex flex-col justify-end items-center mt-auto lg:pt-32 pt-10 border-t lg:border-none">
        <h1 class="text-3xl font-semibold text-center text-black">Un guichet unique pour
          <span class="text-green-600 font-semibold">vos finances </span>
        </h1>
        <p class="w-full lg:px-20 text-center max-w-6xl text-lg py-10">
          Avec le CRESAF, vous bénéficiez d'un compte courant gratuit, d'une carte bancaire personnalisable,
          d'un livret d'épargne rémunéré, d'un crédit à la consommation et bien plus encore !
        </p>
      </div>

      <div class="flex w-full h-full py-5 lg:px-10 justify-between flex-wrap gap-2 lg:gap-0">
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
      <div class="flex lg:justify-center justify-between items-center w-full flex-wrap my-5">
        <div class="flex p-2 items-center gap-2" v-for="(location2, index) in locations2" :key="index">
          <div class="rounded-full h-4 w-4 flex justify-center items-center bg-green-500">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
          <h3 class="text-lg text-black">{{location2.titre}}</h3>
        </div>
      </div>
    </div>
    <div class="bg-blue-950  lg:px-8 flex flex-col h-full py-12 items-center">
      <h1 class="text-white lg:text-4xl text-3xl font-bold text-center">Why do over 5M members love?</h1>
        <p class="text-gray-300 text-lg p-5 w-full text-center max-w-4xl">
          Enim sed parturient sem enim nunc sit erat velit eget hac nulla nullam et id praesent nisi ornare risus risus consequat nunc nisl pellentesque diam neque.
        </p>
      <div class="flex w-full justify-between flex-wrap lg:mt-5 lg:px-8">
        <div class="flex flex-col p-2 max-w-sm"  v-for="(location3, index) in locations3" :key="index">
          <h3 class="text-2xl font-bold text-white text-center lg:text-start">{{ location3.titre }}</h3>
          <p class="text-gray-300 text-lg text-center lg:text-start">{{location3.description}}</p>
        </div>
      </div>
    </div>
    <div class="min-h-full flex justify-between items-center w-full flex-wrap lg:px-8 px-1 bg-blue-950 pb-2">
      <table class="w-full border-t border-red-500">
        <thead>
        <tr class="flex w-full flex-wrap justify-between lg:flex-nowrap lg:gap-0 gap-8 lg:pt-0 py-10">
          <th class="lg:border-r justify-start flex lg:w-full w-36 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1 w-full">
              <h1 class="text-4xl font-bold text-white">5M+</h1>
              <p class="text-lg text-gray-400 font-roboto">Members</p>
            </div>
          </th>
          <th class="lg:border-r justify-start flex lg:w-full w-44 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">95%</h1>
              <p class="text-lg text-gray-400 font-roboto">Customer satisfaction</p>
            </div>
          </th>
          <th class="lg:border-r justify-start flex lg:w-full w-40 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">73%</h1>
              <p class="text-lg text-gray-400 font-roboto">Over year growth</p>
            </div>
          </th>
          <th class="justify-start flex lg:w-full w-40 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">250B</h1>
              <p class="text-lg text-gray-400 font-roboto">Money managed</p>
            </div>
          </th>
        </tr>
        </thead>
      </table>

      <div class="lg:px-8 flex flex-col h-full py-12 items-center w-full">
        <h1 class="text-white lg:text-4xl text-3xl text-center font-bold">Products designed for all sizes businesses.</h1>
        <p class="text-gray-400 text-lg p-5 w-full text-center max-w-4xl">
          Enim sed parturient sem enim nunc sit erat velit eget hac nulla nullam et id praesent nisi ornare risus risus consequat
          nunc nisl pellentesque diam neque.
        </p>

        <div class="flex w-full h-full py-5 justify-start flex-wrap px-5 lg:px-20 gap-2">
          <div v-for="(location4, index) in locations4" :key="index" class="flex justify-between items-start h-full min-h-44 w-full max-w-lg border rounded-lg lg:p-8 p-5 bg-blue-50">
            <div class="border-white flex justify-center min-h-10 min-w-16 items-center">
              <img :src="location4.icon" alt="img" class="h-16 w-16 rounded-full">
            </div>
            <p class="px-1 text-lg font-semibold">
              {{location4.description}}
            </p>
          </div>
        </div>
      </div>

      <div class="lg:px-8 flex flex-col h-full py-12 items-center">
        <h1 class="text-white lg:text-4xl text-3xl font-bold text-center">How to get a Block Card in a simple 3 steps</h1>
        <p class="text-gray-300 text-lg p-5 w-full text-center max-w-4xl">
          Designed to work better together erat velit eget hac nulla nullam et id praesent nisi ornare risus risus consequat nunc nisl pellentesque diam neque.
        </p>

        <div class="flex items-center w-full flex-row my-5 justify-between">
          <div class="flex p-2 justify-between items-center w-full max-w-xs gap-2" v-for="(location5, index) in locations5" :key="index">
            <div class="rounded-full h-12 w-12 flex justify-center items-center bg-red-500 border-4 border-pink-300">
             <h1 class="text-white font-bold text-xl">
               {{index+1}}
             </h1>
            </div>
            <img :src="location5.titre" class="flex-" alt="any">
          </div>
          <div class="rounded-full h-8 w-8 flex justify-center items-center bg-green-500">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
        </div>
        <div class="flex w-full justify-between flex-wrap lg:mt-5 lg:px-8">
          <div class="flex flex-col p-2 max-w-sm"  v-for="(location6, index) in locations6" :key="index">
            <h3 class="text-2xl font-bold text-white text-center lg:text-start">{{ location6.titre }}</h3>
            <p class="text-gray-500 text-lg text-center lg:text-start">{{location6.description}}</p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center p-2 mb-20">
        <button type="button" @click="openWhatsApp" class="text-purple-600 text-lg font-bold border border-purple-600 rounded-lg p-2
         flex justify-center items-center capitalize hover:text-white hover:border-none hover:bg-purple-600">
          Open an Account
        </button>
      </div>

    </div>

    <div class="bg-white px-4 flex flex-col h-full">
      <div class="flex flex-col h-full py-12 items-center">
        <h1 class="text-gray-900 lg:text-4xl text-3xl font-bold text-center">Customer success stories</h1>
        <p class="text-lg p-5 text-gray-500 w-full text-center max-w-4xl">
          Create convincing customer success stories to boost sales, build trust with prospects and increase customer loyalty.
        </p>
        <div class="flex w-full h-full py-5 justify-between flex-wrap gap-2">
          <div v-for="(location7, index) in locations7" :key="index" class="flex flex-col justify-between items-start h-full min-h-44 w-full
           max-w-2xl border rounded-lg lg:p-8 p-5 shadow space-y-10">
            <p class="lg:text-xl font-bold text-black">
              {{location7.titre}}
            </p>
            <div class="flex w-full justify-between gap-2 lg:gap-0">
              <div class="border-white flex justify-center min-h-10 lg:min-w-16 min-w-10 items-center">
                <img :src="location7.icon" alt="img" class="h-10 w-10 rounded-full">
              </div>
              <p class="lg:px-1 lg:text-lg text-sm font-semibold">
                {{location7.description}}
              </p>
              <div class="border-white flex justify-center min-h-10 lg:min-w-16 min-w-10 items-center">
                <img :src="location7.icon" alt="img" class="h-10 w-10 rounded-full">
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import {ref} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Header1 from "@public/components/image.vue";

import Icon from"@/assets/images/logo-cref.jpg"
import Arrow from"@/assets/images/svg/arow.svg"
import Image2 from "@public/components/image2.vue";

const icon =Icon
const arrow = Arrow

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
const locations2 = ref([
  {
    titre:'24/7 account monitoring'
  },
  {
    titre:'Protection & peace of mind'
  },
  {
    titre:'Anytime, anywhere support'
  },
  {
    titre:'Serious security'
  },
])
const locations3 = ref([
  {
    titre: 'Flexible payments',
    description:'you are able to run your business smoothly; handle your daily expenses and secure your cash flow.'
  },
  {
    titre: 'Smart payments',
    description:'Nullam sodales, libero ac dictum convallis, ipsum diam cursus stibulum lacinia ultricies eleifend..'
  },
  {
    titre: 'Easy administration',
    description:'In a odio sit amet nisi tincidunt congue. Mauris cursus magna a vestibulum rutrum. Vivamus sit amet luctus leo.'
  },
])
const locations4 = ref([
  {
    icon:icon,
    description:'Simplifiez-vous la vie avec nos services personnalisés et notre soutien pour tous vos projets',

  },
  {
    icon:icon,
    description:'Choisissez une carte bancaire qui vous offre plus de liberté, de sécurité et de fonctionnalités',
  },
  {
    icon:icon,
    description:'Profiter d\'un suivi et d\'un accompagnement de qualité, de la définition de votre stratégie à sa mise en œuvre',
  },
])
const locations5 = ref([
  {titre:arrow,},
  {titre:arrow,},
  {titre:arrow,}
])
const locations6 = ref([
  {
    titre: 'Sign up for a free account',
    description:'Apply online on block website and fill the form by telling us your name, address, date of birth.'
  },
  {
    titre: 'Fill in your details',
    description:'Get started on block or log into the mobile app. Bank account to transfer money to your debit card.'
  },
  {
    titre: 'Start converting!',
    description:'Set up direct deposit or connect your current bank account to transfer money to your debit card.'
  },
])
const locations7 = ref([
  {
    titre:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt, lectus non finibus porta, ipsum lacus tempus quam, a iaculis metus ipsum sed elit."',
    icon:icon,
    description:'Simplifiez-vous la vie avec nos services personnalisés et notre soutien pour tous vos projets',

  },
  {
    titre:'"Cum molestias sed quam eos repudiandae repellat! Sunt ex atque tempore eligendi magni vel obcaecati facere. Cupiditate repellat deleniti eos eum atque possimus ducimus quis."',
    icon:icon,
    description:'Choisissez une carte bancaire qui vous offre plus de liberté, de sécurité et de fonctionnalités',
  },
])

const openWhatsApp = () =>{
  window.open("https://api.whatsapp.com/send/?phone=23799623303&text&type=phone_number&app_absent=0", "_blank");
}

const currentIndex = ref(0);
const goToSlide = (index) => {
  currentIndex.value = index;
};

</script>