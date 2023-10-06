<script setup>
import EntryCard from '../components/icons/EntryCard.vue';
import Pagination from '../components//Pagination.vue'
import CreateEntryButton from '../components/CreateEntryButton.vue'
import CreateEntryModal from '../components/CreateEntryModal.vue'
import DeleteEntryModal from '../components/DeleteEntryModal.vue'
import {ref, onMounted} from 'vue'
import { useDeleteEntryStore } from '@/stores/DeleteEntryStore';
import { useEntriesStore } from '@/stores/EntriesStore';

import {storeToRefs} from 'pinia'

const modalClosed = ref(false);

//Delete modal things
const deleteModalstore = useDeleteEntryStore()
const { deleteEntryModal } = storeToRefs(deleteModalstore)
const deleteModalOpen = ref(deleteEntryModal);
//Delete modal things

//Entries store
const entriesStore = useEntriesStore()

const { allEntries, currentEntries } = storeToRefs(entriesStore)
// const {sortEntries} = storeToRefs(entriesStore)
//Entries store


const selectedValue = ref('')
const onSelectChange = () => {
  entriesStore.sortEntries(selectedValue.value);
}




</script>

<template>
    <div class="wrapper">
        <h1>Entries</h1>
        <section class="sortby-wrapper">
            <h2>Sort by: </h2>
            <select name="sort-selection" 
            v-model="selectedValue"
            @change="onSelectChange"
            id="sort-by">
            <option value="" disabled selected hidden>Date</option>

                <option value="newest"
                > Newest</option>
                <option value="oldest" 
                >Oldest</option>
            </select>
        </section>

        <div class="entries-wrapper">
            <EntryCard v-for="entry in currentEntries"
                   :entryDate="entry.date"
                   :entryText="entry.entry"
                   :entryId="entry.id"
                   :key="entry.id"
            />
        </div>
        <Pagination/>
    </div>
    <CreateEntryButton @openModal="modalClosed = true"/>
    <CreateEntryModal v-if="modalClosed" @close="modalClosed = false" />
    <DeleteEntryModal v-if="deleteModalOpen" />
</template>

<style scoped>
template{
    position: relative;
}
.wrapper{
margin: 46px 37px;
display: flex;
flex-direction: column;
min-height: 100vh;
}
.wrapper h1{
    margin: 0;
    font-weight: 500;
}
.sortby-wrapper{
    padding-top: 28px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 8px;
    border-radius: 25px;
    
}
.sortby-wrapper select{
    height: fit-content;
    font-size: 14px;
}

.entries-wrapper{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 38px;
    padding-top: 25px;
}

@media (min-width: 1024px) {
    .wrapper{
        width: 65%;
        margin: auto;
        margin-top: 46px;
    }
    .entries-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 36px;
        row-gap: 30px;
    }
}

</style>