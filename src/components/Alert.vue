<template>
    <div v-if="message" class="alert">
      {{ message }}
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: ['message'],
    setup(props) {
      const alertMessage = ref(props.message);
      return { alertMessage };
    },
  };
  </script>
  
  <style>
  .alert {
    padding: 16px;
    background-color: #f44336;
    color: white;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  </style>
  