<template>
    <div v-if="selectedPlaylist">
      <h3>
        <input v-model="playlistName" @blur="updatePlaylistName" />
        <button @click="removePlaylist">Delete Playlist</button>
      </h3>
      <ul>
        <li v-for="song in selectedPlaylist.songs" :key="song.id">
          {{ song.title }} by {{ song.artist }}
          <button @click="removeSongFromPlaylist(song.id)">Remove</button>
        </li>
      </ul>
      <button @click="addSongToPlaylist">Add Song</button>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const selectedPlaylist = computed(() => store.state.selectedPlaylist);
      const playlistName = ref(selectedPlaylist.value ? selectedPlaylist.value.name : '');
  
      const updatePlaylistName = async () => {
        if (selectedPlaylist.value && playlistName.value) {
          try {
            await api.put(`/playlists/${selectedPlaylist.value.id}`, { name: playlistName.value });
            store.dispatch('fetchPlaylists');
          } catch (error) {
            console.error(error);
          }
        }
      };
  
      const removePlaylist = async () => {
        if (selectedPlaylist.value) {
          try {
            await api.delete(`/playlists/${selectedPlaylist.value.id}`);
            store.dispatch('fetchPlaylists');
            store.commit('setSelectedPlaylist', null);
          } catch (error) {
            console.error(error);
          }
        }
      };
  
      const addSongToPlaylist = () => {
        // Logic to add song to playlist (e.g., show a modal to select a song)
      };
  
      const removeSongFromPlaylist = async (songId) => {
        if (selectedPlaylist.value) {
          try {
            await store.dispatch('removeSongFromPlaylist', {
              playlistId: selectedPlaylist.value.id,
              songId,
            });
          } catch (error) {
            console.error(error);
          }
        }
      };
  
      return { selectedPlaylist, playlistName, updatePlaylistName, removePlaylist, addSongToPlaylist, removeSongFromPlaylist };
    },
  };
  </script>
  