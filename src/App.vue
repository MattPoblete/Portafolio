<template>
  <div id="app">
        
    <router-view/>
  </div>
</template>
<script>

export default {
  
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.nav-link{
  color: #888888 !important;
  text-shadow: 1px 1px 2px #2121218a;
  font-weight: 400;
}

.navbar{
    position:fixed !important;
    z-index: 2;
    width: 100vw;
    top:0px;

    
}
.collapse{
    justify-content: center;
}

.navbar-nav{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-evenly;
  

}
* {
    scrollbar-width: thin;
    scrollbar-color: rgba(187, 187, 187, 0) rgba(255, 255, 255, 0);
}
  
  /* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0px;
  
}

*::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(187, 187, 187, 0);
  border-radius: 20px;
  border: 3px solid rgba(255, 166, 0, 0);
}
body{
  overflow-x : hidden;
}
</style>
