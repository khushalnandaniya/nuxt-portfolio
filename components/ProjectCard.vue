<script setup lang="ts">
const data = [
  {
    title : "Project Name",
    description : "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    projectlink : "https://thecottonsoul.com/",
    password : "thesoul",
    image : "/images/project.png",
    imageDirection : "right",
    skill : ['/images/shopify.png','/images/html.png','/images/css.png','/images/javascript.png','images/liquid.png']
  },
  {
    title : "Project Name",
    description : "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    projectlink : "https://thecottonsoul.com/",
    password : "thesoul",
    image : "/images/project.png",
    imageDirection : "left",
    skill : ['/images/shopify.png','/images/html.png','/images/css.png','/images/javascript.png','images/liquid.png']
  },
  {
    title : "Project Name",
    description : "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    projectlink : "https://thecottonsoul.com/",
    password : "thesoul",
    image : "/images/project.png",
    imageDirection : "right",
    skill : ['/images/shopify.png','/images/html.png','/images/css.png','/images/javascript.png','images/liquid.png']
  }
]
</script>

<template>
  <div class="mt-6 md:mt-12 flex flex-col gap-10">
    <div
      v-for="(item,index) in data" 
      class="rounded-3xl flex drop-shadow-[0px_6px_64px_rgba(112,144,176,0.5)] overflow-hidden bg-[azure]"
      :class="item.imageDirection == 'right' ? 'flex-col-reverse md:flex-row' : 'flex-col-reverse md:flex-row-reverse'"
    >
      <div class="flex-1 my-auto">
        <div class="flex justify-center items-start gap-3.5 md:gap-6 flex-col py-5 px-5 md:px-10">
          <h3 class="heading-medium">{{ item.title }}</h3>
          <p class="heading-extra-small">{{ item.description }}</p>
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
          class="object-cover h-full"
        />
      </div>
    </div>
  </div>
</template>