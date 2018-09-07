<template>
    <div class="app">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="logo">
                    <div class="logo-img">
                        <img class="img" src="/src/assets/images/logo.png" alt="logo">
                        <p class="title-zh">农产品商城</p>
                        <p class="title-en">Agricultural Product Mall</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="12">
                <div class="login-out">
                    <router-link to="/login">退出</router-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style lang="stylus" scoped>
    .app
        height 98%
        width 100%
        box-shadow 0 0  .1rem 0 #aaa;
        .logo-img
            width 10rem
            .img
                width .6rem
                height .6rem
                float left
                margin-left 2rem
                margin-right .5rem
                margin-top 0.25rem
            .title-zh
                font-size .3rem
                color #3d6ba4
                font-weight bold
                padding-top .25rem
                height .5rem
                text-align left
            .title-en
                width 100%
                text-align left
                margin-bottom .2rem
                color #333
        .login-out
            text-align right
            line-height 1.2rem
            margin-right .5rem

</style>
