<template>
  <div id="app">
    <h1>Music Playlist App</h1>
    <Search />
    <Playlist />
    <PlaylistManager />
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Playlist from './components/Playlist.vue';
import PlaylistManager from './components/PlaylistManager.vue';

export default {
  components: {
    Search,
    Playlist,
    PlaylistManager,
  },
  mounted() {
    this.$store.dispatch('fetchPlaylists');
    this.$store.dispatch('fetchSongs');
  },
};
</script>
