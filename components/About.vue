<script setup lang="ts">
import { IconsArrow } from '#components';
import Accordion from './Accordion.vue';
import Skillcard from './Skillcard.vue';

</script>

<template>
  <div id="About" class="gradient-bg h-auto px-8 lg:px-14 py-8 md:py-16 text-[var(--white)] flex items-left justify-center flex-col gap-8">
    <div class="flex flex-col lg:flex-row w-full justify-between gap-8">
      <div class="flex flex-col gap-6 lg:gap-12 max-w-full lg:max-w-md">
        <div class="flex flex-col gap-6">
          <div>
            <p class="mb-4 text-medium italic">Experience</p>
            <h2 class="heading-large uppercase">My experience</h2>
          </div>
          <p class="heading-small">
            Hello there! My name is Jacob Jones. I am a web designer & developer, and I'm very passionate and dedicated to my work.
          </p>
        </div>
        <a href="/resume.pdf" download>
          <div class="button px-4 md:px-10 py-4">
            <span>Download my resume</span>
            <IconsArrow />
          </div>
        </a>
      </div>
      <div class="flex flex-col max-w-full lg:max-w-xl w-full">
        <Accordion />
      </div>
    </div>
    <div class="skill-section">
      <Skillcard />
    </div>
  </div>
</template>