<template>
    <div>
      <h2>Playlists</h2>
      <ul>
        <li v-for="playlist in playlists" :key="playlist.id">
          {{ playlist.name }}
          <button @click="selectPlaylist(playlist)">View</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const playlists = computed(() => store.state.playlists);
  
      const selectPlaylist = (playlist) => {
        store.commit('setSelectedPlaylist', playlist);
        // Redirect to playlist details or show playlist details
      };
  
      return { playlists, selectPlaylist };
    },
  };
  </script>
  