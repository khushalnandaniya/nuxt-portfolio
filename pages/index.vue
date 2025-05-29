<script setup lang="ts">
useHead({
  title: 'Projects | Khushal Nandaniya',
  meta: [
    {
      name: 'description',
      content: 'See Shopify and Nuxt-based projects by Khushal Nandaniya, a frontend developer in India.'
    }
  ]
})

import { ref } from 'vue';
import Contact from '~/components/Contact.vue';
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
import Homepage from '~/components/Homepage.vue';
import Project from '~/components/Project.vue';
import Services from '~/components/Services.vue';
import About from '~/components/About.vue';
const hamburger = ref(true);
function handleMenu() {
  hamburger.value =! hamburger.value;
}

</script>

<template>
  <div class="flex relative">
    <div class="hamburger-menu fixed top-3 left-3  block md:hidden w-8 h-8 z-20" @click="handleMenu()">
      <div class="fixed top-3 left-3 transition-opacity duration-300 ease-in-out w-8 h-8" 
        :class="hamburger ? 'opacity-100' : 'opacity-0'"
        >
        <IconsHamburger /> 
      </div>
      <div class="fixed top-3 left-3 transition-opacity duration-300 ease-in-out w-8 h-8"
        :class="hamburger ? 'opacity-0' : 'opacity-100'"
      >
        <IconsClose /> 
      </div>
    </div>
    <div class="header-section h-screen fixed md:sticky top-0 z-10 transition-transform duration-300 ease-in-out"
      :class="hamburger ? '-translate-x-full md:translate-0' : 'translate-0'"
    >
      <div class="header-section__wrapper flex flex-col pt-14 px-8 lg:px-12 pb-12 justify-between h-full bg-[var(--black)] text-[var(--white)]">
        <Logo/>
        <Header/>
        <Footer/>
      </div>
    </div>
    <div class="main-section w-full">
      <Homepage />
      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  </div>
</template>
  