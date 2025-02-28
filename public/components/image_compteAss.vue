<template>
    <!-- Carousel wrapper -->
    <div
        v-for="(image, index) in images"
        :key="index"
        class="transition-opacity duration-700"
        :class="{'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index}"
    >
      <img
          :src="image"
          class="rounded-lg absolute inset-0 ease-in-out flex items-center justify-center object-cover transition-transform duration-500 hover:scale-105"
          alt="Image Compte Epargne"
      />
    </div>

    <!-- Slider indicators -->
    <div class="absolute lg:top-full top-[21rem] left-1/2 transform -translate-x-1/2 flex space-x-3">
      <button
          v-for="(image, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import Epargne from "@/assets/images/account/epargne1.png"
import Epargne1 from "@/assets/images/account/epargne.png"

const images = ref([Epargne, Epargne1]);
const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// const prevSlide = () => {
//   currentIndex.value =
//       (currentIndex.value - 1 + images.value.length) % images.value.length;
// };

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto-slide every 3 seconds
onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>