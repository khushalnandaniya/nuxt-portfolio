<template>
  <div class="mt-6 md:mt-12">
    <form @submit.prevent="sendEmail" ref="form" class="max-w-xl mx-auto p-6 border-gray-300 border-2 rounded-2xl shadow-md space-y-4">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium">Name</label>
        <input type="text" id="name" name="name" required
          class="mt-1 block w-full rounded-lg border border-gray-300 p-2" />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input type="email" id="email" name="email" required
          class="mt-1 block w-full rounded-lg border border-gray-300 p-2" />
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows="4" required
          class="mt-1 block w-full rounded-lg border border-gray-300 p-2"></textarea>
      </div>


      <!-- Submit -->
      <div>
        <button type="submit"
          class="w-full py-2 px-4 font-semibold rounded-lg shadow-md button cursor-pointer">
          Submit
          <IconsArrow />
        </button>
      </div>
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref(null)

const sendEmail = () => {
  emailjs.sendForm(
    'service_vbm6mkj',         // Replace with your actual Service ID
    'template_kujot1w',        // Replace with your actual Template ID
    form.value,
    '8FvlM4vpCopLWFxYD'        // Your Public Key
  ).then(
    () => {
      alert('Message sent successfully!');
      form.value.reset();
    },
    (error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message.');
    }
  )
}
</script>