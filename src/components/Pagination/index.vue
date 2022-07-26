<template>
  <div class="pagination">
    <button 
        :disabled="myCurrentPage === 1"
        :class="{disabled: myCurrentPage === 1}" 
        @click="setCurrentPage(myCurrentPage - 1)"
    >上一页</button>
    <button v-if="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    <button class="disable" v-if="startEnd.start > 2">...</button>
    <!-- <button 
        v-for="item in startEnd.end" 
        v-if="item >= startEnd.start"
        :class="{active:item == myCurrentPage}"
        @click="setCurrentPage(item)"
    >{{item}}</button> -->
    <button 
        v-for="item in startEndArr"
        :key="item" 
        :class="{active:item == myCurrentPage}"
        @click="setCurrentPage(item)"
    >{{item}}</button>

    <button class="disable" v-if="startEnd.end < totalPages-1">...</button>
    <button v-if="startEnd.end < totalPages" @click="setCurrentPage(totalPages)">{{totalPages}}</button>
    <button 
        :class="{disabled: myCurrentPage === totalPages}" 
        @click="setCurrentPage(myCurrentPage + 1)"
        :disabled="myCurrentPage === totalPages"
    >下一页</button>
    <button class="disable">共 {{total}} 条</button>
    
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props:{
    currentPage:{ //当前页码
        type:Number,
        default: 1
    },
    total:{ //数据总数量
        type:Number,
        default: 0
    },
    pageSize:{ //每页最大数量
        type:Number,
        default: 10
    },
    showPageNo:{ //最大连续页码数
        type:Number,
        default: 4,
        // 必须是奇数
        validator: function(value){
            return value % 2 === 1
        }
    }
  },
    data(){
        return {
            // 内部保存的当前页码数
            myCurrentPage:this.currentPage
        }
    },

  computed:{
    // 计算得到开启也和结束也的数组
    startEndArr(){
        const arr = []
        const {start, end} = this.startEnd
        for (let page = start; page < end; page++) {
            arr.push(page)
        }
        return arr
    },

    totalPages(){  //总页数
        return Math.ceil(this.total / this.pageSize)
    },
    startEnd(){ //连续页码数的开始页码与结束页码
        let start, end
        // 获取计算需要的值
        const {myCurrentPage,showPageNo,totalPages} = this

        // 计算start
        // 例如: 5  5  10       34[5]67
        //      1   5   10      [1]2345
        start = myCurrentPage - Math.floor(showPageNo / 2)
        if(start < 1){
            start = 1
        }
        // 计算end
        // 5   5   10      34[5]67
        // 9   5   10      678[9]10
        // 3    5   3      12[3]
        end = start + showPageNo - 1
        if(end > totalPages){
            end = totalPages
            start = end - showPageNo + 1
            if(start < 1){
                start = 1
            } 
        }

        return {start, end}
    }
  },
  methods:{
    setCurrentPage(page){
        if(this.myCurrentPage === page) return
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
