<script setup>
import { reactive, ref, inject, onMounted } from "vue";
import { mdiBallotOutline, mdiAccount, mdiMail, mdiGithub } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import axiosClient from "@/axios";
import TableSampleArticle from "@/components/TableSampleArticle.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { component as CKEditor } from "@ckeditor/ckeditor5-vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import CommaSeperated from "@/components/CommaSeperated.vue";
import PreloaderComponent from "@/components/PreloaderComponent.vue";

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

const selectOptions = [
  { id: 1, label: "Not Premium" },
  { id: 2, label: "Premium" },
];

const selectTags = ref([]);

const selectCategory = ref([]);

const bigLoading = ref(false);

const getTags = () => {
  bigLoading.value = true;
  axiosClient
    .get("v1/all-tags")
    .then((res) => {
      selectTags.value = res.data.data;
      bigLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      bigLoading.value = false;
    });
};

const getCategories = () => {
  bigLoading.value = true;
  axiosClient
    .get("v1/all-categories")
    .then((res) => {
      selectCategory.value = res.data.data;
      bigLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      bigLoading.value = false;
    });
};

const tagsArray = ref([]);
const tagsId = ref([]);

const categoryArray = ref([]);
const categoryId = ref([]);

const onTagsChange = () => {
  let data = form.tags;

  const foundItem = selectTags.value.find((item) => item.id === data);

  tagsArray.value.push(foundItem.name + "," + "  ");

  tagsId.value.push(data);
};

const onCategoryChange = () => {
  let data = form.category;

  const foundItem = selectCategory.value.find((item) => item.id === data);

  categoryArray.value.push(foundItem.name + "," + "  ");

  categoryId.value.push(data);
};

onMounted(() => {
  getTags(), getCategories();
});

const url = ref("");

const csvString = ref("");
const arrayData = ref([]);

const convertCsvToArray = () => {
  arrayData.value = csvString.value.split(",").map((item) => item.trim());
};

const showSuccessAlert = (message) => {
  swal.fire({
    icon: "success",
    title: "Hey Comrade...",
    text: message,
    footer: "You have created a category comrade",
  });
};

const form = reactive({
  title: "",
  description: "",
  content: "",
  image: "",
  type: selectOptions[0],
  category: "",
  tags: arrayData,
  min_of_read: "",
});

const loading = ref(false);

const submit = () => {
  loading.value = true;

  if (form.title == "") {
    showFailureAlert("Article name cannot be empty");
    loading.value = false;
  } else if (form.description == "") {
    showFailureAlert("Article description cannot be empty");
    loading.value = false;
  } else if (form.content == "") {
    showFailureAlert("Content cannot be empty");
    loading.value = false;
  } else if (arrayData.value == "") {
    showFailureAlert("Kindly add tags");
    loading.value = false;
  } else if (form.image == "") {
    showFailureAlert("Thumbnail cannot be empty");
    loading.value = false;
  } else if (form.min_of_read == "") {
    showFailureAlert("Mins of read cannot be empty");
    loading.value = false;
  } else if (form.category == "") {
    showFailureAlert("Category can't be empty");
    loading.value = false;
  } else if (form.tags == "") {
    showFailureAlert("Tags can't be empty");
    loading.value = false;
  } else if (form.type == "") {
    showFailureAlert("Type cannot be empty");
    loading.value = false;
  } else {
    const formData = new FormData();
    formData.append("image", form.image);
    axiosClient
      .post("v1/image-upload", formData)
      .then((res) => {
        form.image = res.data.data;
        form.type = form.type.label;
        form.category = categoryId.value;
        form.tags = arrayData.value;
        console.log(form);
        axiosClient
          .post("v1/posts", form)
          .then((res) => {
            console.log(res);
            showSuccessAlert("Article created successfully");
            loading.value = false;
            location.reload();
          })
          .catch((err) => {
            showFailureAlert(err);
            loading.value = false;
          });
      })
      .catch((err) => {
        loading.value = false;
        showFailureAlert(err);
      });
  }
};
</script>

<template>
  <LayoutAuthenticated>
    <PreloaderComponent v-if="bigLoading" />
    <SectionMain v-else>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Create Article"
        main
      >
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <FormField label="Article details">
          <FormControl
            v-model="form.title"
            type="text"
            placeholder="Article name"
          />
          <FormControl
            v-model="form.description"
            type="text"
            placeholder="Article description"
          />
        </FormField>

        <FormField label="Select type">
          <FormControl
            placeholder="Select type"
            v-model="form.type"
            :options="selectOptions"
          />
          <FormControl placeholder="Mins of read" v-model="form.min_of_read" />
        </FormField>

        <FormField label="Add Tags">
          <div class="flex justify-between">
            <input type="text" class="w-full" v-model="csvString" />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1"
              @click="convertCsvToArray"
            >
              Add
            </button>
          </div>
          <ul class="flex flex-row space-x-2 border border-gray-900 p-4">
            <li v-for="item in arrayData" :key="item">
              {{ item }}
            </li>
          </ul>
        </FormField>

        <FormField label="Select Catgories">
          <select
            id="type-select"
            v-model="form.category"
            @change="onCategoryChange"
          >
            <option
              v-for="type in selectCategory"
              :key="type.id"
              :value="type.id"
            >
              {{ type.name }}
            </option>
          </select>
          <CommaSeperated :items="categoryArray"></CommaSeperated>
        </FormField>

        <FormField label="select type">
          <div class="flex">
            <FormFilePicker label="Upload thumbnail" v-model="form.image" />
            <small
              >Upload image with 400 * 150px dimension for better quality</small
            >
          </div>
        </FormField>
        <div>
          <CKEditor
            :editor="ClassicEditor"
            v-model="form.content"
            :config="editorConfig"
          />
        </div>

        <template #footer>
          <BaseButtons>
            <button
              v-if="loading"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-3 mr-2 px-2 rounded inline-flex items-center"
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

            <BaseButton
              v-else
              type="submit"
              @click="submit"
              color="info"
              label="Submit"
            />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>

    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiTableBorder"
        title="Articles table"
        main
      >
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table>
        <TableSampleArticle checkable />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<style>
.ck-editor__editable {
  min-height: 260px;
}
</style>
