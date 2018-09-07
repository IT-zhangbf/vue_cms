<template>
    <div id="app">
        <div class="login-box">
            <div class="logo-img">
                <img class="img" src="/src/assets/images/logo.png" alt="logo">
                <span class="title-zh">农产品商城</span>
                <p class="title-en">Agricultural Product Mall</p>
            </div>
            <div class="login-from">
                <el-form ref="form" :model="form">
                    <el-form-item>
                        <el-input v-model="form.name" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-button" type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import login from "@/http/loginApi";

export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      version: state => state.version
    })
  },
  methods: {
    ...mapActions({
      updateToken: "token/updateToken"
    }),
    onSubmit() {
      const name = this.form.name;
      const password = this.form.password;
      if (name.length <= 0 || password.length <= 0) {
        this.$message({
          showClose: true,
          message: "用户名或密码为空",
          type: "error"
        });
      } else {
        //请求接口
        /*let data = {
          ac: this.form.name,
          sc: this.form.password
        };
        login.login(data).then(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );*/
        console.log("name:" + this.form.name);
        console.log("password:" + this.form.password);
        this.$router.push('/order')
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
#app {
    text-algin: center;
    position: relative;

    .login-box {
        width: 8.5rem;
        height: 8.5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -4.5rem;
        margin-left: -4rem;
    }

    .logo-img {
        text-align: center;

        .img {
            width: 0.5rem;
            height: 0.5rem;
        }

        .title-zh {
            font-size: 0.25rem;
            color: #3d6ba4;
            font-weight: bold;
            height: 0.5rem;
            line-height: 0.5rem;
        }

        .title-en {
            width: 100%;
            text-align: center;
            margin-top: 0.5rem;
            margin-bottom: 0.2rem;
            color: #3d6ba4;
        }
    }

    .login-from {
        margin-left: 1.5rem;
        margin-top: 0.5rem;
        width: 6rem;
        height: auto;
        text-align: center;

        .login-button {
            width: 100%;
            color: #FFF;
            background: #3d6ba4;
        }
    }
}
</style>
