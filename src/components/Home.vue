<template>
    <div class="home">
      <h2>Github Username</h2>
      <div class="input-group mb-3">
        <input v-model="id" v-on:keyup.enter="onEnter" type="text" name="id" class="form-control" placeholder="Username">
          <div class="input-group-append">
            <!-- the href would be filled by value in textbox with v-model id -->
            <a :href="id" ref="enter">
              <button class="btn btn-success" type="submit">Search</button>
            </a>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return{
      id: [] //blank default value for this variable, this will be filled in depends on what we type in v-model="id"
    };
  },
  methods:{
    onEnter: function() {
      this.$refs.enter.click(); //this function will trigger element with ref="enter" to be clicked
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
