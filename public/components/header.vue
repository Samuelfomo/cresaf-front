<template>
  <header class="fixed bg-white p-5 lg:py-3 lg:px-14 flex justify-between items-center w-full flex-wrap">
    <div class="text-xl font-bold text-blue-600">
      <img :src="logo" alt="Logo" class="lg:w-40 lg:h-12 w-16 h-6">
    </div>
    <div class="flex justify-between w-full max-w-xl">
    <div class="text-sm text-gray-700 flex relative">
      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdown1" @mouseleave="closeDropdown1">
        <h2 class="hover:text-green-600 lg:text-lg text-xs flex"> Qui sommes-nous ?
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                stroke="currentColor" stroke-width="1" stroke-linecap="round"
                stroke-linejoin="round"  class="icon icon-tabler cons-tabler-outline icon-tabler-select">
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
          <div class="flex items-center hover:bg-green-100">
            <h1 class="text-2xl">🤍</h1>
            <router-link to="#" class="flex flex-col font-semibold px-5 pb-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Nos valeurs</h1>
              <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <router-link to="#" class="flex flex-col font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Nos atouts</h1>
              <span class="text-xs text-gray-500">Culture de la performance </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-covariate text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Notre vision</h1>
              <span class="text-xs text-gray-500">Misé sur l'avenir </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-file-star text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
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
                stroke-linejoin="round"  class="icon icon-tabler cons-tabler-outline icon-tabler-select">
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
            <router-link to="#" class="flex flex-col font-semibold px-5 pb-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Compte chèque</h2>
              <span class="text-xs text-gray-500">Particulier, entreprise & salaire</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <router-link to="#" class="flex flex-col font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Bon de caisse</h2>
              <span class="text-xs text-gray-500">Bon plan pour votre épagne</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-file-star text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Dépôt à terme</h2>
              <span class="text-xs text-gray-500">Fructifier votre argent</span>
            </router-link>

          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-file-star text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Compte d'épargne</h2>
              <span class="text-xs text-gray-500">Livret & Association</span>
            </router-link>

          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-pig">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" />
              <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008
              6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1
             -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Collecte journalière</h2>
              <span class="text-xs text-gray-500">Vous suivre a quotidien</span>
            </router-link>

          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-file-star text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-semibold px-5 py-2"
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
                stroke-linejoin="round"  class="icon icon-tabler cons-tabler-outline icon-tabler-select">
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
            <h1 class="text-2xl">🤍</h1>
            <router-link to="#" class="flex flex-col font-medium text-lg px-5 pb-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h2>Nos valeurs</h2>
              <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-covariate text-gray-400">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
            </svg>
            <router-link to="#" class="flex flex-col justify-start font-medium text-lg px-5 py-2"
                         :class="[$route.name === '#' ? activeClass : inactiveClass]"
            >
              <h1>Financement de la trésorerie</h1>
              <span class="text-xs text-gray-500">Financement des besions de trésorerie ponctuels</span>
            </router-link>
          </div>
          <div class="flex items-center hover:bg-green-100">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-file-star text-gray-400">
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
    <div class="flex justify-between gap-x-2">
      <button type="button" class="text-lg bg-gray-100 p-3 font-semibold border rounded-lg">
        Connexion
      </button>
      <button type="button" class="text-lg bg-blue-950 p-3 text-white font-semibold border rounded-lg hover:text-green-600 hover:border-green-500">
        Ouvrir un compte
      </button>
    </div>

  </header>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import Logo from "@/assets/images/logo.png"

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

const activeClass = ref(
    'bg-green-100',
)
const inactiveClass = ref(
    '',
)

const handleLogout =  () => {
  try {
    // Appel API pour la déconnexion
    console.log('Déconnexion');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};
</script>