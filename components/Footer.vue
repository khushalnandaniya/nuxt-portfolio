<script setup lang="ts">
import { IconsInstagram, IconsLinkedin } from '#components';

</script>

<template>
    <div class="flex flex-col gap-[1.875rem]">
        <div class="flex flex-col gap-3">
            <nuxt-link to="https://www.linkedin.com/in/khushal-nandaniya-21b631247" aria-label="linkedin" target="_blank">
                <IconsLinkedin />
            </nuxt-link>
            <nuxt-link to="https://www.instagram.com/khushal_8645" aria-label="instagram" target="_blank">
                <IconsInstagram />
            </nuxt-link>
        </div>
    <p class="text-extra-small">Copyright ©2024 Fawzi Sayed. All right reserved.</p>
    </div>
</template>