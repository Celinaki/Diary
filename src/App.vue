<script setup>
import DiaryView from './views/DiaryView.vue';
import {storeToRefs} from 'pinia'
import {ref, onMounted} from 'vue'
import { useEntriesStore } from '@/stores/EntriesStore';

const entriesStore = useEntriesStore()
const { allEntries } = storeToRefs(entriesStore)



onMounted(()=>{
    
    fetch('./src/assets/entries.json') 
    .then(res => res.json())
    .then(data => 
    entriesStore.setAllEntries(data)
    // allEntries.value = data
    )



})


</script>

<template>
<DiaryView/>

</template>

<style scoped>


@media (min-width: 1024px) {
 
}
</style>
