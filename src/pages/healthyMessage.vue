<template>
    <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div v-for="i in computedTimes">
      <div class="news">
        <div class="imgOfNews">
          <img src="./images/loginBack.jpg" style="height: 100%;width: 100%;" alt="这是新闻的图片">
        </div>
        <div class="contentOfNews">这是一个新闻内容，内容让人为之虎躯一震，及其惊悚！！</div>
        <div class="timeOfNews"><span class="timeOfLeft">作者</span><span class="timeOfRight">{{i}}</span></div>
      </div>
        </div>
      </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name: "healthyMessage",
      data(){
          return{
            times:["2019/4/18/19/30/10","2019/4/18/15/30/10"],
            isLoading: false,
            computedTimes: ["2019/4/18/19/30/10","2019/4/18/15/30/10"]
          }
      },
      mounted(){
        this.transformTimes();
      },
      methods:{
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
        },
        transformTimes(){
          function dateClass(year,month,day,hours,minutes,second){
            this.year=year;
            this.month=month;
            this.day=day;
            this.hours=hours;
            this.minutes=minutes;
            this.second=second;
          }
          let date=new Date();
          let now=new dateClass(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
          for (let i=0;i<this.times.length;i++){
              let news;
              let time=this.times[i];
              let arr=time.split("/");
              news = new dateClass(Number(arr[0]),Number(arr[1]),Number(arr[2]),Number(arr[3]),Number(arr[4]),Number(arr[5]));

          }
        }
      }
    }
</script>

<style scoped>
.news{
  margin: 2rem auto;
  width: 80%;
  height: 15rem;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  cursor:pointer;
}
  .imgOfNews{
    width: auto;
    height: 9rem;
    border-bottom: 1px solid #EEEEEE;
  }
  .contentOfNews{
     border: 1px solid #EEEEEE;
     height: 3.75rem;
     padding-top: 0.5rem;
    font-size: 0.75rem;
    color: darkcyan;
   }
  .timeOfNews{
    font-size: 0.75rem;
    font-style: italic;
  }
  .timeOfLeft{
    float: left;
    margin-left: 0.5rem;
  }
  .timeOfRight{
    float: right;
    margin-right: 0.5rem;
  }

</style>
