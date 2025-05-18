<script setup lang="ts">
import { IconsMinus, IconsPlus } from '#components';
import { ref } from 'vue';

const data = [
  {
    title : "Web Design",
    subtitle : "You can customize a template or make your own from scratch,with an immersive library at your disposal. You can customize a template",
    description : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem provident pariatur possimus, asperiores sint ratione <br> adipisci deserunt aliquid et quidem harum veniam laborum ullam adipisci deserunt aliquid et quidem harum veniam laborum ullam. adipisci deserunt aliquid et quidem harum veniam laborum ullam adipisci deserunt aliquid et quidem harum veniam laborum ullam</p>"
  },
  {
    title : "Web Design",
    subtitle : "You can customize a template or make your own from scratch,with an immersive library at your disposal. You can customize a template",
    description : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem provident pariatur possimus, asperiores sint ratione <br> adipisci deserunt aliquid et quidem harum veniam laborum ullam adipisci deserunt aliquid et quidem harum veniam laborum ullam. adipisci deserunt aliquid et quidem harum veniam laborum ullam adipisci deserunt aliquid et quidem harum veniam laborum ullam</p>"
  },
  {
    title : "Web Design",
    subtitle : "You can customize a template or make your own from scratch,with an immersive library at your disposal. You can customize a template",
    description : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem provident pariatur possimus, asperiores sint ratione <br> adipisci deserunt aliquid et quidem harum veniam laborum ullam adipisci deserunt aliquid et quidem harum veniam laborum ullam. adipisci deserunt aliquid et quidem harum veniam laborum ullam adipisci deserunt aliquid et quidem harum veniam laborum ullam</p>"
  }
]

</script>
<template>
  <div class="mt-6 md:mt-12 flex flex-col serviceCard">
    <details
      v-for="(item,index) in data" 
      :key="index"
      class="w-full pb-4 md:pb-6 mb-4 md:mb-6 last:mb-0 border-b-2 border-[#14131380]"
    >
      <summary class="flex justify-between gap-3">
        <h3 class="heading-medium title">{{ item.title }}</h3>
        <div class="hidden md:block max-w-[20rem] xl:max-w-xl">
          <p class="heading-extra-small opacity-80">{{ item.subtitle }}</p>
          <div 
            class="content"
            v-html="item.description"></div>
        </div>
        <div class="icon cursor-pointer relative">
          <span class="plusIcon"> <IconsPlus/> </span>
          <span class="minusIcon absolute top-0"> <IconsMinus/> </span>
        </div>
      </summary>
      <div 
        class="mobile-content block md:hidden" 
        v-html="item.description"> 
      </div>
    </details>
  </div>
</template>

<style>
.serviceCard details[open] .content ,
.serviceCard details[open] .mobile-content{
  max-height: 100%;
  padding-block: 1.5rem;
  padding-bottom: 0;
  opacity: 1;
  border-bottom: 1px solid var(--white);
}
.serviceCard details .content,
.serviceCard details .mobile-content {
  max-height: 0;
  padding-block: 0;
  opacity: 0;
  border: none;
  transition: all 0.3s ease;
}

.serviceCard details[open] .title {
  background: linear-gradient(to right, #FFB147, #FF6C63, #B86ADF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.serviceCard details .plusIcon {
  opacity: 1;
  transition: opacity 0.3s ease;
}


.serviceCard details[open] .plusIcon {
  opacity: 0;
}

.serviceCard details .minusIcon {
  opacity: 0;
  transition: opacity 0.3s ease;
}


.serviceCard details[open] .minusIcon {
  opacity: 1;
}

</style>