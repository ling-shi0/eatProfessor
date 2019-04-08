<template>
	<div>
	<van-tabbar v-model="active" active-color="#07c160" id="tabBar" fixed>
      <van-tabbar-item icon="hot-o" :info="infotext" to="/indexPage/healthyMessage" @click="send">健康资讯</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/indexPage/todayEat" @click="send">今日饮食</van-tabbar-item>
      <van-tabbar-item icon="close" to="/indexPage/xiangKe" @click="send">食物相克</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/indexPage/selfMessage" @click="send">个人信息</van-tabbar-item>
</van-tabbar>
	</div>
</template>

<script>
	export default {
  data() {
    return {
      active: 0,
      infotext: "5"
    }
  },
    methods:{
	    send () {
        this.$bus.emit('title', this.active)
      }
    }
}
</script>

<style>
  #tabBar{
    background-color: lightblue;
  }
</style>
