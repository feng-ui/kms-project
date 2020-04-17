<template>
  <div class="modal-bg" v-show="show">
    <div class="modal-container">
      <div class="modal-header">
        {{ title }}
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button @click="hideModal" @click="handleCancel">{{system.cancel}}</button>
        <button @click="submit" @click="submit">{{system.confirm}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return{
        system: {
          cancel: '取消',
          confirm: '确认'
        }
      }

    },
    methods:{
      handleCancel:function () {
        this.$emit('handleCancel')
        alert('111')
      },
      save: function () {
        alert(123)
        this.$emit('submit')
      }
    }
  }
</script>

<style scoped>

</style>
