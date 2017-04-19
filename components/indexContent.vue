
<template>
  <div class="indexContent">
      <img src="../assets/images/background.jpg" class="img-responsive" alt="Responsive image">
      <img src="../assets/images/backgroundTitle.png" class="imagesTitie" alt="">
      <!-- <button @click="goGame"  class="joinButton">{{ $t("publicText.goGame}</button> -->
      <!-- footer -->  
      <div class="container">                                    
      <div class="row margin-t">

        <div class="col-md-4 col-xs-12">
          <div class="itemBox">
            <div class="row">
              <div class="col-md-12">
                <img src="../assets/images/aboutUsIndex.png" alt="">
                <li class="footContent"><span>{{ $t("nav.about") }}</span></li>
              </div>
            
            <div class="col-md-12 text">
              <p v-html="aboutAs">月光如洗，如流水般涌动;流水如镜，如月光般静谧。岸柳依依，探出细腰，欲与水中月比美;穿梭千年的小舟从月里推波而来，荡开一圈圈涟漪。古韵厚重的石拱桥，他的目光如水，皎洁月色为衣，夜风为乐。小楼高处，我的目光如水，他化为淡淡水墨画。</p>
            </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xs-12">
          <div class="itemBox">
            <div class="row">
              <div class="col-md-12">
                <img src="../assets/images/newsIndex.png" alt="">
                <li class="footContent"><span>{{ $t("nav.news") }}</span></li>
              </div>
            
            <div class="col-md-12 ">
              <ul class="newsList">
                <li v-for="item in newsList">
                  <p v-html="item.title">1.XXXXXXXXXXXXX212121XXXXXXXXXXXXXXXXXXXXXXX</p>
                  <span v-html="item. create_at">2015/02/04</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xs-12">
          <div class="itemBox">
            <div class="row">
              <div class="col-md-12">
                <img src="../assets/images/noticeIndex.png" alt="">
                <li class="footContent"><span>{{ $t("nav.notice") }}</span></li>
              </div>
            
            <div class="col-md-12 text">
              <p v-html="communique"></p>
            </div>
          </div>
          </div>
        </div>

      </div>
      
    </div>        
    <!-- footer End-->
  </div>
</template>

<script>
export default {
  name: 'indexContent',
  data () {
    return {
        aboutAs:'',
        newsList:[],
        communique:'',
        userinfo:{}
    }
  },
  mounted(){

    var self = this;
    // myFn.myAjax('get', {}, myFn.apiAddress.index.aboutus, function(res){
    //     self.aboutAs = res.data.list.desc;
        
    //     myFn.myAjax('get', {page:1,pagenumber:5}, myFn.apiAddress.index.nuwList, function(res){
    //         self.newsList = res.data.list.data;

    //         myFn.myAjax('get', {}, myFn.apiAddress.index.communique, function(res){
    //             self.communique = res.data.list.content;
            
    //         })
    //     })
        
    // });


  },
  methods:{
    goGame: function(){
      if(localStorage.userinfo == undefined){
        $('#exampleModalLogin').modal('toggle');
      }else{
        this.$router.push({path:'/game/index'});
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      .joinButton:hover{
        background: #eb5304;
        border-color: #eb5304;
        text-decoration: none;
      }
      .img-responsive{
        border-bottom: 2px #3c3c3c solid;
      }
      .newsList{
        padding: 20px;
        padding-right: 100px;
      }
      .newsList li {
        text-indent: 0px;
        position: relative;
        color: #e4a904;
      }
      .newsList li span{
        position: absolute;
        right: -85px;
      }
      .newsList p {
        display: inline-block;
        margin-bottom: 0px;
        padding-right: 50px;
        width: 95%;
        overflow: hidden;
      }
      .itemBox{
        box-sizing: content-box;
        border: 1px #393939  solid;
        height: 340px;
      }
      .row img{
        width: 100%;
        height: 120px;
      }
      .imagesTitie,.joinButton{
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        top: 30%;
        width: 50%;
      }
      .joinButton{
        width: 150px;
        height: 50px;
        border: 1px #fff solid;
        display: inline-block;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 1.4em;
        border-radius: 5px;
        top: 70%;
        background: rgba(0,0,0,.5);
      }
      .footContent{
        text-align: center;
      }
      .footContent span{
        display: inline-block;
        margin-top:15px;
        height: 100%;
        color: #e4a904;
        font-size: 1.3em;
      }
      .right-img{
        padding: 0 15px;
        text-align: right;
      }
      .margin-t{
        margin-top: 40px;
        box-shadow: 0px 15px 5px -15px #000;
      }
      .text p{
        text-indent: 25px;
        color: #e4a904;
        margin: 20px 0px;
        padding: 0px 19px;
      }
</style>
