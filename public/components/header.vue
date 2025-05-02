<template>
  <header class="fixed bg-white px-5 py-10 lg:px-14 flex justify-between items-center w-full flex-row border-b z-50 h-16">
    <!-- Logo avec position relative pour ne pas perturber le flux -->
<!--    <div class="relative z-10 flex items-center">-->
<!--      <div class="flex items-center">-->
<!--        <img :src="logo" alt="Logo" class="h-16 w-auto object-contain mr-2">-->
<!--      </div>-->
<!--    </div>-->
    <div class="relative text-xl font-bold text-blue-600 cursor-pointer h-20 flex z-50" @click="router.push('/')">
      <img :src="logo" alt="Logo" class="object-scale-down">
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
        <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownAboutUs" @mouseleave="closeDropdown1">
          <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"
              :class="[$route.name === 'values' ? activeClass : inactiveClass]"
          >
            Qui sommes-nous ?
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="round"
                  stroke-linejoin="round">
              <path v-if="open" d="M9 9l6 8l7 -8" />
              <path v-if="close" d="M9 18l6 -8l7 8" />
            </svg>
            <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
          </h2>
        </div>

        <!-- Menu déroulant -->
        <div v-if="isDropdownOpen1" class="absolute right-0 mt-12 min-w-72 bg-white rounded-lg shadow-lg p-5 border z-50"
             @mouseenter="toggleDropdownAboutUs"
             @mouseleave="closeDropdown1"
        >
          <div class="py-1">
            <div class="flex items-center hover:text-green-600"   :class="[$route.name === '#' ? activeClass : inactiveClass]">
              <h1 class="text-2xl">🤍</h1>
              <router-link to="/values" class="flex flex-col font-semibold text-lg px-5 pb-2"
                           @click="closeAndScroll1"
              >
                <h2 class="group relative">Nos valeurs
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600"  :class="[$route.name === '#' ? activeClass : inactiveClass]">
              <img :src="briefcase" alt="briefcase" class="h-5 w-5">

              <router-link to="values" class="flex flex-col font-semibold text-lg px-5 py-2"
                           @click="closeAndScroll2"
              >
                <h2 class="relative group">Nos atouts
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Culture de la performance </span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600" :class="[$route.name === '#' ? activeClass : inactiveClass]">
              <img :src="graphUp" alt="graphUp" class="h-5 w-5">
              <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                           @click="closeAndScroll3"
              >
                <h2 class="group relative">Notre vision
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Miser sur l'avenir </span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600" :class="[$route.name === '#' ? activeClass : inactiveClass]">
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
                           @click="closeAndScroll4"
              >
                <h2 class="relative group">Notre mission
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Renforcer la solidarité</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-700 flex relative">
        <div class="flex items-center space-x-2 cursor-pointer" @mouseover=toggleDropdownProducts @mouseleave="closeDropdown2">
          <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"
              :class="[$route.name === 'products' ? activeClass : inactiveClass]"
          >
            Nos produits
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="round"
                  stroke-linejoin="round">
              <path v-if="open2" d="M9 9l6 8l7 -8" />
              <path v-if="close2" d="M9 18l6 -8l7 8" />
            </svg>
            <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>

        <!-- Menu déroulant -->
        <div v-if="isDropdownOpen2" class="absolute right-0 mt-12 min-w-72 bg-white rounded-md shadow-lg border p-5 z-50"
             @mouseenter="toggleDropdownProducts"
             @mouseleave="closeDropdown2"
        >
          <div class="py-1">
            <div class="flex items-center hover:text-green-600">
              <img :src="personCircle" alt="personCircle" class="h-5 w-5">
              <router-link to="products" class="flex flex-col font-semibold text-lg px-5 pb-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollProducts1"
              >
                <h2 class="group relative">Compte chèque
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Particulier, entreprise & salaire</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="wallet2" alt="wallet2" class="h-5 w-5">
              <router-link to="products" class="flex flex-col font-semibold text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollProducts2"
              >
                <h2 class="relative group">Bons de caisse
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Bon plan pour votre épargne</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="database" alt="database-up" class="h-5 w-5">
              <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollProducts3"
              >
                <h2 class="group relative">Dépôt à terme
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Fructifier votre argent</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="collection" alt="collection" class="h-5 w-5">
              <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollProducts4"
              >
                <h2 class="relative group">Compte d'épargne
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Livret & Association</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="piggy" alt="piggy" class="h-5 w-5">
              <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollProducts5"
              >
                <h2 class="group relative">Collecte journalière
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Nous suivre au quotidien</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="personCard" alt="personCard" class="h-5 w-5">
              <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollProducts6"
              >
                <h2 class="relative group">Carte VISA
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Vous ouvrir au monde</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-700 flex relative">
        <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownSolutions" @mouseleave="closeDropdown3">
          <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"
              :class="[$route.name === 'solutions' ? activeClass : inactiveClass]"
          >
            Nos solutions
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="round"
                  stroke-linejoin="round">
              <path v-if="open3" d="M9 9l6 8l7 -8" />
              <path v-if="close3" d="M9 18l6 -8l7 8" />
            </svg>
            <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>

        <!-- Menu déroulant -->
        <div v-if="isDropdownOpen3" class="absolute right-0 mt-12 min-w-[385px] bg-white rounded-md shadow-lg border p-5 z-50"
             @mouseenter="toggleDropdownSolutions"
             @mouseleave="closeDropdown3"
        >
          <div class="py-1">
            <div class="flex items-center hover:text-green-600">
              <img :src="smile" alt="smile emoji" class="h-5 w-5">
              <router-link to="solutions" class="flex flex-col font-medium text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollSolutions1"
              >
                <h1 class="relative group">Financement de projets
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h1>
                <span class="text-xs text-gray-500">Sur mésure pour vos projets</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="heart" alt="heart emoji" class="h-5 w-5">
              <router-link to="solutions" class="flex flex-col justify-start font-medium text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollSolutions2"
              >
                <h2 class="group relative">Financement de la trésorerie
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Financement des besoins de trésorerie ponctuels</span>
              </router-link>
            </div>
            <div class="flex items-center hover:text-green-600">
              <img :src="sunglasses" alt="sunglasses emoji" class="h-5 w-5">
              <router-link to="solutions" class="flex flex-col justify-start font-medium text-lg px-5 py-2"
                           :class="[$route.name === '#' ? activeClass : inactiveClass]"
                           @click="closeAndScrollSolutions3"
              >
                <h2 class="relative group">Financement Import/Export
                  <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <span class="text-xs text-gray-500">Financer votre développement international</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" hidden lg:flex justify-between gap-x-2">
      <button type="button" class="flex justify-center items-center text-lg  px-3 font-semibold border rounded-lg hover:border-blue-950"
              :class="[$route.name === 'contact' ? activeContact : 'bg-gray-100']"
              @click="router.push('/contact')">
        Contact
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5
           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
        </svg>
      </button>
      <button type="button"
              class="text-lg bg-blue-950 p-2 text-white font-semibold border border-white rounded-lg
               hover:text-green-600 hover:border-green-500"
              @click="contact"
      >
        Ouvrir un compte
      </button>
    </div>

    <!-- Drawer (Menu latéral pour mobile) -->
    <transition name="slide">
      <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
        <div class="w-full max-w-[300px] p-5 shadow-lg transform transition-all bg-blue-950 border-r border-white">
          <button class="py-2 text-gray-700 w-full flex justify-between items-center" @click="isDrawerOpen = false">
            <img :src="logoDrewa" alt="logo Cresaf drewa" class="w-16">
            <span class="drop-shadow-[0_0_2px_blue] uppercase font-bold text-3xl text-white">cresaf</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="text-white hover:text-black">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
          <nav class="flex flex-col space-y-4 py-5">
            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3
            border-b items-center"
                         :class="[$route.name === 'values' ? activeDrawerClass : 'text-white']"
                         @click="OpenAboutUs"
            >
              <span>Qui sommes-nous ?</span>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                <path v-if="viewaboutUs" d="M3 16l10 -10l10 10" />
                <path v-if="viewaboutUs2" d="M2 9l10 11l10 -12" />
              </svg>
            </router-link>
            <div v-if="aboutUs" class="w-full flex flex-col">
              <div class="w-full flex items-center">
                <h1 class="text-2xl">🤍</h1>
                <router-link to="/values" class="flex flex-col text-white font-semibold hover:text-green-500 text-base px-5 pb-2"
                             @click="closeDrawerAndScroll1"
                >
                  <h1>Nos valeurs</h1>
                  <span class="text-xs text-gray-400">Confiance, Intégrité et solidarité </span>
                </router-link>
              </div>
              <div class="w-full flex items-center">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
                <router-link to="values" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"
                             @click="closeDrawerAndScroll2"
                >
                  <h1>Nos atouts</h1>
                  <span class="text-xs text-gray-400">Culture de la performance </span>
                </router-link>
              </div>
              <div class="w-full flex items-center">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
                </svg>
                <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                             @click="closeDrawerAndScroll3"
                >
                  <h1>Notre vision</h1>
                  <span class="text-xs text-gray-400">Miser sur l'avenir </span>
                </router-link>
              </div>
              <div class="w-full flex items-center">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                             @click="closeDrawerAndScroll4"
                >
                  <h1>Notre mission</h1>
                  <span class="text-xs text-gray-400">Renforcer la solidarité</span>
                </router-link>
              </div>
            </div>
            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3 border-b
            items-center"
                         :class="[$route.name === 'products' ? activeDrawerClass : 'text-white']"
                         @click="OpenProducts"
            >
              <span>Nos produits</span>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                <path v-if="viewproducts" d="M3 16l10 -10l10 10" />
                <path v-if="viewproducts2" d="M2 9l10 11l10 -12" />
              </svg>
            </router-link>
            <div v-if="products" class="w-full flex flex-col">
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollProducts1"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 pb-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h2>Compte chèque</h2>
                  <span class="text-xs text-gray-400">Particulier, entreprise & salaire</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollProducts2"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                      stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" />
                </svg>
                <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h2>Bon de caisse</h2>
                  <span class="text-xs text-gray-400">Bon plan pour votre épargne</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollProducts3"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <router-link to="#" class="flex flex-col justify-start text-white font-semibold hover:text-green-500 text-base px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h2>Dépôt à terme</h2>
                  <span class="text-xs text-gray-400">Fructifier votre argent</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollProducts4"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h2>Compte d'épargne</h2>
                  <span class="text-xs text-gray-400">Livret & Association</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollProducts5"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white opacity-60">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" />
                  <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008
              6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1
             -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />
                </svg>
                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h2>Collecte journalière</h2>
                  <span class="text-xs text-gray-400">Nous suivre au quotidien</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollProducts6"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h2>Carte VISA</h2>
                  <span class="text-xs text-gray-400">Vous ouvrir au monde</span>
                </router-link>
              </div>
            </div>
            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3 border-b
            items-center"
                         :class="[$route.name === 'solutions' ? activeDrawerClass : 'text-white']"
                         @click="OpenSolutions"
            >
              <span>Nos solutions</span>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                <path v-if="viewsolutions" d="M3 16l10 -10l10 10" />
                <path v-if="viewsolutions2" d="M2 9l10 11l10 -12" />
              </svg>
            </router-link>
            <div v-if="solutions" class="w-full flex flex-col">
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollSolutions1"
              >
                <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Emoji--Streamline-Iconoir" height="24" width="24">
                  <path d="M7.5 14.337187499999999C3.7239375000000003 14.337187499999999 0.6628125 11.276062499999998 0.6628125 7.5 0.6628125
              3.7239375000000003 3.7239375000000003 0.6628125 7.5 0.6628125c3.7760624999999997 0 6.837187500000001 3.061125 6.837187500000001
              6.837187500000001 0 3.7760624999999997 -3.061125 6.837187500000001 -6.837187500000001 6.837187500000001Z" stroke="#d9d9d9"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M10.576749999999999 9.2093125S9.551187500000001
                    10.576749999999999 7.5 10.576749999999999s-3.0767499999999997 -1.3674374999999999 -3.0767499999999997
                     -1.3674374999999999" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                  <path d="M9.892999999999999 5.4488125c-0.18875 0 -0.3418125 -0.1530625 -0.3418125 -0.3418125s0.1530625 -0.34187500000000004
              0.3418125 -0.34187500000000004 0.34187500000000004 0.1530625 0.34187500000000004 0.34187500000000004 -0.1530625 0.3418125
              -0.34187500000000004 0.3418125Z" fill="#d9d9d9" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                  <path d="M5.107 5.4488125c-0.1888125 0 -0.34187500000000004 -0.1530625 -0.34187500000000004 -0.3418125s0.1530625 -0.34187500000000004
              0.34187500000000004 -0.34187500000000004 0.3418125 0.1530625 0.3418125 0.34187500000000004 -0.1530625 0.3418125 -0.3418125 0.3418125Z"
                        fill="#d9d9d9" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                </svg>
                <router-link to="#" class="flex flex-col text-white font-bold text-base hover:text-green-500 px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h1>Financement de projets</h1>
                  <span class="text-xs text-gray-400">Sur mésure pour vos projets</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollSolutions2"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
                </svg>
                <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h1>Financement de la trésorerie</h1>
                  <span class="text-xs text-gray-400">Financement des besoins de trésorerie ponctuels</span>
                </router-link>
              </div>
              <div class="w-full flex items-center"
                   @click="closeDrawerAndScrollSolutions3"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                >
                  <h1>Financement Import / Export</h1>
                  <span class="text-xs text-gray-400">Financer votre développement international</span>
                </router-link>
              </div>
            </div>
          </nav>
          <button type="button"
                  class="flex justify-center items-center gap-2 text-lg bg-blue-950 p-2 mt-2 font-semibold border border-white rounded-lg hover:text-green-600 hover:border-green-500"
                  :class="[$route.name === 'contact' ? 'border-green-600 text-green-600' : 'text-white']"
                  @click="router.push('/contact')"
          >
            Contactez-nous
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5
           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
            </svg>
          </button>

        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import {ref, nextTick} from 'vue';
import {useRouter} from "vue-router"
const router = useRouter()
import Logo from "@/assets/images/cresaf.png"
// import Logo from "@/assets/images/logo.png"
// import LogoDrewa from "@/assets/images/cresaf-white.png";
import LogoDrewa from "@/assets/images/logo-cresaf.png";

import database from "@/assets/images/svg/database-up.svg"
import briefcase from "@/assets/images/svg/briefcase.svg"
import graphUp from "@/assets/images/svg/graph-up-arrow.svg"
import personCircle from "@/assets/images/svg/person-circle.svg"
import wallet2 from "@/assets/images/svg/wallet2.svg"
import collection from "@/assets/images/svg/collection.svg"
import piggy from "@/assets/images/svg/piggy-bank.svg"
import personCard from "@/assets/images/svg/person-vcard.svg"
import smile from "@/assets/images/svg/emoji-smile.svg"
import heart from "@/assets/images/svg/emoji-heart-eyes.svg"
import sunglasses from "@/assets/images/svg/emoji-sunglasses.svg"
// import Logo from "@/assets/images/svg/logo.svg"

const isDropdownOpen1 = ref(false)
const isDropdownOpen2 = ref(false)
const isDropdownOpen3 = ref(false)
const aboutUs = ref(false)
const products = ref(false)
const solutions = ref(false)
const viewaboutUs = ref(false)
const viewaboutUs2 = ref(true);
const viewproducts = ref(false)
const viewproducts2 = ref(true);
const viewsolutions = ref(false)
const viewsolutions2 = ref(true);
const open = ref(true);
const open2 = ref(true);
const open3 = ref(true);
const close = ref(false);
const close2 = ref(false);
const close3 = ref(false);

let timeout = null;
const logo = Logo;
const logoDrewa = LogoDrewa;

const closeDrawerAndScroll1 = () =>{
  isDrawerOpen.value = false
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeDrawerAndScroll2 = () =>{
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeDrawerAndScroll3 = () =>{
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}
const closeDrawerAndScroll4 = () =>{
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section4'})
    }, 100)
  })
}

const closeDrawerAndScrollProducts1 = () => {
  router.push('products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts2 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts3 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts4 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section4'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts5 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section5'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts6 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section6'})
    }, 100)
  })
}

const closeDrawerAndScrollSolutions1 = () => {
  router.push('/solutions')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeDrawerAndScrollSolutions2 = () => {
  router.push('/solutions')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeDrawerAndScrollSolutions3 = () => {
  router.push('/solutions')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}

const closeAndScroll1 = () =>{
  closeDropdown1()
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id: 'section1'})
    },100)
  })
}
const closeAndScroll2 = () =>{
  closeDropdown1()
  nextTick(() => {
    setTimeout(() =>{
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeAndScroll3 = () =>{
  closeDropdown1()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id : 'section3'})
    }, 100)
  })
}
const closeAndScroll4 = () =>{
  closeDropdown1()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id : 'section4'})
    }, 100)
  })
}

const closeAndScrollProducts1 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section1'})
    }, 100)
  })
}
const closeAndScrollProducts2 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section2'})
    }, 100)
  })
}
const closeAndScrollProducts3 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section3'})
    }, 100)
  })
}
const closeAndScrollProducts4 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section4'})
    }, 100)
  })
}
const closeAndScrollProducts5 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section5'})
    }, 100)
  })
}
const closeAndScrollProducts6 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section6'})
    }, 100)
  })
}

const closeAndScrollSolutions1 = () => {
  closeDropdown3()
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeAndScrollSolutions2 = () => {
  closeDropdown3()
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeAndScrollSolutions3 = () => {
  closeDropdown3()
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}

const toggleDropdownAboutUs = () => {
  clearTimeout(timeout);
  isDropdownOpen1.value = true
  isDropdownOpen2.value = false
  isDropdownOpen3.value = false
  close.value = true
  close2.value = false
  close3.value = false
  open.value = false
  open2.value = true
  open3.value = true
}
const toggleDropdownProducts = () => {
  clearTimeout(timeout);
  isDropdownOpen2.value = true
  isDropdownOpen1.value = false
  isDropdownOpen3.value = false
  open2.value = false
  open.value = true
  open3.value = true
  close2.value = true
  close.value = false
  close3.value = false
}
const toggleDropdownSolutions = () => {
  clearTimeout(timeout)
  isDropdownOpen3.value = true
  isDropdownOpen1.value = false
  isDropdownOpen2.value = false
  open3.value = false
  open.value = true
  open2.value = true
  close3.value = true
  close.value = false
  close2.value = false
}

const closeDropdown1 = () =>{
  timeout = setTimeout( ()=>{
    isDropdownOpen1.value = false
    open.value = true
    close.value = false
  }, 100);
}
const closeDropdown2 = () =>{
  timeout = setTimeout(() =>{
    isDropdownOpen2.value = false
    open2.value = true
    close2.value = false
  }, 100);

}
const closeDropdown3 = () =>{
  timeout = setTimeout(() => {
    isDropdownOpen3.value = false
    open3.value = true
    close3.value = false
  }, 100);

}

const isDrawerOpen = ref(false);

const activeClass = ref(' border-b border-blue-950',)
const activeContact = ref('border-2 border-blue-950',)
const activeDrawerClass = ref('text-green-600')
const inactiveClass = ref('',)

const OpenAboutUs = () => {
  aboutUs.value = !aboutUs.value
  products.value = false
  solutions.value = false
  viewaboutUs.value = !viewaboutUs.value
  viewaboutUs2.value = !viewaboutUs2.value
}
const OpenProducts = () => {
  products.value = !products.value
  aboutUs.value = false
  solutions.value = false
  viewproducts.value = !viewproducts.value
  viewproducts2.value = !viewproducts2.value
}
const OpenSolutions = () => {
  solutions.value = !solutions.value
  aboutUs.value = false
  products.value = false
  viewsolutions.value = !viewsolutions.value
  viewsolutions2.value = !viewsolutions2.value
}

const scrollTo = ({id}: { id: any })=> {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const contact = () => {
  const contactValue = 237658794995
  window.open(`https://api.whatsapp.com/send/?phone=${contactValue}&text&type=phone_number&app_absent=0`, "_blank");
}

// const handleLogout =  () => {
//   try {
//     // Appel API pour la déconnexion
//     console.log('Déconnexion');
//   } catch (error) {
//     console.error('Erreur lors de la déconnexion :', error) ;
//   }
// };

// const closeIsDrawerOpen = () =>{
//   isDrawerOpen.value = true
// }

// onMounted(() => {
//   document.addEventListener('click', closeIsDrawerOpen)
// })

// Nettoyer l'écouteur d'événement lors de la destruction du composant
// onUnmounted(() => {
//   document.removeEventListener('click', closeIsDrawerOpen)
// })

</script>

<!--<template>-->
<!--  <header class="fixed bg-white px-5 py-2 lg:pb-5 lg:px-14 flex justify-between items-center w-full flex-row border-b z-50">-->
<!--    <div class="absolute text-xl font-bold text-blue-600 cursor-pointer h-[4rem] w-[4rem] z-50" @click="router.push('/')">-->
<!--      <img :src="logo" alt="Logo" class="object-scale-down">-->
<!--    </div>-->
<!--    <div></div>-->

<!--    &lt;!&ndash; Bouton pour afficher le menu mobile &ndash;&gt;-->
<!--    <button class="lg:hidden text-gray-700" @click="isDrawerOpen = !isDrawerOpen">-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"-->
<!--           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--        <path d="M3 12h18M3 6h18M3 18h18"></path>-->
<!--      </svg>-->
<!--    </button>-->

<!--    <div class="hidden lg:flex justify-between w-full max-w-xl">-->
<!--    <div class="text-sm text-gray-700 flex relative">-->
<!--      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownAboutUs" @mouseleave="closeDropdown1">-->
<!--        <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"-->
<!--            :class="[$route.name === 'values' ? activeClass : inactiveClass]"-->
<!--        >-->
<!--          Qui sommes-nous ?-->
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="currentColor" stroke-width="1" stroke-linecap="round"-->
<!--                stroke-linejoin="round">-->
<!--            <path v-if="open" d="M9 9l6 8l7 -8" />-->
<!--            <path v-if="close" d="M9 18l6 -8l7 8" />-->
<!--          </svg>-->
<!--          <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-300 group-hover:w-full"></span>-->
<!--        </h2>-->
<!--      </div>-->

<!--      &lt;!&ndash; Menu déroulant &ndash;&gt;-->
<!--      <div v-if="isDropdownOpen1" class="absolute right-0 mt-12 min-w-72 bg-white rounded-lg shadow-lg p-5 border z-50"-->
<!--           @mouseenter="toggleDropdownAboutUs"-->
<!--           @mouseleave="closeDropdown1"-->
<!--      >-->
<!--        <div class="py-1">-->
<!--          <div class="flex items-center hover:text-green-600"   :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <h1 class="text-2xl">🤍</h1>-->
<!--            <router-link to="/values" class="flex flex-col font-semibold text-lg px-5 pb-2"-->
<!--                         @click="closeAndScroll1"-->
<!--            >-->
<!--              <h2 class="group relative">Nos valeurs-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600"  :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <img :src="briefcase" alt="briefcase" class="h-5 w-5">-->

<!--            <router-link to="values" class="flex flex-col font-semibold text-lg px-5 py-2"-->
<!--                         @click="closeAndScroll2"-->
<!--            >-->
<!--              <h2 class="relative group">Nos atouts-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Culture de la performance </span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600" :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <img :src="graphUp" alt="graphUp" class="h-5 w-5">-->
<!--            <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         @click="closeAndScroll3"-->
<!--            >-->
<!--              <h2 class="group relative">Notre vision-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Miser sur l'avenir </span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600" :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                  class="text-gray-400">-->
<!--              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--            </svg>-->
<!--            <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         @click="closeAndScroll4"-->
<!--            >-->
<!--             <h2 class="relative group">Notre mission-->
<!--               <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--             </h2>-->
<!--              <span class="text-xs text-gray-500">Renforcer la solidarité</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="text-sm text-gray-700 flex relative">-->
<!--      <div class="flex items-center space-x-2 cursor-pointer" @mouseover=toggleDropdownProducts @mouseleave="closeDropdown2">-->
<!--        <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"-->
<!--            :class="[$route.name === 'products' ? activeClass : inactiveClass]"-->
<!--        >-->
<!--          Nos produits-->
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="currentColor" stroke-width="1" stroke-linecap="round"-->
<!--                stroke-linejoin="round">-->
<!--            <path v-if="open2" d="M9 9l6 8l7 -8" />-->
<!--            <path v-if="close2" d="M9 18l6 -8l7 8" />-->
<!--          </svg>-->
<!--          <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--        </h2>-->
<!--      </div>-->

<!--      &lt;!&ndash; Menu déroulant &ndash;&gt;-->
<!--      <div v-if="isDropdownOpen2" class="absolute right-0 mt-12 min-w-72 bg-white rounded-md shadow-lg border p-5 z-50"-->
<!--           @mouseenter="toggleDropdownProducts"-->
<!--           @mouseleave="closeDropdown2"-->
<!--      >-->
<!--        <div class="py-1">-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="personCircle" alt="personCircle" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col font-semibold text-lg px-5 pb-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts1"-->
<!--            >-->
<!--              <h2 class="group relative">Compte chèque-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Particulier, entreprise & salaire</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="wallet2" alt="wallet2" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts2"-->
<!--            >-->
<!--              <h2 class="relative group">Bons de caisse-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Bon plan pour votre épargne</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="database" alt="database-up" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts3"-->
<!--            >-->
<!--              <h2 class="group relative">Dépôt à terme-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Fructifier votre argent</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="collection" alt="collection" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts4"-->
<!--            >-->
<!--              <h2 class="relative group">Compte d'épargne-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Livret & Association</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="piggy" alt="piggy" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts5"-->
<!--            >-->
<!--              <h2 class="group relative">Collecte journalière-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Nous suivre au quotidien</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="personCard" alt="personCard" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts6"-->
<!--            >-->
<!--              <h2 class="relative group">Carte VISA-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Vous ouvrir au monde</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="text-sm text-gray-700 flex relative">-->
<!--      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownSolutions" @mouseleave="closeDropdown3">-->
<!--        <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"-->
<!--            :class="[$route.name === 'solutions' ? activeClass : inactiveClass]"-->
<!--        >-->
<!--          Nos solutions-->
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="currentColor" stroke-width="1" stroke-linecap="round"-->
<!--                stroke-linejoin="round">-->
<!--            <path v-if="open3" d="M9 9l6 8l7 -8" />-->
<!--            <path v-if="close3" d="M9 18l6 -8l7 8" />-->
<!--          </svg>-->
<!--          <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--        </h2>-->
<!--      </div>-->

<!--      &lt;!&ndash; Menu déroulant &ndash;&gt;-->
<!--      <div v-if="isDropdownOpen3" class="absolute right-0 mt-12 min-w-[385px] bg-white rounded-md shadow-lg border p-5 z-50"-->
<!--           @mouseenter="toggleDropdownSolutions"-->
<!--           @mouseleave="closeDropdown3"-->
<!--      >-->
<!--        <div class="py-1">-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="smile" alt="smile emoji" class="h-5 w-5">-->
<!--            <router-link to="solutions" class="flex flex-col font-medium text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollSolutions1"-->
<!--            >-->
<!--              <h1 class="relative group">Financement de projets-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h1>-->
<!--              <span class="text-xs text-gray-500">Sur mésure pour vos projets</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="heart" alt="heart emoji" class="h-5 w-5">-->
<!--            <router-link to="solutions" class="flex flex-col justify-start font-medium text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollSolutions2"-->
<!--            >-->
<!--              <h2 class="group relative">Financement de la trésorerie-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Financement des besoins de trésorerie ponctuels</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="sunglasses" alt="sunglasses emoji" class="h-5 w-5">-->
<!--            <router-link to="solutions" class="flex flex-col justify-start font-medium text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollSolutions3"-->
<!--            >-->
<!--              <h2 class="relative group">Financement Import/Export-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Financer votre développement international</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    </div>-->
<!--    <div class=" hidden lg:flex justify-between gap-x-2">-->
<!--      <button type="button" class="flex justify-center items-center text-lg  px-3 font-semibold border rounded-lg hover:border-blue-950"-->
<!--              :class="[$route.name === 'contact' ? activeContact : 'bg-gray-100']"-->
<!--              @click="router.push('/contact')">-->
<!--        Contact-->
<!--        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">-->
<!--          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5-->
<!--           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />-->
<!--        </svg>-->
<!--      </button>-->
<!--      <button type="button"-->
<!--              class="text-lg bg-blue-950 p-2 text-white font-semibold border border-white rounded-lg-->
<!--               hover:text-green-600 hover:border-green-500"-->
<!--              @click="contact"-->
<!--      >-->
<!--        Ouvrir un compte-->
<!--      </button>-->
<!--    </div>-->

<!--    &lt;!&ndash; Drawer (Menu latéral pour mobile) &ndash;&gt;-->
<!--    <transition name="slide">-->
<!--      <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex">-->
<!--        <div class="w-full max-w-[300px] p-5 shadow-lg transform transition-all bg-blue-950 border-r border-white">-->
<!--          <button class="py-2 text-gray-700 w-full flex justify-between items-center" @click="isDrawerOpen = false">-->
<!--            <img :src="logoDrewa" alt="logo Cresaf drewa" class="w-16">-->
<!--             <span class="drop-shadow-[0_0_2px_blue] uppercase font-bold text-3xl text-white">cresaf</span>-->

<!--            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"-->
<!--                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--            class="text-white hover:text-black">-->
<!--              <path d="M18 6L6 18M6 6l12 12"></path>-->
<!--            </svg>-->
<!--          </button>-->
<!--          <nav class="flex flex-col space-y-4 py-5">-->
<!--            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3-->
<!--            border-b items-center"-->
<!--                         :class="[$route.name === 'values' ? activeDrawerClass : 'text-white']"-->
<!--                         @click="OpenAboutUs"-->
<!--            >-->
<!--             <span>Qui sommes-nous ?</span>-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor" stroke-width="2" stroke-linecap="round"-->
<!--                    stroke-linejoin="round">-->
<!--                <path v-if="viewaboutUs" d="M3 16l10 -10l10 10" />-->
<!--                <path v-if="viewaboutUs2" d="M2 9l10 11l10 -12" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--            <div v-if="aboutUs" class="w-full flex flex-col">-->
<!--              <div class="w-full flex items-center">-->
<!--              <h1 class="text-2xl">🤍</h1>-->
<!--              <router-link to="/values" class="flex flex-col text-white font-semibold hover:text-green-500 text-base px-5 pb-2"-->
<!--                           @click="closeDrawerAndScroll1"-->
<!--              >-->
<!--                <h1>Nos valeurs</h1>-->
<!--                <span class="text-xs text-gray-400">Confiance, Intégrité et solidarité </span>-->
<!--              </router-link>-->
<!--            </div>-->
<!--              <div class="w-full flex items-center">-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                    class="text-gray-400">-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />-->
<!--                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />-->
<!--                <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />-->
<!--              </svg>-->
<!--              <router-link to="values" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"-->
<!--                           @click="closeDrawerAndScroll2"-->
<!--              >-->
<!--                <h1>Nos atouts</h1>-->
<!--                <span class="text-xs text-gray-400">Culture de la performance </span>-->
<!--              </router-link>-->
<!--            </div>-->
<!--              <div class="w-full flex items-center">-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M3 21l17 -17" /><path d="M3 3v18h18" />-->
<!--                </svg>-->
<!--                <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             @click="closeDrawerAndScroll3"-->
<!--                >-->
<!--                  <h1>Notre vision</h1>-->
<!--                  <span class="text-xs text-gray-400">Miser sur l'avenir </span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center">-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             @click="closeDrawerAndScroll4"-->
<!--                >-->
<!--                  <h1>Notre mission</h1>-->
<!--                  <span class="text-xs text-gray-400">Renforcer la solidarité</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3 border-b-->
<!--            items-center"-->
<!--                         :class="[$route.name === 'products' ? activeDrawerClass : 'text-white']"-->
<!--                         @click="OpenProducts"-->
<!--            >-->
<!--             <span>Nos produits</span>-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor" stroke-width="2" stroke-linecap="round"-->
<!--                    stroke-linejoin="round">-->
<!--                <path v-if="viewproducts" d="M3 16l10 -10l10 10" />-->
<!--                <path v-if="viewproducts2" d="M2 9l10 11l10 -12" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--            <div v-if="products" class="w-full flex flex-col">-->
<!--              <div class="w-full flex items-center"-->
<!--                   @click="closeDrawerAndScrollProducts1"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />-->
<!--                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />-->
<!--                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 pb-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Compte chèque</h2>-->
<!--                  <span class="text-xs text-gray-400">Particulier, entreprise & salaire</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts2"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"-->
<!--                      stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Bon de caisse</h2>-->
<!--                  <span class="text-xs text-gray-400">Bon plan pour votre épargne</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts3"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col justify-start text-white font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Dépôt à terme</h2>-->
<!--                  <span class="text-xs text-gray-400">Fructifier votre argent</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts4"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Compte d'épargne</h2>-->
<!--                  <span class="text-xs text-gray-400">Livret & Association</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts5"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white opacity-60">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" />-->
<!--                  <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008-->
<!--              6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1-->
<!--             -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Collecte journalière</h2>-->
<!--                  <span class="text-xs text-gray-400">Nous suivre au quotidien</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts6"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Carte VISA</h2>-->
<!--                  <span class="text-xs text-gray-400">Vous ouvrir au monde</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3 border-b-->
<!--            items-center"-->
<!--                         :class="[$route.name === 'solutions' ? activeDrawerClass : 'text-white']"-->
<!--                         @click="OpenSolutions"-->
<!--            >-->
<!--             <span>Nos solutions</span>-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor" stroke-width="2" stroke-linecap="round"-->
<!--                    stroke-linejoin="round">-->
<!--                <path v-if="viewsolutions" d="M3 16l10 -10l10 10" />-->
<!--                <path v-if="viewsolutions2" d="M2 9l10 11l10 -12" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--            <div v-if="solutions" class="w-full flex flex-col">-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollSolutions1"-->
<!--              >-->
<!--                <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Emoji&#45;&#45;Streamline-Iconoir" height="24" width="24">-->
<!--                  <path d="M7.5 14.337187499999999C3.7239375000000003 14.337187499999999 0.6628125 11.276062499999998 0.6628125 7.5 0.6628125-->
<!--              3.7239375000000003 3.7239375000000003 0.6628125 7.5 0.6628125c3.7760624999999997 0 6.837187500000001 3.061125 6.837187500000001-->
<!--              6.837187500000001 0 3.7760624999999997 -3.061125 6.837187500000001 -6.837187500000001 6.837187500000001Z" stroke="#d9d9d9"-->
<!--                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M10.576749999999999 9.2093125S9.551187500000001-->
<!--                    10.576749999999999 7.5 10.576749999999999s-3.0767499999999997 -1.3674374999999999 -3.0767499999999997-->
<!--                     -1.3674374999999999" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>-->
<!--                  <path d="M9.892999999999999 5.4488125c-0.18875 0 -0.3418125 -0.1530625 -0.3418125 -0.3418125s0.1530625 -0.34187500000000004-->
<!--              0.3418125 -0.34187500000000004 0.34187500000000004 0.1530625 0.34187500000000004 0.34187500000000004 -0.1530625 0.3418125-->
<!--              -0.34187500000000004 0.3418125Z" fill="#d9d9d9" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>-->
<!--                  <path d="M5.107 5.4488125c-0.1888125 0 -0.34187500000000004 -0.1530625 -0.34187500000000004 -0.3418125s0.1530625 -0.34187500000000004-->
<!--              0.34187500000000004 -0.34187500000000004 0.3418125 0.1530625 0.3418125 0.34187500000000004 -0.1530625 0.3418125 -0.3418125 0.3418125Z"-->
<!--                        fill="#d9d9d9" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white font-bold text-base hover:text-green-500 px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h1>Financement de projets</h1>-->
<!--                  <span class="text-xs text-gray-400">Sur mésure pour vos projets</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--                   @click="closeDrawerAndScrollSolutions2"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M3 21l17 -17" /><path d="M3 3v18h18" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h1>Financement de la trésorerie</h1>-->
<!--                  <span class="text-xs text-gray-400">Financement des besoins de trésorerie ponctuels</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--                   @click="closeDrawerAndScrollSolutions3"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h1>Financement Import / Export</h1>-->
<!--                  <span class="text-xs text-gray-400">Financer votre développement international</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--          </nav>-->
<!--            <button type="button"-->
<!--                    class="flex justify-center items-center gap-2 text-lg bg-blue-950 p-2 mt-2 font-semibold border border-white rounded-lg hover:text-green-600 hover:border-green-500"-->
<!--                    :class="[$route.name === 'contact' ? 'border-green-600 text-green-600' : 'text-white']"-->
<!--                    @click="router.push('/contact')"-->
<!--            >-->
<!--              Contactez-nous-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5-->
<!--           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />-->
<!--              </svg>-->
<!--            </button>-->

<!--        </div>-->
<!--      </div>-->
<!--    </transition>-->

<!--  </header>-->

<!--</template>-->