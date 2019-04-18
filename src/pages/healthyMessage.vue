<template>
    <div>
      <div class="news">
        <div class="imgOfNews">
          <img src="./images/loginBack.jpg" style="height: 100%;width: 100%;" alt="这是新闻的图片">
        </div>
        <div class="contentOfNews">这是一个新闻内容，内容让人为之虎躯一震，及其惊悚！！</div>
        <div class="timeOfNews">这是个新闻标题</div>
      </div>
      <div class="news">
        <div class="imgOfNews">
          <img src="./images/loginBack.jpg" style="height: 100%;width: 100%;" alt="这是新闻的图片">
        </div>
        <div class="contentOfNews">这是一个新闻内容，内容让人为之虎躯一震，及其惊悚！！</div>
        <div class="timeOfNews">这是个新闻标题</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "healthyMessage"
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
     height: 4.2rem;

   }
  .timeOfNews{
    text-align: left;
    font-size: 1rem;
  }

</style>
