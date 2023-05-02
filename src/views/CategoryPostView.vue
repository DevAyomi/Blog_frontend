<template>
  <div class="mobile_nav_class jl-has-sidebar">
    <div
      class="options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night"
    >
      <div class="options_layout_container full_layout_enable_front">
        <!--Navbar here-->
        <!--Header Component starts here-->
        <Header class="mb-12"></Header>
        <!--Header Component ebds here-->

        <!--Load here-->
        <div v-if="loading"><preloader-component></preloader-component></div>
        <section class="home_section2" v-else>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div
                  id="blockid_72be465"
                  class="block-section jl-main-block"
                  data-blockid="blockid_72be465"
                  data-name="jl_mgrid"
                  data-page_max="11"
                  data-page_current="1"
                  data-author="none"
                  data-order="date_post"
                  data-posts_per_page="6"
                  data-offset="5"
                >
                  <div class="jl_grid_wrap_f jl_clear_at g_3col">
                    <div class="jl-roww content-inner jl-col3 jl-col-row">
                      <div class="jl_sec_title">
                        <h3 class="jl_title_c">
                          <span>All post related to category</span>
                        </h3>
                        <p>This is a section for category posts</p>
                      </div>
                      <!--Cut from here-->
                      <div
                        class="jl-grid-cols"
                        v-for="item in adminPosts"
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
                                  width="500"
                                  height="350"
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
                                  ><a
                                    href="#"
                                    title="Posts by Spraya"
                                    rel="author"
                                    >{{ item.users.name }}</a
                                  ></span
                                >
                                <span class="post-date"
                                  ><i class="jli-pen"></i
                                  >{{ item.created_at }}</span
                                >
                                <span class="post-read-time"
                                  ><i class="jli-watch-2"></i
                                  >{{ item.min_of_read }} read</span
                                >
                              </span>
                              <p v-html="getFirst20Words(item.content)"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--End here-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- end content -->
        <!-- Start footer -->
        <div class="mt-6">
          <Footer></Footer>
        </div>
        <!-- End footer -->
      </div>
    </div>
  </div>
</template>

<script setup>
import "../js/jquery.js";
import "../js/slick.js";
import "../js/custom.js";

import axiosClient from "@/axios";
import { ref, onMounted } from "vue";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
import { useRoute, useRouter } from "vue-router";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

const route = useRoute();

const adminPosts = ref("");

const getFirst20Words = (str) => {
  const words = str.match(/\S+\s*/g);
  return words.slice(0, 25).join("");
};

const loading = ref(false);

const fetchIdValue = () => {
  loading.value = true;
  if (route.params.id) {
    axiosClient
      .get(`v1/category-posts/${route.params.id}`)
      .then((res) => {
        adminPosts.value = res.data.data;
        loading.value = false;
      })
      .catch((err) => {
        console.log(err);
        loading.value = false;
      });
  }
};

onMounted(() => {
  fetchIdValue();
});
</script>

<style>
@import "../css/bootstrap.css";
@import "../css/shop.css";
@import "../css/style.css";
@import "../css/responsive.css";
@import "../css/mains.css";
</style>
