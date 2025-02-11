<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";

const solutions = ref([
  {
    id: 'presentation',
    title: 'Nos Solutions Financières',
    subtitle: 'Des solutions adaptées à vos besoins',
    description: 'CRESAF vous accompagne dans tous vos projets avec des solutions de financement sur mesure.',
    image: 'https://picsum.photos/id/1018/800/600',
  },
  {
    id: 'projets',
    title: 'Financement de Projets',
    subtitle: 'Concrétisez vos ambitions',
    description: 'Nous accompagnons le développement de vos projets avec des solutions de financement adaptées.',
    features: [
      'Financement d\'équipements',
      'Financement immobilier',
      'Crédit d\'investissement'
    ],
    image: 'https://picsum.photos/id/1015/800/600',
  },
  {
    id: 'tresorerie',
    title: 'Financement de la Trésorerie',
    subtitle: 'Optimisez votre gestion financière',
    description: 'Des solutions pour maintenir une trésorerie saine et faire face à vos besoins de fonctionnement.',
    features: [
      'Facilité de caisse',
      'Découvert autorisé',
      'Escompte commercial'
    ],
    image: 'https://picsum.photos/id/1016/800/600',
  },
  {
    id: 'import-export',
    title: 'Financement Import/Export',
    subtitle: 'Développez votre activité internationale',
    description: 'Accompagnement dans vos opérations de commerce international avec des solutions spécialisées.',
    features: [
      'Crédit documentaire',
      'Remise documentaire',
      'Garantie internationale'
    ],
    image: 'https://picsum.photos/id/1020/800/600',
  }
]);

const activeSection = ref(0);

const handleScroll = () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      activeSection.value = index;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = (index) => {
  const sections = document.querySelectorAll('.section');
  sections[index].scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="relative">
    <Header />

    <!-- Navigation latérale -->
    <nav class="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <ul class="space-y-4">
        <li v-for="(solution, index) in solutions" :key="index">
          <button
              @click="scrollToSection(index)"
              :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              activeSection === index ? 'bg-white scale-150' : 'bg-gray-400 hover:bg-white'
            ]"
              :aria-label="`Section ${solution.title}`"
          ></button>
        </li>
      </ul>
    </nav>

    <main class="relative">
      <!-- Sections -->
      <section
          v-for="(solution, index) in solutions"
          :key="index"
          :id="solution.id"
          class="section relative min-h-screen flex items-center transition-all duration-700"
          :class="{ 'opacity-100': activeSection === index, 'opacity-90': activeSection !== index }"
      >
        <!-- Arrière-plan avec effet parallaxe -->
        <div class="absolute inset-0 overflow-hidden">
          <img
              :src="solution.image"
              :alt="solution.title"
              class="w-full h-full object-cover transform scale-110"
              :style="`transform: translateY(${activeSection === index ? '-5%' : '0'})`"
          >
          <div class="absolute inset-0 bg-blue-950 bg-opacity-75"></div>
        </div>

        <!-- Contenu de la section -->
        <div class="container mx-auto px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-white space-y-6"
                 :class="{ 'translate-x-0 opacity-100': activeSection === index, '-translate-x-full opacity-0': activeSection !== index }"
            >
              <h2 class="text-5xl font-bold mb-4">{{ solution.title }}</h2>
              <p class="text-2xl text-gray-300 mb-6">{{ solution.subtitle }}</p>
              <p class="text-lg text-gray-200">{{ solution.description }}</p>

              <ul v-if="solution.features" class="space-y-4 mt-8">
                <li v-for="feature in solution.features"
                    :key="feature"
                    class="flex items-center text-lg">
                  <span class="mr-3 text-2xl">•</span>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Zone interactive ou illustration -->
            <div class="hidden lg:block"
                 :class="{ 'translate-x-0 opacity-100': activeSection === index, 'translate-x-full opacity-0': activeSection !== index }"
            >
              <!-- Ici vous pouvez ajouter des éléments interactifs spécifiques à chaque solution -->
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.section {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transitions pour les éléments de contenu */
.translate-x-0 {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.section img {
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

<!--<script setup>-->

<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->
<!--</script>-->

<!--<template>-->
<!--  <div class="flex flex-col min-h-screen">-->
<!--    <Header />-->
<!--    <main class="flex flex-col min-h-screen">-->
<!--      <div id="section0" class="flex min-h-screen flex-col bg-blue-950 px-8 pt-32 pb-12 mb-5">-->
<!--        presentation-->
<!--      </div>-->
<!--      <div id="section1" class="flex min-h-screen flex-col bg-blue-950 px-8 pt-32 pb-12 mb-5">-->
<!--        Financement de projets-->
<!--      </div>-->
<!--      <div id="section2" class="flex min-h-screen flex-col bg-blue-950 px-8 pt-32 pb-12 mb-5">-->
<!--        Financement de la trésorerie-->
<!--      </div>-->
<!--      <div id="section2" class="flex min-h-screen flex-col bg-blue-950 px-8 pt-32 pb-12 mb-5">-->
<!--        Financement Import/Export-->
<!--      </div>-->

<!--    </main>-->

<!--    <Footer />-->
<!--  </div>-->

<!--</template>-->

<!--<style scoped>-->

<!--</style>-->
