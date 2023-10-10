<script setup>
import {storeToRefs} from 'pinia'
import { useEntriesStore } from '@/stores/EntriesStore';
import {ref, onMounted} from 'vue'

let store = useEntriesStore();
const {  numberOfPages} = storeToRefs(store)
const totalPages = ref(numberOfPages)


</script>

<template>
    <div>
        <span @click="store.handlePage(-1)" >
           &lt;
        </span>
        <!-- <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span> -->

    
        <span v-for="(n , index) in totalPages"> {{ n }}</span>
        <span @click="store.handlePage(1)">></span>
    </div>
</template>

<style scoped>
div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 26px;
    margin-top: auto;

}
span{
    border-radius: 4px;
    padding: 4px 8px;
    background-color: rgb(255, 255, 255);
}
@media (min-width: 1024px){
    span{
        padding: 8px 16px;
    }
}
</style>