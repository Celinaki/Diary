import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useEntriesStore = defineStore('entriesStore',() =>  {

    const allEntries = ref([])

    const setAllEntries = (array) => {
        allEntries.value=array
    }
    const sortEntries = (sortby) =>{
        const currentArray = allEntries.value
        if(sortby==='newest'){
            currentArray.sort((a,b) =>{
                const dateA = new Date(a.date);
                const dateB = new Date(b.date)
                if(dateA<dateB){
                    return 1
                }
                if(dateA> dateB){
                    return -1
                }
                return 0
            })
            return allEntries=currentArray
        }
        else if(sortby==='oldest'){
            currentArray.sort((a,b) =>{
                const dateA = new Date(a.date);
                const dateB = new Date(b.date)
                if(dateA<dateB){
                    return -1
                }
                if(dateA> dateB){
                    return 1
                }
                return 0
            })
            return allEntries=currentArray
        }
        // if(sortby=='oldest'){
        //     currentArray.sort((a,b) =>{
        //         const dateA = new Date(a.date);
        //         const dateB = new Date(b.date)
        //         if(dateA<dateB){
        //             return 1
        //         }
        //         if(dateA> dateB){
        //             return -1
        //         }
        //         return 0
        //     })
        //     return allEntries.value=currentArray
        // }
    }

    return {
        allEntries, setAllEntries, sortEntries
    }
 
})