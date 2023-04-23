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
import TableSampleWriters from "@/components/TableSampleWriters.vue";


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
  email: "",
  password: "",
  password_confirmation: "",
  phone_no: ""
});

const loading = ref(false);

const submit = () => {
  if(form.name == ""){
    loading.value = false;
    showFailureAlert("Name cannot be empty") 
  }else if(form.email == ""){
    loading.value = false;
    showFailureAlert("Email cannot be empty") 
  }else if(form.password ==""){
    loading.value = false;
    showFailureAlert("Password cannot be empty")
  }else if(form.password_confirmation == ""){
    loading.value = false;
    showFailureAlert("Confirm password field cannot be empty")
  }else if(form.phone_no == ""){
    loading.value = false;
    showFailureAlert("Phone number cannot be empty")
  }else{
    loading.value = true;
    axiosClient.post('/v1/writers', form).then((res) => {
      loading.value = false;
      showSuccessAlert("Writer created successfully")
      setTimeout(() => {
        location.reload()
      }, 3000);
    }).catch((err) => {
      loading.value = false;
      showFailureAlert("Something went wrong comrade")
    })
  }
};


</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Create Writer"
        main
      >
       
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <FormField label="Input Writer's details">
          <FormControl v-model="form.name" type="text" placeholder="Writer's name"/>
          <FormControl v-model="form.email" type="text" placeholder="Writer's email"/>
        </FormField>

        <FormField>
          <FormControl v-model="form.password" type="password" placeholder="Password"/>
          <FormControl v-model="form.password_confirmation" type="password" placeholder="Password Confirmation"/>
        </FormField>

        <FormField>
          <FormControl v-model="form.phone_no" type="tel" placeholder="Phone no"/>
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
        <TableSampleWriters checkable />
      </CardBox>

    </SectionMain>

  </LayoutAuthenticated>
</template>
