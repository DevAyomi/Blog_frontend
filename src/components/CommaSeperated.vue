<template>
    <div class="flex flex-wrap bg-ash border border-black">
      <span v-for="(item, index) in items" :key="index" mt-2 mb-2>{{ item }}</span>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  })
  </script>
  
  <style>
  /* Add any additional styling you'd like here */

  </style>