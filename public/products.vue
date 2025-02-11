<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";

const products = ref([
  {
    id: 1,
    title: "🏦 Compte chèque",
    subtitle: "Particulier, entreprise & salaire",
    subtitle2: "✅ Gérez vos finances au quotidien avec facilité et rapidité ",
    description: "Description du compte chèque...",
    image: "https://picsum.photos/id/1018/800/600"
  },
  {
    id: 2,
    title: "🏦 Bon de caisse",
    subtitle: "Bon plan pour votre épargne",
    subtitle2: "💰 Investissez en toute sécurité avec un rendement garanti chez CRESAF !e",
    description: "Description du Bon de caisse...",
    // description: `Notre service en bon de caisse permet aux entreprises et aux investisseurs d'effectuer des placements de fonds en toute sécurité sur une période minimale d'un an. Le placement a pour vocation à terme de générer d'importants bénéfices grâce à des taux d'intérêts allant jusqu'à 5%. Le bon de caisse à échéance n'étant soumis à aucune obligation de reconduction.`,
    // features: [
    //   "Dépôt minimum à l'ouverture : 5,000,000 FCFA",
    //   "Taux de rémunération négociable",
    //   "Intérêt précompte ou post compte à la demande du client"
    // ],
    image: "https://picsum.photos/id/1015/800/600"
  },
  {
    id: 3,
    title: "📈 Dépôt à terme",
    description: "Description du dépôt à terme...",
    subtitle: "Fructifier votre argent",
    subtitle2: "💵 Faites fructifier votre argent avec des taux avantageux et sans risque !",
    image: "https://picsum.photos/id/1019/800/600"
  },
  {
    id: 4,
    title: "🐖 Compte d'épargne",
    subtitle: "Livret & Association",
    subtitle2: "💳 Épargnez sereinement et faites grandir vos projets avec CRESAF !",
    description: "Description du compte d'épargne...",
    image: "https://picsum.photos/id/1016/800/600"
  },
  {
    id: 5,
    title: "🚀 Collecte journalière",
    subtitle: "Vous suivre au quotidien",
    subtitle2: "📥 Sécurisez vos revenus quotidiens sans vous déplacer",
    description: "Description de la collecte journalière...",
    image: "https://picsum.photos/id/1020/800/600"
  },
  {
    id: 6,
    title: "💳 Carte VISA",
    subtitle: "Vous ouvrir au monde",
    subtitle2: "🌍 Payez et retirez de l’argent partout, en toute simplicité !",
    description: "Description de la carte VISA...",
    image: "https://picsum.photos/id/1015/800/600"
  }
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

// Démarrer l'auto-play au montage du composant
onMounted(() => {
  startAutoPlay();
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
               class="absolute inset-0">
            <img :src="product.image"
                 :alt="product.title"
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-blue-700 bg-opacity-50">
              <div class="container mx-auto px-6 h-full flex items-center">
                <div class="text-white max-w-lg">
                  <h1 class="text-5xl font-accent mb-4">{{ product.title }}</h1>
                  <p class="text-xl">{{ product.subtitle2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- Contrôles du slider -->
        <div class="absolute inset-y-0 left-0 flex items-center">
          <button @click="prevSlide"
                  class="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-r p-2">
            <span class="sr-only">Précédent</span>
            <!-- Icône précédent -->
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center">
          <button @click="nextSlide"
                  class="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-l p-2">
            <span class="sr-only">Suivant</span>
            <!-- Icône suivant -->
          </button>
        </div>
      </div>
    </section>

    <!-- Sections des produits -->
    <main class="bg-blue-950 px-8 py-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in products"
               :key="product.id"
               class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="product.image"
                 :alt="product.title"
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ product.title }}</h3>
              <p class="text-gray-600 mb-4">{{ product.subtitle }}</p>
              <p class="text-gray-700">{{ product.description }}</p>
              <ul v-if="product.features" class="mt-4 space-y-2">
                <li v-for="feature in product.features"
                    :key="feature"
                    class="flex items-center text-gray-700">
                  <span class="mr-2">•</span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

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

<!--<script setup>-->

<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->
<!--</script>-->

<!--<template>-->
<!--  <div class="flex flex-col min-h-screen">-->
<!--    <Header />-->
<!--    <main class="min-h-screen  flex flex-col bg-blue-950 px-8 pt-32 pb-12 mb-2">-->
<!--    </main>-->
<!--    <Footer />-->
<!--  </div>-->

<!--</template>-->

<!--<style scoped>-->

<!--</style>-->
