<template>
  <a-layout class="layout">
    <a-layout-sider class="sider" :trigger="null" collapsible :width="collapsed ? '80px':'256px'">
      <div class="h1">
        <img src="../assets/login-logo.png" alt="">
        <span>{{msg}}</span></div>
      <a-menu theme="dark" mode="inline" :inlineCollapsed="collapsed" :openKeys="openKeys" @openChange="onOpenChange">
        <!--侧边栏菜单区域-->
        <template v-for="item in menuList">
          <a-menu-item
            v-if="!item.children" :key="item.key">
            <a-icon :type="item.icon"></a-icon>
            <span>{{item.title}}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="item.key">
            <span slot="title"><a-icon :type="item.icon"></a-icon><span>{{ item.title }}</span></span>
            <a-menu-item v-for="subItem in item.children" :key="subItem.key">
              <router-link :to="subItem.path">{{subItem.title}}</router-link>
            </a-menu-item>
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
            <div class="user-wrapper">
            <span class="action ant-dropdown-link user-dropdown-menu">{{username}}</span>
            </div>
          </div>
        </a-layout-header>
      </div>
      <!--右边栏的中部-->
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">
        {{footMsg}}
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  import { getCookie } from '../cookie/cookie'

  export default {
    name: 'layout',
    data () {
      return {
        msg: '密钥管理系统',
        footMsg: 'Copyright 2019 版权所有 江南天安科技有限公司',
        collapsed: false,
        rootSubmenuKeys: ['1', '2', '3'],
        openKeys: [],
        username: '',
        menuList: [{
          key: '1',
          icon: 'cluster',
          title: '系统管理',
          children: [
            {
              key: '1.1',
              title: '用户管理',
              path: '../user'
            },
            {
              key: '1.2',
              title: '角色管理',
              path: '../role'

            }
          ]
        }, {
          key: '2',
          icon: 'line-chart',
          title: '图表管理',
          children: [
            {
              key: '2.1',
              title: '柱状图',
              path: '../echarts'
            },
            {
              key: '2.2',
              title: '折线图',
              path: '../lineAndBar'
            },
            {
              key: '2.3',
              title: '饼状图',
              path: '../chartPie'
            },
            {
              key: '2.4',
              title: '动态数据',
              path: '../dynamicData'
            },
            {
              key: '2.5',
              title: '温度变化图',
              path: '../temperatureChange'
            },
            {
              key: '2.6',
              title: '电量变化图',
              path: '../electricSum'
            }
          ]
        }]

      }
    },
    methods: {
      toggle () {
        this.collapsed = !this.collapsed
        this.$emit('toggle', this.collapsed)
      },

      onOpenChange (openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : []
        }
      },
      getEchoUser() {
        this.username = getCookie('username')
      }
    },
    mounted() {
      this.getEchoUser()
    }
  }
</script>
