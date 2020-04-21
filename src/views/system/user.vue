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
        <a-spin :spinning="loading">
          <a-form :form="form">
            <a-row :span="12">
              <a-button type="primary" @click="addShow()">{{system.add}}</a-button>
              <a-modal
                :title="system.addAdmin"
                :visible="visible"
                :loading="loading">
                <template slot="footer">
                  <a-button key="back" @click="handleCancel()">{{system.cancel}}</a-button>
                  <a-button key="submit" type="primary" :loading="loading" @click="handleOk()">
                    {{system.ok}}
                  </a-button>
                </template>
                <a-row>
                  <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol"
                               :label="system.account">
                    <a-input></a-input>
                  </a-form-item>
                  <a-form-item
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
                    :label="system.password">
                    <a-input-password
                      v-decorator="['password']">
                    </a-input-password>
                  </a-form-item>
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    :label="system.confirmPwd">
                    <a-input-password>
                    </a-input-password>
                  </a-form-item>
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    :label="system.mobile">
                    <a-input>
                    </a-input>
                  </a-form-item>
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    :label="system.status">
                    <a-switch></a-switch>
                  </a-form-item>
                </a-row>
              </a-modal>
            </a-row>
            <a-row>
              <a-table :columns="columns"
                       :loading="table.loading"
                       :dataSource="dataSource"
                       :pagination="pagination"
                       @change="handleTableChange"></a-table>
            </a-row>

          </a-form>
        </a-spin>
      </a-card>
    </div>
  </a-layout>
</template>

<script>
  import { getUserListApi } from '../axios/useApi.js'

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
      dataIndex: 'status'
    },
    {
      title: '在线状态'
    },
    {
      title: '操作',
      dataIndex: 'action'
    }]

  export default {
    name: '',
    data () {
      return {
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
        visible: false,
        roleList: ['anmin', 'admin123'],
        form: this.$form.createForm(this),
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
          ok: '确认'
        },
        showModal: false,
        dataSource: [],
        pagination: {},
        columns
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      addShow () {
        this.visible = true
      },
      handleOk (e) {

      },
      handleCancel (e) {
        this.visible = false
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
        })
      }
    }

  }
</script>
