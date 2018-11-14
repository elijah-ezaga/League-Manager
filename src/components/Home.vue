<template>
    <div class="ui container">

      <!-- Menu. Setting the active-class property on the router-link
           ensures that menu items are selected/distinguished from other
           items
      -->
      <div class="ui pointer menu">
        <router-link to="/table" active-class="active" class="item">
          League Table
        </router-link>
        <router-link to="/teams" active-class="active" class="item">
          Teams
        </router-link>
        <router-link to="/matches" active-class="active">
            <div class="ui simple dropdown item">
              Matches
              <i class="dropdown icon"></i>
              <div class="menu">
                <router-link to="/match/-1" class="item">Add Match</router-link>
              </div>
            </div>
        </router-link>
      </div>

      <!-- Content -->
      <router-view class="ui segment">
      </router-view>
      
    </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
