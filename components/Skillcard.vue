<script setup lang="ts">

import { Title } from '#components';
import { ref } from 'vue';

const data = [
  {
    title : "Technology",
    skill : ['Html5','css3','javascript','liquid','tailwind','sass','nuxtJs','vueJs'],
    image : ['/images/html.png','/images/css.png','/images/javascript.png','/images/liquid.png','/images/tailwind.png','/images/sass.png','/images/nuxt.png','/images/vue.png']
  },
  {
    title : "Platforms",
    skill : ['Shopify','Wordpress','Craft Cms','StoryBlok'],
    image : ['/images/Shopify.png','/images/wordpress.png','/images/craftcms.png','/images/storyblok.png']
  }
]

</script>

<template>
  <div class="flex gap-4 flex-wrap">
    <div 
      v-for="(item,index) in data"
      :key="index"
      class="border-2 p-4 rounded-2xl w-full sm:w-auto skill-card__wrapper"
    >
      <h2 class="heading-medium mb-4 pb-4 border-b-2">{{ item.title }}</h2>

      <div class="grid grid-cols-2 gap-4">
        <div 
          v-for="(skill, idx) in item.skill"
          :key="idx"
          class="flex items-center gap-2"
        >
          <img 
            :src="item.image[idx]" 
            :alt="skill" 
            class="w-6 h-6 object-contain"
          />
          <span class="heading-regular gradient-line cursor-pointer">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.skill-card__wrapper:hover {
  background-color: var(--white);
  color: var(--black);
}
</style>