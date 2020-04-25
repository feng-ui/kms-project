<template>
  <a-layout>
    <div class="page-header">
      <div class="detail">
        <h1>{{system.user}}</h1>
      </div>
      <a-breadcrumb class="ant-breadcrumb">
        <a-breadcrumb-item>{{system.manage}}</a-breadcrumb-item>
        <a-breadcrumb-item>{{system.user}}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="page-content">
      <a-card :bordered="false">
        <div class="add-bottom-space">
          <a-button type="primary" @click="addShow()">{{system.add}}</a-button>
          <a-modal
            :title="system.addAdmin"
            v-model="add.visible"
            :loading="add.loading"
            :maskClosable="false"
            :afterClose="afterClose">
            <template slot="footer">
              <a-button key="back" @click="handleCancel()">{{system.cancel}}</a-button>
              <a-button key="submit" type="primary" :loading="add.loading" @click="handleUserAdd()">
                {{system.submit}}
              </a-button>
            </template>
            <a-form :form="add.form">
              <a-row>
                <a-form-item :required="true" :label-col="formItemLayout.labelCol"
                             :wrapper-col="formItemLayout.wrapperCol"
                             :label="system.account">
                  <a-input v-decorator="['account']"></a-input>
                </a-form-item>
                <a-form-item
                  :required="true"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  :label="system.role">
                  <a-select
                    :allow-clear="true"
                    v-decorator="['role']"
                    style="width:100%;">
                    <a-select-option v-for="item in roleList" :value="item" :key="item">
                      {{item}}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item
                  :required="true"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  :label="system.email">
                  <a-input
                    v-decorator="['email']">
                  </a-input>
                </a-form-item>
                <a-form-item
                  :required="true"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  :label="system.password">
                  <a-input-password
                    v-decorator="['password']">
                  </a-input-password>
                </a-form-item>
                <a-form-item
                  :required="true"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  :label="system.confirmPwd">
                  <a-input-password>
                  </a-input-password>
                </a-form-item>
                <a-form-item
                  :required="true"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  :label="system.mobile">
                  <a-input>
                  </a-input>
                </a-form-item>
                <a-form-item
                  :required="true"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  :label="system.status">
                  <a-switch></a-switch>
                </a-form-item>
              </a-row>
            </a-form>
          </a-modal>
        </div>
        <div>
          <a-table :columns="columns"
                   rowKey="id"
                   :loading="table.loading"
                   :dataSource="dataSource"
                   :pagination="pagination"
                   @change="handleTableChange">
            <span slot="action" slot-scope="text,record">
                 <a href="javascript:" @click="editShow(record.id)">{{system.edit}}</a>
              <a-divider type="vertical"></a-divider>
              <a>{{system.stop}}</a>
              <a-divider type="vertical"></a-divider>
              <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  {{system.more}} <a-icon type="down"/>
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">{{system.delete}}</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">{{system.resetPsd}}</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">{{system.bindingUkey}}</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </span>
          </a-table>
          <a-modal
            v-model="edit.visible"
            :title="system.edit"
            :destroy-on-close="true"
            :afterClose="afterClose">
            <template slot="footer">
              <a-button key="back" @click="handleCancel()">{{system.cancel}}</a-button>
              <a-button key="submit" type="primary" :loading="edit.loading" @click="handelUserEdit">
                {{system.submit}}
              </a-button>
            </template>
            <a-form :form="edit.form">
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.account">
                <a-input :disabled="true"
                         v-decorator="['username']">
                </a-input>
              </a-form-item>
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.role">
                <a-select
                  :allow-clear="true"
                  v-decorator="['role']">
                  <a-select-option v-for="(item) in roleList" :value="item" :key="item">
                    {{item}}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.email">
                <a-input
                  v-decorator="['email']">
                </a-input>
              </a-form-item>
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                :label="system.mobile">
                <a-input
                  v-decorator="['phoneNum']">
                </a-input>
              </a-form-item>
            </a-form>
          </a-modal>
        </div>
      </a-card>
    </div>
  </a-layout>
</template>

<script>
  import { getUserListApi, userAddApi, editShowApi, editSubmitApi } from '../axios/useApi.js'

  const columns = [{
    title: '编号',
    dataIndex: 'num'
  },
    {
      title: '账号',
      dataIndex: 'username'

    },
    {
      title: '角色',
      dataIndex: 'roleName'
    },
    {
      title: '邮箱账号',
      dataIndex: 'email'
    },
    {
      title: '手机账号',
      dataIndex: 'phoneNum'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime'
    },
    {
      title: '状态',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '在线状态',
      dataIndex: 'onLineStatus',
      scopedSlots: { customRender: 'onLineStatus' }
    },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' }
    }]
  const dataSource = []
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
          visible: false,
          loading: false
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
        },
        roleList: ['anmin', 'admin123'],
        table: {
          loading: false
        },
        loading: false,
        system: {
          account: '账号',
          role: '角色',
          email: '邮箱',
          password: '密码',
          confirmPwd: '确认密码',
          mobile: '手机',
          status: '状态',
          manage: '系统管理',
          user: '用户管理',
          add: '添加',
          addAdmin: '添加管理员',
          cancel: '取消',
          submit: '确认',
          edit: '编辑',
          delete: '删除',
          stop: '停用',
          more: '更多',
          bindingUkey: '绑定Ukey',
          resetPsd: '重置密码'
        },
        showModal: false,
        dataSource,
        pagination: {},
        columns
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      editShow () {
        var self = this
        self.edit.visible = true
        editShowApi('123').then(function (res) {
          console.log(res.data)
          var result = res.data.data
          self.edit.visible = true
          self.$nextTick(function () {
            self.edit.form.setFieldsValue({
              username: result.username,
              email: result.email,
              phoneNum: result.phoneNum,
              role: result.role
            })
          })
        })
      },
      handelUserEdit () {
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
      handleUserAdd (e) {
        this.add.loading = true
        var self = true
        this.add.form.validateFields(function (err, values) {
          if (!err) {
            userAddApi(values).then(res => {
              self.add.loading = false
            })
          }
        })
      },

      handleTableChange (pagination, filters, sorter) {
        console.log(pagination)
        const pager = { ...this.pagination }
        pager.current = pagination.current
        this.pagination = pager
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters
        })
      },
      loadData (params) {
        var self = this
        self.table.loading = true
        getUserListApi(params).then(res => {
          self.table.loading = false
          console.log(res.data)
          self.dataSource = res.data.data
        })
      },

      addShow: function () {
        this.add.visible = true
      },
      afterClose: function () {
        this.add.visible && (this.add.form.resetFields())
      },
      handleCancel (e) {
        this.add.visible = false
        this.edit.visible = false
      }
    }

  }
</script>
