<template>
  <div class="login_container">
    用户登录
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!--登录表单区域-->
      <a-form class="login_form" v-model="loginForm">

        <a-form-item>
          <a-input v-model="loginForm.username">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model="loginForm.password" type="password">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="btns">
          <a-button type="primary" @click="handleLogin">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'zhangsan',
        password: '123'
      }
    }
  },
  methods: {
    handleLogin () {
      alert(123)
    }
  }
}
</script>
<style scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;

  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

  }

</style>
