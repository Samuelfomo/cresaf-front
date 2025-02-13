<template>
    <div class="bg-white px-4 flex flex-col h-full">
      <div class="flex flex-col h-full py-12 items-center">
        <h1 class="text-black lg:text-4xl text-3xl font-accent text-center">Témoignages de clients</h1>
        <p class="text-lg  font-accent py-5 lg:pl-16 text-gray-500 w-full">
          Découvrez comment nos services ont transformé le quotidien de nos clients.
          Leur satisfaction et leur réussite sont notre plus grande fierté.
        </p>

        <swiper
            ref="mySwiper"
            :modules="modules"
            :space-between="10"
            :pagination="{ clickable: true }"
            :navigation="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false
            }"
            :loop="true"
            :direction="'horizontal'"
            :effect="'slide'"
            :breakpoints="{
                            0: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 }
                          }"
            class="w-full max-w-7xl"
        >
          <swiper-slide v-for="(location6, index) in locations6" :key="index" @click="toggleAutoplay" class="cursor-pointer">
            <!-- Contenu du slide inchangé -->
            <div class="flex flex-col justify-between items-start h-full min-h-44 w-full
           border rounded-lg lg:p-8 p-5 shadow space-y-10">
              <p class="lg:text-xl text-sm lg:font-bold font-semibold text-black">
                {{location6.titre}}
              </p>
              <div class="flex w-full justify-between">
                <div class="flex items-center justify-between text-sm font-semibold gap-2">
                  <div class="flex justify-center items-center">
                    <img :src="location6.icon" alt="img" class="lg:h-16 lg:w-16 h-14 w-14 rounded-full">
                  </div>
                  <div class="flex flex-col">
                    <p class="lg:text-xl text-lg font-semibold">{{location6.name}}</p>
                    <p class="pl-5 text-gray-500">{{location6.profession}}</p>
                  </div>
                </div>

                <div class="flex justify-center items-center">
                  <img :src="location6.logo" alt="img" class="lg:h-16 lg:w-16 h-14 w-14 rounded-full">
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Ajout de Autoplay
import 'swiper/css/bundle';

import Woman from"@/assets/images/w3.png"
import Logo from"@/assets/images/Entp.png"

// Ajout de Autoplay dans les modules
const modules = [Pagination, Navigation, Autoplay];

const mySwiper = ref(null);
const isPaused = ref(false);

const toggleAutoplay = () => {
  const swiperInstance = mySwiper.value?.$el.swiper;
  if (swiperInstance) {
    if (isPaused.value) {
      swiperInstance.autoplay.start();
      isPaused.value = false;
    } else {
      swiperInstance.autoplay.stop();
      isPaused.value = true;
    }
  }
};

const woman = Woman;

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
  {
    titre:'"Avec CRESAF, j’ai pu obtenir un prêt sans complications pour moderniser mon restaurant. Leurs paiements flexibles m’ont permis de gérer mon remboursement sans pression."',
    icon:woman,
    name:'⭐Fatima K.',
    profession:"Restauratrice",
    logo:Logo
  },
  {
    titre:'"Les services de microfinance de CRESAF m’ont aidé à acheter du matériel agricole essentiel. Aujourd’hui, ma production a doublé, et mes revenus sont plus stables."',
    icon:woman,
    name:'⭐Jean-Marc B.',
    profession:"Agriculteur",
    logo:Logo
  },
  {
    titre:'"J’ai enfin trouvé une institution qui comprend les besoins des petites entreprises. CRESAF m’a soutenue dès le début avec des conseils et un financement adapté à mon projet."',
    icon:woman,
    name:'⭐Sandra M.',
    profession:"Jeune entrepreneur",
    logo:Logo
  },
])
</script>

<!--<template>-->
<!--  <div class="flex flex-col min-h-screen">-->
<!--    <Header />-->
<!--    <main class="bg-white px-4 flex-1">-->
<!--      <section class="flex flex-col py-12 items-center">-->
<!--        <h1 class="text-gray-900 lg:text-4xl text-3xl font-bold text-center">Témoignages de clients</h1>-->
<!--        <p class="text-lg p-5 text-gray-500 w-full text-center max-w-4xl">-->
<!--          Découvrez comment nos services ont transformé le quotidien de nos clients.-->
<!--          Leur satisfaction et leur réussite sont notre plus grande fierté.-->
<!--        </p>-->

<!--        <div-->
<!--            class="w-full max-w-2xl "-->
<!--            aria-label="Témoignages des clients"-->
<!--        >-->
<!--          <swiper-->
<!--              :modules="modules"-->
<!--              :slides-per-view="1"-->
<!--              :space-between="10"-->
<!--              :pagination="{-->
<!--              clickable: true,-->
<!--              renderBullet: (index, className) => {-->
<!--                return `<span class='${className}' role='button' aria-label='Aller au témoignage ${index + 1}'></span>`-->
<!--              }-->
<!--            }"-->
<!--              :navigation="{-->
<!--              prevEl: '.swiper-button-prev',-->
<!--              nextEl: '.swiper-button-next'-->
<!--            }"-->
<!--              :autoplay="{-->
<!--              delay: 5000,-->
<!--              disableOnInteraction: false,-->
<!--              pauseOnMouseEnter: true-->
<!--            }"-->
<!--              :loop="true"-->
<!--              :direction="'horizontal'"-->
<!--              :effect="'fade'"-->
<!--              @swiper="onSwiperInit"-->
<!--          >-->
<!--            <swiper-slide-->
<!--                v-for="(testimonial, index) in testimonials"-->
<!--                :key="testimonial.id"-->
<!--                class="h-full"-->
<!--            >-->
<!--              <article-->
<!--                  class="flex flex-col justify-between h-full min-h-[300px] w-full-->
<!--                       border rounded-lg lg:p-8 p-5 shadow space-y-6"-->
<!--              >-->
<!--                <blockquote class="lg:text-xl text-black">-->
<!--                  <p class="font-medium italic">{{ testimonial.message }}</p>-->
<!--                </blockquote>-->

<!--                <footer class="flex w-full justify-between items-center">-->
<!--                  <div class="flex items-center gap-4">-->
<!--                    <img-->
<!--                        :src="testimonial.avatar"-->
<!--                        :alt="`Photo de ${testimonial.name}`"-->
<!--                        class="h-16 w-16 rounded-full border object-cover"-->
<!--                    >-->
<!--                    <div>-->
<!--                      <cite class="text-xl font-semibold not-italic">{{ testimonial.name }}</cite>-->
<!--                      <p class="text-gray-500">{{ testimonial.profession }}</p>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <img-->
<!--                      :src="testimonial.companyLogo"-->
<!--                      :alt="testimonial.companyName"-->
<!--                      class="h-16 w-16 object-contain"-->
<!--                  >-->
<!--                </footer>-->
<!--              </article>-->
<!--            </swiper-slide>-->
<!--          </swiper>-->

<!--          <div class="swiper-button-prev" aria-label="Témoignage précédent" />-->
<!--          <div class="swiper-button-next" aria-label="Témoignage suivant" />-->
<!--        </div>-->
<!--      </section>-->
<!--    </main>-->
<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ref } from "vue";-->
<!--import type { Swiper as SwiperType } from 'swiper';-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue';-->
<!--import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';-->
<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->

<!--// Import styles-->
<!--import 'swiper/css';-->
<!--import 'swiper/css/pagination';-->
<!--import 'swiper/css/navigation';-->
<!--import 'swiper/css/effect-fade';-->

<!--// Import assets-->
<!--import Woman from "@/assets/images/w3.png";-->
<!--import Logo from "@/assets/images/Entp.png";-->

<!--interface Testimonial {-->
<!--  id: string;-->
<!--  message: string;-->
<!--  name: string;-->
<!--  profession: string;-->
<!--  avatar: string;-->
<!--  companyLogo: string;-->
<!--  companyName: string;-->
<!--}-->

<!--const modules = [Pagination, Navigation, Autoplay, EffectFade];-->

<!--const testimonials = ref<Testimonial[]>([-->
<!--  {-->
<!--    id: '1',-->
<!--    message: 'Grâce aux solutions de financement de CRESAF, j\'ai pu agrandir mon commerce sans stress. Le processus de prêt était simple et rapide, et aujourd\'hui, mon activité se développe mieux que jamais !',-->
<!--    name: 'Marie T.',-->
<!--    profession: 'Commerçante',-->
<!--    avatar: Woman,-->
<!--    companyLogo: Logo,-->
<!--    companyName: 'CRESAF'-->
<!--  },-->
<!--  {-->
<!--    id: '2',-->
<!--    message: 'CRESAF m\'a accompagné dans le lancement de mon entreprise avec un financement adapté et des conseils personnalisés. Leur flexibilité et leur soutien ont été essentiels à ma réussite.',-->
<!--    name: 'Alain D.',-->
<!--    profession: 'Entrepreneur',-->
<!--    avatar: Woman,-->
<!--    companyLogo: Logo,-->
<!--    companyName: 'CRESAF'-->
<!--  },-->
<!--  {-->
<!--    id: '3',-->
<!--    message: 'Avec CRESAF, j\'ai pu obtenir un prêt sans complications pour moderniser mon restaurant. Leurs paiements flexibles m\'ont permis de gérer mon remboursement sans pression.',-->
<!--    name: 'Fatima K.',-->
<!--    profession: 'Restauratrice',-->
<!--    avatar: Woman,-->
<!--    companyLogo: Logo,-->
<!--    companyName: 'CRESAF'-->
<!--  },-->
<!--  {-->
<!--    id: '4',-->
<!--    message: 'Les services de microfinance de CRESAF m\'ont aidé à acheter du matériel agricole essentiel. Aujourd\'hui, ma production a doublé, et mes revenus sont plus stables.',-->
<!--    name: 'Jean-Marc B.',-->
<!--    profession: 'Agriculteur',-->
<!--    avatar: Woman,-->
<!--    companyLogo: Logo,-->
<!--    companyName: 'CRESAF'-->
<!--  },-->
<!--  {-->
<!--    id: '5',-->
<!--    message: 'J\'ai enfin trouvé une institution qui comprend les besoins des petites entreprises. CRESAF m\'a soutenue dès le début avec des conseils et un financement adapté à mon projet.',-->
<!--    name: 'Sandra M.',-->
<!--    profession: 'Jeune entrepreneure',-->
<!--    avatar: Woman,-->
<!--    companyLogo: Logo,-->
<!--    companyName: 'CRESAF'-->
<!--  }-->
<!--]);-->

<!--const onSwiperInit = (swiper: SwiperType) => {-->
<!--  // Pause autoplay when user hovers over navigation buttons-->
<!--  const navButtons = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');-->
<!--  navButtons.forEach(button => {-->
<!--    button.addEventListener('mouseenter', () => swiper.autoplay.pause());-->
<!--    button.addEventListener('mouseleave', () => swiper.autoplay.resume());-->
<!--  });-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.swiper {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->

<!--.swiper-pagination-bullet {-->
<!--  @apply bg-gray-300;-->
<!--}-->

<!--.swiper-pagination-bullet-active {-->
<!--  @apply bg-gray-800;-->
<!--}-->

<!--.swiper-button-prev,-->
<!--.swiper-button-next {-->
<!--  @apply text-gray-800;-->
<!--}-->

<!--.swiper-button-disabled {-->
<!--  @apply opacity-30;-->
<!--}-->
<!--</style>-->