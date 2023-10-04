<script setup>
</script>

<template>
    <div class="entry-wrapper">
        <span class="first-row">
            <h2>Date</h2>
            <img src="@/assets/clarity_trash-line.svg" alt="">
        </span>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci eveniet reiciendis nihil officia quisquam vel accusantium impedit natus eaque.</p>
    </div>
</template>

<style scoped>
.entry-wrapper{
height: 136px;
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