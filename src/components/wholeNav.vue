<template>
  <van-nav-bar
    :title='title'
    id="nav"
  />
</template>

<script>
    export default {
        name: "wholeNav",
        data(){
            return{
                  title:"健康资讯"
            }
        },
        created(){
            this.$bus.$on("title", (params) => {
            switch (params) {
              case 0 : {
                this.title="健康资讯"
                break
              }
              case 1 :{
                this.title="今日饮食"
                break
              }
              case 2 :{
                this.title="食物相克"
                break
              }
              case 3 :{
                this.title="个人信息"
              }
            }
          })
        }
    }
</script>

<style scoped>
  #nav{
    background-color: lavender;
    border-bottom: darkgray solid 1px;
  }
</style>
