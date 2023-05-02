<template>
  <div v-if="loading"></div>
  <section v-else class="home_section3">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="jl_sec_title">
            <h3 class="jl_title_c">Trending Articles</h3>
            <p>This is a section for most viewed post</p>
          </div>
          <div class="jl_mg_wrapper jl_clear_at">
            <div class="jl_mg_post jl_clear_at">
              <!--First section Starts here-->
              <div class="jl_mg_main">
                <div class="jl_mg_main_w">
                  <div class="jl_img_box jl_radus_e">
                    <a href="#">
                      <img
                        width="1000"
                        height="650"
                        :src="mostViewedPosts[0]?.image"
                        class="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                    <span class="jl_f_cat"
                      ><a
                        class="post-category-color-text"
                        style="background: #4dcf8f"
                        href="#"
                        >{{ mostViewedPosts[0]?.categories[0]?.name }}</a
                      ></span
                    >
                  </div>
                  <div class="text-box">
                    <h3 class="entry-title">
                      <router-link
                        v-if="mostViewedPosts.length && mostViewedPosts[0]?.id"
                        :to="{
                          name: 'single-page',
                          params: { id: mostViewedPosts[0]?.banner },
                        }"
                      >
                        {{ mostViewedPosts[0]?.title }}
                      </router-link>
                    </h3>
                    <span class="jl_post_meta">
                      <span class="jl_author_img_w"
                        ><i class="jli-user"></i
                        ><a href="#" title="Posts by Spraya" rel="author">{{
                          mostViewedPosts[0]?.users.name
                        }}</a></span
                      >
                      <span class="post-date"
                        ><i class="jli-pen"></i
                        >{{ mostViewedPosts[0]?.created_at }}</span
                      >
                      <span class="post-read-time"
                        ><i class="jli-watch-2"></i
                        >{{ mostViewedPosts[0]?.min_of_read }}</span
                      >
                    </span>
                    <p v-html="content"></p>
                  </div>
                </div>
              </div>
              <!--First section ends here-->

              <!--Cards starts here-->
              <div
                class="jl_mg_sm"
                v-for="(item, index) in mostViewedPosts"
                :key="index"
              >
                <div class="jl_mg_sm_w">
                  <div class="jl_f_img jl_radus_e">
                    <a href="#">
                      <img
                        width="1000"
                        height="650"
                        :src="item.image"
                        class="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                    <span class="jl_f_cat"
                      ><a
                        class="post-category-color-text"
                        style="background: #4dcf8f"
                        href="#"
                        >{{ item.categories[0]?.name }}</a
                      ></span
                    >
                  </div>
                  <div class="jl_mg_content">
                    <h3 class="entry-title">
                      <router-link
                        :to="{
                          name: 'single-page',
                          params: { id: item.id },
                        }"
                      >
                        {{ item.title }}
                      </router-link>
                    </h3>
                    <span class="jl_post_meta">
                      <span class="jl_author_img_w"
                        ><i class="jli-user"></i
                        ><a href="#" rel="author">{{
                          item.users.name
                        }}</a></span
                      >
                      <span class="post-date"
                        ><i class="jli-pen"></i>{{ item.created_at }}</span
                      >
                    </span>
                  </div>
                </div>
              </div>
              <!--Cards ends here-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axiosClient from "@/axios";
import { ref, onMounted } from "vue";

const mostViewedPosts = ref("");
const content = ref("");
const loading = ref(false);
const first = ref("");

const fetchData = () => {
  loading.value = true;
  axiosClient
    .get("v1/most-viewed-post")
    .then((res) => {
      mostViewedPosts.value = res.data.data;
      first.value = res.data.data[0]?.id;
      console.log(mostViewedPosts.value);
      content.value = getFirst20Words(res.data.data[0].content);
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      alert("Something went wrong");
    });
};

const getFirst20Words = (str) => {
  const words = str.match(/\S+\s*/g);
  return words.slice(0, 40).join("");
  console.log(words);
};

onMounted(() => {
  fetchData();
});

import "../js/jquery.js";
import "../js/slick.js";
import "../js/custom.js";
</script>

<style>
@import "../css/bootstrap.css";
@import "../css/shop.css";
@import "../css/style.css";
@import "../css/responsive.css";
@import "../css/mains.css";
</style>
