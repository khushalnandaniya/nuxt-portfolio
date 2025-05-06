<template>
{{ page }}
</template>

<script setup>
const route = useRoute();
const page = ref();
page.value = route.name
console.log(route.name,"rou");

</script>