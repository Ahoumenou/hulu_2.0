<script setup lang="ts">
import FilterItem from './NavBarItem.vue';
import request from "@/utils/request";
// const links = [
//     { name: 'Trending'},
//     { name: 'Top Rated'},
//     { name: 'Action'},
//     { name: 'Comedy'},
//     { name: 'Horror'},
//     { name: 'Romance'},
//     { name: 'Mystery'},
//     { name: 'Sci-Fi'},
//     { name: 'Western'},
//     { name: 'Animation'},
//     { name: 'TV Movie'},
// ]
const genreList: string[] = [];
Object.entries(request).forEach(([key, { title, url }]) => {
    genreList.push(title)


})
console.log(genreList);
console.log('=================');

</script>
<template>
    <!-- <FilterItem v-for="link of links" :key="link.name" :name="link.name"/> -->
    <ul class="flex px-10 overflow-x-auto scrollbar-hide sm:px text-2xl whitespace-nowrap gap-10  md:gap-20">
            <li v-for="genre of genreList" :key="genre">
                <button>
                    {{ genre }}
                </button>
            </li>

        </ul>
    <!-- <ul class="flex px-10 overflow-x-auto sm:px text-2xl whitespace-nowrap gap-10 md:gap-20 scrollbar-hiden">
        <li v-for="genre of request" :key="genre.title">
            <button class="inline-block">
                {{ genre.title }}
            </button>
        </li>
    </ul> -->
</template>

<style>
ul {
    /* "thin" pour les navigateurs Firefox / */
        scrollbar-width: thin; 
        /* "transparent" pour les navigateurs Firefox / */
        scrollbar-color: transparent transparent; 
      }
      
      /* Pour les navigateurs Chrome, Safari et Opera / */
      ul::-webkit-scrollbar { 
        width: 5px;
      }
      
      /* Pour les navigateurs Chrome, Safari et Opera / */
      ul::-webkit-scrollbar-thumb { 
        background: transparent;
      }
</style>