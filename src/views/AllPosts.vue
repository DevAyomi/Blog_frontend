<template>
    <LayoutAuthenticated>
        <PreloaderComponent v-if="preloading" />
    <SectionMain v-else>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="All Articles"
        main
      >
      </SectionTitleLineWithButton>
      <div class="flex flex-wrap -mx-4">
            <div v-for="post in allPosts.data" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div class="bg-white rounded-lg shadow-lg">
                <a href="#" class="block">
                    <img :src="post.image" alt="Image" class="w-full rounded-t-lg">
                </a>
                <div class="p-4">
                    <h2 class="font-bold text-lg mb-2">{{getFirstTwo(post.title)}}</h2>
                    <p class="text-gray-700" v-html="getFirstTen(post.content)"></p>
                    <p class="mt-2">Written by: {{ post.users.name }}</p>
                </div>
                <div class="bg-gray-200 p-4 flex justify-between">
                    <span>{{ post.min_of_read }}</span>
                    <router-link :to="{ name: 'edit-post', params: { id: post.id }}">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-1 rounded">Edit</button>
                    </router-link>
                </div>
                </div>
            </div>
            <!-- Repeat for other cards -->
            <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                <TailwindPagination
                    :data="allPosts"
                    @pagination-change-page="fetchPosts"
                />
            </div>
        </div>
    </SectionMain>
  </LayoutAuthenticated>
    

</template>

<script setup>
import {ref, onMounted} from 'vue';
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue';
import SectionMain from '@/components/SectionMain.vue';
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue';
import axiosClient from '@/axios';
import { TailwindPagination } from 'laravel-vue-pagination';
import PreloaderComponent from '@/components/PreloaderComponent.vue';


const allPosts = ref("");

const preloading = ref(false);

const getFirstTen = (str) => {
  return str.split(/\s+/).slice(0, 10).join(" ");
}

const getFirstTwo = (str) => {
  return str.split(/\s+/).slice(0, 3).join(" ");
}

const fetchPosts = (page = 1) => {
    preloading.value = true
    axiosClient.get(`/v1/all-posts?page=${page}`).then((res) => {
        preloading.value = false
        allPosts.value = res.data.data
    }).catch((err) => {
        alert(err)
        preloading.value = false
    })
}

onMounted(() => {
    fetchPosts()
})

</script>