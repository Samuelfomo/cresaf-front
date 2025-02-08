<template>
  <div class="max-h-screen p-8">
    <!-- Carrousel d'images -->
    <div class="relative w-full overflow-hidden">
      <div
          ref="scrollContainer"
          class="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          @wheel.prevent="handleWheel"
          @mouseenter="pauseAutoScroll"
          @mouseleave="resumeAutoScroll"
      >
        <div
            v-for="(image, index) in images"
            :key="index"
            class="shrink-0 snap-center border rounded-lg"
        >
          <img
              :src="image.url"
              :alt="image.alt"
              class="w-64 h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
          />
        </div>
      </div>

      <!-- Boutons de navigation -->
      <button
          @click="scroll('left')"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50"
          :disabled="isAtStart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
          @click="scroll('right')"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50"
          :disabled="isAtEnd"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Bouton Pause/Play -->
      <button
          @click="toggleAutoScroll"
          class="absolute bottom-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
      >
        <svg v-if="isAutoScrolling" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MoMo from "@/assets/images/momo.png"
import MoneyGram from "@/assets/images/MoneyGram.png"
import MoneyTrans from "@/assets/images/Moneytrans.png"
import OM from "@/assets/images/om.png"
import Ria from "@/assets/images/Ria.png"
import Paytop from "@/assets/images/paytop.png"
import Western from "@/assets/images/Western.png"
import Worldremit from "@/assets/images/Worldremit.png"

const momo = MoMo
const moneygram = MoneyGram
const moneytrans = MoneyTrans
const om = OM
const ria = Ria
const paytop = Paytop
const western = Western
const worldremit = Worldremit

// Données des images
const images = ref([
  {
    url: momo,
    alt: 'logo MoMo'
  },
  {
    url: moneygram,
    alt: 'logo moneygram'
  },
  {
    url: moneytrans,
    alt: 'logo moneytrans'
  },
  {
    url: om,
    alt: 'logo Orange Money'
  },
  {
    url: ria,
    alt: 'Logo ria'
  },
  {
    url: paytop,
    alt: 'Logo paytop'
  },
  {
    url: western,
    alt: 'Logo western'
  },
  {
    url: worldremit,
    alt: 'Logo worldremit'
  },
  // {
  //   url: 'https://picsum.photos/id/1018/800/600',
  //   alt: 'Nature 1'
  // },
  // {
  //   url: 'https://picsum.photos/id/1015/800/600',
  //   alt: 'Nature 2'
  // },
  // {
  //   url: 'https://picsum.photos/id/1019/800/600',
  //   alt: 'Nature 3'
  // },
  // {
  //   url: 'https://picsum.photos/id/1016/800/600',
  //   alt: 'Nature 4'
  // },
  // {
  //   url: 'https://picsum.photos/id/1020/800/600',
  //   alt: 'Nature 5'
  // },
])

// Références et état
const scrollContainer = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)
const autoScrollInterval = ref(null)
const isAutoScrolling = ref(true)

// Gestion du défilement
const scroll = (direction) => {
  if (!scrollContainer.value) return

  const container = scrollContainer.value
  const scrollAmount = container.clientWidth * 0.8

  // Si on arrive à la fin, retour au début
  if (direction === 'right' && isAtEnd.value) {
    container.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  } else {
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    })
  }
}

// Gestion du défilement automatique
const startAutoScroll = () => {
  if (autoScrollInterval.value) return

  isAutoScrolling.value = true
  autoScrollInterval.value = setInterval(() => {
    scroll('right')
  }, 2000)
}

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
    autoScrollInterval.value = null
  }
  isAutoScrolling.value = false
}

const toggleAutoScroll = () => {
  if (isAutoScrolling.value) {
    stopAutoScroll()
  } else {
    startAutoScroll()
  }
}

const pauseAutoScroll = () => {
  if (isAutoScrolling.value) {
    stopAutoScroll()
  }
}

const resumeAutoScroll = () => {
  if (!isAutoScrolling.value) {
    startAutoScroll()
  }
}

// Gestion du scroll avec la molette de la souris
const handleWheel = (e) => {
  if (!scrollContainer.value) return

  const container = scrollContainer.value
  container.scrollLeft += e.deltaY
}

// Observer le scroll pour mettre à jour les états
const updateScrollButtons = () => {
  if (!scrollContainer.value) return

  const container = scrollContainer.value
  isAtStart.value = container.scrollLeft <= 0
  isAtEnd.value = container.scrollLeft + container.clientWidth >= container.scrollWidth
}

// Mise en place des observers
onMounted(() => {
  if (!scrollContainer.value) return

  scrollContainer.value.addEventListener('scroll', updateScrollButtons)
  updateScrollButtons()
  startAutoScroll()
})

onUnmounted(() => {
  if (!scrollContainer.value) return

  scrollContainer.value.removeEventListener('scroll', updateScrollButtons)
  stopAutoScroll()
})
</script>

<style>
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>


<!--<template>-->
<!--  <div class="relative py-16 px-4">-->
<!--    <div class="text-center text-white mb-12">-->
<!--      <h2 class="text-2xl font-light tracking-wide uppercase">-->
<!--        nos services de transfert d'argent-->
<!--      </h2>-->
<!--    </div>-->

<!--    <div class="relative overflow-hidden">-->
<!--      <div-->
<!--          class="flex transition-transform duration-500 ease-in-out"-->
<!--          :style="`transform: translateX(-${currentIndex * 100}%)`"-->
<!--      >-->
<!--        <div class="flex-shrink-0 w-full flex justify-center space-x-8">-->
<!--          <div-->
<!--              v-for="image in images"-->
<!--              :key="image.name"-->
<!--              class="bg-blue-900 p-4 rounded-lg shadow-md flex items-center justify-center w-48 h-24 cursor-pointer hover:shadow-xl transition-all"-->
<!--          >-->
<!--            <img-->
<!--                :src="image.src"-->
<!--                :alt="image.name"-->
<!--                class="max-w-full max-h-full object-contain"-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="absolute inset-y-0 left-0 flex items-center">-->
<!--      <button-->
<!--          @click="prevSlide"-->
<!--          class="bg-blue-950/20 text-white p-2 rounded-full"-->
<!--      >-->
<!--        ←-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="absolute /inset-y-0 right-0 flex items-center">-->
<!--      <button-->
<!--          @click="nextSlide"-->
<!--          class="bg-blue-950/20 text-white p-2 rounded-full"-->
<!--      >-->
<!--        →-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--import GLILogo from "@/assets/images/momo.jpeg"-->
<!--import VeoLogo from "@/assets/images/momo.jpeg"-->
<!--import CESALogo from "@/assets/images/momo.jpeg"-->
<!--import StarOilLogo from "@/assets/images/momo.jpeg"-->
<!--import BioMedicalLogo from "@/assets/images/momo.jpeg"-->

<!--const images = ref([-->
<!--  { name: 'GLI', src: GLILogo },-->
<!--  { name: 'Veo Canal+', src: VeoLogo },-->
<!--  { name: 'CESA', src: CESALogo },-->
<!--  { name: 'Star Oil', src: StarOilLogo },-->
<!--  { name: 'Biomedical', src: BioMedicalLogo }-->
<!--])-->

<!--const currentIndex = ref(0)-->

<!--const nextSlide = () => {-->
<!--  currentIndex.value = (currentIndex.value + 1) % logos.value.length-->
<!--}-->

<!--const prevSlide = () => {-->
<!--  currentIndex.value = (currentIndex.value - 1 + logos.value.length) % logos.value.length-->
<!--}-->
<!--</script>-->