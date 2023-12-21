<script setup lang="ts">
import HeaderItem from '@/components/HeaderItem.vue';
import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

const links = [
  {name: "home", icon:HomeIcon},
  {name: "Trending", icon:BoltIcon},
  {name: "Verified", icon:CheckBadgeIcon},
  {name: "Collection", icon:RectangleStackIcon},
  {name: "Search", icon:MagnifyingGlassIcon},
  {name: "Account", icon:UserCircleIcon},
]
</script>
<template>
  <header class="flex flex-col sm:flex-row m-5 justify-between items-center">
    <ul class="flex flex-grow justify-evenly max-w-2xl" >
      <HeaderItem v-for="link of links" :key="link.name" :name="link.name" :Icon="link.icon" />
    </ul>
    <img src="../assets/hulu.webp" alt="Logo HULU">
    <!-- <h1>HULU</h1> -->
  </header>
</template>
