<template>
    <div id="app">
        <el-container class="main">
            <el-header class="header">
                <header-bar></header-bar>
            </el-header>
            <el-container class="content">
                <el-aside width="200px">
                    <nav-bar></nav-bar>
                </el-aside>
                <el-container class="container">
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

    import HeaderBar from './components/HeaderBar'
    import NavBar from './components/NavBar'

    export default {
        name: 'Layout',
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        components: {
            HeaderBar,
            NavBar,
        }
    }
</script>

<style lang="stylus" scoped>
    #app
        position relative
        width 100%
        height 100%
        .main
            position relative
            width 100%
            height 100%
            .header
                padding 0 0 0 0
            .content
                height 100%
                width 100%
                .container
                    width 100%
                    padding 0 0 0 0
                    height 100%
                    overflow auto
                    border-left 1px solid #cacaca
</style>


