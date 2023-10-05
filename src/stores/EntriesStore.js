import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useEntriesStore = defineStore('entriesStore',() =>  {

    let allEntries = ref([])

//Initial value of array
    const setAllEntries = (array) => {
        allEntries.value=array
        
    }
//Initial value of array

//Push in new entry
const addNewEntry = (object)=>{
    // let newEntry=ref(object)
    console.log("ett object", object)
    allEntries.value.push(object)

}
//Push in new entry

const permDelete = ref(false);
let varId = ref(0)
const changeDeleteState =()=>{
    permDelete.value = true;
}

const getId=(id)=>{
    varId.value=id;
    permDelete.value=false
}
const deleteEntry=()=>{
    console.log(allEntries.value)
    const newArray = allEntries.value.filter((entry) => entry.id !==varId.value)
    allEntries.value=newArray;
    console.log(newArray,varId.value)
    permDelete.value = false
}



//Sort by date
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
            allEntries.value=currentArray
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
            allEntries.value=currentArray
        }
    }
//Sort by date


    return {
        allEntries,
        setAllEntries, 
        sortEntries, 
        addNewEntry, 
        deleteEntry,
        getId,
        changeDeleteState
    }
 
})