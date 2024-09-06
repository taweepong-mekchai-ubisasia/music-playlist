import { createStore } from 'vuex';
import { api } from '../services/api';

export default createStore({
  state: {
    playlists: [],
    songs: [],
    selectedPlaylist: null,
  },
  mutations: {
    setPlaylists(state, playlists) {
      state.playlists = playlists;
    },
    setSongs(state, songs) {
      state.songs = songs;
    },
    setSelectedPlaylist(state, playlist) {
      state.selectedPlaylist = playlist;
    },
    addSongToPlaylist(state, song) {
      if (state.selectedPlaylist) {
        state.selectedPlaylist.songs.push(song);
      }
    },
    removeSongFromPlaylist(state, songId) {
      if (state.selectedPlaylist) {
        state.selectedPlaylist.songs = state.selectedPlaylist.songs.filter(
          song => song.id !== songId
        );
      }
    },
  },
  actions: {
    async fetchPlaylists({ commit }) {
      try {
        const response = await api.get('/playlists');
        commit('setPlaylists', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSongs({ commit }) {
      try {
        const response = await api.get('/songs');
        commit('setSongs', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createPlaylist({ dispatch }, playlistName) {
      try {
        await api.post('/playlists', { name: playlistName });
        dispatch('fetchPlaylists');
      } catch (error) {
        console.error(error);
      }
    },
    async addSongToPlaylist({ dispatch }, { playlistId, songId }) {
      try {
        await api.post(`/playlists/${playlistId}/songs`, { songId });
        dispatch('fetchPlaylists');
      } catch (error) {
        console.error(error);
      }
    },
    async removeSongFromPlaylist({ dispatch }, { playlistId, songId }) {
      try {
        await api.delete(`/playlists/${playlistId}/songs/${songId}`);
        dispatch('fetchPlaylists');
      } catch (error) {
        console.error(error);
      }
    },
  },
});
