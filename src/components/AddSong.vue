<template>
    <div>
      <h2>Add New Song</h2>
      <input v-model="songTitle" placeholder="Song Title" />
      <input v-model="songArtist" placeholder="Artist" />
      <button @click="addSong">Add Song</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { api } from '../services/api';
  
  export default {
    setup() {
      const songTitle = ref('');
      const songArtist = ref('');
  
      const addSong = async () => {
        if (songTitle.value && songArtist.value) {
          try {
            await api.post('/songs', { title: songTitle.value, artist: songArtist.value });
            songTitle.value = ''; // Clear input after submission
            songArtist.value = '';
          } catch (error) {
            console.error(error);
          }
        }
      };
  
      return { songTitle, songArtist, addSong };
    },
  };
  </script>
  