<template>
  <a-layout>
    <div class="page-header">
      <div class="detail">
        <h1>{{system.role}}</h1>
      </div>
      <a-breadcrumb class="ant-breadcrumb">
        <a-breadcrumb-item>{{system.manage}}</a-breadcrumb-item>
        <a-breadcrumb-item>{{system.role}}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="page-content">
      <a-card :bordered="false">
        <div class="add-bottom-space">
          <a-button type="primary" @click="addShow()">{{system.add}}</a-button>
          <a-modal :title="system.addRole" v-model="visible" :destroy-on-close="true">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">{{system.cancel}}</a-button>
              <a-button key="submit" type="primary" @click="handleSubmit">{{system.submit}}</a-button>
            </template>
            <a-form :form="form">
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.rolename">
                <a-input :allow-clear="true"></a-input>
              </a-form-item>
              <a-form-item
                :required="true"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.permission">
                <a-tree
                  checkable
                  :autoExpandParent="autoExpandParent"
                  v-model="checkedKeys"
                  @select="onSelect"
                  :selectedKeys="selectedKeys"
                  :treeData="treeData"
                ></a-tree>
              </a-form-item>
            </a-form>
          </a-modal>
        </div>
        <a-table
          :columns="columns"
          rowKey="(record,id) => id"
          :dataSource="dataSource">
        <span slot="action" slot-scope="text,record">
            <a href="javascript:" @click="handleEdit(record.id)">{{system.edit}}</a>
          <role-edit @hidden="hiddenShow" v-if="roleEditShow"> </role-edit>
          </span>
          <a href="javascript:"
             @click="setKeyStatus(record)">
            {{(record === system.start)?('system.stop'):('system.start')}}
          </a>
          <a-divider type="vertical"></a-divider>
        </a-table>
        <div class="ant-table-pagination">
          <a-pagination :defaultCurrent="6" :total="500"/>
        </div>
      </a-card>
    </div>
  </a-layout>
</template>

<script>
  import { getRoleListApi } from '../axios/roleApi.js'
  import roleEdit from '../system/modal/role/edit.vue'

  const columns = [
    {
      title: '编号',
      dataIndex: 'num'

    },
    {
      title: '角色名称',
      dataIndex: 'rolename'
    },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' }
    }
  ]
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
    component: {
      roleEdit
    },
    data () {
      return {
        roleEditShow: false,
        form: this.$form.createForm(this),
        visible: false,
        showModal: false,
        treeData,
        autoExpandParent: true,
        checkedKeys: ['0'],
        dataSource: [],
        selectedKeys: [],
        columns,
        id: '',
        formItemLayout: {
          labelCol: {
            sm: 10,
            md: 5
          },
          wrapperCol: {
            sm: 14,
            md: 19
          }
        },
        system: {
          manage: '系统管理',
          role: '角色管理',
          add: '添加',
          addRole: '添加角色',
          cancel: '取消',
          submit: '提交',
          permission: '角色权限',
          rolename: '角色名称',
          edit: '编辑'
        }
      }
    },
    watch: {
      hiddenShow () {
        var self = this
        self.roleEditShow = true
      },
      checkedKeys (val) {
        console.log('onCheck', val)
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData () {
        var self = this
        getRoleListApi().then(res => {
          console.log(res.data)
          self.dataSource = res.data.data
        })
      },
      addShow () {
        this.visible = true
      },
      handleCancel () {
        this.visible = false
      },
      handleSubmit () {
        alert(123)
      },
      onCheck (checkedKeys) {
        console.log('onCheck', checkedKeys)
        this.checkedKeys = checkedKeys
      },
      onSelect (selectedKeys, info) {
        console.log('onSelect', info)
        this.selectedKeys = selectedKeys
      },
      handleEdit (id) {
        alert(123)
      },
      setKeyStatus () {

      }
    }
  }
</script>
