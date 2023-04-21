<script setup>
import {  reactive, ref, inject } from "vue";
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
import TableSampleCategory from "@/components/TableSampleCategory.vue";


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

const showSuccessAlert = (message) => {
  swal.fire({
    icon: 'success',
    title: 'Hey Comrade...',
    text: message,
    footer: 'You have created a category comrade'
  })
}

const form = reactive({
  name: "",
  description: "",
});

const loading = ref(false);

const submit = () => {
  loading.value = true;
  axiosClient.post('/v1/category', form).then((res) => {
    loading.value = true;
    showSuccessAlert("Category created successfully")
    setTimeout(() => {
      location.reload()
    }, 3000);
  }).catch((err) => {
    loading.value = true;
    showFailureAlert("Something went wrong comrade")
  })
};


</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Create Category"
        main
      >
       
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <FormField label="Grouped with icons">
          <FormControl v-model="form.name" type="text" placeholder="Category name"/>
          <FormControl v-model="form.description" type="text" placeholder="Category description"/>
        </FormField>

        <template #footer>
          <BaseButtons>
            <button v-if="loading" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-3 mr-2 px-2 rounded inline-flex items-center">
              <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </button>



            <BaseButton v-else type="submit" @click="submit" color="info" label="Submit" />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>


    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Categories table" main>
       
      </SectionTitleLineWithButton>
    

      <CardBox class="mb-6" has-table>
        <TableSampleCategory checkable />
      </CardBox>

    </SectionMain>

  </LayoutAuthenticated>
</template>
