<script setup>
import { computed, ref, onMounted,inject } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiBallotOutline, mdiAccount, mdiMail,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import SectionBannerStarOnGitHub from "@/components/SectionBannerStarOnGitHub.vue";
import axiosClient from "@/axios";

const swal = inject('$swal')

//Define function to declare error
const showFailureAlert = (message) => {
  swal.fire({
    icon: 'error',
    title: 'Ooops...',
    text: message,
    footer: '<a href="">Why do I have this issue?</a>'
  })
}

const loading = ref(false);
const allWriters = ref("");
const allArticles = ref("");
const allCategories = ref("")
const tags = ref("");
const writers = ref("")

const getDashboardData = () => {
  loading.value = true;

  axiosClient.get('/v1/admin-dashboard').then((res) => {
    loading.value = false
    allWriters.value = res.data.data.allUsersCount;
    allArticles.value = res.data.data.allArticlesCount;
    allCategories.value = res.data.data.allCategoriesCount;
    tags.value = res.data.data.tags;
    writers.value = res.data.data.users;
    console.log(res)
  }).catch((err) => {
    loading.value = false
    showFailureAlert(err)
  })
}

const getFirstTen = (str) => {
  return str.split(/\s+/).slice(0, 4).join(" ");
}

onMounted(() => {
  getDashboardData();
});

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain v-if="loading" class="flex h-screen items-center justify-center">
          <div
      class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <div
      class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <div
      class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <div
      class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <div
      class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <div
      class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <div
  class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-neutral-100 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
    </SectionMain>
    <SectionMain v-else>
      <SectionTitleLineWithButton
        :icon="mdiChartTimelineVariant"
        title="Overview"
        main
      >
        <BaseButton
          href="https://github.com/justboil/admin-one-vue-tailwind"
          target="_blank"
          :icon="mdiGithub"
          label="Star on GitHub"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trend="12%"
          trend-type="up"
          color="text-emerald-500"
          :icon="mdiAccountMultiple"
          :number=allWriters
          label="All Writers"
        />
        <CardBoxWidget
          trend="12%"
          trend-type="up"
          color="text-blue-500"
          :icon="mdiAccount"
          :number=allArticles
          label="All Articles"
        />
        <CardBoxWidget
          trend="Categories"
          trend-type="alert"
          color="text-red-500"
          :icon="mdiBallotOutline"
          :number=allCategories
          label="All Categories"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="flex flex-col justify-between">
          <h2 class="mb-2 text-xl">Most popular tags</h2>
          <CardBoxClient
            v-for="client in tags"
            :key="client.id"
            :name="client.name"
            :date="getFirstTen(client.description)"
            :progress="client.count"
          />
        </div>
        <div class="flex flex-col justify-between">
          <h2 class="mb-2 text-xl">Writers with most post</h2>
          <CardBoxClient
            v-for="client in writers"
            :key="client.id"
            :name="client.name"
            :date="client.phone_no"
            :progress="client.posts_count"
          />
        </div>
      </div>

      <SectionBannerStarOnGitHub class="mt-6 mb-6" />
    </SectionMain>
  </LayoutAuthenticated>
</template>
