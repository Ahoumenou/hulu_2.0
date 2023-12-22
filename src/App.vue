<template>
<HeaderComp/>
<!-- <header-comp/> -->
  <main>
<FilterComp/>

<!-- partie qui sera rendue dynamiquement -->
<!-- <router-view></router-view> -->
<RouterView/>
  </main>
</template>

<script setup lang="ts">
import  HeaderComp  from "@/components/HeaderComp.vue";
import FilterComp from "./components/NavBar.vue";
// Vous pouvez également inclure des données réactives ici
// const state = reactive({
//   // ...
// });

// Ou des méthodes
// const someMethod = () => {
//   // ...
// };
</script>
