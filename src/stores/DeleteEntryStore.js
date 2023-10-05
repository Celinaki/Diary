import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDeleteEntryStore = defineStore('deleteEntry',() =>  {
    const deleteEntryModal = ref(false)
    
    return {
        deleteEntryModal
    }
 
})