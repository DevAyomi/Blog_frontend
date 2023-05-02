<template>
  <div class="mobile_nav_class jl-has-sidebar">
    <div
      class="options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night"
    >
      <div class="options_layout_container full_layout_enable_front">
        <!--Navbar here-->
        <!--Header Component starts here-->
        <Header></Header>
        <!--Header Component ebds here-->

        <!--Load here-->
        <div v-if="loading"><preloader-component></preloader-component></div>
        <div v-else>
          <!--Content nav component starts here-->
          <ContentSidebar></ContentSidebar>
          <!--Content Sidebar ends here-->
          <!--navbar ends here-->
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
          <section id="content_main" class="clearfix jl_spost">
            <div class="container d-flex justify-content-between">
              <div class="w-60" id="content">
                <div class="widget_container content_page">
                  <!-- start post -->
                  <div
                    class="post-2970 post type-post status-publish format-gallery has-post-thumbnail hentry category-business tag-inspiration tag-morning tag-tip tag-tutorial post_format-post-format-gallery"
                    id="post-2970"
                  >
                    <div
                      class="single_section_content box blog_large_post_style"
                    >
                      <div class="jl_single_style2">
                        <!--Banner here-->
                        <div class="w-full relative mb-8">
                          <div>
                            <div>
                              <div class="h-full w-full rounded-lg bg-gray-900">
                                <img
                                  class="w-full rounded-lg relative bg-opacity-75"
                                  :src="post.image"
                                  alt="slide 1"
                                />
                              </div>
                              <div
                                class="absolute inset-0 bg-black opacity-50"
                              ></div>
                              <div
                                class="pl-[40px] absolute bottom-2 md:bottom-14 pr-[50px] z-20 flex justify-center flex-col pb-[10px]"
                              >
                                <span class="md:mb-[20px] mb-[12px]"
                                  ><a
                                    class="px-[8px] py-1 text-white text-xs rounded-[5px]"
                                    style="background: #d63447"
                                    href="#"
                                    >{{ category }}</a
                                  ></span
                                >
                                <h4
                                  class="text-[18px] md:text-[35px] -mb-0 md:-mb-0 text-white font-bold"
                                >
                                  {{ post.title }}
                                </h4>

                                <div class="space-x-3 mt-2 md:mt-0 text-white">
                                  <span class="space-x-2"
                                    ><i class="jli-user"></i
                                    ><a
                                      href="#"
                                      class="text-white"
                                      title="Posts by Spraya"
                                      rel="author"
                                      >{{ post.users?.name }}</a
                                    ></span
                                  >
                                  <span class=""
                                    ><i class="jli-pen"></i
                                    >{{ post.created_at }}</span
                                  >
                                  <span class=""
                                    ><i class="jli-pen"></i
                                    >{{ post.min_of_read }}</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Banner ends here-->
                      </div>
                      <div class="post_content_w mb-12">
                        <div class="post_sw">
                          <div class="post_s">
                            <div class="jl_single_share_wrapper jl_clear_at">
                              <ul class="single_post_share_icon_post">
                                <li class="single_post_share_facebook">
                                  <a href="#" target="_blank"
                                    ><i class="jli-facebook"></i
                                  ></a>
                                </li>
                                <li class="single_post_share_twitter">
                                  <a href="#" target="_blank"
                                    ><i class="jli-twitter"></i
                                  ></a>
                                </li>
                                <li class="single_post_share_pinterest">
                                  <a href="#" target="_blank"
                                    ><i class="jli-pinterest"></i
                                  ></a>
                                </li>
                                <li class="single_post_share_linkedin">
                                  <a href="#" target="_blank"
                                    ><i class="jli-linkedin"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <span class="single-post-meta-wrapper jl_sfoot"
                              ><a
                                href="#"
                                class="jm-post-like"
                                data-post_id="2970"
                                title="Like"
                                ><i class="jli-love"></i
                                ><span>{{ post.likes }}</span> </a
                              ><span class="view_options"
                                ><i class="jli-view-o"></i
                                ><span>{{ post.no_of_views }}</span></span
                              >
                            </span>
                          </div>
                        </div>
                        <div class="post_content jl_content">
                          <p
                            class="text-justify mb-6S"
                            v-html="post.content"
                          ></p>
                        </div>
                      </div>
                      <div class="clearfix"></div>

                      <div class="auth">
                        <div class="author-info jl_info_auth">
                          <div class="author-avatar">
                            <img
                              src="../img/450x450.png"
                              width="165"
                              height="165"
                              alt="Spraya"
                              class="avatar avatar-165 wp-user-avatar wp-user-avatar-165 alignnone photo"
                            />
                          </div>
                          <div class="author-description">
                            <h5><a href="#"> Spraya</a></h5>
                            <ul class="jl_auth_link clearfix">
                              <li>
                                <a href="#" target="_blank"
                                  ><i class="jli-link"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#" target="_blank"
                                  ><i class="jli-linkedin"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#" target="_blank"
                                  ><i class="jli-rss"></i
                                ></a>
                              </li>
                            </ul>
                            <p>
                              Etiam vitae dapibus rhoncus eget etiam aenean nisi
                              montes felis pretium donec veni pede vidi
                              condimentum et aenean hendrerit. Quis sem justo
                              nisi varius Phasellus tellus tellus, imperdiet ut
                              imperdiet eu, iaculis a sem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="related-posts">
                        <h4>Related Articles</h4>
                        <div class="single_related_post">
                          <div
                            class="jl_m_right jl_m_list jl_m_img"
                            v-for="(item, index) in recentPosts"
                            :key="index"
                          >
                            <div class="jl_m_right_w">
                              <div class="jl_m_right_img jl_radus_e">
                                <a href="#">
                                  <img
                                    width="500"
                                    height="350"
                                    :src="item.image"
                                    class="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image"
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
                                  <a href="#" tabindex="-1">{{ item.title }}</a>
                                </h2>
                                <span class="jl_post_meta"
                                  ><span class="jl_author_img_w"
                                    ><i class="jli-user"></i
                                    ><a
                                      href="#"
                                      title="Posts by Spraya"
                                      rel="author"
                                      >{{ item.users.name }}</a
                                    ></span
                                  ><span class="post-date"
                                    ><i class="jli-pen"></i
                                    >{{ item.created_at }}</span
                                  ><span class="post-read-time"
                                    ><i class="jli-watch-2"></i
                                    >{{ item.min_of_read }}</span
                                  ></span
                                >
                                <p>
                                  Mauris mattis auctor cursus. Phasellus tellus
                                  tellus, imperdiet ut imperdiet eu, iaculis a
                                  sem. Donec vehicula luctus nunc...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="respond" class="comment-respond">
                        <h3 id="reply-title" class="comment-reply-title">
                          Leave a Reply
                        </h3>
                        <form
                          action="https://www.dobrovesta.ru/post-layout-1.html"
                          method="post"
                          id="commentform"
                          class="comment-form"
                        >
                          <p class="comment-notes">
                            <span id="email-notes"
                              >Your email address will not be published.</span
                            >
                            Required fields are marked
                            <span class="required">*</span>
                          </p>
                          <p class="comment-form-comment">
                            <textarea
                              class="u-full-width"
                              id="comment"
                              name="comment"
                              cols="45"
                              rows="8"
                              aria-required="true"
                              placeholder="Comment"
                            ></textarea>
                          </p>
                          <div class="form-fields row">
                            <span class="comment-form-author col-md-4"
                              ><input
                                id="author"
                                name="author"
                                type="text"
                                value=""
                                size="30"
                                placeholder="Fullname"
                            /></span>
                            <span class="comment-form-email col-md-4"
                              ><input
                                id="email"
                                name="email"
                                type="text"
                                value=""
                                size="30"
                                placeholder="Email Address"
                            /></span>
                            <span class="comment-form-url col-md-4"
                              ><input
                                id="url"
                                name="url"
                                type="text"
                                value=""
                                size="30"
                                placeholder="Web URL"
                            /></span>
                          </div>
                          <p class="comment-form-cookies-consent">
                            <input
                              id="wp-comment-cookies-consent"
                              name="wp-comment-cookies-consent"
                              type="checkbox"
                              value="yes"
                            />
                            <label for="wp-comment-cookies-consent"
                              >Save my name, email, and website in this browser
                              for the next time I comment.</label
                            >
                          </p>
                          <p class="form-submit">
                            <input
                              name="submit"
                              type="submit"
                              id="submit"
                              class="submit"
                              value="Post Comment"
                            />
                            <input
                              type="hidden"
                              name="comment_post_ID"
                              id="comment_post_ID"
                            />
                          </p>
                        </form>
                      </div>
                      <!-- #respond -->
                    </div>
                  </div>
                  <!-- end post -->
                  <div class="brack_space"></div>
                </div>
              </div>

              -
            </div>
          </section>
          <!-- end content -->
          <!-- Start footer -->
          <div class="mt-6">
            <Footer></Footer>
          </div>
        </div>
        <!-- End footer -->
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
import ContentSidebar from "@/components/ContentSidebar.vue";
import { CCarousel, CCarouselItem } from "@coreui/vue";
import { useRoute, useRouter } from "vue-router";
import axiosClient from "@/axios";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
import { ref, onMounted } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

const loading = ref(false);

const route = useRoute();

const router = useRouter();

const post = ref("");

const category = ref("");

const recentPosts = ref("");

const fetchIdValue = () => {
  loading.value = true;
  if (route.params.id) {
    axiosClient
      .get(`v1/view-post/${route.params.id}`)
      .then((res) => {
        category.value = res.data.data.categories[0]?.name;
        post.value = res.data.data;

        axiosClient
          .get(`v1/category-post/${res.data.data.categories[0]?.id}`)
          .then((res) => {
            recentPosts.value = res.data.data;
            loading.value = false;
          })
          .catch((err) => {
            console.log(err);
            loading.value = false;
          });
      })
      .catch((err) => {
        loading.value = false;
        alert("Something went wrong");
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
