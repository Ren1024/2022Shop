<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <Today></Today>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>

  </div>
</template>

<script>
import List from './List'
import Today from './Today'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
  name: 'Home',
  components:{
    List,
    Today,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style lang="less" scoped>

</style>
