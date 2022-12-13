import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const useCharactersStore = defineStore('characters', {
  state: () => ({
    total: 0,
    pages: 0,
    currPage: 1,
    characters: []
  }),
  getters: {

   
  },
  actions: {
    async getCharacters(page?: number){
      try {
        let url = (page)? `https://rickandmortyapi.com/api/character?page=${page}` : 'https://rickandmortyapi.com/api/character'
        let resp = await axios.get(url)
        this.characters = resp.data.results;
        this.total = resp.data.info.count
        this.pages = resp.data.info.pages
        this.currPage = page || 1
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export default useCharactersStore