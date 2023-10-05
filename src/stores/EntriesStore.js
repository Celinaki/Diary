import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useEntriesStore = defineStore('entriesStore',() =>  {

    let allEntries = ref([])
    let page = ref(1);
    
    const currentEntries = computed(() => {
        return allEntries.value.slice(((page.value - 1) * 5), (page.value * 5));
    })

//Initial value of array
    const setAllEntries = (array) => {
        allEntries.value=array
        
    }

    const handlePage = (num) => {
        if (page.value+num <= 0) {
            return;
        } 

        if(page.value+num >= (allEntries.value.length/3)-1) {
            return;
        }

        page.value+=num;
    }
//Initial value of array

const sortVal = ref('')

//Push in new entry
const addNewEntry = (object)=>{
    // let newEntry=ref(object)
    console.log("ett object", object)
    allEntries.value.push(object)
    sortEntries(sortVal.value)

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
        sortVal.value = sortby
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
        handlePage,
        currentEntries,
        allEntries,
        setAllEntries, 
        sortEntries, 
        addNewEntry, 
        deleteEntry,
        getId,
        changeDeleteState
    }
 
})