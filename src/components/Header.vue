<template>
  <header
    class="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cus_top_share"
  >
    <div class="header_top_bar_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="menu-primary-container navigation_wrapper">
              <ul id="jl_top_menu" class="jl_main_menu">
                <li class="menu-item current-menu-item current_page_item">
                  <a href=""><span class="border-menu"></span></a>
                  <router-link :to="{ name: 'landing-page' }">Home</router-link>
                </li>
                <li class="menu-item menu-item-4278">
                  <a href="#">About Us<span class="border-menu"></span></a>
                </li>
                <li class="menu-item menu-item-4279">
                  <a href="#">special offer<span class="border-menu"></span></a>
                </li>
                <li class="menu-item menu-item-4275">
                  <a href="#">Info!!<span class="border-menu"></span></a>
                </li>
              </ul>
            </div>
            <div class="jl_top_cus_social">
              <div class="menu_mobile_share_wrapper">
                <span class="jl_hfollow">Share us</span>
                <ul class="social_icon_header_top jl_socialcolor">
                  <li>
                    <a class="facebook" href="#" target="_blank"
                      ><i class="jli-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a class="vk" href="#" target="_blank"
                      ><i class="jli-vk"></i
                    ></a>
                  </li>
                  <li>
                    <a class="telegram" href="#" target="_blank"
                      ><i class="jli-telegram"></i
                    ></a>
                  </li>
                  <li>
                    <a class="behance" href="#" target="_blank"
                      ><i class="jli-behance"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Main menu -->
    <div class="jl_blank_nav"></div>
    <div id="menu_wrapper" class="menu_wrapper jl_menu_sticky jl_stick">
      <div class="container">
        <div class="row">
          <div class="main_menu col-md-12">
            <div class="logo_small_wrapper_table">
              <div class="logo_small_wrapper">
                <!-- begin logo -->
                <a class="logo_link" href="index.html">
                  <img class="jl_logo_n" src="../img/logo_n.png" alt="sprasa" />
                  <img class="jl_logo_w" src="../img/logo_w.png" alt="sprasa" />
                </a>
                <!-- end logo -->
              </div>
            </div>
            <!--Sidebar starts here-->
            <div class="search_header_menu jl_nav_mobile">
              <div class="menu_mobile_icons">
                <div class="jlm_w">
                  <span class="jlma"></span><span class="jlmb"></span
                  ><span class="jlmc"></span>
                </div>
              </div>
              <div
                class="search_header_wrapper search_form_menu_personal_click"
              >
                <i class="jli-search"></i>
              </div>
              <div class="jl_h_cart nav-cart is-hover">
                <a class="jl_l_cart cart-link" href="#" title="view cart">
                  <span class="jl_i_cart"
                    ><i class="jli-bag"></i
                    ><em class="cart-counter jl_count_cart">11</em></span
                  >
                </a>
                <div class="jl-nav-cart jl-hshow">
                  <div class="jl-cart-wrap woocommerce">
                    <div class="widget_shopping_cart_content">
                      <ul
                        class="woocommerce-mini-cart cart_list product_list_widget"
                      >
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                          <a href="#" class="remove remove_from_cart_button">
                            &times;
                          </a>
                          <a href="#">
                            <img
                              width="380"
                              height="380"
                              src="../img/380x380.png"
                              class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                              alt=""
                              loading="lazy"
                            />thread</a
                          >
                          <span class="quantity">
                            9 &times;
                            <span class="woocommerce-Price-amount amount">
                              <bdi
                                ><span class="woocommerce-Price-currencySymbol"
                                  >&#36;</span
                                >12.00</bdi
                              >
                            </span>
                          </span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                          <a
                            href="#"
                            class="remove remove_from_cart_button"
                            aria-label="Remove this item"
                          >
                            &times;
                          </a>
                          <a href="#">
                            <img
                              width="380"
                              height="380"
                              src="../img/380x380.png"
                              class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                              alt=""
                              loading="lazy"
                            />cup</a
                          >
                          <span class="quantity">
                            1 &times;
                            <span class="woocommerce-Price-amount amount">
                              <bdi
                                ><span class="woocommerce-Price-currencySymbol"
                                  >&#36;</span
                                >35.00</bdi
                              >
                            </span>
                          </span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                          <a href="#" class="remove remove_from_cart_button">
                            &times;
                          </a>
                          <a href="#">
                            <img
                              width="380"
                              height="380"
                              src="../img/380x380.png"
                              class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                              alt=""
                              loading="lazy"
                            />Flowerpot Plant</a
                          >
                          <span class="quantity">
                            1 &times;
                            <span class="woocommerce-Price-amount amount">
                              <bdi
                                ><span class="woocommerce-Price-currencySymbol"
                                  >&#36;</span
                                >2.00</bdi
                              >
                            </span>
                          </span>
                        </li>
                      </ul>
                      <p class="woocommerce-mini-cart__total total">
                        <strong>Subtotal:</strong>
                        <span class="woocommerce-Price-amount amount">
                          <bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >&#36;</span
                            >145.00</bdi
                          >
                        </span>
                      </p>
                      <p class="woocommerce-mini-cart__buttons buttons">
                        <a href="#" class="button wc-forward">View cart</a
                        ><a href="#" class="button checkout wc-forward"
                          >Checkout</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jl_day_night jl_day_en">
                <span class="jl-night-toggle-icon">
                  <span class="jl_moon">
                    <i class="jli-moon"></i>
                  </span>
                  <span class="jl_sun">
                    <i class="jli-sun"></i>
                  </span>
                </span>
              </div>
            </div>
            <!--Sidebar ends here-->
            <div
              class="menu-primary-container navigation_wrapper jl_cus_share_mnu"
            >
              <ul id="mainmenu" class="jl_main_menu">
                <li class="menu-item current-menu-item current_page_item">
                  <router-link :to="{ name: 'landing-page' }">Home</router-link>
                </li>
                <li class="menu-item menu-item-has-children">
                  <a href="#">
                    Categories<span class="border-menu"></span>
                    <span
                      class="jl_menu_lb"
                      style="background: #222ddc !important"
                      ><span
                        class="jl_lb_ar"
                        style="border-top: 3px solid #222ddc !important"
                      ></span
                      >New</span
                    >
                  </a>
                  <ul class="sub-menu">
                    <li
                      class="menu-item"
                      v-for="(item, index) in category"
                      :key="index"
                    >
                      <a>
                        <router-link
                          :to="{
                            name: 'category-post',
                            params: { id: item.id },
                          }"
                        >
                          {{ item.name }}
                        </router-link>
                        <span class="border-menu"></span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="inspiration.html"
                    >Tech<span class="border-menu"></span
                  ></a>
                </li>
                <li class="menu-item">
                  <a href="category.html"
                    >Crime<span class="border-menu"></span
                  ></a>
                </li>
                <li class="menupost">
                  <a href="business.html">
                    Trending<span class="border-menu"></span>
                    <span
                      class="jl_menu_lb"
                      style="background: #f74539 !important"
                      ><span
                        class="jl_lb_ar"
                        style="border-top: 3px solid #f74539 !important"
                      ></span
                      >Hot!</span
                    >
                  </a>
                  <ul class="sub-menu menu_post_feature">
                    <li>
                      <div
                        id="sprasa_recent_large_widgets-2"
                        class="widget main_post_style"
                      >
                        <h3 class="widget-title">
                          <span>Recent Posts</span>
                        </h3>
                        <div class="jl_grid_overlay jl_w_menu jl_clear_at">
                          <div
                            class="jl_grid_overlay_col"
                            v-for="(item, index) in hotPosts"
                            :key="index"
                          >
                            <div class="jl_grid_verlay_wrap jl_radus_e">
                              <div
                                class="jl_f_img_bg"
                                :style="{
                                  backgroundImage: `url(${item.image})`,
                                }"
                              ></div>

                              <span class="jl_f_cat"
                                ><a
                                  class="post-category-color-text"
                                  style="background: #91bd3a"
                                  href="#"
                                  >{{ item.categories[0]?.name }}</a
                                ></span
                              >
                              <div class="jl_f_postbox">
                                <h3 class="jl_f_title">
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
                                    ><i class="jli-pen"></i
                                    >{{ item.created_at }}</span
                                  ><span class="post-read-time"
                                    ><i class="jli-watch-2"></i
                                    >{{ item.min_of_read }}</span
                                  >
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                  <a href="shop.html">
                    Sign In<span class="border-menu"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import axiosClient from "@/axios";
import { ref, onMounted } from "vue";

const hotPosts = ref("");
const category = ref("");

const fetchData = () => {
  axiosClient
    .get("v1/side-nav-bar")
    .then((res) => {
      hotPosts.value = res.data.data.posts;
      category.value = res.data.data.categories;
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
