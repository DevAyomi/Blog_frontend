<template>
  <footer
    id="footer-container"
    class="jl_footer_act enable_footer_columns_dark"
  >
    <div class="footer-columns">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div
              id="sprasa_about_us_widget-2"
              class="widget jellywp_about_us_widget"
            >
              <div class="widget_jl_wrapper about_widget_content">
                <div class="jellywp_about_us_widget_wrapper">
                  <img
                    class="footer_logo_about"
                    src="../img/logo_w.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    Aenean commodo ligula eget dolor aenean massa cum sociis
                    natoque penatibus et magnis cum aenean massa cum sociis
                    natoque penatibus
                  </p>
                  <div class="social_icons_widget">
                    <ul
                      class="social-icons-list-widget icons_about_widget_display"
                    ></ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="sprasa_about_us_widget-4"
              class="widget jellywp_about_us_widget"
            >
              <div class="widget_jl_wrapper about_widget_content">
                <div class="jellywp_about_us_widget_wrapper">
                  <div class="social_icons_widget">
                    <ul
                      class="social-icons-list-widget icons_about_widget_display"
                    >
                      <li>
                        <a href="#" class="facebook" target="_blank"
                          ><i class="jli-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="behance" target="_blank"
                          ><i class="jli-behance"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="telegram" target="_blank"
                          ><i class="jli-telegram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="vimeo" target="_blank"
                          ><i class="jli-vimeo"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="youtube" target="_blank"
                          ><i class="jli-youtube"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="tumblr" target="_blank"
                          ><i class="jli-tumblr"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="instagram" target="_blank"
                          ><i class="jli-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="linkedin" target="_blank"
                          ><i class="jli-linkedin"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="pinterest" target="_blank"
                          ><i class="jli-pinterest"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="twitter" target="_blank"
                          ><i class="jli-twitter"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              id="sprasa_recent_post_text_widget-8"
              class="widget post_list_widget"
            >
              <div class="widget_jl_wrapper">
                <div class="ettitle">
                  <div class="widget-title">
                    <h2 class="jl_title_c">More from Us</h2>
                  </div>
                </div>
                <div class="bt_post_widget">
                  <!--Post widget starts here-->
                  <div
                    class="jl_m_right jl_sm_list jl_ml jl_clear_at"
                    v-for="item in posts"
                    :key="item.id"
                  >
                    <div class="jl_m_right_w">
                      <div class="jl_m_right_img jl_radus_e">
                        <a>
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
                        </span>
                      </div>
                    </div>
                  </div>
                  <!--Post widget ends here-->
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="widget_jl_wrapper jl_clear_at">
              <div
                id="sprasa_category_image_widget_register-2"
                class="widget jellywp_cat_image"
              >
                <div class="widget-title">
                  <h2 class="jl_title_c">Categories</h2>
                </div>
                <div class="wrapper_category_image">
                  <div class="category_image_wrapper_main">
                    <!--Category starts here-->
                    <div
                      class="jl_cat_img_w"
                      v-for="item in categories"
                      :key="item.id"
                    >
                      <div class="jl_cat_img_c">
                        <a>
                          <router-link
                            :to="{
                              name: 'category-post',
                              params: { id: item.id },
                            }"
                          >
                          </router-link>
                        </a>
                        <div
                          class="category_image_bg_image jl_f_img_bg"
                          style="
                            background-color: #4dcf8f;
                            background-image: url('../img120x120.png');
                          "
                        ></div>
                        <span class="jl_cm_overlay"
                          ><span class="jl_cm_name">{{ item.name }}</span
                          ><span class="jl_cm_count"
                            >{{ item.posts_count }} Posts</span
                          ></span
                        >
                      </div>
                    </div>
                    <!--Catgory ends here-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom enable_footer_copyright_dark">
      <div class="container">
        <div class="row bottom_footer_menu_text">
          <div class="col-md-12">
            <div class="jl_ft_w">
              © Copyright 2020 Jellywp. All rights reserved powered by Jellywp
              <ul id="menu-footer-menu" class="menu-footer">
                <li class="menu-item menu-item-6">
                  <a title="" href="#">About Us</a>
                </li>
                <li class="menu-item menu-item-7">
                  <a title="" href="#">Private policy</a>
                </li>
                <li class="menu-item menu-item-8">
                  <a title="" href="#">Forums</a>
                </li>
                <li class="menu-item menu-item-9">
                  <a title="" href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import axiosClient from "@/axios";
import { ref, onMounted } from "vue";

const posts = ref("");
const categories = ref("");

const fetchData = () => {
  axiosClient
    .get("v1/footer")
    .then((res) => {
      posts.value = res.data.data.posts;
      categories.value = res.data.data.categories;
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
