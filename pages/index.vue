<template>
    <div class="p-8 space-y-16 text-center">
      <section>
        <h1 class="text-4xl font-bold">Hi, I’m Your Name</h1>
        <p class="text-lg mt-2">Shopify & Vue/Nuxt Developer</p>
        <p class="mt-4">I build fast, scalable e-commerce experiences for brands.</p>
        <div class="mt-6 space-x-4">
          <NuxtLink to="#contact" class="bg-black text-white px-4 py-2 rounded">Hire Me</NuxtLink>
          <a href="/resume.pdf" class="text-blue-600 underline">Download Resume</a>
        </div>
      </section>
  
      <section id="skills">
        <h2 class="text-2xl font-semibold">Skills</h2>
        <ul class="mt-4 space-y-1">
          <li>✅ Shopify (Theme Dev, Liquid)</li>
          <li>✅ Vue 3, Nuxt 3</li>
          <li>✅ Tailwind CSS</li>
          <li>✅ Git, GitHub</li>
        </ul>
      </section>
  
      <section id="projects">
        <h2 class="text-2xl font-semibold">Projects</h2>
        <div class="grid gap-6 mt-6 md:grid-cols-2">
          <div class="p-4 border rounded">
            <h3 class="text-lg font-bold">🛍️ Shopify Store</h3>
            <p>Custom Shopify theme + Vue frontend using Shopify APIs</p>
            <div class="mt-2">
              <a href="https://yourstore.com" class="text-blue-600">Live Site</a> |
              <a href="https://github.com/yourusername/shopify-project" class="text-blue-600">GitHub</a>
            </div>
          </div>
          <!-- Add more projects -->
        </div>
      </section>
  
      <section id="testimonials">
        <h2 class="text-2xl font-semibold">Testimonials</h2>
        <p class="mt-4 italic">“[Your Name] is reliable and skilled — delivered a great Shopify build.”</p>
      </section>
  
      <section id="contact">
        <h2 class="text-2xl font-semibold">Contact Me</h2>
        <p class="mt-2">Email me at <a href="mailto:you@example.com" class="text-blue-600">you@example.com</a></p>
      </section>
    </div>
  </template>
  