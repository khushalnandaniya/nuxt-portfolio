<script setup lang="ts">
import { IconsMinus, IconsPlus } from '#components';

const data = [
  {
    title: "Shopify Store Setup & Customization",
    subtitle: "Build and customize Shopify stores tailored to your brand, including theme development, design enhancements, and performance optimizations using Liquid.",
    description: "<p>I develop fully customized Shopify stores that reflect your brand’s identity and business goals. Whether starting from scratch or enhancing an existing theme, I use Liquid to tailor every aspect — from layout and design to functionality — ensuring your store looks great and performs flawlessly. I also focus on optimizing theme speed and responsiveness to provide smooth shopping experiences on all devices.</p>"
  },
  {
    title: "Frontend Development & UX/UI",
    subtitle: "Create fast, responsive web apps and improve user experience with Vue.js, Nuxt, and React to ensure seamless navigation and higher conversions.",
    description: "<p>Using modern frameworks like Vue.js, Nuxt, and React, I build fast, responsive frontend applications that work seamlessly across desktops, tablets, and mobiles. I improve your store’s user interface and user experience by designing intuitive navigation, clear call-to-actions, and visually appealing layouts — all aimed at increasing customer engagement and boosting sales.</p>"
  },
  {
    title: "API & Apps Integration",
    subtitle: "Integrate third-party services, payment gateways, and build custom Shopify or frontend apps to extend your store’s functionality.",
    description: "<p>I help extend your store’s capabilities by integrating third-party tools such as payment gateways, marketing platforms, and inventory systems. Additionally, I develop custom Shopify apps and frontend web applications tailored to your unique business needs, automating workflows and adding new features that make managing your store easier and more efficient.</p>"
  },
  {
    title: "Support & Maintenance",
    subtitle: "Provide reliable troubleshooting, updates, and maintenance to keep your eCommerce store secure and running smoothly.",
    description: "<p>Post-launch, I offer dependable support to keep your Shopify store running smoothly. This includes troubleshooting bugs, applying updates, ensuring security, and performing regular maintenance. My goal is to minimize downtime and keep your customers happy with a seamless shopping experience.</p>"
  }
];

</script>
<template>
  <div class="mt-6 md:mt-12 flex flex-col serviceCard">
    <details
      v-for="(item,index) in data" 
      :key="index"
      class="w-full pb-4 md:pb-6 mb-4 md:mb-6 last:mb-0 border-b-2 border-[#14131380] cursor-pointer"
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