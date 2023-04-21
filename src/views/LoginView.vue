<script setup>
import { reactive,ref,inject } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import axiosClient from "@/axios";
import { useMainStore } from "@/stores/main.js";


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

const form = reactive({
  email: "",
  password: "",
  remember: true,
});

const loading = ref(false)

const router = useRouter();

const submit = () => {
  loading.value = true;
  if(form.email == ""){
    showFailureAlert("Email field is empty");
    loading.value = false;
  }else if(form.password == ""){
    showFailureAlert("Password field is empty");
    loading.value = false;
  }else{
    axiosClient.post('/v1/login', form)
          .then((res) => {
            loading.value = false;
            console.log(res);
            sessionStorage.setItem('TOKEN', res.data.data[1]);
            sessionStorage.setItem('TYPE', res.data.data[0].type);
            useMainStore().setUser({
              name: res.data.data[0].name,
              email: res.data.data[0].email,
              userType: res.data.data[0].type,
              token: res.data.data[1],
              //avatar: res.data.data[0].profile_picture,
            });
            if(useMainStore().userType == "admin"){
              router.push({
                name: "dashboard",
              });
              location.reload()
            }else{
              router.push({
                name: "writers-dashboard",
              });
              location.reload()
            }
          })
          .catch((err) => {
            loading.value = false;
            console.log(err)
            showFailureAlert(err.response.data.message);
          });
    }
  }
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="form.email"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <div><h2>Forgot Password??</h2></div>

        <template #footer>
          <BaseButtons>
            
            <button v-if="loading" type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out mb-4 mr-2 bg-blue-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
              disabled="">
              <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
              </svg>
              Loading...
          </button>
            <BaseButton v-else type="submit" color="info" label="Login" />
            <BaseButton to="/register" color="info" outline label="Register as a writer" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
