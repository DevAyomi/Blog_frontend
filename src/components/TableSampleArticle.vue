<script setup>
import { onMounted, computed, ref, inject, reactive } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiEye, mdiTrashCan, mdiPencil } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import axiosClient from "@/axios";
import { TailwindPagination } from "laravel-vue-pagination";

defineProps({
  checkable: Boolean,
});

const form = reactive({
  name: "",
  description: "",
});

const swal = inject("$swal");

//Define function to declare error
const showFailureAlert = (message) => {
  swal.fire({
    icon: "error",
    title: "Ooops...",
    text: message,
    footer: '<a href="">Why do I have this issue?</a>',
  });
};

//Define an  function to show success of an event
const showSuccessAlert = (message) => {
  swal
    .fire({
      title: "Query successful",
      text: message,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Done",
    })
    .then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
};

const allCategories = ref("");

const getAllCategories = (page = 1) => {
  loading.value = true;
  axiosClient
    .get(`/v1/posts?page=${page}`)
    .then((res) => {
      loading.value = false;
      allCategories.value = res.data.data;
    })
    .catch((err) => {
      loading.value = false;
      showFailureAlert("Something went wrong");
    });
};

onMounted(() => {
  getAllCategories();
});

const mainStore = useMainStore();

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const isModalEditActive = ref(false);

const showCategory = ref("");

const checkedRows = ref([]);

const loading = ref(false);

const loadingButton = ref(false);

const getFirstTen = (str) => {
  return str.split(/\s+/).slice(0, 4).join(" ");
};

const show = (id) => {
  isModalActive.value = true;
  loading.value = true;
  axiosClient
    .get(`/v1/category/${id}`)
    .then((res) => {
      loading.value = false;
      showCategory.value = res.data.data;
    })
    .catch((err) => {
      loading.value = false;
      showFailureAlert("Something went wrong");
      console.log(err);
    });
};

const setBanner = (id) => {
  loading.value = true;
  if (mainStore.type !== "admin") {
    showFailureAlert("You don't have the right access to perform this action");
    loading.value = false;
  } else {
    axiosClient
      .post(`v1/set-banner-active/${id}`)
      .then((res) => {
        showSuccessAlert("Banner set active");
        loading.value = false;
      })
      .catch((err) => {
        showFailureAlert("Something went wrong");
        loading.value = false;
      });
  }
};

const edit = (id) => {
  isModalEditActive.value = true;
  loading.value = true;
  axiosClient
    .get(`/v1/category/${id}`)
    .then((res) => {
      loading.value = false;
      showCategory.value = res.data.data;
      form.name = res.data.data.name;
      form.description = res.data.data.description;
    })
    .catch((err) => {
      loading.value = false;
      showFailureAlert("Something went wrong");
      console.log(err);
    });
};

const saveEdit = (id) => {
  loadingButton.value = true;
  axiosClient
    .put(`/v1/category/${id}`, form)
    .then((res) => {
      console.log(res);
      showSuccessAlert("You have successfully edited a category");
    })
    .catch((err) => {
      loadingButton.value = false;
      console.log(err);
    });
};

const del = (id) => {
  swal
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/v1/posts/${id}`)
          .then(() => {
            swal.fire("Deleted!", "Your file has been deleted.", "success");
            setTimeout(() => {
              location.reload();
            }, 2000);
          })
          .catch((err) => {
            showFailureAlert("something went wrong");
          });
      }
    });
};

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Show Category">
    <div v-if="loading">
      <div class="flex justify-center items-center h-screen">
        <div class="inline-flex flex-row items-center">
          <div
            class="w-8 h-8 bg-blue-500 rounded-full animate-bounce mx-2"
          ></div>
          <div
            class="w-8 h-8 bg-green-500 rounded-full animate-bounce mx-2"
          ></div>
          <div
            class="w-8 h-8 bg-yellow-500 rounded-full animate-bounce mx-2"
          ></div>
          <div
            class="w-8 h-8 bg-red-500 rounded-full animate-bounce mx-2"
          ></div>
        </div>
      </div>
    </div>
    <div v-else>
      <h5>Title</h5>
      <p class="mb-4">{{ showCategory.name }}</p>

      <h5>Description</h5>
      <p>{{ showCategory.description }}</p>
    </div>
  </CardBoxModal>

  <CardBoxModal v-model="isModalEditActive" title="Edit Category">
    <div v-if="loading">
      <div class="flex justify-center items-center h-screen">
        <div class="inline-flex flex-row items-center">
          <div
            class="w-8 h-8 bg-blue-500 rounded-full animate-bounce mx-2"
          ></div>
          <div
            class="w-8 h-8 bg-green-500 rounded-full animate-bounce mx-2"
          ></div>
          <div
            class="w-8 h-8 bg-yellow-500 rounded-full animate-bounce mx-2"
          ></div>
          <div
            class="w-8 h-8 bg-red-500 rounded-full animate-bounce mx-2"
          ></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input
          v-model="form.name"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Description
        </label>
        <input
          v-model="form.description"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="flex items-center">
        <button
          @click="isModalEditActive = false"
          class="flex-1 mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>

        <button
          v-if="loadingButton"
          class="flex-1 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading
        </button>
        <button
          v-else
          @click="saveEdit(showCategory.id)"
          class="flex-1 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>Title</th>
        <th>Description</th>
        <th>Content</th>
        <th>mins</th>
        <th>Actions</th>
        <th />
      </tr>
    </thead>

    <div v-if="loading">
      <PreloaderComponent></PreloaderComponent>
    </div>

    <tbody v-else>
      <tr v-for="client in allCategories.data" :key="client.id">
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar
            :username="client.title"
            class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
          />
        </td>
        <td data-label="Title">
          {{ getFirstTen(client.title) }}
        </td>

        <td data-label="Description">
          {{ getFirstTen(client.description) }}
        </td>

        <td v-html="getFirstTen(client.content)" data-label="Content"></td>
        <td data-label="Read mins" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="client.mins_of_read"
            >{{ client.min_of_read }}</small
          >
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <div class="justify-start lg:justify-end">
            <button
              @click="del(client.id)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>

            <button
              v-if="client.banner == false"
              @click="setBanner(client.id)"
              class="bg-green-500 hover:bg-green-700 text-white font-bold ml-2 py-2 px-4 rounded"
            >
              Set banner
            </button>
            <button
              v-else
              @click="removeBanner(client.id)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 rounded"
            >
              Remove banner
            </button>

            <router-link :to="{ name: 'edit-post', params: { id: client.id } }">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-1 rounded"
              >
                Edit
              </button>
            </router-link>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <TailwindPagination
      :data="allCategories"
      @pagination-change-page="getAllCategories"
    />
  </div>
</template>
