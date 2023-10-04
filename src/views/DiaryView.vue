<script setup>
import EntryCard from '../components/icons/EntryCard.vue';
import Pagination from '../components/icons/Pagination.vue'
import CreateEntryButton from '../components/CreateEntryButton.vue'
import CreateEntryModal from '../components/CreateEntryModal.vue'
</script>

<template>
    <div class="wrapper">
        <h1>Entries</h1>
        <section class="sortby-wrapper">
            <h2>Sort by: </h2>
            <select name="" id="sort-by">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </section>
        <div class="entries-wrapper">
            <EntryCard/>
            <EntryCard/>
            <EntryCard/>
            <EntryCard/>
            <EntryCard/>
        </div>
        <Pagination/>
    </div>
    <CreateEntryButton/>
    <CreateEntryModal/>
</template>

<style scoped>
template{
    position: relative;
}
.wrapper{
margin: 46px 37px;
display: flex;
flex-direction: column;
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


</style>