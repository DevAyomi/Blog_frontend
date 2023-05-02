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
  mdiViewList
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
  label: "Articles",
  icon: mdiViewList,
  menu: [
    {
      to: "/create-post",
      label: "Create",
      icon: mdiViewList,
    },
    {
      to: "/all-posts",
      label: "All",
      icon: mdiTelevisionGuide,
    },
  ]
},
{
  to: "/profile",
  label: "Profile",
  icon: mdiAccountCircle,
}];

const writer = [{
  to: "/writers-dashboard",
  icon: mdiMonitor,
  label: "Dashboard",
},
{
  label: "Articles",
  icon: mdiViewList,
  menu: [
    {
      to: "/create-post",
      label: "Create",
      icon: mdiViewList,
    },
    {
      to: "/all-writter-posts",
      label: "All",
      icon: mdiTelevisionGuide,
    },
  ]
},
{
  to: "/writer-profile",
  label: "Profile",
  icon: mdiAccountCircle,
}];


const type = ref("")

if(sessionStorage.getItem('TYPE') == 'admin'){
  type.value = admin
}else{
  type.value = writer
}

console.log(type.value)
export default type.value;
