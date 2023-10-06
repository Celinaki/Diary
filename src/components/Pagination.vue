<script setup>
import { useEntriesStore } from '@/stores/EntriesStore';


let store = useEntriesStore();

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
        <span @click="store.handlePage(1)">></span>
    </div>
</template>

<style scoped>
div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 26px;

}
span{
    border-radius: 4px;
    padding: 4px 8px;
    background-color: rgb(255, 255, 255);
}
</style>