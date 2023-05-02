<template>
  <div class="mobile_nav_class jl-has-sidebar">
    <div
      class="options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night"
    >
      <div class="options_layout_container full_layout_enable_front">
        <!--Header Component starts here-->
        <Header></Header>
        <!--Header Component ebds here-->

        <!--Content nav component starts here-->
        <ContentSidebar></ContentSidebar>
        <!--Content Sidebar ends here-->

        <div class="search_form_menu_personal">
          <div class="menu_mobile_large_close">
            <span class="jl_close_wapper search_form_menu_personal_click"
              ><span class="jl_close_1"></span><span class="jl_close_2"></span
            ></span>
          </div>
          <form method="get" class="searchform_theme" action="#">
            <input
              type="text"
              placeholder="Search..."
              value=""
              name="s"
              class="search_btn"
            />
            <button type="submit" class="button">
              <i class="jli-search"></i>
            </button>
          </form>
        </div>
        <div class="mobile_menu_overlay"></div>
        <div class="jl_home_bw">
          <preloader-component v-if="loading"></preloader-component>
          <div v-else>
            <!--Banner starts here-->
            <Banner></Banner>
            <!--Banner ends here-->

            <!--Editors Pick-->
            <editors-pick></editors-pick>
            <!--End editors pick-->

            <!--Most viewed here starts here-->
            <most-viewed></most-viewed>
            <!--Most viewed ends here-->

            <!--Recents post starts here-->
            <recent-post></recent-post>
            <!--Recents post ends here-->

            <!--Todays posts starts here-->
            <todays-post></todays-post>
            <!--Todays posts ends here-->
          </div>
          <!-- end content -->

          <!-- Start footer -->
          <Footer></Footer>
          <!-- End footer -->
        </div>

        <div id="go-top">
          <a href="#go-top"><i class="jli-up-chevron"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import ContentSidebar from "@/components/ContentSidebar.vue";
import EditorsPick from "@/components/EditorsPick.vue";
import { CCarousel, CCarouselItem } from "@coreui/vue";
import CarouselSide from "@/components/CarouselSide.vue";
import MostViewed from "@/components/MostViewed.vue";
import RecentPost from "@/components/RecentPost.vue";
import TodaysPost from "@/components/TodaysPost.vue";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
import { ref, onMounted, defineComponent } from "vue";

onMounted(() => {});

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
