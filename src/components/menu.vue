<template>
  <a-layout class="layout">
    <a-layout-sider class="sider" :trigger="null" collapsible :width="collapsed ? '80px':'256px'">
      <div class="h1">
      <img src="../assets/login-logo.png" alt="">
      <span>密钥管理系统</span></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <!--侧边栏菜单区域-->
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="appstore" /><span>系统管理</span></span>
          <a-menu-item key="1">用户管理</a-menu-item>
          <a-menu-item key="2">角色管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="key" /><span>密钥管理</span></span>
          <a-menu-item key="3">对称密钥模板管理</a-menu-item>
          <a-menu-item key="4">对称密钥管理</a-menu-item>
          <a-menu-item key="5">非对称密钥管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="switcher" /><span>日志管理</span></span>
          <a-menu-item key="6">管理日志</a-menu-item>
          <a-menu-item key="7">服务日志</a-menu-item>
          <a-menu-item key="8">系统日志</a-menu-item>
          <a-menu-item key="8">归档日志</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!--右边栏的头部-->
      <div class="header-animat">
        <a-layout-header class="[sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed']" style="background: #fff; padding: 0">
          <div class="header">

            <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"></a-icon>

          </div>

        </a-layout-header>
      </div>
      <!--右边栏的中部-->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
      <a-layout-footer class="copyright">
        Copyright 2019 版权所有 江南天安科技有限公司
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
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
<style scoped>
  .layout {
    height: auto;
    overflow-x: hidden;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  img {
    width: 52px;
    background-size: contain;
  }
  .h1 {
    color: #fff;
    font-size: 20px;
    margin: 15px 0px 10px 10px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  /*头部样式*/
  .header-animat {
    position: relative;
    z-index: 2;
  }
  .header {
    height: 64px;
    padding: 0 12px 0 0;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    position: relative;
  }
  /*侧边栏*/
  .sider {
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    position: relative;
    z-index: 10;
    min-height: 100vh;
  }
</style>
