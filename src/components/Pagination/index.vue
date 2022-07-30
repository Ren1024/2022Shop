<template>
    <div class="pagination">
        <button 
            :class="{disabled: myCurrentPage === 1}"
            @click="updatePage(myCurrentPage - 1)"
            :disabled="myCurrentPage === 1"
        >上一页</button>
        <button v-if="startEnd.start > 1" @click="updatePage(1)">1</button>
        <button class="disabled" v-if="startEnd.start > 2">...</button>
        <button 
            v-for="item in startEnd.end" 
            :key="item"
            v-if="item >= startEnd.start"
            :class="{active: item === myCurrentPage}"
            @click="updatePage(item)"
        >{{item}}</button>

        <button class="disabled" v-if="myCurrentPage < pageAll - 1">...</button>
        <button v-if="startEnd.end < pageAll" @click="updatePage(pageAll)">{{pageAll}}</button>
        <button 
            :class="{disabled: myCurrentPage === pageAll}"
            @click="updatePage(myCurrentPage + 1)"
            :disabled="myCurrentPage === pageAll"
        >下一页</button>
        <button class="disabled">共  24  条</button>
    </div>
</template>


<script>
export default {
    name:'MyPagination',
    props:{
       /*  :currentPage="options.pageNo"
        :total="total"
        :pageSize="options.pageSize"
        :showPageNo="5"
        @currentChange="getShopList" */
        currentPage:{ //当前页数
            type:Number,
            default: 1
        },
        total:{  //全部商品数量
            type: Number,
            default: 0
        },
        pageSize:{  //单页显示数量
            type: Number,
            default: 3
        },
        showPageNo:{  //最小连续页数
            type: Number,
            default: 5,
            // 限制数值为奇数
            validator: function(value){
                return value % 2 === 1
            }
        }
    },
    data(){
        return { //内部的当前页数
            myCurrentPage: this.currentPage
        }
    },
    computed:{
        // 通过已有数据，计算全部页数
        pageAll(){
            return Math.ceil(this.total / this.pageSize)
        },

        // 计算开始页码和结束页码
        startEnd(){
            let start, end
            // 获取相应数据
            const {myCurrentPage,showPageNo,pageAll} = this
            // 计算start
            // 5    5   10  34[5]67
            // 1    5   10  [1]2345
            start = myCurrentPage - Math.floor(showPageNo / 2)
            if(start < 1) {
                start = 1
            }

            // 计算end
            end = start + showPageNo - 1
            // 10   5   10  6789[10]
            if(end > pageAll){
                end = pageAll
                // 修正start
                start = end - showPageNo + 1
                // 1    5   3   [1]23
                if(start < 1) {
                    start = 1
                }
            }

            return {start, end}
        }
    },
    methods:{
        updatePage(page){
            this.myCurrentPage = page
            this.$emit('currentChange',page)
        }
    },
    watch:{
        currentPage(value){
            this.myCurrentPage = value
        }
    }
}
</script>


<style lang="less" scoped>
.pagination {
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &.active {
            background-color: #409eff;
            color: #fff;
            cursor: no-drop;
        }
        &.disabled {
            cursor:no-drop;
            color: #ccc;
        }
    }
}
</style>
