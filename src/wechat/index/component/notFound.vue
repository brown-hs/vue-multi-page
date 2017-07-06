<template>
  <div class="notFound">
    <div class="content">
    <y-button @btnEvent="goNext" class="lookBtn">去看看</y-button>
    </div>
  </div>
</template>

<script>
import YButton from '@/components/common/button'
export default {
  data () {
    return {
      msg: 'notFound'
    }
  },
  components: {
    YButton
  },
  methods: {
    goNext () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style>
 .notFound {
  li{
    margin-bottom: 10px;
  }
 } 
</style>
