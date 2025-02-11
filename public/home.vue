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
       <div class="min-h-44 w-full lg:px-6">
         <Image />
       </div>
     </div>
    </main>
    <div class="bg-white px-8 flex flex-col min-h-screen py-20 z-40">
      <h2 class="text-gray-400 font-light text-lg uppercase text-center pb-10">nos services de transfert d'argent</h2>

      <Image2 />

      <div class="w-full h-full flex flex-col justify-end items-center mt-auto lg:pt-16 pt-10 border-t lg:border-none">
        <h1 class="text-3xl font-semibold text-center text-black">Un guichet unique pour
          <span class="text-green-600 font-semibold">vos finances </span>
        </h1>
        <p class="w-full lg:px-20 text-center max-w-6xl text-lg py-10">
          Avec le CRESAF, vous bénéficiez d'un compte courant gratuit, d'une carte bancaire personnalisable,
          d'un livret d'épargne rémunéré, d'un crédit à la consommation et bien plus encore !
        </p>
      </div>

      <div class="flex w-full h-full py-5 justify-center flex-wrap gap-5">
        <div v-for="(location, index) in locations" :key="index" class="group h-full w-full min-h-80 max-w-sm border rounded-lg p-8 bg-blue-50  hover:bg-purple-600 group-hover:text-white hover:text-white">
          <div class="flex justify-start items-center mb-7">
            <img :src="location.icon" alt="img" class="h-20 w-20 rounded-full border-2 border-white">
          </div>
            <p class="py-1 text-xl font-semibold">
             {{location.titre}}
            </p>
            <h3 class="font-sans py-2">{{location.description}}</h3>
          <div class="flex text-lg font-mono justify-start items-center pt-5 text-purple-600 group-hover:text-white">
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
      <h1 class="text-white lg:text-4xl text-3xl font-bold text-center">Pourquoi plus de 5 millions de membres aiment-ils ?</h1>
        <p class="text-gray-300 text-lg p-5 w-full text-center max-w-4xl">
          Chez CRESAF, plus de 5 millions de membres nous font confiance grâce à nos solutions financières adaptées,
          notre accès facilité au crédit avec des conditions souples, des taux compétitifs et un accompagnement personnalisé.
        </p>
      <div class="flex w-full justify-between flex-wrap lg:mt-5 lg:px-8">
        <div class="flex flex-col p-2 max-w-[420px]"  v-for="(location3, index) in locations3" :key="index">
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
              <p class="text-lg text-gray-400 font-roboto">Membres</p>
            </div>
          </th>
          <th class="lg:border-r justify-start flex lg:w-full w-44 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">95%</h1>
              <p class="text-lg text-gray-400 font-roboto">Satisfaction des clients</p>
            </div>
          </th>
          <th class="lg:border-r justify-start flex lg:w-full w-40 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">73%</h1>
              <p class="text-lg text-gray-400 font-roboto">Croissance annuelle</p>
            </div>
          </th>
          <th class="justify-start flex lg:w-full w-40 lg:p-8 border-red-500">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">250B</h1>
              <p class="text-lg text-gray-400 font-roboto">Gestion des fonds</p>
            </div>
          </th>
        </tr>
        </thead>
      </table>

      <div class="lg:px-8 flex flex-col h-full py-12 items-center w-full">
        <h1 class="text-white lg:text-4xl text-3xl text-center font-bold">Produits conçus pour les entreprises de toutes tailles.</h1>
        <p class="text-gray-400 text-lg p-5 w-full text-center max-w-4xl">
          Que vous soyez une petite startup, une PME ou une grande entreprise, nous offrons des solutions financières adaptées à vos besoins :
        </p>

        <div class="flex w-full h-full py-5 justify-center flex-wrap px-5 lg:px-20 gap-2">
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
        <h1 class="text-white lg:text-4xl text-3xl font-bold text-center">Comment obtenir une carte de bloc en 3 étapes simples</h1>
        <p class="text-gray-300 text-lg p-5 w-full text-center max-w-4xl">
          Designed to work better together erat velit eget hac nulla nullam et id praesent nisi ornare risus risus consequat nunc nisl pellentesque diam neque.
        </p>

        <div class="flex items-center w-full flex-row my-5 justify-between">
          <div class="flex p-2 justify-between items-center w-full max-w-xs gap-2" v-for="(location6, index) in locations5" :key="index">
            <div class="rounded-full h-12 w-12 flex justify-center items-center bg-red-500 border-4 border-pink-300">
             <h1 class="text-white font-bold text-xl">
               {{index+1}}
             </h1>
            </div>
            <img :src="location6.icon" class="flex-" alt="any">
          </div>
          <div class="rounded-full h-8 w-8 flex justify-center items-center bg-green-500">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
        </div>
        <div class="flex w-full justify-between flex-wrap lg:mt-5 lg:px-8">
          <div class="flex flex-col p-2 max-w-sm"  v-for="(location6, index) in locations5" :key="index">
            <h3 class="text-2xl font-bold text-white text-center lg:text-start">{{ location6.titre }}</h3>
            <p class="text-gray-500 text-lg text-center lg:text-start">{{location6.description}}</p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center p-2 mb-20">
        <button type="button" @click="openWhatsApp" class="text-purple-600 text-lg font-semibold border border-purple-600 rounded-lg p-2
         flex justify-center items-center capitalize hover:text-white hover:border-none hover:bg-purple-600">
          Ouvrir un compte
        </button>
      </div>

    </div>

    <div class="bg-white px-4 flex flex-col h-full">
      <div class="flex flex-col h-full py-12 items-center">
        <h1 class="text-gray-900 lg:text-4xl text-3xl font-bold text-center">Témoignages de clients</h1>
        <p class="text-lg p-5 text-gray-500 w-full text-center max-w-4xl">
          Découvrez comment nos services ont transformé le quotidien de nos clients.
          Leur satisfaction et leur réussite sont notre plus grande fierté.
        </p>

          <div class="flex w-full h-full py-5 justify-center flex-wrap gap-2">
            <div v-for="(location6, index) in locations6" :key="index" class="flex flex-col justify-between items-start h-full min-h-44 w-full
             max-w-2xl border rounded-lg lg:p-8 p-5 shadow space-y-10">
              <p class="lg:text-xl font-bold text-black">
                {{location6.titre}}
              </p>
              <div class="flex w-full justify-between">
                <div class="flex items-center justify-between text-sm font-semibold gap-2">
                <div class="flex justify-center items-center">
                  <img :src="location6.icon" alt="img" class="h-16 w-16 rounded-full border">
                </div>
                  <div class="flex flex-col">
                    <p class="text-xl font-semibold">{{location6.name}}</p>
                    <p class="pl-5 text-gray-500">{{location6.profession}}</p>
                  </div>
                </div>

                <div class="flex justify-center items-center">
                  <img :src="location6.logo" alt="img" class="h-16 w-16">
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
import Image from "@public/components/image.vue";

import Icon from"@/assets/images/logo-cref.jpg"
import Woman from"@/assets/images/w3.png"
import Logo from"@/assets/images/Entp.png"
import Arrow from"@/assets/images/svg/arow.svg"
import Image2 from "@public/components/image2.vue";


const icon =Icon
const woman =Woman
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
    titre: 'Paiements Flexibles',
    description:'Vous êtes en mesure de gérer votre entreprise en douceur, de faire face à vos dépenses quotidiennes et d\'assurer votre trésorerie.'
  },
  {
    titre: 'Paiements Intelligents',
    description:'Profitez de solutions de paiement adaptées à vos revenus, avec des options de remboursement automatisé, mobile et sécurisé, pour une gestion simplifiée et efficace de vos finances.'
  },
  {
    titre: 'Administration Aisée',
    description:'Suivez vos transactions en toute transparence grâce à une gestion simplifiée de votre compte, avec un accès en ligne et un accompagnement personnalisé pour optimiser vos finances.'
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
  {
    icon:arrow,
    titre: 'Créer un compte gratuit',
    description:'Postulez en ligne sur le site web du bloc et remplissez le formulaire en nous indiquant votre nom, votre adresse et votre date de naissance.'
  },
  {
    icon:arrow,
    titre: 'Renseignés vos coordonnées vos coordonnées',
    description:'Commencez en bloc ou connectez-vous à l\'application mobile. Compte bancaire pour transférer de l\'argent sur votre carte de débit.'
  },
  {
    icon:arrow,
    titre: 'Démarrer la conversion!',
    description:'Mettez en place un dépôt direct ou connectez votre compte bancaire actuel pour transférer de l\'argent sur votre carte de débit.'
  },
])
const locations6 = ref([
  {
    titre:'“Grâce aux solutions de financement de CRESAF, j’ai pu agrandir mon commerce sans stress. Le processus de prêt était simple et rapide, et aujourd’hui, mon activité se développe mieux que jamais !"',
    icon:woman,
    name:'⭐Marie T.',
    profession:"Commerçante",
    logo:Logo

  },
  {
    titre:'"CRESAF m’a accompagné dans le lancement de mon entreprise avec un financement adapté et des conseils personnalisés. Leur flexibilité et leur soutien ont été essentiels à ma réussite."',
    icon:woman,
    name:'⭐Alain D.',
    profession:"Entrepreneur",
    logo:Logo
  },
  // {
  //   titre:'"Avec CRESAF, j’ai pu obtenir un prêt sans complications pour moderniser mon restaurant. Leurs paiements flexibles m’ont permis de gérer mon remboursement sans pression."',
  //   icon:woman,
  //   name:'⭐Fatima K.',
  //   profession:"Restauratrice",
  //   logo:Logo
  // },
  // {
  //   titre:'"Les services de microfinance de CRESAF m’ont aidé à acheter du matériel agricole essentiel. Aujourd’hui, ma production a doublé, et mes revenus sont plus stables."',
  //   icon:woman,
  //   name:'⭐Jean-Marc B.',
  //   profession:"Agriculteur",
  //   logo:Logo
  // },
  // {
  //   titre:'"J’ai enfin trouvé une institution qui comprend les besoins des petites entreprises. CRESAF m’a soutenue dès le début avec des conseils et un financement adapté à mon projet."',
  //   icon:woman,
  //   name:'⭐Sandra M.',
  //   profession:"Jeune entrepreneure",
  //   logo:Logo
  // },
])

const openWhatsApp = () =>{
  window.open("https://api.whatsapp.com/send/?phone=23799623303&text&type=phone_number&app_absent=0", "_blank");
}


</script>

