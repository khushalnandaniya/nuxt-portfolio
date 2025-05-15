<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';

</script>

<template>
  <div class="flex">
    <div class="header-section h-screen sticky top-0">
      <div class="header-section__wrapper flex flex-col pt-14 px-12 pb-12 justify-between h-full bg-[var(--black)] text-[var(--white)]">
        <Logo/>
        <Header/>
        <Footer/>
      </div>
    </div>
    <div class="main-section h-[200vh] bg-amber-600 w-full">
      
    </div>
  </div>
</template>
  