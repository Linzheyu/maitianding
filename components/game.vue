
<template>
    <div class="gameBg">
        <!-- 导航 -->   
        <div class="container back-block">
            <div class="row header-top">

                <div class="col-lg-4 logo">
                    <img src="../assets/images/mtdLogo.png" alt="">
                </div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4 info">
                    <span v-html="userinfo.email"></span>
                    <!-- <a href="#" class="notice">
                        <i class=" glyphicon glyphicon-bell"></i>
                        <span class="badge">0</span>
                    </a> -->
                    <a @click="outLogin" class="signOut">{{ $t("log.quirt") }}</a>
                    <div class="btn-group toggle-language">
                      <button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span v-show="selectLanguage==1">{{ $t("nav.Chinese")}}</span>
                        <span v-show="selectLanguage==2">{{ $t("nav.English")}}</span>
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a @click="cutLanguage(1)" >{{ $t("nav.Chinese")}}</a></li>
                        <li><a @click="cutLanguage(2)" >{{ $t("nav.English")}}</a></li>
                      </ul>
                    </div>
                </div>
            </div>
            <ul class="game">
<!--                 <li class="backButton"><router-link to="/index"><img src="../assets/icon/back.png"></router-link></li> -->
                <li><router-link to="/game/index" activeClass="active">{{ $t("gameNav.gameCore") }}</router-link></li>
                <li><router-link to="/game/shop" activeClass="active">{{ $t("gameNav.exchange") }}</router-link></li>
                <!-- <li><router-link to="/game/benefit" activeClass="active">{{ $t("gameNav.welfare") }}</router-link></li> -->
                <li><router-link to="/game/account/" activeClass="active">{{ $t("gameNav.AccountCenter") }}</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'game',
  data () {
    return {
        userinfo:{},
        selectLanguage:1,
    }
  },
  created(){
    if(localStorage.userinfo == undefined){
        this.$router.push({path:'/index'});
    }
  },
  mounted(){
    myFn.hiddenLoding();
    this.userinfo = JSON.parse(localStorage.userinfo);
  },
  methods:{
    /**
     * 退出登录
     * 清除localStorage数据
     */
    outLogin:function(){
        var self = this;
        localStorage.clear();
        myFn.myAjax('get',{}, myFn.apiAddress.memberLogin.quitLogin, function(res){
            // self.userinfo = {};
          self.$router.push({path:'/index'});
        })
    },
    // 切换语言包
    cutLanguage: function(type){
      if(type == 1){
        this.selectLanguage = 1;
        Vue.config.lang = 'cn';
      }else if(type == 2){
        this.selectLanguage = 2;
        Vue.config.lang = 'en';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-top{
    height: 75px;
    line-height: 75px;
    background: #FFF;
    box-shadow: 0px 0px 27px rgba(0,0,0,.1);
}
.header-top .logo{
    text-align: left;
}
.header-top .logo img{
     width: 40%;
     margin-left: 20px;
}
.header-top .info{
    font-weight: 700;
    text-align: center;
}
.header-top .signOut, .header-top .toggle-language{
    margin-left: 20px;
}
.header-top .notice{
    margin-left: 0px;
    font-size:1.3em;
    text-decoration: none;
    line-height: 10px;
    position: relative;
    top: 3px;
}
.header-top .notice .badge{
    position: relative;
    top: -10px;
    left: -15px;
    padding:3px 6px;
    background: #EC5156;
}
.header-top .toggle-language button{
    width: 100px;
    background: #F6F6F6;
    border:none;
}
.header-top .toggle-language button .caret{
    margin-left:10px;
}
.header-top .dropdown-menu{
    min-width: 100px;
}
.game{
    margin-bottom: 0px
}
.game li{
    display: inline-block;
}
.game li a{
    width: 80px;
    height: 52px;
    display: inline-block;
    line-height: 52px;
    margin: 0px 15px;
    font-weight: 700;
    letter-spacing: 2px;
    font-size:14px;
    text-decoration: none;
}
.game li .active{
    border-bottom: 2px #31AEB3 solid;
}
.back-block{
  width: 100%;
  background: #F5F5F5;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  margin-bottom:10px;
}
.backButton{
  position:relative;
  right: 300px;
  top:7px;

}
.gameBg{
    min-height: 100%;
    background: #F5F5F5;
    letter-spacing: 0.5px;
    color: #44697A;
    text-align: center;
}
</style>
