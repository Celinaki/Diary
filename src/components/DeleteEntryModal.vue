<script setup>
import {ref, defineProps, defineEmits, onMounted, onUnmounted} from 'vue'
import { useDeleteEntryStore } from '../stores/DeleteEntryStore';


const { modalClosed } = defineProps(['modalClosed']);
const emit = defineEmits(['close']);
const modal = ref(null)
const modalbody = ref(null)
const store = useDeleteEntryStore()

const closeModal = () => {
//   emit('close'); 
store.deleteEntryModal=false;
};

onMounted(() => {
    window.addEventListener('click', (event) =>{
        if(event.target.contains(modal.value)) {
            store.deleteEntryModal=false;
        }
    })
})

onUnmounted(() => {
    window.removeEventListener('click', (event) =>{
        if(event.target.contains(modal.value)){
            store.deleteEntryModal=false;
        }
    })
})


</script>

<template >
    <div ref="modalbody">
        <section ref="modal">
                <span>
                    <button class="not-filled-button" @click="closeModal">Cancel</button>
                    <button>Done</button>            
                </span>
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