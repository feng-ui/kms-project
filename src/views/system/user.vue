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

        </div>
        <a-table :columns="columns"
                 :dataSource="dataSource"></a-table>
      </a-card>
    </div>
  </a-layout>
</template>

<script>
  import { getUserListApi } from '../axios/useApi.js'

  export default {
    name: '',
    data () {
      return {
        system: {
          manage: '系统管理',
          user: '用户管理',
          add: '添加',
          addAdmin: '添加管理员'
        },
        visible: false,
        showModal: false,
        dataSource: [],
        columns: [
          {
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
          }
        ]
      }
    },
    methods: {
      addShow () {

      },
      loadData () {
        const params = {
          username: '111'
        }
        getUserListApi(params).then(res => {
          console.log(res.data)
        })
      }
    },
    mounted () {
      this.loadData()
    }

  }
</script>

<style scoped>
  .page-header {
    background-color: #ffffff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;
  }

  .page-header .ant-breadcrumb {
    margin-bottom: 10px;
  }

  h1 {
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 16px;
    flex: auto;
  }

  .add-bottom-space {
    margin-bottom: 24px;
  }
</style>
