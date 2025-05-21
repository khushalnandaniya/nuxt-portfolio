<script setup lang="ts">
import { IconsElement, IconsInstagram, IconsLinkedin } from '#components';


</script>

<template>
  <div id="Home" class="flex flex-col-reverse md:flex-row gap-[1.875rem] items-center px-8 lg:px-14 py-8 md:py-16 lg:py-[6.5625rem] justify-center h-auto md:h-screen homepage relative">
    <div class="absolute -right-8 hidden md:flex gap-5 items-center rotate-270">
      <span class="border-2 border-[var(--black)] rotate-90 h-14 -translate-x-8"></span>
      <nuxt-link to="https://www.linkedin.com/in/khushal-nandaniya-21b631247" aria-label="linkedin" target="_blank">
        <IconsLinkedin />
      </nuxt-link>
      <nuxt-link to="https://www.instagram.com/khushal_8645" aria-label="instagram" target="_blank">
        <IconsInstagram />
      </nuxt-link>
    </div>
    <div class="flex flex-col gap-8 md:gap-16 pl-0 lg:pl-14 relative">
      <div class="absolute top-0 left-0">
        <IconsVector />
      </div>
      <div class="flex flex-col gap-12 z-[1]">
        <div class="flex flex-col gap-6">
          <h1 class="text-extra-large uppercase">My name <br class="hidden md:block"> is <b> Khsuhal </b><br class="hidden md:block">  <b>Nandaniya</b></h1>
          <h3 class="text-large"><b>Shopify Developer</b> focused on frontend design, based in India</h3>
        </div>
        <nuxt-link to="#Contact" class="button px-5 lg:px-10 py-4">
          <span>Let’s talk with me</span>
          <IconsArrow />
        </nuxt-link>
      </div>
      <div class="flex justify-between flex-wrap gap-4">
        <div class="flex gap-3 items-center">
          <IconsPhone />
          <span>+91 9328537327</span>
        </div>
        <div class="flex gap-3 items-center">
          <IconsEmail />
          <span>nandaniyakhushal@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="relative profile-section">
      <img src="/images/profilepic.png" alt="profilepic" width="528" height="691" class="relative filter" loading="lazy"  placeholder="blur">
      <div class="absolute top-[5%] left-0 h-full">
        <IconsElement/>
      </div>
    </div>
  </div>
</template>

<style>
.homepage .profile-section svg {
  width: 100%;
  height: 100%;
}
</style>