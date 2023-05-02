<script setup>
import { mdiLogout, mdiClose } from "@mdi/js";
import { computed, ref, inject } from "vue";
import { useStyleStore } from "@/stores/style.js";
import AsideMenuList from "@/components/AsideMenuList.vue";
import AsideMenuItem from "@/components/AsideMenuItem.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import axiosClient from "@/axios";
import { useRouter } from "vue-router";


const swal = inject('$swal')

defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const showSuccessAlert = (message) => {
  swal.fire({
  title: 'Are you sure?',
  text: message,
  icon: 'info',
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Done'
}).then((result) => {
  if (result.isConfirmed) {
    location.reload()
  }
})
}

const router = useRouter();

const emit = defineEmits(["menu-click", "aside-lg-close-click"]);

const styleStore = useStyleStore();

const logoutItem = computed(() => ({
  label: "Logout",
  icon: mdiLogout,
  color: "info",
  isLogout: true,
}));

const logouLoading = computed(() => ({
  label: "Loading.....",
  icon: mdiLogout,
  color: "info",
  isLogout: true,
}));

const loading = ref(false);

const logout = () => {
  loading.value = true
  axiosClient.post('v1/logout').then((res) => {
    sessionStorage.removeItem('TOKEN')
    router.push({
      name: "login",
    });
    showSuccessAlert("Are you sure you want to log out")
  }).catch((err) => {
    alert(err)
    logouLoading.value = false;
  });
}

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

const asideLgCloseClick = (event) => {
  emit("aside-lg-close-click", event);
};
</script>

<template>
  <aside
    id="aside"
    class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
  >
    <div
      :class="styleStore.asideStyle"
      class="lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"
    >
      <div
        :class="styleStore.asideBrandStyle"
        class="flex flex-row h-14 items-center justify-between dark:bg-slate-900"
      >
        <div
          class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"
        >
          <b class="font-black">Investigation Digest</b>
        </div>
        <button
          class="hidden lg:inline-block xl:hidden p-3"
          @click.prevent="asideLgCloseClick"
        >
          <BaseIcon :path="mdiClose" />
        </button>
      </div>
      <div
        :class="
          styleStore.darkMode
            ? 'aside-scrollbars-[slate]'
            : styleStore.asideScrollbarsStyle
        "
        class="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <AsideMenuList :menu="menu" @menu-click="menuClick" />
      </div>

      <ul>
        <AsideMenuItem @click="logout" :item="logouLoading" v-if="loading" />
        <AsideMenuItem @click="logout" :item="logoutItem" v-else />
      </ul>
    </div>
  </aside>
</template>
