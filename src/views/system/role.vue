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
          <a-modal :title="system.addRole" v-model="visible" @ok="handleConfirm" @cancel="handleCancel">
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

  .ant-table-pagination {
    float:right;
    margin: 16px 0px 16px 0px;
  }
</style>
