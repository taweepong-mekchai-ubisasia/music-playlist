<template>
    <div>
      <h2>Create New Playlist</h2>
      <input v-model="playlistName" placeholder="Playlist Name" />
      <button @click="createPlaylist">Create Playlist</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const playlistName = ref('');
  
      const createPlaylist = () => {
        if (playlistName.value) {
          store.dispatch('createPlaylist', playlistName.value);
          playlistName.value = ''; // Clear input after submission
        }
      };
  
      return { playlistName, createPlaylist };
    },
  };
  </script>
  