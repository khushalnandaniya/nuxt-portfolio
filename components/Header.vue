<template>
  <div class="flex flex-col gap-5">
    <nuxt-link
      v-for="(item, index) in navItems"
      :key="index"
      :to="item.link"
      class="text-medium uppercase gradient-line"
      :class="{ 'active': activeIndex === index }"
      @click="activeIndex = index"
    >
      {{ item.name }}
    </nuxt-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems =
[
  { name: 'Home', link: '#Home' },
  { name: 'About', link: '#About' },
  { name: 'Services', link: '#Services' },
  { name: 'Project', link: '#Project' },
  { name: 'Contact', link: '#Contact' }
]

const activeIndex = ref(0)

function updateActiveIndexFromHash() {
  const currentHash = window.location.hash
  const index = navItems.findIndex(item => item.link === currentHash)
  if (index !== -1) activeIndex.value = index
}

onMounted(() => {
  updateActiveIndexFromHash()
  window.addEventListener('hashchange', updateActiveIndexFromHash)
})

</script>
