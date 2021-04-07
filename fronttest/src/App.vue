<template>
<div>
  <nav>
    <router-link to="/">Головна</router-link>
        <router-link to="/about">Про автора</router-link>
      <router-link to="/worker/new"> Додати робітника </router-link>
  </nav>
  <router-view></router-view>
  </div>
</template>

<script>
export default{
    name:"App", 
    data(){
      return {

      }
    },
    mounted(){
    console.log("mounted");
  }
}
</script>

