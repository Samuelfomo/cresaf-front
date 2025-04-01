<template>
  <div class="max-h-screen flex lg:justify-center p-8">
    <!-- Carrousel d'images -->
    <div class="relative w-full lg:max-w-5xl overflow-hidden">
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
            class="w-40 h-40 shrink-0 snap-center cursor-pointer"
            @click="openLink(image.url)"
        >
          <img
              :src="image.image"
              :alt="image.alt"
              class="object-cover shadow-lg hover:scale-105 transition-transform duration-300 border rounded-lg"
              loading="lazy"
          />
        </div>
      </div>

      <!-- Boutons de navigation -->
      <button
          @click="scroll('left')"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50"
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
import MoMo from "@/assets/images/logo/mtn.png"
// import Sigue from "@/assets/images/logo/sigue.png"
import MoneyGram from "@/assets/images/logo/moneygram.png"
import MoneyTrans from "@/assets/images/logo/moneytrans.png"
import OM from "@/assets/images/logo/orange.png"
import Ria from "@/assets/images/logo/ria.png"
// import Paytop from "@/assets/images/logo/paytop.png"
import Western from "@/assets/images/logo/western.png"
import Worldremit from "@/assets/images/logo/worldremit.png"
import Juba from "@/assets/images/logo/juba.png"

const momo = MoMo
// const sigue = Sigue
const moneygram = MoneyGram
const moneytrans = MoneyTrans
const om = OM
const ria = Ria
// const paytop = Paytop
const western = Western
const worldremit = Worldremit
const juba = Juba

// Données des images
const images = ref([
  {
    url: 'https://momo.mtn.com/home-page/',
    image: momo,
    alt: 'logo MoMo'
  },
  // {
  //   url: 'https://sigue.com/',
  //   image: sigue,
  //   alt: 'logo Sigue'
  // },
  {
    url: 'https://moneygram.cm/',
    image: moneygram,
    alt: 'logo moneygram'
  },
  {
    url: 'https://www.moneytrans.eu/belgium/',
    image: moneytrans,
    alt: 'logo moneytrans'
  },
  {
    url: 'https://orangemoney.orange.cm/',
    image: om,
    alt: 'logo Orange Money'
  },
  {
    url: 'https://www.riamoneytransfer.com/en-us/',
    image: ria,
    alt: 'Logo ria'
  },
  // {
  //   url: 'https://www.paytop.com/',
  //   image: paytop,
  //   alt: 'Logo paytop'
  // },
  {
    url: 'https://www.westernunion.com/be/fr/home.html',
    image: western,
    alt: 'Logo western'
  },
  {
    url: 'https://www.worldremit.com/en',
    image: worldremit,
    alt: 'Logo worldremit'
  },
  {
    url: 'https://www.jubaexpress.com/',
    image: juba,
    alt: 'Logo JUBA'
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

const openLink = (link)=>{
  window.open(link, 'blank');
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