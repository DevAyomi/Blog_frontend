<template>
  <section class="home_section1">
    <div v-if="loading"></div>
    <div v-else class="container">
      <div
        class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row space-x-0 lg:space-x-8"
      >
        <div class="w-full relative mb-8">
          <div>
            <div>
              <div class="h-full w-full rounded-lg">
                <img
                  class="w-full rounded-lg relative"
                  :src="post[0]?.image"
                  alt="slide 1"
                />
              </div>
              <div
                class="pl-[40px] absolute bottom-2 md:bottom-14 pr-[50px] z-20 flex justify-center flex-col pb-[10px]"
              >
                <span class="md:mb-[20px] mb-[12px]"
                  ><a
                    class="px-[8px] py-1 text-white text-xs rounded-[5px]"
                    style="background: #d63447"
                    href="#"
                    >{{ post[0]?.categories[0]?.name }}</a
                  ></span
                >
                <h4
                  class="text-[18px] md:text-[30px] -mb-0 md:-mb-0 text-white font-bold"
                >
                  {{ post[0]?.title }}
                </h4>

                <div class="space-x-3 mt-2 md:mt-0 text-white">
                  <span class="space-x-2"
                    ><i class="jli-user"></i
                    ><a href="#" class="text-white" rel="author">{{
                      post[0]?.users.name
                    }}</a></span
                  >
                  <span class=""
                    ><i class="jli-pen"></i>{{ post[0]?.created_at }}</span
                  >
                  <span class=""
                    ><i class="jli-pen"></i>{{ post[0]?.min_of_read }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-12">
          <!--Second section starts here-->
          <div v-for="item in side" :key="item.id" class="flex space-x-8">
            <div>
              <router-link
                :to="{
                  name: 'single-page',
                  params: { id: item.id },
                }"
              >
                <img
                  :src="item.image"
                  class="w-44 h-28 rounded-sm"
                  alt=""
                  loading="lazy"
                />
              </router-link>
            </div>
            <div class="space-y-2">
              <span
                ><a
                  class="p-1 text-white text-xs"
                  style="background: green"
                  href="#"
                  >{{ item.categories[0]?.name }}</a
                ></span
              >
              <h3 class="text-base">
                <router-link
                  :to="{
                    name: 'single-page',
                    params: { id: item.id },
                  }"
                >
                  {{ item.title }}
                </router-link>
              </h3>
              <span>
                <span>
                  <i class="jli-user"></i
                  ><a href="#" rel="author">{{ item.users.name }}</a></span
                >
                <span class="post-date"
                  ><i class="jli-pen"></i>{{ item.created_at }}</span
                >
              </span>
            </div>
          </div>
          <!--Ends here-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "../js/jquery.js";
import "../js/slick.js";
import "../js/custom.js";
import CarouselSide from "./CarouselSide.vue";
import axiosClient from "@/axios";
import { ref, onMounted } from "vue";

const post = ref("");
const side = ref("");
const loading = ref(false);

const fetchData = () => {
  loading.value = true;
  axiosClient
    .get("v1/banner")
    .then((res) => {
      loading.value = false;
      post.value = res.data.data.activePosts;
      side.value = res.data.data.posts;
    })
    .catch((err) => {
      loading.value = false;
      alert("Something went wrong");
    });
};

onMounted(() => {
  fetchData();
});
</script>

<style>
@import "../css/bootstrap.css";
@import "../css/shop.css";
@import "../css/style.css";
@import "../css/responsive.css";
@import "../css/mains.css";
</style>
