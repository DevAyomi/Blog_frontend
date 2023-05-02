import { defineStore } from "pinia";
import axios from "axios";
import axiosClient from "@/axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,
    last_login: null,
    ip_address: null,
    type: sessionStorage.getItem("TYPE"),
    token: sessionStorage.getItem("TOKEN"),
    reloaded: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.last_login) {
        this.last_login = payload.last_login;
      }
      if (payload.ip_address) {
        this.ip_address = payload.ip_address;
      }
      if (payload.userAvatar) {
        this.userAvatar = payload.userAvatar;
      }
      if (payload.reloaded) {
        this.reloaded = payload.reloaded;
      }
    },

    fetch(sampleDataKey) {
      if (this.token !== null) {
        axiosClient
          .get("v1/me")
          .then((r) => {
            this.userAvatar = r.data.data.image;
            this.userEmail = r.data.data.email;
            this.userName = r.data.data.name;
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    },
  },
});
