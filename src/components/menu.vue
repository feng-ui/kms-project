<template>
  <a-layout class="layout">
    <a-layout-sider class="sider" :trigger="null" collapsible :width="collapsed ? '80px':'256px'">
      <div class="h1">
        <img src="../assets/login-logo.png" alt="">
        <span>密钥管理系统</span></div>
      <a-menu :defaultSelectedKeys="['1']" :defaultOpenKeys="['2']" theme="dark" mode="inline"
              :inlineCollapsed="collapsed">
        <!--侧边栏菜单区域-->
        <template v-for="item in menuList">
          <a-menu-item
            v-if="!item.children" :key="item.key">
            <span>{{item.title}}</span>
          </a-menu-item>
          <a-sub-menu v-else :menu-info="item" :key="item.key">
            <span><a-icon :type="item.icon"/><span>{{ item }}</span></span>
          </a-sub-menu>
        </template>
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
        menuList: [{
          key: '1',
          title: '系统管理',
          children: [
            {
              key: '1.1',
              title: '用户管理'
            },
            {
              key: '1.2',
              title: '角色管理'
            }
          ]
        }, {
          key: '2',
          title: '密钥管理'
        }, {
          key: '3',
          title: 'echarts'
        }],
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
