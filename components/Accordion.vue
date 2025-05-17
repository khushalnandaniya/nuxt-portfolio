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
      <summary class="flex flex-col gap-3">
        <div class="flex justify-between">
          <span class="text-small italic">{{ item.time }}</span>
          <span class="text-extra-small">{{ item.company }}</span>
        </div>
        <h4 class="heading-medium uppercase">{{ item.role }}</h4>
        <div class="content heading-regular">
          {{ item.description }}
        </div>
      </summary>
    </details>
  </div>
</template>

<style>
details[open] .content {
  max-height: 100%;
  padding-block: 2rem;
  opacity: 1;
}
details .content {
  max-height: 0;
  padding-block: 0;
  opacity: 0;
  transition: all 0.3s ease;
}
</style>
