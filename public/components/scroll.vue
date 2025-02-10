<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="bg-white px-4 flex flex-col h-full">
      <div class="flex flex-col h-full py-12 items-center">
        <h1 class="text-gray-900 lg:text-4xl text-3xl font-bold text-center">Témoignages de clients</h1>
        <p class="text-lg p-5 text-gray-500 w-full text-center max-w-4xl">
          Découvrez comment nos services ont transformé le quotidien de nos clients.
          Leur satisfaction et leur réussite sont notre plus grande fierté.
        </p>

        <swiper
            :modules="modules"
            :slides-per-view="1"
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
            class="w-full max-w-2xl"
        >
          <swiper-slide v-for="(location6, index) in locations6" :key="index">
            <!-- Contenu du slide inchangé -->
            <div class="flex flex-col justify-between items-start h-full min-h-44 w-full
           border rounded-lg lg:p-8 p-5 shadow space-y-10">
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Ajout de Autoplay
import 'swiper/css/bundle';

import Woman from"@/assets/images/w3.png"
import Logo from"@/assets/images/Entp.png"

// Ajout de Autoplay dans les modules
const modules = [Pagination, Navigation, Autoplay];

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
    profession:"Jeune entrepreneure",
    logo:Logo
  },
])
</script>

<!--&lt;!&ndash; Home.vue &ndash;&gt;-->
<!--<template>-->
<!--  <div class="flex flex-col min-h-screen">-->
<!--    <Header />-->



<!--    <div class="bg-white px-4 flex flex-col h-full">-->
<!--      <div class="flex flex-col h-full py-12 items-center">-->
<!--        <h1 class="text-gray-900 lg:text-4xl text-3xl font-bold text-center">Témoignages de clients</h1>-->
<!--        <p class="text-lg p-5 text-gray-500 w-full text-center max-w-4xl">-->
<!--          Découvrez comment nos services ont transformé le quotidien de nos clients.-->
<!--          Leur satisfaction et leur réussite sont notre plus grande fierté.-->
<!--        </p>-->

<!--        <swiper-->
<!--            :modules="modules"-->
<!--            :slides-per-view="1"-->
<!--            :space-between="10"-->
<!--            :pagination="{ clickable: true }"-->
<!--            :navigation="true"-->
<!--            :direction="'horizontal'"-->
<!--            :effect="'slide'"-->
<!--            class="w-full max-w-2xl"-->
<!--        >-->
<!--          <swiper-slide v-for="(location6, index) in locations6" :key="index">-->
<!--            <div class="flex flex-col justify-between items-start h-full min-h-44 w-full-->
<!--           border rounded-lg lg:p-8 p-5 shadow space-y-10">-->
<!--              <p class="lg:text-xl font-bold text-black">-->
<!--                {{location6.titre}}-->
<!--              </p>-->
<!--              <div class="flex w-full justify-between">-->
<!--                <div class="flex items-center justify-between text-sm font-semibold gap-2">-->
<!--                  <div class="flex justify-center items-center">-->
<!--                    <img :src="location6.icon" alt="img" class="h-16 w-16 rounded-full border">-->
<!--                  </div>-->
<!--                  <div class="flex flex-col">-->
<!--                    <p class="text-xl font-semibold">{{location6.name}}</p>-->
<!--                    <p class="pl-5 text-gray-500">{{location6.profession}}</p>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="flex justify-center items-center">-->
<!--                  <img :src="location6.logo" alt="img" class="h-16 w-16">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->
<!--      </div>-->
<!--    </div>-->

<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {ref} from "vue";-->
<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue';-->
<!--import { Pagination, Navigation } from 'swiper/modules';-->
<!--import 'swiper/css/bundle'-->

<!--import Woman from"@/assets/images/w3.png"-->
<!--import Logo from"@/assets/images/Entp.png"-->

<!--const modules = [Pagination, Navigation];-->

<!--const woman =Woman-->

<!--const locations6 = ref([-->
<!--  {-->
<!--    titre:'“Grâce aux solutions de financement de CRESAF, j’ai pu agrandir mon commerce sans stress. Le processus de prêt était simple et rapide, et aujourd’hui, mon activité se développe mieux que jamais !"',-->
<!--    icon:woman,-->
<!--    name:'⭐Marie T.',-->
<!--    profession:"Commerçante",-->
<!--    logo:Logo-->

<!--  },-->
<!--  {-->
<!--    titre:'"CRESAF m’a accompagné dans le lancement de mon entreprise avec un financement adapté et des conseils personnalisés. Leur flexibilité et leur soutien ont été essentiels à ma réussite."',-->
<!--    icon:woman,-->
<!--    name:'⭐Alain D.',-->
<!--    profession:"Entrepreneur",-->
<!--    logo:Logo-->
<!--  },-->
<!--  {-->
<!--    titre:'"Avec CRESAF, j’ai pu obtenir un prêt sans complications pour moderniser mon restaurant. Leurs paiements flexibles m’ont permis de gérer mon remboursement sans pression."',-->
<!--    icon:woman,-->
<!--    name:'⭐Fatima K.',-->
<!--    profession:"Restauratrice",-->
<!--    logo:Logo-->
<!--  },-->
<!--  {-->
<!--    titre:'"Les services de microfinance de CRESAF m’ont aidé à acheter du matériel agricole essentiel. Aujourd’hui, ma production a doublé, et mes revenus sont plus stables."',-->
<!--    icon:woman,-->
<!--    name:'⭐Jean-Marc B.',-->
<!--    profession:"Agriculteur",-->
<!--    logo:Logo-->
<!--  },-->
<!--  {-->
<!--    titre:'"J’ai enfin trouvé une institution qui comprend les besoins des petites entreprises. CRESAF m’a soutenue dès le début avec des conseils et un financement adapté à mon projet."',-->
<!--    icon:woman,-->
<!--    name:'⭐Sandra M.',-->
<!--    profession:"Jeune entrepreneure",-->
<!--    logo:Logo-->
<!--  },-->
<!--])-->



<!--</script>-->

