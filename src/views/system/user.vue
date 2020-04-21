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
              <a-form-item>
                <a-button type="primary" @click="addShow()">{{system.add}}</a-button>
              </a-form-item>
            </a-row>
            <a-row>
              <a-table :columns="columns"
                       :loading="table.loading"
                       :dataSource="dataSource"
                       :pagination="pagination"></a-table>
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
        form: this.$form.createForm(this),
        table: {
          loading: false
        },

        loading: false,
        system: {
          manage: '系统管理',
          user: '用户管理',
          add: '添加',
          addAdmin: '添加管理员'
        },
        visible: false,
        showModal: false,
        dataSource: [],
        pagination: {},
        columns
      }
    },
    methods: {
      addShow () {

      },
      loadData (params) {
        var self = this
        self.table.loading = true
        getUserListApi(params).then(res => {
          console.log(res.data)
          this.dataSource = res.data
        })
      }
    },
    mounted () {
      this.loadData()
    }

  }
</script>
