<template>
    <div id="order" class="order">
      <section>
        <div class="tipsTitle">
          <div class="iconBox"><span class="icon icon-content_no"></span></div>
          <div>您还没有相关订单</div>
        </div>
        <div class="w_50 margin_0_auto margin_t_40">
          <y-button @btnEvent="toYBDinput">去背调</y-button>
        </div>
      </section>
    </div>
</template>

<script>
import YButton from '@/components/common/button.vue'
// import api from '~fetch'
export default {
  data () {
    return {
      //
    }
  },
  filters: {
    format (value) {
      return new Date(value).format('yyyy-MM-dd')
    }
  },
  created () {
  },
  methods: {
    toYBDinput () {
      window.location.href = '/wechat/index.html#/chooseType'
    },
    translateArr (oldArr) {
      var map = {}
      for (var i = 0; i < oldArr.length; i++) {
        var item = oldArr[i]
        var time = item.updateTime.split(' ')[0]
        if (!map[time]) {
          var array = []
          array.push(item)
          map[time] = {time: time, file: array}
        } else {
          var temp = map[time]
          temp.file.push(item)
          map[time] = temp
        }
      }
      var resultArray = []
      for (var key in map) {
        resultArray.push(map[key])
      }
      console.log('resultArray', resultArray)
      return resultArray
    }
  },
  components: {
    YButton
  }
}
</script>

