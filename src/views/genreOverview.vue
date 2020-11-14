<template>
    <div class="genre-overview-body">
        <div class="genre-nav-bar row-flex">
            <div class="genre-name">ROCK</div>
            <div class="nav-items row-flex">
                <div class="nav-item">OVERVIEW</div>
                <div class="nav-item">PLAYLISTS</div>
                <div class="nav-item">NEW RELEASES</div>
                <div class="nav-item">ARTISTS</div>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.genre-overview-body{
  color: white;
  font-size: 22px;
  width: calc(100% - 280px);
  height: 100%;
  background-color: #161A1A;
  padding: 100px 140px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.genre-nav-bar{
    width: 100%;
    color: white;
}
.genre-name{
    padding: 30px;
    font-size: 50px;
}
.nav-item{
    font-size: 20px;
    padding: 50px 20px 30px;
}
</style>