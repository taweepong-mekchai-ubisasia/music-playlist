<template>
    <div>
      <input v-model="query" @input="searchSongs" placeholder="Search for a song" />
      <ul>
        <li v-for="song in songs" :key="song.id">
          {{ song.title }} by {{ song.artist }}
          <button @click="selectSong(song)">Add to Playlist</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { api } from '../services/api';
  
  export default {
    setup() {
      const query = ref('');
      const songs = ref([]);
  
      const searchSongs = async () => {
        try {
          const response = await api.get(`/songs/search?q=${query.value}`);
          songs.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      const selectSong = (song) => {
        // Handle song selection (e.g., show a modal to choose a playlist)
      };
  
      return { query, songs, searchSongs, selectSong };
    },
  };
  </script>
  