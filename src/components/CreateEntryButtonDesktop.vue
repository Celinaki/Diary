<script setup>
import { defineEmits } from 'vue';

// const emit = defineEmits(['openModal']);

// const openModal = () => {
//   emit('openModal');
// };
</script>

<template>
    <div @click="$emit('openModal', true)">
        <h2>Create an entry</h2>
        <img src="@/assets/Edit.svg" alt="">
    </div>
</template>

<style scoped>
div{
    display: none;
    justify-content: center;
    align-items: center;
    /* border-top: 1px solid #212427; */
    height: 55px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    position: sticky;
    bottom: 0;
    box-shadow: 0px -1px 3px 0px rgba(22, 22, 22, 0.25);
    cursor: pointer;

}
div img{
    width: 28px;
    height: 24px;
    padding-left: 4px;
}

@media (min-width: 1024px) {
    div{
        display: flex;

        position: inherit;
        min-width: 176px;
        width: 176px;
        align-self: flex-end;
        border-radius: 40px;
    }
}
</style>