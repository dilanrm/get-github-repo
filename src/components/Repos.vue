<template>
    <div class="repos">
        <h2>{{ repoName }}</h2>
        <div class="readme">
            <!-- this will be stored by README file -->
        </div>
    </div>
</template>

<script>
/* Include jquery */
const $ = require('jquery')

/* include markdown for renderin .md file to HTML */
const markdown = require('markdown').markdown

/* start a function when page is loaded */
$(document).ready(function(){

    /* get text from raw data of README.md file  */
    $.get('https://raw.githubusercontent.com'+window.location.pathname+'/master/README.md', function(data){

        /* convert .md format to html and store to html_content variable */
        let html_content = markdown.toHTML(data) 

        /* fill class readme with html_content value */
        $('.readme').html(html_content) // 
    });
});

export default {
    name: 'Repos',
    data(){
        return{
            repoName: this.$route.params.repos //store variable for repository name
        };
    }
}
</script>

<style scoped>

.readme{
    text-align: left;
    border: 0.8px solid black;
    margin: 15px;
    padding: 15px;
}

h2 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>