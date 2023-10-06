<script setup>
import {ref, defineProps, defineEmits, onMounted, onUnmounted} from 'vue'
import { useDeleteEntryStore } from '../stores/DeleteEntryStore';
import { useEntriesStore } from '@/stores/EntriesStore';
import {storeToRefs} from 'pinia'


const { modalClosed } = defineProps(['modalClosed']);
const emit = defineEmits(['close']);
const modal = ref(null)
const modalbody = ref(null)
const store = useDeleteEntryStore()
const entriesStore = useEntriesStore()

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

const confirmDelete =()=>{
entriesStore.changeDeleteState()
entriesStore.deleteEntry()
}

</script>

<template >
    <div class="modal-body" ref="modalbody">
        <section ref="modal">
            <div class="first-row">
                <img src="@/assets/warning.svg" alt="">

                <h2>Are you sure you want to permanently delete this entry?</h2>
            </div>
                <span>
                    <button class="not-filled-button" @click="closeModal">CANCEL</button>
                    <button @click="confirmDelete">CONFIRM</button>            
                </span>
            </section>
    </div>
</template>

<style scoped>
.modal-body{
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
    height: fit-content;
    border-radius: 4px;
    box-sizing: border-box;
}
.first-row{
display: flex;
padding: 1rem;
justify-content: center;
gap: 1rem;

}

span{
    right: 0;
    padding-top: 49px;
    gap: 9px;
    display: flex;
    justify-content: flex-end;
    background-color: #F1F1F1;
    padding: 1rem;

}
button{
    border-radius: 25px;
    border: 1px solid #F32626;
    display: inline-flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    background: #F32626;
    color: white;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    
}
.not-filled-button{
    background:#fff;
    border: 1px solid black;
    color: black;
}

@media (min-width: 1024px){
    section{
        width: 20%;
        height: 10%;
    }
    .first-row{
        height: 50%;
        align-items: center;
    }
    .first-row img{
        height: 31px;
    }
    span{
        height: 50%;
    }
    button{
        align-self: center;
        height: min-content;
    }
}
</style>