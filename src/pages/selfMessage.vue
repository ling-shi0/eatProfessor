<template>
<div>
  <div id="zhangHuMessage">
    <div id="imageOfSelf"><img src="./images/loginBack.jpg" style="height: 100%;width: 100%;" alt="这是头像"></div>
    <div id="messageOfSelf">
      <div id="innerTop"><h2>未登录</h2></div>
      <div id="innerBottom">请先登录</div>
    </div>
    <div id="arrow"><van-icon name="arrow" /></div>
  </div>
<div id="cells">
  <van-cell-group>
    <van-cell title="我的收藏" is-link to="index" />
    <van-cell title="我的上传" is-link to="index" />
    <van-cell title="修改密码" is-link to="index" />
  </van-cell-group>
</div>
</div>
</template>

<script>
    export default {
        name: "selfMessage"
    }
</script>

<style scoped>
#zhangHuMessage{
  margin: 5px auto;
  border: 1px solid #EEEEEE;
  height: 5rem;
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  cursor:pointer;
}
#zhangHuMessage:hover{
  background: darkgrey;
}
  #imageOfSelf{
    border: 1px solid #2c3e50;
    width: 4rem;
    height: 4rem;
  }
  #messageOfSelf{
    margin-top: -1.5rem;
    margin-left: 1rem;
  }
  #arrow{
    margin-top: 1rem;
    position: absolute;
    right: 1rem;
    font-size: 2rem;
  }
  #cells{
    text-align: left;
  }
</style>
