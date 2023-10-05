<script setup>
import { useDeleteEntryStore } from '@/stores/DeleteEntryStore';
import {storeToRefs} from 'pinia'
const store = useDeleteEntryStore()
const { deleteEntryModal } = storeToRefs(store)

 const props = defineProps(['entryDate','entryText','id'])


const openModal = () => {
    console.log("hej här", deleteEntryModal.value)
    deleteEntryModal.value = true;
}
</script>

<template>
    <div class="entry-wrapper">
        <span class="first-row">
            <h2> {{ entryDate }}</h2>
            <img src="@/assets/clarity_trash-line.svg" @click="openModal" alt="">
        </span>
  <p>{{ entryText }}</p>
    </div>
</template>

<style scoped>
.entry-wrapper{
min-height: 136px;
background-color: #FFF;
border-radius: 6px;
padding: 1rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.20);
}
.first-row{
display: flex;
justify-content: space-between;
align-items: center;
}
.first-row h2{
    margin: 6px 0px 13px 0px;
}
.first-row img{
    width:18px;
    height: 18px;
}
.entry-wrapper p{
    font-size: 12px;
    font-weight: 500;
    margin: 0;
}


</style>