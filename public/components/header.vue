<template>
  <header class="fixed bg-white p-5 lg:py-3 lg:px-14 flex justify-between items-center w-full flex-wrap border-b z-50">
    <div class="text-xl font-bold text-blue-600 cursor-pointer" @click="router.push('/')">
      <img :src="logo" alt="Logo" class="w-40 h-12 ">
    </div>

    <!-- Bouton pour afficher le menu mobile -->
    <button class="lg:hidden text-gray-700" @click="isDrawerOpen = !isDrawerOpen">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18"></path>
      </svg>
    </button>

    <div class="hidden lg:flex justify-between w-full max-w-xl">
    <div class="text-sm text-gray-700 flex relative">
      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdown1" @mouseleave="closeDropdown1">
        <h2 class="hover:text-green-600 lg:text-lg text-xs flex"> Qui sommes-nous ?
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                stroke="currentColor" stroke-width="1" stroke-linecap="round"
                stroke-linejoin="round">
            <path d="M9 9l6 8l7 -8" />
          </svg>
        </h2>
      </div>

      <!-- Menu déroulant -->
      <div v-if="isDropdownOpen1" class="absolute right-0 mt-12 min-w-72 bg-white rounded-lg shadow-lg p-5 border z-50"
           @mouseenter="toggleDropdown1"
           @mouseleave="closeDropdown1"
      >
        <div class="py-1">
          <div class="flex items-center hover:bg-green-100"  :class="[$route.name === 'values' ? activeClass : inactiveClass]">
            <h1 class="text-2xl">🤍</h1>
            <router-link to="/values" class="flex flex-col font-semibold text-lg px-5 pb-2"
                         @click="scrollTo('section1')"
            >
              <h1>Nos valeurs</h1>
              <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100"  :class="[$route.name === '#' ? activeClass : inactiveClass]">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <router-link to="#" class="flex flex-col font-semibold text-lg px-5 py-2"
                         @click="scrollTo('section2')"
            >
              <h1>Nos atouts</h1>
              <span class="text-xs text-gray-500">Culture de la performance </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100" :class="[$route.name === '#' ? activeClass : inactiveClass]">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
            </svg>
            <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                         @click="scrollTo('section3')"
            >
              <h1>Notre vision</h1>
              <span class="text-xs text-gray-500">Misé sur l'avenir </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100" :class="[$route.name === '#' ? activeClass : inactiveClass]">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                         @click="scrollTo('section4')"
            >
             <h1>Notre mission</h1>
              <span class="text-xs text-gray-500">Renforcer la solidarité</span>
            </router-link>

          </div>
        </div>
      </div>
    </div>
    <div class="text-sm text-gray-700 flex relative">
      <div class="flex items-center space-x-2 cursor-pointer" @mouseover=toggleDropdown2 @mouseleave="closeDropdown2">
        <h2 class="hover:text-green-600 lg:text-lg text-xs flex"> Nos produits
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                stroke="currentColor" stroke-width="1" stroke-linecap="round"
                stroke-linejoin="round">
            <path d="M9 9l6 8l7 -8" />
          </svg>
        </h2>
      </div>

      <!-- Menu déroulant -->
      <div v-if="isDropdownOpen2" class="absolute right-0 mt-12 min-w-72 bg-white rounded-md shadow-lg border p-5 z-50"
           @mouseenter="toggleDropdown2"
           @mouseleave="closeDropdown2"
      >
        <div class="py-1">
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
            <router-link to="#" class="flex flex-col font-semibold text-lg px-5 pb-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Compte chèque</h2>
              <span class="text-xs text-gray-500">Particulier, entreprise & salaire</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" />
            </svg>
            <router-link to="#" class="flex flex-col font-semibold text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Bon de caisse</h2>
              <span class="text-xs text-gray-500">Bon plan pour votre épargne</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Dépôt à terme</h2>
              <span class="text-xs text-gray-500">Fructifier votre argent</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Compte d'épargne</h2>
              <span class="text-xs text-gray-500">Livret & Association</span>
            </router-link>

          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" />
              <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008
              6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1
             -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Collecte journalière</h2>
              <span class="text-xs text-gray-500">Vous suivre a quotidien</span>
            </router-link>

          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Carte VISA</h2>
              <span class="text-xs text-gray-500">Vous ouvrir au monde</span>
            </router-link>

          </div>
        </div>
      </div>
    </div>
    <div class="text-sm text-gray-700 flex relative">
      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdown3" @mouseleave="closeDropdown3">
        <h2 class="hover:text-green-600 lg:text-lg text-xs flex"> Nos solutions
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                stroke="currentColor" stroke-width="1" stroke-linecap="round"
                stroke-linejoin="round">
            <path d="M9 9l6 8l7 -8" />
          </svg>
        </h2>
      </div>

      <!-- Menu déroulant -->
      <div v-if="isDropdownOpen3" class="absolute right-0 mt-12 min-w-[385px] bg-white rounded-md shadow-lg border p-5 z-50"
           @mouseenter="toggleDropdown3"
           @mouseleave="closeDropdown3"
      >
        <div class="py-1">
          <div class="flex items-center hover:bg-green-100">
            <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Emoji--Streamline-Iconoir" height="24" width="24">
              <path d="M7.5 14.337187499999999C3.7239375000000003 14.337187499999999 0.6628125 11.276062499999998 0.6628125 7.5 0.6628125
              3.7239375000000003 3.7239375000000003 0.6628125 7.5 0.6628125c3.7760624999999997 0 6.837187500000001 3.061125 6.837187500000001
              6.837187500000001 0 3.7760624999999997 -3.061125 6.837187500000001 -6.837187500000001 6.837187500000001Z" stroke="#000000"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M10.576749999999999 9.2093125S9.551187500000001
                    10.576749999999999 7.5 10.576749999999999s-3.0767499999999997 -1.3674374999999999 -3.0767499999999997
                     -1.3674374999999999" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
              <path d="M9.892999999999999 5.4488125c-0.18875 0 -0.3418125 -0.1530625 -0.3418125 -0.3418125s0.1530625 -0.34187500000000004
              0.3418125 -0.34187500000000004 0.34187500000000004 0.1530625 0.34187500000000004 0.34187500000000004 -0.1530625 0.3418125
              -0.34187500000000004 0.3418125Z" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
              <path d="M5.107 5.4488125c-0.1888125 0 -0.34187500000000004 -0.1530625 -0.34187500000000004 -0.3418125s0.1530625 -0.34187500000000004
              0.34187500000000004 -0.34187500000000004 0.3418125 0.1530625 0.3418125 0.34187500000000004 -0.1530625 0.3418125 -0.3418125 0.3418125Z"
                    fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
            </svg>
            <router-link to="#" class="flex flex-col font-medium text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Financement de projets</h1>
              <span class="text-xs text-gray-500">Sur mésure pour vos projets</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-medium text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Financement de la trésorerie</h1>
              <span class="text-xs text-gray-500">Financement des besoins de trésorerie ponctuels</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-medium text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Financement Import/Export</h1>
              <span class="text-xs text-gray-500">Financer votre développement international</span>
            </router-link>

          </div>
        </div>
      </div>
    </div>
    </div>
    <div class=" hidden lg:flex justify-between gap-x-2">
      <button type="button" class="text-lg bg-gray-100 p-2 font-semibold border rounded-lg" @click="router.push('/login')">
        Connexion
      </button>
      <button type="button" class="text-lg bg-blue-950 p-2 text-white font-semibold border border-white rounded-lg hover:text-green-600 hover:border-green-500">
        Ouvrir un compte
      </button>
    </div>

    <!-- Drawer (Menu latéral pour mobile) -->
    <transition name="slide">
      <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
        <div class="bg-white w-64 p-5 shadow-lg transform transition-all">
          <button class="mb-4 text-gray-700" @click="isDrawerOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
          <nav class="flex flex-col space-y-4">
            <router-link to="#" class="hover:text-green-600">Qui sommes-nous ?</router-link>
            <router-link to="#" class="hover:text-green-600">Nos produits</router-link>
          </nav>
        </div>
      </div>
    </transition>

  </header>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router"
const router = useRouter()
import Logo from "@/assets/images/logo.png"
// import Logo from "@/assets/images/svg/logo.svg"

const isDropdownOpen1 = ref(false)
const isDropdownOpen2 = ref(false)
const isDropdownOpen3 = ref(false)
let timeout = null;
const logo = Logo;

const toggleDropdown1 = () => {
  clearTimeout(timeout);
  isDropdownOpen1.value = true
}
const toggleDropdown2 = () => {
  clearTimeout(timeout);
  isDropdownOpen2.value = true
}
const toggleDropdown3 = () => {
  clearTimeout(timeout)
  isDropdownOpen3.value = true
}

const closeDropdown1 = () =>{
  timeout = setTimeout( ()=>{
    isDropdownOpen1.value = false
  }, 100);
}
const closeDropdown2 = () =>{
  timeout = setTimeout(() =>{
    isDropdownOpen2.value = false
  }, 100);

}
const closeDropdown3 = () =>{
  timeout = setTimeout(() => {
    isDropdownOpen3.value = false
  }, 100);

}

const isDrawerOpen = ref(false);

const activeClass = ref('bg-green-100',)
const inactiveClass = ref('',)

const scrollTo = (id)=> {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// const handleLogout =  () => {
//   try {
//     // Appel API pour la déconnexion
//     console.log('Déconnexion');
//   } catch (error) {
//     console.error('Erreur lors de la déconnexion :', error) ;
//   }
// };

</script>