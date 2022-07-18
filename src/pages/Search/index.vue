<template>
  <div>
    <h3>search组件</h3>
    <p>route.params: {{$route.params.keyword}}</p>
    <p>route.query: {{$route.query.keyword2}}</p>
    <p>keyword3: {{keyword3}}</p>
    <p>keyword4: {{keyword4}}</p>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword3','keyword4']
}
</script>

<style lang="less" scoped>

</style>
