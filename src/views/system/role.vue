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
          <a-modal :title="system.addRole" v-model="visible">
            <div >
            </div>
          </a-modal>
        </div>
        <a-table :columns="columns"
                 :dataSource="dataSource"></a-table>
        <div class="ant-table-pagination">
        <a-pagination :defaultCurrent="6" :total="500" /></div>
      </a-card>
    </div>
  </a-layout>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        system: {
          manage: '系统管理',
          role: '角色管理',
          add: '添加',
          addRole: '添加角色'
        },
        visible: false,
        showModal: false,
        dataSource: [],
        columns: [
          {
            title: '编号'
          },
          {
            title: '角色名称'
          },
          {
            title: '操作'
          }
        ]
      }
    },
    methods: {
      addShow () {
        this.visible = true
      }
    }
  }
</script>
