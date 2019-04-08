<template>
  <div id="back">
    <van-nav-bar
      title="注册"
      id="nav"
      left-arrow
      @click-left="onClickLeft"
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
                v-model="name"
                :error-message="nameErrorMessage"
              />
            </div>
            <div>
              <van-field
                center
                clearable
                style="background: lightblue;"
                placeholder="请输入短信验证码"
              >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
              </van-field>
            </div>
            <div>
              <van-field
                placeholder="请输入密码"
                label="密码"
                left-icon="closed-eye"
                style="background: lightblue;"
                v-model="passwordFir"
              />
            </div>
            <div><van-field
              placeholder="请确认密码"
              label="确认密码"
              left-icon="closed-eye"
              style="background: lightblue;"
              v-model="passwordSec"
              :error-message="errorMessage"
            /></div>
          </van-cell-group>
          <br>
          <van-button plain type="primary" @click="reg">注册</van-button>
        </div>
        </van-col>
        <van-col span="2">&nbsp</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'
    export default {
        name: "register",
      data(){
          return{
            passwordFir:"",
            passwordSec:"",
            name:"",
            ok:false,
            errorMessage:"",
            nameOk:false,
            nameErrorMessage:""
          }
      },
      methods:{
        onClickLeft:function () {
          this.$router.go(-1)
        },
        reg:function () {
          if (this.ok){
            if (this.nameOk) {
              if (this.passwordFir!=""&&this.passwordSec!=""){
                Toast('注册成功！');
              }else {
                Toast('请检查信息！');
              }
            }else{
              Toast('请检查信息！');
            }
          } else{
            Toast('请检查信息！');
          }
        }
      },
      watch:{
          passwordSec:function () {
            if ((this.passwordSec)===(this.passwordFir)){
              this.errorMessage=""
              this.ok=true;
            } else{
              this.ok = false;
              this.errorMessage="两次密码不一致"
            }
          },
        name:function () {
          if (this.name!=""){
            this.nameOk=true
            this.nameErrorMessage=""
          }else{
            this.nameOk=false
            this.nameErrorMessage="用户名不能为空"
          }
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
