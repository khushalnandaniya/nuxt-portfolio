<script setup lang="ts">
import { IconsArrow } from '#components';
import Accordion from './Accordion.vue';

</script>

<template>
  <div id="About" class="gradient-bg h-full md:h-screen px-8 lg:px-14 py-8 md:py-16 text-[var(--white)]">
    <div class="flex justify-between gap-4">
      <div class="flex flex-col gap-12 max-w-md">
        <div class="flex flex-col gap-6">
          <div>
            <p class="mb-4 text-medium italic">Experience</p>
            <h2 class="heading-large uppercase">My experience</h2>
          </div>
          <p class="heading-regular">
            Hello there! My name is Jacob Jones. I am a web designer & developer, and I'm very passionate and dedicated to my work.
          </p>
        </div>
        <div class="button">
          <span>Download my resume</span>
          <IconsArrow />
        </div>
      </div>
      <div class="flex flex-col max-w-xl">
        <Accordion />
      </div>
    </div>
  </div>
</template>