import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useEntriesStore = defineStore('entriesStore',() =>  {

    const allEntries = ref([])

    const setAllEntries = (array) => {
        allEntries.value=array
    }
    return {
        allEntries, setAllEntries
    }
 
})