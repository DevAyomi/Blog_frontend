<script setup>
import { reactive, ref, onMounted, inject } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiGithub,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import UserCard from "@/components/UserCard.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import PreloaderComponent from '@/components/PreloaderComponent.vue';
import axiosClient from "@/axios";


const swal = inject('$swal')

const preloading = ref(false);

const loading = ref(false)

//Define function to declare error
const showFailureAlert = (message) => {
  swal.fire({
    icon: 'error',
    title: 'Ooops...',
    text: message,
    footer: '<a href="">Why do I have this issue?</a>'
  })
}

//Define an  function to show success of an event
const showSuccessAlert = (message) => {
  swal.fire({
  title: 'Successfull',
  text: message,
  icon: 'success',
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Done'
}).then((result) => {
  if (result.isConfirmed) {
    location.reload()
  }
})
}

const mainStore = useMainStore();

const getUser = () => {
  preloading.value = true
  axiosClient.get('/v1/me').then((res) => {
    mainStore.setUser({
      ip_address: res.data.data.ip_address,
      last_login: res.data.data.last_login,
      userAvatar: res.data.data.image,
      userEmail: res.data.data.email,
      userName: res.data.data.name
    })
    profileForm.name = res.data.data.name
    profileForm.email = res.data.data.email
    preloading.value = false;
  }).catch((err) => {
    preloading.value = false
    console.log(err)
  })
}

onMounted(() => {
  getUser()
})

const profileForm = reactive({
  name: "",
  email: "",
});

const passwordForm = reactive({
  current_password: "",
  password: "",
  password_confirmation: "",
});

const loading1 = ref(false)

const editUser = () => {
  loading1.value = true;
  axiosClient.post('v1/edit-user', profileForm).then((res) => {
    showSuccessAlert("Editted successfully");
  }).catch((err) => {
    showFailureAlert(err.response.data.message)
  });
};

const loading2 = ref(false);

const resetPassword = () => {
  loading2.value = true
  if(passwordForm.current_password == ""){
    showFailureAlert("Current password field cannot be empty");
    loading2.value = false
  }else if(passwordForm.password == ""){
    showFailureAlert("New password field cannot be empty");
    loading2.value = false
  }else if(passwordForm.password_confirmation == ""){
    showFailureAlert("Password confirmation field cannot be empty");
    loading2.value = false
  }else if(passwordForm.password !== passwordForm.password_confirmation){
    showFailureAlert("Password confirmation and password doesnt match");
    loading2.value = false
  }else{
    axiosClient.post('v1/change-password', passwordForm).then((res) => {
      showSuccessAlert("Password updated successfully");
      loading2.value = false
    }).catch((err) => {
      showFailureAlert(err.response.data.message);
      console.log(err)
      loading2.value = false
    })
  }
}

const image = ref("");

const savePictures = () => {
  loading.value = true
  if(image.value == ""){
    showFailureAlert("Add an image");
    loading.value = false
  }else{
    const formData = new FormData();
    formData.append('image', image.value);
    axiosClient.post('v1/image-upload', formData).then((res) => {
      image.value = res.data.data
      axiosClient.post('v1/profile-picture', {image: image.value}).then((res) => {
        showSuccessAlert("Image uploaded successfully");
        loading.value = false
      }).catch((err) => {
        showFailureAlert("Something went wrong")
        loading.value = false
      })
    }).catch((err) => {
      showFailureAlert("Something went wrong")
      loading.value = false
    })
  }
}
</script>

<template>
  <LayoutAuthenticated>
    <PreloaderComponent v-if="preloading"></PreloaderComponent>
    <SectionMain v-else>
      <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
       
      </SectionTitleLineWithButton>

      <UserCard class="mb-6" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardBox is-form @submit.prevent="">
          <FormField class="flex justify-between">
            <FormFilePicker v-model="image" label="Add Picture" />
            <button v-if="loading" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-3 mr-2 px-2 rounded inline-flex items-center">
              <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </button>
            <button v-else @click="savePictures" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload
            </button>
          </FormField>

          <FormField @submit.prevent="" label="Name" help="Required. Your name">
            <FormControl
              v-model="profileForm.name"
              :icon="mdiAccount"
              name="username"
              autocomplete="username"
            />
          </FormField>
          <FormField label="E-mail" help="Required. Your e-mail">
            <FormControl
              v-model="profileForm.email"
              :icon="mdiMail"
              type="email"
              name="email"
              autocomplete="email"
            />
          </FormField>

          <template #footer>
            <BaseButtons>
              <button v-if="loading1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-3 mr-2 px-2 rounded inline-flex items-center">
              <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating..
            </button>
              <BaseButton v-else @click="editUser" color="info" type="submit" label="Submit" />
              <BaseButton color="info" label="Clear" outline />
            </BaseButtons>
          </template>
        </CardBox>

        <CardBox is-form @submit.prevent="">
          <FormField
            label="Current password"
            help="Required. Your current password"
          >
            <FormControl
              v-model="passwordForm.current_password"
              :icon="mdiAsterisk"
              name="password_current"
              type="password"
              required
              autocomplete="current-password"
            />
          </FormField>

          <BaseDivider />

          <FormField label="New password" help="Required. New password">
            <FormControl
              v-model="passwordForm.password"
              :icon="mdiFormTextboxPassword"
              name="password"
              type="password"
              required
              autocomplete="new-password"
            />
          </FormField>

          <FormField
            label="Confirm password"
            help="Required. New password one more time"
          >
            <FormControl
              v-model="passwordForm.password_confirmation"
              :icon="mdiFormTextboxPassword"
              name="password_confirmation"
              type="password"
              required
              autocomplete="new-password"
            />
          </FormField>

          <template #footer>
            <BaseButtons>
              <button v-if="loading2" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-3 mr-2 px-2 rounded inline-flex items-center">
              <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating..
            </button>
              <BaseButton v-else @click="resetPassword" type="submit" color="info" label="Submit" />
              <BaseButton color="info" label="Clear" outline />
            </BaseButtons>
          </template>
        </CardBox>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
