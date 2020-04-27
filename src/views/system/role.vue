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
          <a-modal :title="system.addRole" v-model="add.visible" :maskClosable="false" :afterClose="afterClose">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">{{system.cancel}}</a-button>
              <a-button key="submit" type="primary" @click="handleAddRole">{{system.submit}}</a-button>
            </template>
            <a-form :form="add.form">
              <a-form-item
                :required="true"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.rolename">
                <a-input :allow-clear="true"  v-decorator="formData.role.decorator"></a-input>
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
          rowKey="id"
          :dataSource="dataSource">
          <span slot="action" slot-scope="text,record">
            <a href="javascript:" @click="handleEditShow(record)">{{system.edit}}</a>
          <a-divider type="vertical"></a-divider>
          <a href="javascript:" @click="confirm(record.id)">{{system.delete}}</a>
          </span>
        </a-table>
        <a-modal
          v-model="edit.visible"
          :title="system.edit"
          :destroy-on-close="true"
          :after-close="afterClose">
          <template slot="footer">
            <a-button key="back" @click="handleCancel()">{{system.cancel}}</a-button>
            <a-button key="submit" type="primary" :loading="edit.loading" @click="editSubmit">
              {{system.submit}}
            </a-button>
          </template>
          <a-form :form="edit.form">
            <a-form-item
              :required="true"
              rowKey="id"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              :label="system.account">
              <a-input :disabled="true">
              </a-input>
            </a-form-item>
            <a-form-item
              :required="true"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              :label="system.auth">
              <a-tree
                checkable
                @check="onCheck"
                :tree-data="treeData">
              </a-tree>
            </a-form-item>
          </a-form>
        </a-modal>
      </a-card>
    </div>
  </a-layout>
</template>

<script>
  import { getRoleListApi, roleAddApi, delectRoleApi, editShowApi, editSubmitApi } from '../axios/roleApi.js'

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
    data () {
      return {
        add: {
          form: this.$form.createForm(this),
          visible: false,
          loading: false
        },
        edit: {
          form: this.$form.createForm(this),
          id: '',
          visible: false,
          loading: false
        },
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
        formData: {
          role: {
            decorator: ['role', {
              rules: [
                {
                  required: true,
                  message: '请输入角色名称'
                },
                {
                  pattern: '^[0-9a-zA-Z]*$',
                  message: '请输入正确格式的角色名称'
                }
              ]
            }
            ]
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
          edit: '编辑',
          delete: '删除',
          auth: '权限管理',
          account: '角色名称'
        }
      }
    },
    watch: {
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
      confirm () {
        this.$confirm({
          title: '确认删除这条数据',
          okText: '确认',
          cancelText: '取消',

          onOk () {
            console.log('确认')
            delectRoleApi().then(res => {

            })
          },
          onCancel () {
            console.log('Cancel')
          }
        })
      },
      handleAddRole () {
        alert(123)
        var self = this
        this.add.loading = true
        this.add.form.validateFields(function (err, values) {
          if (!err) {
            roleAddApi(values).then(function (res) {
              self.add.loading = false
            })
          }
        })
      },
      handleEditShow () {
        var self = this
        self.edit.visible = true
        editShowApi('123').then(function (res) {
          console.log(res.data)
          var result = res.data.data
          self.edit.visible = true
          self.$nextTick(function () {
            self.edit.form.setFieldsValue({
              role: result.role
            })
          })
        })
      },
      editSubmit () {
        this.edit.loading = true
        var self = this
        var params = {
          id: this.edit.id
        }
        this.edit.form.validateFields(function (err, values) {
          self.edit.loading = false
          if (!err) {
            params = Object.assign({}, values, params)
            editSubmitApi(params).then(function (res) {
              console.log(147)
            })
          }
        })
      },
      onCheck (checkedKeys) {
        console.log('onCheck', checkedKeys)
        this.checkedKeys = checkedKeys
      },
      onSelect (selectedKeys, info) {
        console.log('onSelect', info)
        this.selectedKeys = selectedKeys
      },
      addShow () {
        this.add.visible = true
      },
      handleCancel () {
        this.add.visible = false
        this.edit.visible = false
      },
      afterClose () {
        this.add.visible && (this.add.form.resetFields())
      }
    }
  }
</script>
