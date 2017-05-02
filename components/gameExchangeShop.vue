
<template>
  <div class="gameShop">
      <!-- 导航 -->   
      <div class="container">
        <div class="box1">
          <div class="row title"><p>{{ $t("gameShop.exchangeTopTitle") }}</p></div>
          <div class="row content ">
            <div class="col-md-5 col-md-offset-1  border-b"><p>{{ $t("gameShop.exchangeRatio") }}：{{proportion}}</p></div>
            <div class="col-md-5  border-b"><p>{{ $t("gameShop.factorage") }}：{{counterFee}} {{ $t("classifier.number") }}</p></div>
          </div>
          <div class="row content">
            <div class="col-md-5  col-md-offset-1  border-b"><p>{{ $t("gameShop.usableFood") }}：<span v-html="userInfo.total_foods"></span></p></div>
            <div class="col-md-5  border-b"><p>{{ $t("gameShop.expendFood") }}：{{expenditure}}</p></div>
          </div>
          <div class="row content">
            <div class="col-md-5  col-md-offset-1  border-b">
              <p style="margin-bottom:5px;">{{ $t("gameShop.exchangeNumber") }}：<input min="10" oninput="this.value=this.value.replace(/\D/g,'')" v-model="exchangeNum" @input="inputNum" type="number"></p>
            </div>
            <div class="col-md-5  border-b"><p>{{ $t("gameShop.acquireGold") }}：{{getGold}}</p></div>
          </div>
          <div class="row sure-btn">
            <div class="">
              <button @click="submitExchange">{{ $t("gameShop.exchangeOk") }}</button>
            </div>
            
          </div>
        </div>

        <div class="box1">
          <div class="row title border-b"><p>{{ $t("gameShop.otherRecordTitle") }}</p></div>
          <div class="row content ">
            <div class="col-md-3 list-head "><p>{{ $t("gameShop.otherRecordTime") }}</p></div>
            <div class="col-md-3 list-head "><p>{{ $t("gameShop.otherRecordRatio") }}</p></div>
            <div class="col-md-3 list-head "><p>{{ $t("gameShop.otherRecordNumber") }}</p></div>
            <div class="col-md-3 list-head "><p>{{ $t("gameShop.otherRecordGetGold") }}</p></div>
          </div>
          <div class="row content" v-for="item in otherList">
            <div>
              <div class="col-md-3  border-b"><p v-html="item.time">2017-4-5</p></div>
              <div class="col-md-3  border-b"><p v-html="item.sale_ratio">2：1</p></div>
              <div class="col-md-3  border-b"><p v-html="item.rev_sale_count">300</p></div>
              <div class="col-md-3 border-b"><p v-html="item.money">150</p></div>
            </div>
          </div>
          <div class="row sure-btn">
            <div>
                <ul class="pagination" >
                    <li v-show="current != 1" @click="current-- && goto(current)" ><a>{{ $t('page.previousPage') }}</a></li>
                    <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                      <a >{{index}}</a>
                    </li>
                    <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a >{{ $t('page.nextPage') }}</a></li>
                </ul>
            </div>
          </div>
        </div>

      </div>  
  </div>
</template>

<script>

export default {
  name: 'gameshop',
  data () {
    return {
      // 应支出粮食
      expenditure: 0,
      // 手续费
      counterFee: 0,
      // 比例
      proportion:'',
      // 输入粮食数量
      exchangeNum: '',
      // 获得金币
      getGold:0,

      userInfo:{},
      // 其他用户兑换记录列表
      otherList:[],
      // 分页
      current:1,
      showItem:15,
      allpage:0,
    }
  },
  // computed:{
  //   counterFee: function(){
  //     return
  //   }
  // },
  created(){
    // this.userInfo = JSON.parse(localStorage.userinfo);
  },
  mounted(){
    // 获取用户缓存信息
    this.userInfo = JSON.parse(localStorage.userinfo);
    // 比例换算
    this.proportion = localStorage.foodGame.substr(0,1) + ':' + localStorage.foodGame.substr(2,1);
    
    var self = this;
    // 分页
    var data = {
      pagenumber: self.showItem,
      page: self.current,
    }
    // 获取其他用户记录
    myFn.myAjax('get', data, myFn.apiAddress.gameRecord.otherExchangeGameCurrenc, function(res){
        self.otherList = res.data.list;
        self.allpage = res.data.totalpage;
    })

  },
  computed:{
      pages:function(){
        var pag = [];
          if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
               //总页数和要显示的条数那个大就显示多少条
               var i = Math.min(this.showItem,this.allpage);
               while(i){
                   pag.unshift(i--);
               }
           }else{ //当前页数大于显示页数了
               var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                   i = this.showItem;
               if( middle >  (this.allpage - this.showItem)  ){
                   middle = (this.allpage - this.showItem) + 1
               }
               while(i--){
                   pag.push( middle++ );
               }
           }
         return pag
       }
  },
  methods:{
    inputNum: function(){

      // 应该支出粮食数
      if(this.exchangeNum == ''){
          this.expenditure = 0;
      }else{
         this.expenditure = parseInt(this.exchangeNum) + (this.exchangeNum * localStorage.fee / 100);
      }
      // 获得金币数量
      var proportionArray = localStorage.foodGame.split(':');
      console.log(proportionArray[0])
      this.getGold = this.exchangeNum *  (proportionArray[1] / proportionArray[0]);
      if(this.getGold == 0){
        this.getGold = 0;
      }

      // 手续费换算
      this.counterFee = ((this.exchangeNum * localStorage.fee) / 100).toFixed(4);
    },
    submitExchange: function(){

      var self = this;
      var is_Number = /^[0-9]+.?[0-9]*$/;
      if (!is_Number.test(this.exchangeNum)) {
        alert( self.$t("staticMsg.msg004") );
        return false;
      }

      if( this.exchangeNum < 10){
        alert( self.$t("staticMsg.msg005") )
        return false;
      }
      var data = {
          num : this.exchangeNum
      }
      myFn.myAjax('get', data, myFn.apiAddress.game.exchangeGold, function(res){
          myFn.setUserInfo('total_foods',res.data.totalfood);
          myFn.setUserInfo('total_currency',res.data.totalmoney);
          self.userInfo =  myFn.setUserInfo('total_foods',res.data.totalfood);
          self.userInfo =  myFn.setUserInfo('total_currency',res.data.totalmoney);
          alert( self.$t("staticMsg.msg006") );
      })
    },
    goto:function(index){
      var self = this
      if(index == self.current) return;
        self.current = index;

        // 分页ajax请求
        var data = {
          pagenumber: self.showItem,
          page: self.current,
        }
        myFn.myAjax('get', data, myFn.apiAddress.gameRecord.otherExchangeGameCurrenc, function(res){
            self.otherList = res.data.list;
            self.allpage = res.data.totalpage;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box1{
  border-radius: 3px;
  padding: 0 15px;
  margin-bottom: 40px;
}
.title{
  text-align: center;
  font-size: 1.1em;
  font-weight: 700;
  background: #fff;
  height: 48px;
  line-height: 48px;
  border-radius: 3px 3px 0px 0px;
}
.list-head{
  background: #F5F5F5;
  margin-top:15px;
  padding: 5px 0px;
}
.list-head p {
  margin:5px 0px;
}
.content{
  padding: 10px 15px;
  background: #fff;
  padding-top: 0;
  padding-bottom: 0;
}
.col-md-5{
  padding: 10px 0;
  background: #F5F5F5;
}

span{
  color: red;
}
input{
  width: 80px;
  height: 25px;
  background: #fff;
  border:none;
  border-radius: 1px;
  text-indent: 2px;
}
input:focus{
  border-color: #EC9530!important;
}

.border-b{
  border-bottom: 1px solid #e9e9e9;
}
.sure-btn{
  background: #fff;
  height: 80px;
  padding: 0 15px;
}
button{
  width: 120px;
  height: 40px;
  background: #33AFB1;
  color: #fff;
  border:none;
  border-radius: 3px;
  margin-top: 20px;
}
.contentIn{
  padding: 10px 15px;
  background: #1F1C1B;
  padding-top: 0;
  padding-bottom: 0;
}

  
</style>
