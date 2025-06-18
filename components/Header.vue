<template>
  <header class="bg-blue-600 text-white py-4 border-collapse shadow-md fixed top-0 w-[100%] z-20">
    <div class="container mx-auto flex justify-between items-center">
      <button @click="goTo('/')" class="text-lg font-bold">
        eMetaToul
      </button>
      <nav class="flex-1">
        <ul class="flex justify-center space-x-4">
          <li><button @click="goTo('/equipe')" class="hover:text-gray-300">Équipe</button></li>
          <li><button @click="goTo('/catalogue')" class="hover:text-gray-300 ml-6">Catalogue</button></li>
          <li class="relative" v-click-outside="closeDropdown">
            <button @click="toggleDropdown" class="hover:text-gray-300 ml-6">Ressources &#x25BC;</button>
            <ul v-if="isDropDownOpen" class="absolute bg-white text-blue-600 mt-5 ml-6 rounded shadow-lg w-56">
              <li class="cursor-pointer" @click="goTo('/ressources/presentation')"><p class="flex items-center hover:bg-blue-50"><presentation-chart-bar-icon class="size-6 text-blue-600" /><p class="py-2 ml-2 w-[100%] text-left">Présentations</p></p></li>
              <li class="cursor-pointer" @click="goTo('/ressources/tips')"><p class="flex items-center hover:bg-blue-50"><command-line-icon class="size-6 text-blue-600" /><p class="py-2 ml-2 w-[100%] text-left">Tips</p></p></li>
              <li class="cursor-pointer" @click="goTo('/ressources/template')"><p class="flex items-center hover:bg-blue-50"><code-bracket-square-icon class="size-6 text-blue-600" /><p class="py-2 ml-2 w-[100%] text-left">Template</p></p></li>
              <li class="cursor-pointer" @click="goTo('/ressources/fiche')"><p class="flex items-center hover:bg-blue-50"><document-check-icon class="size-6 text-blue-600" /><p class="py-2 ml-2 w-[100%] text-left">Fiche bonnes pratiques</p></p></li>
            </ul>
          </li>
          <li><button @click="goTo('/formations')" class="hover:text-gray-300 ml-6">Formations</button></li>
          <li><button @click="mailTo" class="hover:text-gray-300 ml-6">Contact</button></li>
          <li><button @click="goTo('/guide')" class="hover:text-gray-300 ml-6">Guide</button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// ICONS
import { PresentationChartBarIcon, CommandLineIcon, CodeBracketSquareIcon, DocumentCheckIcon } from '@heroicons/vue/24/outline';

const isDropDownOpen = ref(false);

function mailTo() {
  console.log('mailto');
}

function goTo(path: string): void {
  navigateTo(path);
}

function toggleDropdown() {
  isDropDownOpen.value = !(isDropDownOpen.value);
}

function closeDropdown() {
  isDropDownOpen.value = false;
}
</script>
