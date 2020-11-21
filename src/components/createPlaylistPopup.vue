<template>
<div class="test-body row-flex center">
    <div class="popup-body column-flex center">
        <div class="popup-header row-flex">
            <div class="popup-title">
                Create new playlist
            </div>
            <div class="close-popup">
                <img class="close-icon"
                     src="../assets/Icons/Close.svg" alt="">
            </div>
        </div>
        <div class="playlist-title">
            <input name="title"
                   type="text"
                   placeholder="Title">
        </div>
        <div class="playlist-description row-flex">
            <div>
                Write a description
            </div>
            <div>
                {{counter}}/300
            </div>
        </div>
        <div class="description">
            <textarea name="description">

            </textarea>
        </div>
        <div class="buttons row-flex">
            <div class="cancel">
                Cancel
            </div>
            <div class="create">
                Create
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.test-body{
    width: 100%;
    height: 100vh;
}
.popup-body{
    background-color: #3A3A3D;
    width: 500px;
    height: auto;
    border: 1px solid red;
    border-radius: 8px;
}
.popup-header, .playlist-description, .buttons{
    width: 90%;
    justify-content: space-between;
    padding: 30px 5%;
}
.playlist-description{
    color: #99999F;
    font-size: 14px;
}
.popup-title{
    color: white;
    font-size: 20px;
}
input[name = title], textarea[name = description]{
    border: none;
    background-color: transparent;
}
input::placeholder {
    color: white;
}
textarea[name = description]{
    width: 100%;
}
.playlist-title, .description{
    width: 90%;
    border-bottom: 1px solid white;
}
.cancel, .create{
    font-size: 16px;
    color: white;
    border-radius: 20px;
    padding: 10px 40px;
}
.cancel{
    border: 1px solid white;
}
.create{
    background: linear-gradient(to right, #2D9BEF, #9B2DEF);
}

@media screen and  (max-width: 576px) {
    .popup-title{
        font-size: 16px;
    }
    .popup-body{
        width: 320px;
    }
}
</style>