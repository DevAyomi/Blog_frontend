import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiResponsive,
} from "@mdi/js";
import { useMainStore } from "@/stores/main.js";
import {ref} from "vue";


const admin = [{
  to: "/dashboard",
  icon: mdiMonitor,
  label: "Dashboard",
},
{
  to: "/forms",
  label: "Categories",
  icon: mdiSquareEditOutline,
},
{
  to: "/tags",
  label: "Tags",
  icon: mdiSquareEditOutline,
},
{
  to: "/manage-writers",
  label: "Manage Writer",
  icon: mdiSquareEditOutline,
},
{
  to: "/profile",
  label: "Profile",
  icon: mdiAccountCircle,
}];

const writer = [{
  to: "/dashboard",
  icon: mdiMonitor,
  label: "Dashboard",
},
{
  to: "/tables",
  label: "Tables",
  icon: mdiTable,
},
{
  to: "/",
  label: "Login",
  icon: mdiLock,
},
{
  to: "/error",
  label: "Error",
  icon: mdiAlertCircle,
},
{
  to: "/error",
  label: "Error",
  icon: mdiAlertCircle,
}]

const type = ref("")

if(sessionStorage.getItem('TYPE') == 'admin'){
  type.value = admin
}else{
  type.value = writer
}

console.log(type.value)
export default type.value;
