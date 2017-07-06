<template>
  <div class="home-container">
    <h1><router-link to="/">首页</router-link></h1>
    <h1><router-link to="/notFound">404页面</router-link></h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'home page'
    }
  }
}
</script>
<style lang="scss">
  h1{
    text-align: center;
    padding: 20px 40px;
  }
</style>

