<template>
  <button :disabled="disabled" class="y-button"
    @click="btnEvent" 
    :class="{'is-disabled': disabled, 'backBtn': backBtn}"
  >
  <slot></slot>
  </button>

</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    backBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnEvent () {
      this.$emit('btnEvent')
    }
  }
}
</script>

