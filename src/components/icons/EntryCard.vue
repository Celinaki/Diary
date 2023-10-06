<script setup>
import { useDeleteEntryStore } from '@/stores/DeleteEntryStore';
import { storeToRefs } from 'pinia'
import { useEntriesStore } from '@/stores/EntriesStore';
import { ref } from 'vue'

const props = defineProps(['entryDate', 'entryText', 'entryId'])
const store = useDeleteEntryStore()
const { deleteEntryModal } = storeToRefs(store)
const entriesStore = useEntriesStore()

const passedId = ref(props.entryId)
const openModal = () => {
    deleteEntryModal.value = true;
    entriesStore.getId(passedId.value)
}
</script>

<template>
    <div class="entry-wrapper">
        <span class="first-row">
            <h2> {{ entryDate }}</h2>
            <img src="@/assets/clarity_trash-line.svg" @click="openModal" alt="Trashcan icon">
        </span>
        <p>{{ entryText }}</p>
    </div>
</template>

<style scoped>
.entry-wrapper {
    min-height: 136px;
    background-color: #FFF;
    border-radius: 6px;
    padding: 1rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.20);
}

.first-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.first-row h2 {
    margin: 6px 0px 13px 0px;
}

.first-row img {
    width: 18px;
    height: 18px;
}

.entry-wrapper p {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
}
</style>