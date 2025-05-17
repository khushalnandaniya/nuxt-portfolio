<script setup lang="ts">
import { ref } from 'vue';
const data = [
  {
    time: "-2018 - Present",
    company: "-Rolling Thunder",
    role: "Lead UI/UX Designer",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, totam ab? Iure vero, fugiat nihil perferendis pariatur exercitationem corporis modi inventore possimus. Eius, dolorum? In?"
  },
  {
    time: "-2018 - Present",
    company: "-Rolling Thunder",
    role: "Lead UI/UX Designer",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, totam ab? Iure vero, fugiat nihil perferendis pariatur exercitationem corporis modi inventore possimus. Eius, dolorum? In?"
  },
  {
    time: "-2018 - Present",
    company: "-Rolling Thunder",
    role: "Lead UI/UX Designer",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, totam ab? Iure vero, fugiat nihil perferendis pariatur exercitationem corporis modi inventore possimus. Eius, dolorum? In?"
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
        <div class="flex justify-between">
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
