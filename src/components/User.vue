<template>
    <div class="user">
        <h2>{{ username }}</h2>
        <ul class="repos">
            <!-- this will be filled in by user's repository -->
        </ul>
    </div>
</template>

<script>
/* include jquery */
const $ = require('jquery');

/* start a function when page is loaded */
$(document).ready(function(){

    /* get json from selected user on github api */
    $.getJSON('//api.github.com/users'+window.location.pathname+'/repos',{},function(data){

        /* fetch every element in object 'data' to be filled in on class repo div */
        data.forEach(repo => {
            $('.repos').append("<a href='"+window.location.href+"/"+repo.name+"'><li>"+repo.name+'</li></a>')
        });
    })
});

export default {
    name: 'user',
    data() {
        return{
            username: this.$route.params.id, //get variable from parameter on url
        };
    }
}
</script>

<style scoped>
h2 {
  margin: 40px 0 0;
}

h4{
    text-align: left
}

ul {
  list-style-type: disc;
  padding: 0;
    text-align: left;
    font-size: 2.4vw;
}

li {
    margin: 0 10px;
}

a {
  color: #42b983;
}
</style>