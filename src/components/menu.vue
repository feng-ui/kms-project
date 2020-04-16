<template>
  <a-layout class="layout">
    <a-layout-sider class="sider" :trigger="null" collapsible :width="collapsed ? '80px':'256px'">
      <div class="h1">
        <img src="../assets/login-logo.png" alt="">
        <span>密钥管理系统</span></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <!--侧边栏菜单区域-->
        <a-sub-menu v-for="item in menuList" :key="item" :index="item">
          <span><a-icon :type="item.icon"/><span>{{ item }}</span></span>
          <a-menu-item
            v-for="subItem in item.submenu"
            :key="subItem"
            :index="subItem"
          >
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!--右边栏的头部-->
      <div class="header-animat">
        <a-layout-header class="[sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed']"
                         style="background: #fff; padding: 0">
          <div class="header">

            <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"></a-icon>

          </div>

        </a-layout-header>
      </div>
      <!--右边栏的中部-->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      </a-layout-content>
      <a-layout-footer class="footer">
        Copyright 2019 版权所有 江南天安科技有限公司
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    name: 'layout',
    data () {
      return {
        title: 'Dashboard',
        name: '/dashboard',
        icon: 'dashboard',
        menuList: ['123', '密钥管理', '配置管理'],
        submenu: [
          {
            text: '用户管理'
          },
          {
            text: '角色管理'
          }
        ],
        collapsed: false
      }
    },
    methods: {
      toggle () {
        alert(123)
        this.collapsed = !this.collapsed
        this.$emit('toggle', this.collapsed)
      }
    }
  }
</script>
