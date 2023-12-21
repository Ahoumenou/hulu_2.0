<template>
    <li class="">
        <a class="" href="#" > {{name}} </a>
    </li>
</template>

<script setup lang="ts">

const props = defineProps<{
    name: String, 
}>();
</script>