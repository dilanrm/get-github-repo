<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <!-- Link button to go back to Main Page -->
        <li class="nav-item active">
          <a class="nav-link" :href="`${publicPath}`">Home</a>
        </li>
        <!-- Button to go back to previous Page -->
        <li class="nav-item active">
          <button class="btn btn-dark float-right" onClick="window.history.back()">Back</button>
        </li>
      </ul>
    </nav>
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      publicPath: process.env.BASE_URL //store base_url to publicPath variable
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6px;
}
</style>
