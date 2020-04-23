<template>
  <role-edit>
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
      <a-form :form="edit.form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          :label="system.role">
          <a-input :disabled="true"
                   v-decorator="['account']">
          </a-input>
        </a-form-item>
        <a-form-item
          :required="true"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          :label="system.role">
          <a-tree
            checkable
            @check="onCheck"
            :tree-data="treeData">
          </a-tree>
        </a-form-item>
      </a-form>
    </a-modal>
  </role-edit>
</template>

<script>
  const treeData = [{
    title: '系统管理',
    key: '0',
    children: [
      {
        title: '用户管理',
        key: '0-0'
      },
      {
        title: '角色管理',
        key: '0-1'
      }
    ]
  },
    {
      title: '图标管理',
      key: '1',
      children: [
        {
          title: '柱状图',
          key: '1-0'
        },
        {
          title: '折线图',
          key: '1-1'
        },
        {
          title: '饼状图',
          key: '1-2'
        }
      ]
    }]
  export default {
    name: '',
    data () {
      return {
        treeData,
        system: {
          role: '角色'
        }
      }
    },
    methods: {
      editSubmit () {
        this.$emit('hidden')
      }
    }
  }
</script>

<style scoped>

</style>
