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
      requiresAuth: true
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Writers Dashboard",
      requiresAuth: true
    },
    path: "/writers-dashboard",
    name: "writers-dashboard",
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
      title: "Landing",
    },
    path: "/landing-page",
    name: "landing-page",
    component: () => import("@/views/LandingView.vue"),
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
      title: "Tagss",
    },
    path: "/tags",
    name: "tags",
    component: () => import("@/views/TagsView.vue"),
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
      isGuest: true
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
    if(useMainStore().userType == 'writer'){
       next({ name: "writer-dashboard" });
    }else{
       next({ name: "dashboard" });
    }
  }else if(to.meta.Admin && useMainStore().type == "writer"){
     next({ name: "writers-dashboard" });
  }else if(to.meta.Client && useMainStore().type == "admin"){
    next({ name: "dashboard" });
  }else{
    next()
  }
});

export default router;
