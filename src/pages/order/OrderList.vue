<template>
    <div class="app">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="订单号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="商品名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="商品总数"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="商品价格"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="订单状态"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="下单时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="操作">
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                    @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderList",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            currentChange(res){
                console.log(res);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .pagination
        width 100%
        height auto
        text-align center
        margin-top 1.5rem

</style>
