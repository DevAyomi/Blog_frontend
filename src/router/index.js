/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import { useMainStore } from "@/stores/main.js";

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
      requiresAuth: true,
      Admin: true,
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Writers Dashboard",
      requiresAuth: true,
      Writer: true,
    },
    path: "/writers-dashboard",
    name: "writer-dashboard",
    component: () => import("@/views/WritersDashboard.vue"),
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: {
      title: "Category Post",
    },
    path: "/category-post/:id",
    name: "category-post",
    component: () => import("@/views/CategoryPostView.vue"),
  },
  {
    meta: {
      title: "Landing",
    },
    path: "/landing-page",
    name: "landing-page",
    component: () => import("@/views/LandingView.vue"),
  },
  {
    meta: {
      title: "SinglePage",
    },
    path: "/single-page/:id",
    name: "single-page",
    component: () => import("@/views/SinglePost.vue"),
  },
  {
    meta: {
      title: "Register",
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Manage Writers",
      Admin: true,
    },
    path: "/manage-writers",
    name: "manage-writers",
    component: () => import("@/views/ManageWriter.vue"),
  },
  {
    meta: {
      title: "Tagss",
      title: "Tags",
    },
    path: "/tags",
    name: "tags",
    component: () => import("@/views/TagsView.vue"),
  },
  {
    meta: {
      title: "Create Post",
    },
    path: "/create-post",
    name: "create-post",
    component: () => import("@/views/CreatePost.vue"),
  },
  {
    meta: {
      title: "All Posts",
    },
    path: "/all-posts",
    name: "all-posts",
    component: () => import("@/views/AllPosts.vue"),
  },
  {
    meta: {
      title: "All Writer Posts",
    },
    path: "/all-writter-posts",
    name: "all-writter-posts",
    component: () => import("@/views/AllWriterPost.vue"),
  },
  {
    meta: {
      title: "Edit Post",
    },
    path: "/edit-post/:id",
    name: "edit-post",
    component: () => import("@/views/EditPost.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/writer-profile",
    name: "writer-profile",
    component: () => import("@/views/WriterProfile.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
      isGuest: true,
    },
    path: "/",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && useMainStore().token == null) {
    next({ name: "login" });
  } else if (useMainStore().token && to.meta.isGuest) {
    if (useMainStore().type == "writer") {
      next({ name: "writer-dashboard" });
    } else {
      next({ name: "dashboard" });
    }
  } else if (to.meta.Admin && useMainStore().type == "writer") {
    next({ name: "writers-dashboard" });
  } else if (to.meta.Writer && useMainStore().type == "admin") {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

let hasReloaded = false;

router.afterEach((to, from) => {
  if (!hasReloaded) {
    hasReloaded = true;
  } else {
    location.reload(); // guard condition to prevent infinite reload
  }
});

export default router;
