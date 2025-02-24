<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";

import cash from "@/assets/images/account/caissier.webp"
import Cheque from "@/assets/images/account/cheque.webp"
import Epargne from "@/assets/images/account/epargne2.webp"
import Depot from "@/assets/images/account/depot.jpg"
import Money from "@/assets/images/account/money.webp"
import Argent from "@/assets/images/account/argent.png"
import Argent1 from "@/assets/images/account/argent1.png"
import Received from "@/assets/images/account/received.png"
import Interred from "@/assets/images/account/interrest.webp"
import Guichet from "@/assets/images/account/guichet.webp"
import Electronic from "@/assets/images/account/terminaux.png"
import Order from "@/assets/images/account/autre.png"
import Refund from "@/assets/images/account/refund.png"
import Micro from "@/assets/images/account/micro.png"
import Livret from "@/assets/images/account/epargne.webp"
import Courant from "@/assets/images/account/courant.webp"
import Islamique from "@/assets/images/account/account-islamique.png"
import Virement from "@/assets/images/account/account-transfer.png"
import Images from "@/assets/images/solution/cresafSolution.webp"

const products = ref([
  {
    id: 1,
    title: "Compte chèque",
    // title: "🏦 Compte chèque",
    subtitle: "Particulier, entreprise & salaire",
    subtitle2: "✅ Gérez vos finances au quotidien avec facilité et rapidité ",
    description: "Description du compte chèque...",
    image: Images
    // image: Image4
  },
  {
    id: 2,
    title: "Bon de caisse",
    subtitle: "Bon plan pour votre épargne",
    subtitle2: "💰 Investissez en toute sécurité avec un rendement garanti chez CRESAF !",
    description: "Description du Bon de caisse...",
    image: Images
    // image: Image
  },
  {
    id: 3,
    title: "Dépôt à terme",
    description: "Description du dépôt à terme...",
    subtitle: "Fructifier votre argent",
    subtitle2: "🤑 Faites fructifier votre argent avec des taux avantageux et sans risque !",
    // subtitle2: "💵 💸🤑 Faites fructifier votre argent avec des taux avantageux et sans risque !",
    image: Images
    // image: Image1
  },
  {
    id: 4,
    title: "Compte d'épargne",
    subtitle: "Livret & Association",
    subtitle2: "💳 Épargnez sereinement et faites grandir vos projets avec CRESAF !",
    description: "Description du compte d'épargne...",
    image: Images
    // image: Image2
  },
  {
    id: 5,
    title: "Collecte journalière",
    subtitle: "Vous suivre au quotidien",
    subtitle2: "📥 Sécurisez vos revenus quotidiens sans vous déplacer",
    description: "Description de la collecte journalière...",
    image: Images    
    // image: Image3
  },
  {
    id: 6,
    title: "Carte VISA",
    subtitle: "Vous ouvrir au monde",
    subtitle2: "🌍 Payez et retirez de l’argent partout, en toute simplicité !",
    description: "Description de la carte VISA...",
    image: Images
    // image: Compte
  },
  // {
  //   id: 7,
  //   // title: "Carte VISA",
  //   // subtitle: "Vous ouvrir au monde",
  //   // subtitle2: "🌍 Payez et retirez de l’argent partout, en toute simplicité !",
  //   // description: "Description de la carte VISA...",
  //   // image: Images
  //   // image: Compte
  // }
]);

const currentSlide = ref(0);
const autoPlayInterval = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % products.value.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? products.value.length - 1 : currentSlide.value - 1;
};

// Auto-play du slider
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
  }
};


const currentSection = ref(1);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(`section${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    currentSection.value = sectionId;
  }
};

// Démarrer l'auto-play au montage du composant
onMounted(() => {

  startAutoPlay();
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.id.replace('section', ''));
            if (!isNaN(sectionId)) {
              currentSection.value = sectionId;
            }
          }
        });
      },
      {
        threshold: 0.5,
        root: null,
        rootMargin: '0px'
      }
  );

  // Observer toutes les sections
  document.querySelectorAll('main[id^="section"]').forEach(section => {
    observer.observe(section);
  });
  // const observer = new IntersectionObserver(observerCallback, {
  //   threshold: 0.5
  // });
  //
  // document.querySelectorAll('section[id]').forEach(section => {
  //   observer.observe(section);
  // });
});

// Nettoyer l'intervalle lors du démontage
onUnmounted(() => {
  stopAutoPlay();
});

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <!-- Hero Section avec slider -->
    <section class="relative h-screen">
      <div class="relative w-full h-full overflow-hidden">
        <transition-group name="fade">
          <div v-for="(product, index) in products"
               :key="product.id"
               v-show="currentSlide === index"
               class="absolute inset-0 cursor-pointer">
            <img :src="product.image"
                 :alt="product.title"
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-blue-700 bg-opacity-30">
              <div class="container mx-auto px-6 h-full flex items-center">
                <div class="text-white max-w-lg">
                  <h1 class="text-5xl font-accent mb-4">{{ product.title }}</h1>
                  <p class="text-xl font-accent">{{ product.subtitle2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- Contrôles du slider -->
<!--        <div class="absolute inset-y-0 left-0 flex items-center">-->
<!--          <button @click="prevSlide"-->
<!--                  class="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-r p-2">-->
<!--            <span class="sr-only">Précédent</span>-->
<!--            &lt;!&ndash; Icône précédent &ndash;&gt;-->
<!--          </button>-->
<!--        </div>-->

<!--        <div class="absolute inset-y-0 right-0 flex items-center">-->
<!--          <button @click="nextSlide"-->
<!--                  class="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-l p-2">-->
<!--            <span class="sr-only">Suivant</span>-->
<!--            &lt;!&ndash; Icône suivant &ndash;&gt;-->
<!--          </button>-->
<!--        </div>-->

        <button
            @click="prevSlide"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
            aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-Linecap="round" stroke-linejoin="round" stroke-width="{2}" d="M15 19l-8-8 8-8"/>
          </svg>
        </button>
        <button
            @click="nextSlide"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
            aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} d="M9 5l8 8-8 8"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Sections des produits -->
    <main id="section1" class="bg-blue-950 lg:px-16 px-8 py-12">
      <h2 class="text-white font-accent text-4xl w-full justify-center text-center pb-5">
        Compte chèque
      </h2>
      <p class="text-gray-300 font-primary text-lg w-full justify-start pb-10">
        Notre service de compte chèque à destination des auto-entrepreneurs quel que soit le secteur d’activité,
        permettra d’effectuer les transactions bancaires courantes lies à leurs activités.
      </p>
      <div class="lg:flex w-full gap-2 justify-center lg:px-10">
        <div class="flex w-full max-w-xl h-full lg:min-h-[28rem]">
          <img :src="Cheque" alt="image" class="object-cover rounded-lg transition-transform duration-500 hover:scale-105">
        </div>
        <div class="w-full max-w-xl flex flex-col">
          <h2 class="text-xl w-full lg:text-center font-semibold text-gray-300 lg:p-0 pt-5">
            Ce compte offre plusieurs avantages pour faciliter la gestion financière des auto-entrepreneurs
          </h2>
          <div class="w-full flex justify-center lg:p-6 py-6 gap-2 lg:flex-nowrap flex-wrap">
            <div class="flex w-full lg:max-w-[12rem] flex-col bg-white border bg-opacity-10 justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-white">Crédit après 03 mois de fonctionnement</h2>
              <span class="text-lg font-bold text-white"> à la demande du client </span>
            </div>
            <div class="flex w-full lg:max-w-[12rem] flex-col bg-white border bg-opacity-10 justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-white">Mise en place d’un découvert</h2>
              <span class="text-lg font-bold text-white"> a la demande du client</span>
            </div>
            <div class="flex w-full lg:max-w-[12rem] flex-col bg-white border bg-opacity-10 justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-white">Déposit minimum </h2>
              <span class="text-lg font-bold text-white"> 30.000 XAF</span>
            </div>

          </div>
        </div>
      </div>

    </main>
    <main id="section2" class="bg-blue-50 lg:px-16 px-8 py-12">
        <h2 class="text-green-600 font-accent text-4xl w-full justify-center text-center pb-5">
          Bon de caisse
        </h2>
        <p class="text-gray-800 font-primary text-lg w-full justify-center pb-10">
          Notre service en bon de caisse permet aux entreprises et aux investisseurs d’effectuer des placements de fonds en toute sécurité
          sur une période minimale d’un an. Le placement a pour vocation à terme de générer d’importants bénéfices grâce à des taux
          d’intérêts allant jusqu’à 5%.
        </p>
        <div class="flex flex-wrap lg:flex-nowrap w-full gap-2 justify-center lg:px-10">
          <div class="w-full lg:max-w-xl flex flex-col lg:py-16 order-2 lg:order-1" >
          <h2 class="text-xl w-full lg:text-center font-semibold text-gray-600">Les placements en bon de caisse offrent les conditions suivantes</h2>
          <div class="w-full flex justify-center lg:p-6 py-6 gap-2 lg:flex-nowrap flex-wrap">
            <div class="flex w-full lg:max-w-[12rem] flex-col bg-blue-950 border opacity-90 justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-white ">dépôt minimum à l’ouverture</h2>
              <span class="text-lg font-bold text-white">5.000.000 CFA</span>
            </div>
            <div class="flex w-full lg:max-w-[12rem] flex-col bg-blue-950 border opacity-90 justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-white">taux de rémunération</h2>
              <span class="text-lg font-bold text-white"> négociable</span>
            </div>
            <div class="flex w-full lg:max-w-[12rem] flex-col bg-blue-950 border opacity-90 justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-white">Intérêt  précompte ou post compte</h2>
              <span class="text-lg font-bold text-white"> à la demande du client</span>
            </div>
          </div>
        </div>
          <div class="flex w-full max-w-xl h-full lg:min-h-[28rem] order-1 lg:order-2">
            <img :src="cash" alt="image" class="object-cover transition-transform duration-500 hover:scale-105 rounded-lg">
          </div>
        </div>
    </main>
    <main id="section3" class="bg-blue-950 px-8 py-12">
      <div class="container mx-auto">
        <h1 class="text-white w-full text-center font-accent text-4xl pb-6">Dépôt à terme </h1>
        <p class="w-full py-6 text-lg text-gray-300">
          Notre service de dépôt à terme permet au souscripteur de déposer des fonds sur un compte bloqué afin de
          bénéficier d’intérêts supérieurs au taux applicable sur un compte d’épargne classique. Le souscripteur
          pouvant à tout moment disposer des intérêts générés par le compte.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Money"
                 alt="Money"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Minimum de dépôt</h3>
              <p class="text-gray-600 mb-4">5.000.000 XAF</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Depot"
                 alt="Depot a terme"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Taux de rémunération </h3>
              <p class="text-gray-600 mb-4">négociable</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Interred"
                 alt="Interred a terme"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Taux d’intérêts</h3>
              <p class="text-gray-600 mb-4">Allant jusqu’à 5%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main id="section4" class="pb-6 bg-blue-50 py-12">
      <div class="bg-blue-50 lg:px-8 px-5">
      <h2 class="text-green-600 font-accent text-4xl w-full justify-center text-center pb-8">
        Compte d’épargne association
      </h2>
      <p class="text-gray-800 font-primary text-lg w-full lg:px-8 px-4 pb-10">
        Notre service compte d’épargne association a été mis sur pied afin de permettre aux associations
        de protéger leurs finances grâce à des comptes d’épargne fiables et sécurisés.
      </p>
      <div class="lg:flex w-full gap-2 justify-center lg:px-10 px-4 lg:pb-12">
        <div class="flex w-full lg:max-w-sm h-full lg:min-h-[24rem]">
          <img :src="Epargne" alt="image" class="object-cover transition-transform duration-500 hover:scale-105 rounded-lg">
        </div>
        <div class="w-full max-w-xl flex flex-col lg:pt-0 pt-5">
          <h2 class="text-xl w-full lg:text-center font-semibold text-gray-500">
            Les associations bénéficient des conditions suivantes pour leur compte d’épargne
          </h2>
          <div class="w-full flex justify-center lg:p-6 py-6 gap-2 lg:flex-nowrap flex-wrap">
            <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-lg text-white">Dépôt minimum à l’ouverture</h2>
              <span class="text-lg font-bold text-white"> 50.000 XAF </span>
            </div>
            <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-lg text-white">Taux d’intérêt</h2>
              <span class="text-lg font-bold text-white">4% sur l’année</span>
            </div>
          </div>
        </div>
      </div>
      </div>
<!--    </main>-->
<!--    <main id="section4" class="lg:px-8 px-5 py-12 bg-blue-50">-->
      <div class="py-12 lg:px-8 px-5 bg-white">
      <h2 class="text-green-600 font-accent text-4xl w-full justify-center text-center pb-8">
        Compte d’épargne sur livret
      </h2>
      <p class="text-gray-800 font-primary text-lg w-full lg:px-8 px-4 pb-10">
        Le compte d’épargne sur livret est notre service destiné sécurisé les économies de nos clients.
        Le client pourra ainsi faire fructifier l’argent déposé grâce à des taux d’intérêts les plus intéressants du marché.
      </p>
      <div class="flex flex-wrap lg:flex-nowrap w-full gap-2 justify-center lg:px-10 px-4">
        <div class="w-full max-w-xl flex flex-col lg:pt-0 pt-5 order-2 lg:order-1">
          <h2 class="text-xl w-full lg:text-center font-semibold text-gray-500">
            Les règles applicables à l'ouverture d'un compte d'épargne sur livret sont les suivantes :
          </h2>
          <div class="w-full flex justify-center lg:p-6 py-6 gap-2 lg:flex-nowrap flex-wrap">
            <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-lg text-white">Dépôt minimum à l’ouverture</h2>
              <span class="text-lg font-bold text-white"> 15.000 XAF<span> Hors Taxes </span></span>
<!--              <span class="text-lg font-bold text-white"> 16.000 XAF<span> TTC</span></span>-->
            </div>
            <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
              <h2 class="font-light text-lg text-white">Solde minimum permanent en compte</h2>
              <span class="text-lg font-bold text-white">15.000 XAF</span>
            </div>
          </div>
        </div>
        <div class="flex w-full lg:max-w-sm h-full lg:min-h-[24rem] order-1 lg:order-2">
          <img :src="Livret" alt="image" class="object-cover transition-transform duration-500 hover:scale-105 rounded-lg">
        </div>
      </div>
      </div>
      <div class="py-12 bg-blue-50 lg:px-8 px-5">
        <h2 class="text-green-600 font-accent text-3xl md:text-4xl text-center mb-10">
          Compte courant entreprise
        </h2>
        <p class="text-gray-800 font-primary text-lg w-full lg:px-8 px-4 pb-10">
          Nos comptes courants entreprise permettent aux entrepreneurs ou aux entreprises clientes
          d’avoir leurs fonds à disposition et de bénéficier à tout moment de nos services bancaires de base.
          Les entreprises clientes pourront effectuer toutes les transactions financières courantes liées à leur fonctionnement
          grâce à un service simplifié sur le compte courant.
        </p>
        <div class="lg:flex w-full gap-2 justify-center lg:px-10 px-4">
          <div class="flex w-full lg:max-w-sm h-full lg:min-h-[24rem]">
            <img :src="Courant" alt="image" class="object-cover transition-transform duration-500 hover:scale-105 rounded-lg">
          </div>
          <div class="w-full max-w-xl flex flex-col lg:pt-0 pt-5">
            <h2 class="text-xl w-full lg:text-center font-semibold text-gray-500">
              Les entreprises bénéficient des conditions suivantes pour leur compte d’épargne
            </h2>
            <div class="w-full flex justify-center lg:p-6 py-6 gap-2 lg:flex-nowrap flex-wrap">
              <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
                <h2 class="font-light text-lg text-white">Dépôt minimum à l’ouverture</h2>
                <span class="text-lg font-bold text-white"> 30.000 XAF </span>
              </div>
              <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
                <h2 class="font-light text-lg text-white">Facilité de compensation chèque</h2>
              </div>
              <div class="bg-blue-950 bg-opacity-90 flex w-full lg:max-w-[12rem] flex-col shadow border justify-between p-4 rounded-lg lg:gap-0 gap-5">
                <h2 class="font-light text-lg text-white">Possibilité de préfinancer les salaires</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-0 lg:px-0 bg-white bg-opacity-90 hidden">
<!--      <div class="container mx-auto py-12 px-4 md:px-0 lg:px-0 bg-white">-->
        <div class="min-w-6xl mx-auto shadow-sm overflow-hidden p-6 md:py-12 md:px-16">
            <!-- Titre -->
            <h2 class="text-green-600 font-accent text-3xl md:text-4xl text-center mb-10">
              Épargne islamique
            </h2>

            <!-- Contenu principal -->
            <div class="flex flex-col lg:flex-row items-start gap-8 lg:gap-5">
              <!-- Texte descriptif -->
              <div class="w-full lg:w-3/5 order-2 lg:order-1 my-auto">
                <p class="text-gray-500 lg:text-xl lg:font-accent text-lg leading-relaxed lg:py-10">
                  Notre service d'épargne islamique qui ne produit pas d'intérêts, s'adresse à nos clients
                  qui souhaitent constituer une épargne tout en respectant les
                  préceptes de la religion islamique.
                </p>
              </div>

              <!-- Image -->
              <div class="w-full lg:w-2/4 order-1 lg:order-2">
                <div class="relative overflow-hidden rounded-lg shadow-md">
                  <img
                      :src="Islamique"
                      alt="Épargne islamique"
                      class="w-full h-auto max-h-96 object-cover transition-transform duration-500 hover:scale-105"
                  >
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="py-12 bg-white lg:px-8 px-5">
        <h2 class="text-green-600 font-accent text-3xl md:text-4xl text-center mb-10">
          Compte virement salaire
        </h2>
<!--        <p class="text-gray-800 font-primary text-lg w-full lg:px-8 px-4 pb-10">-->
<!--          Le compte virement salaire permet de recevoir son salaire mensuel mais aussi d’effectuer ses transactions-->
<!--          banquières courantes. Il donne droit à un découvert permanent, ainsi qu’à des crédits de plusieurs sortes.-->
<!--        </p>-->

        <div class="lg:flex w-full gap-2 justify-between lg:px-10 px-4">
          <div class="flex w-full lg:max-w-xl h-full lg:min-h-[24rem]" >
            <img :src="Virement" alt="image" class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 rounded-xl border">
          </div>
          <div class="w-full flex flex-col lg:pt-0 pt-5 lg:pl-5 my-auto">
            <h2 class="lg:text-xl text-lg w-full lg:font-accent text-gray-700 leading-relaxed">
              Le compte virement salaire permet de recevoir son salaire mensuel, mais aussi d’effectuer ses transactions
              banquières courantes. Il donne droit à un découvert permanent, ainsi qu’à des crédits de plusieurs sortes.
            </h2>
          </div>
        </div>
      </div>
    </main>
    <main id="section5" class="bg-blue-950 lg:px-16 px-8 py-12">
      <h1 class="text-white w-full text-center font-accent lg:text-4xl text-3xl pb-4">Collecte journalière </h1>
        <p class="w-full py-6 text-lg text-gray-300">
          Notre service de collecte journalière destiné principalement aux travailleurs indépendants (commerçants ou autre)
          permet de sécuriser l’argent sans avoir à se déplacer.
          Nos agents déployés sur le terrain collectent les fonds contre reçu et les déposent directement
          sur les comptes de chaque souscripteur.
        </p>
      <h1 class="text-green-600 w-full font-accent lg:text-3xl text-2xl text-center lg:text-left pb-4">Collecte journalière mensuelle </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Argent"
                 alt="Argent"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Minimum d’épargne</h3>
                <p class="text-gray-600 mb-4">500 XAF/jour</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Refund"
                 alt="Refund"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Disponible au décaissement</h3>
              <p class="text-gray-600 mb-4">fin du mois</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Micro"
                 alt="Micro"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Possibilité de micro-crédit </h3>
            </div>
          </div>
        </div>
      <br>
      <h1 class="text-green-600 w-full font-accent lg:text-3xl text-2xl text-center lg:text-left pb-4">Collecte journalière annuelle </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Argent1"
                 alt="Argent"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Minimum d’épargne</h3>
                <p class="text-gray-600 mb-4">200 XAF/jour</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Received"
                 alt="Refund"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Disponible au décaissement</h3>
              <p class="text-gray-600 mb-4"> fin d’année</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Micro"
                 alt="Micro"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Possibilité de micro-crédit </h3>
            </div>
          </div>
        </div>
    </main>
    <main id="section6" class="bg-blue-50 lg:px-16 px-8 py-12">
        <h2 class="text-green-600 font-accent text-4xl w-full justify-center text-center pb-5">
          Carte visa
        </h2>
        <p class="text-gray-800 font-primary text-lg w-full justify-center leading-relaxed pb-10">
          Les cartes VISA du CRESAF offrent une solution sécurisée pour effectuer des retraits aux guichets automatiques
          et régler des achats de biens ou services, que ce soit via des terminaux de paiement électronique (TPE) ou en ligne.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white opacity-90 hover:opacity-100 rounded-lg shadow-lg
          overflow-hidden transition-transform duration-300 hover:scale-105 p-2">
            <img :src="Guichet"
                 alt="Guichet"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Guichet automatique de banque</h3>
            </div>
          </div>
          <div
               class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Electronic"
                 alt="Electronic"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Terminaux de paiement électronique </h3>
            </div>

          </div>
          <div
               class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">

            <img :src="Order"
                 alt="Order"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Autres moyens de payement en ligne</h3>
            </div>
          </div>
        </div>
    </main>

    <!-- Navigation latérale -->
    <div class="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      <a v-for="product in products" :key="product.id"
         :href="`#section${product.id}`"
         :class="[
           'block w-3 h-3 rounded-full transition-all duration-300',
           currentSection === product.id ? 'bg-green-600 scale-125' : 'bg-gray-400 hover:bg-white'
         ]"
         @click.prevent="scrollToSection(product.id)">
<!--        currentSection === product.id ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'-->
        <span class="sr-only">{{ product.title }}</span>
      </a>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

