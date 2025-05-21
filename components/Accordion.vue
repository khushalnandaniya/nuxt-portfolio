<script setup lang="ts">
import { ref } from 'vue';
const data = [
  {
    time: "January 2024 – June 2024",
    company: "-CreatPix Infotech LLP",
    role: "Web Development Intern",
    description: "During this internship, I was immersed in real-world eCommerce development. I contributed to multiple Shopify projects—translating design mockups into dynamic interfaces, writing maintainable code, and learning how to build for both form and function. I also deepened my understanding of collaborative workflows and Agile processes."
  },
  {
    time: "July 2024 – Present",
    company: "-CreatPix Infotech LLP",
    role: "Frontend Developer",
    description: "At CreatPix, I craft high-performance Shopify experiences with a strong focus on responsive design, clean code, and real-world business goals. From theme customization using Liquid to building reusable components in Vue and Nuxt, I work alongside designers and backend developers to bring engaging online stores to life. Every line of code aims to improve user experience, performance, and results."
  },
]
</script>
<template>
  <div class="flex flex-col">
    <details 
      v-for="(item, index) in data"
      :key="index"
      class="overflow-hidden cursor-pointer"
    >
      <summary class="flex flex-col gap-3 pb-5 border-b-[1px] border-white mb-5">
        <div class="flex justify-between flex-col md:flex-row">
          <span class="text-small italic">{{ item.time }}</span>
          <span class="text-base">{{ item.company }}</span>
        </div>
        <h4 class="heading-medium uppercase relative accordion-title">{{ item.role }}</h4>
      </summary>
      <div class="content heading-small">
        {{ item.description }}
      </div>
    </details>
  </div>
</template>

<style>
details[open] .content {
  max-height: 100%;
  padding-block: 1rem;
  padding-top: 0;
  opacity: 1;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--white);
}
details .content {
  max-height: 0;
  padding-block: 0;
  opacity: 0;
  margin: 0;
  border: none;
  transition: all 0.3s ease;
}
details[open] .accordion-title::after {
  content: '–';
}
details:not([open]) .accordion-title::after {
  content: '+';
}

.accordion-title::after {
  position: absolute;
  right: 0;
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}
</style>
