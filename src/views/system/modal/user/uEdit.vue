<template>
  <uEdit>
    <a-modal
      v-model="edit.visible"
      :title="system.edit"
      :destroy-on-close="true"
      :after-close="afterClose">
      <template slot="footer">
        <a-button key="back" @click="handleCancel()">{{'system.cancel'}}</a-button>
        <a-button key="submit" type="primary" :loading="edit.loading" @click="editSubmit">
          {{'system.submit'}}
        </a-button>
      </template>
    </a-modal>
  </uEdit>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        roleList: ['admin', 'admin123'],
        system: {
          edit: '编辑',
          account: '账号',
          role: '角色',
          email: '邮箱',
          mobile: '手机号',
          submit: '确认',
          cancel: '取消'

        },
        edit: {
          from: this.$form.createForm(this)
        },
        formItemLayout: {
          labelCol: {
            sm: 10,
            md: 5
          },
          wrapperCol: {
            sm: 14,
            md: 19
          }
        }
      }
    },
    methods: {
      handleCancel () {

      },
      editSubmit () {
        this.$emit('hidden')
      },
      afterClose () {
        this.edit.visible() && (this.edit.form.resetField())
      }

    }
  }
</script>

<style scoped>

</style>
