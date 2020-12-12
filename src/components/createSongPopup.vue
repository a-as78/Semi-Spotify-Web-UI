<template>
<div class="test-body row-flex center">
    <div class="popup-body column-flex center">
        <div class="popup-header row-flex">
            <div class="popup-title">
                Add New Song
            </div>
            <div class="close-popup">
                <img class="close-icon"
                     src="../assets/Icons/Close.svg" alt="">
            </div>
        </div>
        <div class="fields">
            <input name="fields"
                   type="text"
                   placeholder="Name">
        </div>
        <div class="fields">
            <input name="fields"
                   type="text"
                   placeholder="artist">
        </div>
        <div class="fields">
            <input name="fields"
                   type="text"
                   placeholder="album">
        </div>
        <form class="fields upload-form"
              action="/">
            <label for="myfile">Select Song:</label>
            <input type="file" 
                   name="myfile" 
                   value="Select Song">
        </form>
        <div class="buttons row-flex">
            <div class="cancel">
                Cancel
            </div>
            <div class="add">
                Add
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
    border-radius: 8px;
}
.popup-header, .buttons{
    width: 90%;
    justify-content: space-between;
    padding: 30px 5%;
}
.popup-title{
    color: white;
    font-size: 20px;
}
input[name = fields]{
    border: none;
    background-color: transparent;
}
input::placeholder {
    color: white;
}
.fields{
    color: white;
    width: 90%;
    height: 30px;
    border-bottom: 1px solid white;
}
.cancel, .add{
    font-size: 16px;
    color: white;
    border-radius: 20px;
    padding: 10px 40px;
}
.cancel{
    border: 1px solid white;
}
.add{
    background: linear-gradient(to right, #2D9BEF, #9B2DEF);
}
.upload-form{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
input[name = myfile]{
    max-width: 200px;
    color: white;
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