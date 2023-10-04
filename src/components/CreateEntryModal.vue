<script>
</script>

<template>
    <div>
        <section>
            <h2>Create a new entry</h2>
            <form action="create">
                <textarea name="" id=""  v-bind:maxlength="500"></textarea>
                <span>
                    <button class="not-filled-button">Cancel</button>
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
    position: absolute;
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