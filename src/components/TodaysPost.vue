<template>
  <section class="home_section7">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="blockid_84d79c5" class="block-section jl-main-block">
            <div class="jl_grid_wrap_f jl_sf_grid jl_clear_at">
              <div class="jl-roww content-inner jl-col3 jl-col-row">
                <div class="jl_sec_title">
                  <h3 class="jl_title_c"><span>Today Stories</span></h3>
                  <p>These are posts created today</p>
                </div>
                <!--Todays post cards starts here-->
                <div
                  class="jl-grid-cols"
                  v-for="item in todaysPosts"
                  :key="item.id"
                >
                  <div class="p-wraper post-1614">
                    <div class="jl_m_right jl_sm_list jl_ml jl_clear_at">
                      <div class="jl_m_right_w">
                        <div class="jl_m_right_img jl_radus_e">
                          <a href="#">
                            <img
                              width="450"
                              height="450"
                              :src="item.image"
                              class="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div class="jl_m_right_content">
                          <span class="jl_f_cat"
                            ><a
                              class="post-category-color-text"
                              style="background: #eba845"
                              href="#"
                              >{{ item.categories[0]?.name }}</a
                            ></span
                          >
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
                              >{{ item.min_of_read }}</span
                            >
                          </span>
                          <p v-html="getFirst20Words(item.content)"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Todays post ends here-->
              </div>
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

const todaysPosts = ref("");

const getFirst20Words = (str) => {
  const words = str.match(/\S+\s*/g);
  return words.slice(0, 10).join("");
};

const fetchData = () => {
  axiosClient
    .get("v1/todays-post")
    .then((res) => {
      todaysPosts.value = res.data.data;
    })
    .catch((err) => {
      alert("Something went wrong");
    });
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
