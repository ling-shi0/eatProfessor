<template>
  <div id="main">
    <span style="text-align: center;"><h2 style="border-bottom:1px solid black;margin: 10px;">肉类</h2></span>
      <div>
        <span><van-tag size="large" class="tags" color="#7232dd" plain>猪肉</van-tag></span>
        <span><van-tag size="large" class="tags" color="#7232dd" plain>猪蹄</van-tag></span>
        <span><van-tag size="large" class="tags" color="#7232dd" plain>牛肉</van-tag></span>
        <span><van-tag size="large" class="tags" color="#7232dd" plain>羊肉</van-tag></span>
        <span><van-tag size="large" class="tags" color="#7232dd" plain>鸡肉</van-tag></span>
      </div>
    <span style="text-align: center;"><h2 style="border-bottom:1px solid black;margin: 10px;">蛋奶类</h2></span>
    <div>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>鸡蛋</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>鸭蛋</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>奶酪</van-tag></span>
    </div>
    <span style="text-align: center;"><h2 style="border-bottom:1px solid black;margin: 10px;">蔬菜</h2></span>
    <div>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>白菜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>青菜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>菠菜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>芹菜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>香菜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>土豆</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>胡萝卜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>西红柿</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>黄瓜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>蘑菇</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>木耳</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>大蒜</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>洋葱</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>茄子</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>花菜</van-tag></span>
    </div>
    <span style="text-align: center;"><h2 style="border-bottom:1px solid black;margin: 10px;">果类</h2></span>
    <div>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>苹果</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>香蕉</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>梨</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>柠檬</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>花生</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>芝麻</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>红枣</van-tag></span>
    </div>
    <span style="text-align: center;"><h2 style="border-bottom:1px solid black;margin: 10px;">豆类</h2></span>
    <div>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>豆芽</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>黄豆</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>豆腐</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>腐竹</van-tag></span>
    </div>
    <span style="text-align: center;"><h2 style="border-bottom:1px solid black;margin: 10px;">五谷杂粮</h2></span>
    <div>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>大米</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>玉米</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>燕麦</van-tag></span>
      <span><van-tag size="large" class="tags" color="#7232dd" plain>红豆</van-tag></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xiangKe",
    mounted() {
      this.adjast();
    },
    data() {
      return{
      }
    },
    methods:{
       adjast : function () {
        var main=document.getElementById("main");
        var wholeHeight=main.clientHeight;
        wholeHeight+=30;
        main.style.height=wholeHeight;
      }
    }
  }
</script>

<style scoped>
  .tags{
    cursor:pointer;
  }
</style>
