<template>
    <div id="back">
      <van-nav-bar
        title="登  录"
        id="nav"
        right-text="注册"
        @click-right="onClickRight"
      />
      <div id="test">
        <van-row>
          <van-col span="2">&nbsp</van-col>
          <van-col span="20" id="main"><div id="form">
            <van-cell-group>
              <div>
              <van-field
                placeholder="请输入用户名"
                label="用户名"
                left-icon="contact"
                style="background: lightblue;"
              />
              </div>
              <div>
              <van-field
                placeholder="请输入密码"
                label="密码"
                left-icon="closed-eye"
                style="background: lightblue;"
              />
              </div>
              <div></div>
            </van-cell-group>
            <br>
            <van-button plain type="primary" @click="check">登录</van-button>
          </div>
          </van-col>
          <van-col span="2">&nbsp</van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'vant';
   export default {
        name: "login",
      methods: {
        onClickRight() {
          Toast('注册');
          this.$router.push('/register')
        },
        check(){
          this.$router.push('/indexPage/healthyMessage')
        }
      }
    }
</script>

<style scoped>
#nav{
background-color: lavender;
  border-bottom: darkgray solid 1px;
}
#back{
  background: url("images/loginBack.jpg") no-repeat;
  background-size: 100% 100%;
}
  #main{
    height:250px;
    margin: 25% 0;
  }
  #form{
    margin: 5%;
  }
</style>
