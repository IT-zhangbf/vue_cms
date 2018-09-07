<template>
    <div class="app">
        <el-col :span="24">
            <el-menu
                    default-active="1"
                    class="el-menu-vertical"
                    @open="handleOpen"
                    @close="handleClose">
                <el-menu-item index="1">
                    <router-link to="/order" tag="li">订单列表</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/product" tag="li">产品列表</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/banner" tag="li">轮播列表</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/user" tag="li">用户列表</router-link>
                </el-menu-item>

            </el-menu>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                navBgShow: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
