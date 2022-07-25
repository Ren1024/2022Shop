<template>
  <div class="pagination">
    <button>上一页</button>
    <!-- <button v-for="item in arrPages" :key="item">{{item}}</button> -->
    <!-- <button>···</button>

    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    
    <button>···</button>
    <button>9</button> -->
    <button>{{arrPages}}</button>
    <button>上一页</button>
    
    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data(){
        return {
            // 内部保存的当前页码数
            myCurrentPage: 0
        }
    },
    props:{
        currentPage:Number,  // 当前页码
		total: Number,  //所有数据的总数量
		pageSize: Number,   //每页的最大数量
		// showPageNo: Number,   //最大连续页码数
    },
    computed:{
        // 总页数
        totalPages(){

        },
        // 连续页码数的开始页码
        start(){

        },
        // 连续页码数的结束页码
        end(){

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

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>