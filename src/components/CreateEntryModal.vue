<script setup>
import {ref, defineProps, defineEmits, onMounted, onUnmounted} from 'vue'

const remainingChars = ref(500);
const entry = ref("");
const { modalClosed } = defineProps(['modalClosed']);
const emit = defineEmits(['close']);
const modal = ref(null)
const modalbody = ref(null)
const countdown = () => {
    remainingChars.value = 500 - entry.value.length;
}
const closeModal = () => {
  emit('close'); 
};

onMounted(() => {
    window.addEventListener('click', (event) =>{
        if(event.target.contains(modal.value)) {
            emit('close'); 
        }
    })
})

onUnmounted(() => {
    window.removeEventListener('click', (event) =>{
        if(event.target.contains(modal.value)){
            emit('close'); 
        }
    })
})


</script>

<template >
    <div ref="modalbody">
        <section ref="modal">
            <h2>Create a new entry</h2>
            <form action="create"  @submit.prevent  >
                <textarea name="" 
                id="" 
                v-on:keyup="countdown"
                v-model="entry" 
                v-bind:maxlength="500">     
                               
            </textarea>
            <p class="chars-left" >{{ remainingChars }} chars left</p>
                <span>
                    <button class="not-filled-button" @click="closeModal">Cancel</button>
                    <button>Done</button>            
                </span>
            </form>
        </section>
    </div>
</template>

<style scoped>
div{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(35, 34, 34, 0.20);
    backdrop-filter: blur(1.5px);
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
section{
    background-color: rgb(255, 255, 255);
    z-index: 2;
    width: 85%;
    height: 70vh;
    border-radius: 4px;
    padding: 1rem;
    box-sizing: border-box;
}
form{
    height: 70%;
    position: relative;
}
form textarea{
    border: none;
    border-radius: 7px;
    background: #EAEAEA;
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    height: 100%;
    font-family: 'Quicksand';
    resize:none;
}
form textarea:focus{
    outline: none !important;
    border:1px solid rgba(105, 105, 105, 0.541);
}
.chars-left{
    position: absolute;
    right: 3%;
    bottom: 0%;
    font-size: 10px;
    color: #4A4A4A;

}
span{
    right: 0;
    padding-top: 49px;
    gap: 9px;
    display: flex;
    justify-content: flex-end;
}
button{
    border-radius: 25px;
    border: 1px solid #C3F1FB;
    background: rgba(175, 241, 255, 0.90);
    display: inline-flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    
}
.not-filled-button{
    background:#fff;
}
</style>