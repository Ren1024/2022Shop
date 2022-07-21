<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <Today></Today>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
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

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components:{
    List,
    Today,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed:{
    ...mapState({
      floors: state => state.home.floors

    })
  },
  methods:{
    test(){
      console.log(this.floors);
    }
  },
  mounted(){
    this.test()
  }
}
</script>

<style lang="less" scoped>

</style>
