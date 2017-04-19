
<template>
  <div class="gameBg">
      <!-- 导航 -->   
      <div class="container back-block">
        <ul class="game">
          <li class="backButton"><router-link to="/index"><img src="../assets/icon/back.png"></router-link></li>
          <li><router-link to="/game/index"><img src="../assets/icon/gameCentre.png"></router-link></li>
          <li><router-link to="/game/shop"><img src="../assets/icon/exchangeShop.png"></router-link></li>
          <li><router-link to="/game/benefit"><img src="../assets/icon/benefitCentre.png"></router-link></li>
          <li><router-link to="/game/account/index"><img src="../assets/icon/accountCentre.png"></router-link></li>
        </ul>
      </div>

      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'game',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
     myFn.hiddenLoding();
  },
  methods:{
    
  }
}
</script>
<style>
  body{
    background: url('/static/img/back-img.d251409.png');
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backButton{
  position:relative;
  right: 300px;
  top:7px;

}
.gameBg{
    min-height: 100%;
    background: url(../assets/images/back-img.png);
    letter-spacing: 0.5px;
    color: #EC9530;
    text-align: center;
}
.back-block{
  width: 100%;
  background: #000;
  border-bottom: 1px solid #333;
  text-align: center;
  margin-bottom:60px;
}
.back-block ul{
  display: inline-block;
  padding-top: 6px;
  padding-left: 0;
  margin-bottom: 0;
}
.back-block li{
  float: left;
}

  
</style>
