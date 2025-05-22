<script setup lang="ts">
const data = [
  {
    title : "The Cotton Soul",
    description : `<p>This is a full Shopify build for a purpose-driven clothing brand. I designed a clean and soulful interface in Figma, then developed the website using Shopify, Liquid, and custom CSS/JS. Key features include a hero banner with brand story, collage-style product showcase, mobile-optimized layout, and a custom carousel titled “Where Cotton Meets Soul.”</p>`,
    projectlink : "https://thecottonsoul.com/",
    password : "thesoul",
    image : "/images/project.png",
    imageDirection : "right",
    skill : ['/images/shopify.png','/images/html.png','/images/css.png','/images/javascript.png','images/liquid.png']
  },
  {
    title : "Hell Style",
    description : `<p>This is a Gen Z-focused fashion store built on Shopify with a bold, dark-themed UI. I handled the entire design-to-development process, from crafting the brand identity and logo in Figma to building animated scroll sections, product sliders, and a mobile-first shopping experience. The edgy, fast-loading interface aligns with streetwear culture and anime-inspired aesthetics.</p>`,
    projectlink : "https://hell-style.myshopify.com/",
    password : "thehell",
    image : "/images/project2.png",
    imageDirection : "left",
    skill : ['/images/shopify.png','/images/html.png','/images/css.png','/images/javascript.png','images/liquid.png']
  },
]
</script>

<template>
  <div class="mt-6 md:mt-12 flex flex-col gap-10">
    <div
      v-for="(item,index) in data" 
      class="rounded-3xl flex drop-shadow-[0px_6px_64px_rgba(112,144,176,0.5)] overflow-hidden bg-[azure] transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
      :class="item.imageDirection == 'right' ? 'flex-col-reverse lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'"
    >
      <div class="flex-1 my-auto">
        <div class="flex justify-center items-start gap-3.5 md:gap-6 flex-col py-5 px-5 md:px-10">
          <h3 class="heading-medium">{{ item.title }}</h3>
          <div
            v-html="item.description" 
            class="heading-extra-small">
        </div>
          <nuxt-link :to="item.projectlink" target="_blank">
            <div class="button px-4 md:px-10 py-4">
              <span>View Project</span>
              <IconsArrow />
            </div>
          </nuxt-link>
          <div>
            <span>Password :</span>
            {{ item.password }}
          </div>
          <div class="flex">
            <div 
              v-for="skill in item.skill">
              <img 
                :src="skill" 
                :alt="item.title" 
                class="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <img 
          :src="item.image" 
          :alt="item.title" 
          loading="lazy"
          class="object-cover h-full w-full"
        />
      </div>
    </div>
  </div>
</template>