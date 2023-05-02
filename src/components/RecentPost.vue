<template>
  <div v-if="loading"></div>
  <section v-else class="home_section6">
    <div class="">
      <div class="container grid gap-4 grid-cols-1 md:grid-cols-2">
        <div class="" id="content">
          <div
            id="blockid_e3cb9ed"
            class="block-section jl-main-block"
            data-blockid="blockid_e3cb9ed"
            data-name="jl_mgrid"
            data-page_max="3"
            data-page_current="1"
            data-categories="4,6,9"
            data-author="none"
            data-order="date_post"
            data-posts_per_page="8"
          >
            <div class="jl_clear_at g_2col">
              <div class="jl-roww content-inner jl-col3 jl-col-row">
                <div class="jl_sec_title">
                  <h3 class="jl_title_c"><span>Recent Post</span></h3>
                  <p>This is a section for Recent posts</p>
                </div>

                <!--Recents Posts start here-->
                <div
                  class="jl-grid-cols"
                  v-for="item in recentPosts"
                  :key="item.id"
                >
                  <div class="p-wraper post-2949">
                    <div class="jl_grid_w">
                      <div class="jl_img_box jl_radus_e">
                        <a href="#">
                          <span class="jl_post_type_icon"
                            ><i class="jli-gallery"></i
                          ></span>
                          <img
                            :src="item.image"
                            class="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        <span class="jl_f_cat"
                          ><a
                            class="post-category-color-text"
                            style="background: #7ebdb4"
                            href="#"
                            >{{ item.categories[0]?.name }}</a
                          ></span
                        >
                      </div>
                      <div class="text-box">
                        <h3>
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
                            ><a href="#" title="Posts by Spraya" rel="author">{{
                              item.users.name
                            }}</a></span
                          >
                          <span class="post-date"
                            ><i class="jli-pen"></i>{{ item.created_at }}</span
                          >
                          <span class="post-read-time"
                            ><i class="jli-watch-2"></i
                            >{{ item.min_of_read }}</span
                          >
                        </span>
                        <p v-html="getFirst20Words(item.content)"></p>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Recents post ends here-->
              </div>
              <div class="jl_lmore_wrap">
                <div class="jl_lmore_c">
                  <a href="#" class="jl-load-link"><span>load more</span></a>
                  <span class="jl-load-animation"><span></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="" id="">
          <div class="jl_sidebar_w">
            <div
              id="sprasa_widget_social_counter_c-2"
              class="widget jl-widget-social-counter"
            >
              <div class="widget-title">
                <h2 class="jl_title_c">Stay Connected</h2>
              </div>
              <div
                class="jl_social_counter social_counter_wraper jl_count_style_2 social_counter_item>"
              >
                <div class="jlsocial-element jl-facebook jl_radus_e">
                  <a
                    target="_blank"
                    href="https://facebook.com/envato"
                    class="facebook"
                    title="facebook"
                  ></a>
                  <span class="jlsocial-element-left">
                    <i class="jli-facebook" aria-hidden="true"></i>
                    <span class="num-count">228.8k</span>
                  </span>
                  <span class="jlsocial-element-right">fans</span>
                </div>
                <div class="jlsocial-element jl-youtube jl_radus_e">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/user/envato"
                    title="Youtube"
                  ></a>
                  <span class="jlsocial-element-left">
                    <i class="jli-youtube" aria-hidden="true"></i>
                    <span class="num-count">65.5k</span>
                  </span>
                  <span class="jlsocial-element-right">subscribers</span>
                </div>
                <div class="jlsocial-element jl-vimeo jl_radus_e">
                  <a
                    target="_blank"
                    href="https://vimeo.com/beeple"
                    title="vimeo"
                  ></a>
                  <span class="jlsocial-element-left">
                    <i class="jli-vimeo" aria-hidden="true"></i>
                    <span class="num-count">240</span>
                  </span>
                  <span class="jlsocial-element-right">subscribers</span>
                </div>
                <div class="jlsocial-element jl-pinterest jl_radus_e">
                  <a
                    target="_blank"
                    href="https://pinterest.com/envato"
                    class="pinterest"
                    title="pinterest"
                  ></a>
                  <span class="jlsocial-element-left">
                    <i class="jli-pinterest" aria-hidden="true"></i>
                    <span class="num-count">9.87k</span>
                  </span>
                  <span class="jlsocial-element-right">followers</span>
                </div>
              </div>
            </div>
            <div
              id="sprasa_recent_post_text_widget-9"
              class="widget post_list_widget"
            >
              <!--Random Posts starts here-->
              <div class="widget_jl_wrapper">
                <div class="ettitle">
                  <div class="widget-title">
                    <h2 class="jl_title_c">Random Posts</h2>
                  </div>
                </div>
                <div class="bt_post_widget">
                  <div
                    class="jl_m_right jl_sm_list jl_ml jl_clear_at"
                    v-for="item in randomPosts"
                    :key="item.id"
                  >
                    <div class="jl_m_right_w">
                      <div class="jl_m_right_img jl_radus_e">
                        <a href="#">
                          <img
                            width="120"
                            height="120"
                            :src="item.image"
                            class="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div class="jl_m_right_content">
                        <h2 class="entry-title">
                          <router-link
                            :to="{
                              name: 'single-page',
                              params: { id: item.id },
                            }"
                          >
                            {{ item.title }}
                          </router-link>
                        </h2>
                        <span class="jl_post_meta"
                          ><span class="jl_author_img_w"
                            ><i class="jli-user"></i
                            ><a href="#" title="Posts by Spraya" rel="author">{{
                              item.users.name
                            }}</a></span
                          ><span class="post-date"
                            ><i class="jli-pen"></i>{{ item.created_at }}</span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Recent post ends here-->
            </div>
            <div
              id="sprasa_ads300x250_widget-2"
              class="widget jellywp_ads300x250_widget"
            >
              <div class="widget_jl_wrapper ads_widget_container">
                <div class="widget-title">
                  <h2 class="jl_title_c">Advertisement</h2>
                </div>
                <div class="ads300x250-thumb jl_radus_e">
                  <a href="#">
                    <img src="../img/585x560.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "../js/jquery.js";
import "../js/slick.js";
import "../js/custom.js";

import axiosClient from "@/axios";
import { ref, onMounted } from "vue";

const recentPosts = ref("");
const randomPosts = ref("");
const loading = ref(false);

const getFirst20Words = (str) => {
  const words = str.match(/\S+\s*/g);
  return words.slice(0, 30).join("");
};

const fetchData = () => {
  loading.value = true;
  axiosClient
    .get("v1/recent-posts")
    .then((res) => {
      loading.value = false;
      recentPosts.value = res.data.data.recent_posts;
      randomPosts.value = res.data.data.posts;
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
