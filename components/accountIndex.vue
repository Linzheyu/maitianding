
<template>
        <div class="col-md-10 col-sm-12 blog-main" style="margin-bottom:100px;">
          <div class="row accountInfo">
            <div class="col-md-5 right-border">
              <div class="row">
                <div class="col-md-3 col-sm-3">
                  <li class="headImg">
                    <img src="../assets/images/back-img.png">
                  </li>
                </div>
                <div class="col-md-9 col-sm-9">
                  <li class="userInfo">
                    <p>{{ greetings }}，{{userInfo.username}}</p>
                    <p>{{$t("AccountManagement.loginTime")}}：{{userInfo.login_time}}</p>
                    <p>{{$t("AccountManagement.login")}}：{{userInfo.ip_addr}}</p>
                    <p>{{$t("AccountManagement.loginAddress")}}：{{userInfo.login_addr}} 
                    <span @click="goLog" class="color-red" style="margin-left: 10px;">{{$t("AccountManagement.loadMore")}}</span></p>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 right-border left-border">
              <p>{{$t("AccountManagement.grainBalance")}}</p>
              <p class="margin-tb color-red">{{userInfo.total_foods}}</p>
              <router-link to="/game/shop"><button>{{$t("AccountManagement.exchange")}}</button></router-link>
            </div>
            <div class="col-md-3 col-sm-4 right-border left-border">
              <p>{{$t("AccountManagement.goldBalance")}}</p>
              <p class="margin-tb color-red">{{userInfo.total_currency}}</p>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#recharge" data-whatever="@mdo">{{$t("AccountManagement.recharge")}}</button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#extractCurrency" data-whatever="@mdo">{{$t("AccountManagement.currency")}}</button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#transferAccounts" data-whatever="@mdo">{{$t("AccountManagement.transferAccounts")}}</button>
            </div>
            <div class="col-md-2 col-sm-4 left-border">                      
              <p>{{$t("AccountManagement.constellationCard")}}</p>
              <p class="margin-tb color-red">3</p>
              <button>{{$t("AccountManagement.check")}}</button>
            </div>
          </div>

          <div class="row address">
            <p>{{$t("AccountManagement.accountAddress")}} <span class="remarks">({{$t("AccountManagement.accountAddressUse")}})</span></p>
            <div class="col-md-10 col-sm-10">
              <input class="input-left" type="text" v-model="userInfo.transion_addr" id="copyUrlinput" readonly="" />
            </div>
            <div class="col-md-2 col-sm-2">
              <button class="input-right" type="text" @click="copyUrl">{{$t("AccountManagement.copy")}}</button>
            </div>
          </div>

          <div class="row record">
            <div class="back-color">
              <ul class="record-list">
                <li><span @click="activeTab(1)" :class="tabs.select==1?'on-active':''">{{$t("AccountManagement.foodBenefitRecord")}}</span></li>
                <li><span @click="activeTab(2)" :class="tabs.select==2?'on-active':''">{{$t("AccountManagement.exchangeRecords")}}</span></li>
                <li><span @click="activeTab(3)" :class="tabs.select==3?'on-active':''">{{$t("AccountManagement.rechargeRecord")}}</span></li>
                <li><span @click="activeTab(4)" :class="tabs.select==4?'on-active':''">{{$t("AccountManagement.tellerNote")}}</span></li>
                <li><span @click="activeTab(5)" :class="tabs.select==5?'on-active':''">{{$t("AccountManagement.transferRecords")}}</span></li>
                <li><span @click="activeTab(6)" :class="tabs.select==6?'on-active':''">{{$t("AccountManagement.ProfitGoldRecord")}}</span></li>
              </ul> 
            </div>
            <div class="content" v-if="tabs.select==1">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-4 col-sm-4"><p>{{ $t("AccountManagement.foodTranslateTime")}}</p></div>
                  <div class="col-md-4 col-sm-4"><p>{{ $t("AccountManagement.foodTranslateType")}}</p></div>
                  <div class="col-md-4 col-sm-4"><p>{{ $t("AccountManagement.foodTranslateNum")}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[0].list">
                  <div class="col-md-4 col-sm-4"><p v-html="item.time">2017-4-7 15:59</p></div>
                  <div class="col-md-4 col-sm-4"><p v-html="item.type">10</p></div>
                  <div class="col-md-4 col-sm-4"><p v-html="item.qnt">10</p></div>
                </div>
              </div>
            </div>
            <div class="content" v-if="tabs.select==2">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeTime" )}}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeGrainQuantity" )}}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeProportion" ) }}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeRate" ) }}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.convertTheGoldCoins" )}}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeGetGold" )}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[1].list">
                  <div class="col-md-2 col-sm-2"><p v-html="item.time">2017-4-7 15:59</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.sale_count">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.sale_ratio">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.ex_ratio">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.rev_sale_count">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.money">10</p></div>
                </div>
              </div>
            </div>
            <div class="content" v-if="tabs.select==3">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-4 col-sm-4"><p>{{$t("AccountManagement.rechargeTime")}}</p></div>
                  <div class="col-md-4 col-sm-4"><p>{{$t("AccountManagement.rechargeNum")}}</p></div>
                  <div class="col-md-4 col-sm-4"><p>{{$t("AccountManagement.rechargeSource")}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[2].list">
                  <div class="col-md-4 col-sm-4"><p v-html="item.crt_time">2017-4-7 15:59</p></div>
                  <div class="col-md-4 col-sm-4"><p v-html="item.money">20</p></div>
                  <div class="col-md-4 col-sm-4"><p v-html="item.re_type" v-if="item.re_type == 1">{{ $t("platform.type1") }}</p></div>
                </div>
              </div>
            </div>
            <div class="content" v-if="tabs.select==4">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-4 col-sm-4"><p>{{$t("AccountManagement.currencyTime")}}</p></div>
                  <div class="col-md-4 col-sm-4"><p>{{$t("AccountManagement.currencyNum")}}</p></div>
                  <div class="col-md-4 col-sm-4"><p>{{$t("AccountManagement.currencyWhere")}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[3].list">
                  <div class="col-md-4 col-sm-4"><p v-html="item.crt_time">2017-4-7 15:59</p></div>
                  <div class="col-md-4 col-sm-4"><p v-html="item.rev_money">20</p></div>
                  <div class="col-md-4 col-sm-4"><p v-html="item.re_type" v-if="re_type == 2">{{ $t("platform.type2") }}</p></div>
                </div>
              </div>
            </div>

            <div class="content" v-if="tabs.select==5">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-3 col-sm-3"><p>{{$t("AccountManagement.transferTime")}}</p></div>
                  <div class="col-md-2 col-sm-3"><p>{{$t("AccountManagement.transferNum")}}</p></div>
                  <div class="col-md-3 col-sm-3"><p>{{$t("AccountManagement.transferWhere")}}</p></div>
                  <div class="col-md-3 col-sm-3"><p>{{$t("AccountManagement.transferReasonTable")}}</p></div>
                </div>
              </div>
              <div class="row" v-for="item in tabs.tabsObj[4].list">
                <div class="row border-t border-b">
                  <div class="col-md-3 col-sm-3"><p v-html="item.time"></p></div>
                  <div class="col-md-2 col-sm-3"><p v-html="item.money">20</p></div>
                  <div class="col-md-3 col-sm-3"><p v-html="item.money_adress">dsnainiodsa@wewqdd.com</p></div>
                  <div class="col-md-3 col-sm-3"><p v-html="item.remark">原因</p></div>
                </div>
              </div>
            </div>

            <div class="content" v-if="tabs.select==6">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-3 col-sm-2"><p>{{ $t("AccountManagement.ProfitGoldTime")}}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.ProfitGoldType")}}</p></div>
                  <div class="col-md-3 col-sm-3 "><p>{{ $t("AccountManagement.ProfitGoldSource")}}</p></div>
                  <div class="col-md-4 col-sm-3"><p>{{ $t("AccountManagement.ProfitGoldRemarks")}}</p></div>
<!--                   <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.Profitmotion")}}</p></div> -->
                </div>
              </div>
              <div class="row" v-for="item in tabs.tabsObj[5].list">
                <div class="row border-t border-b">
                  <div class="col-md-3 col-sm-2"><p v-html="item.crt_time"></p></div>
                  <div class="col-md-2 col-sm-2"><p v-if="item.get_type == 1">{{ $t("AccountManagement.GoldProfitLogType") }}</p></div>
                  <div class="col-md-3 col-sm-3 "><p v-html="item.email"></p></div>
                  <div class="col-md-4 col-sm-3 "><p v-html="item.remark"></p></div>
                </div>
              </div>
            </div>

            <p style="text-align: center;padding:20px 0px;margin-right: 30px;" v-show="allpage<1">无更多数据</p>

            <!-- 分页 -->
            <div class="content" v-show="allpage.length>1">
              <div class="row sure-btn">
                <div class="border-t">
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
    <!--======================== 充值弹出框 ========================-->
    <div class="modal fade" id="recharge" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">{{$t("AccountManagement.goldrecharge")}}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.pleaseEnterTheAmountOfMoney")}}</label>
                      <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.rechargeWay")}}</label>
                      <li class="receiveForum">{{$t("AccountManagement.EexchangePlatform")}}</li>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div class="btn-box">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>      <!--         {{$t("")}}           -->
                  <button type="button" class="btn btn-primary">{{$t("publicText.ok")}}</button>
              </div>
                
              </div>
          </div>
        </div>
    </div>
    <!--======================== 提币弹出框 ========================-->
    <div class="modal fade" id="extractCurrency" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">{{$t("AccountManagement.goldCurrency")}}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.pleaseEnterTheAmountOfgold")}}</label>
                      <input type="text" class="form-control" id="recipient-name">
                      <div class="row fee">
                        <div class="col-md-6 col-sm-6"><p>{{$t("AccountManagement.fee")}}<i>{{$t("AccountManagement.amount")}}</i></p></div>
                        <div class="col-md-6 col-sm-6"><p>{{$t("AccountManagement.Thenumberofaccounts")}}:<i>{{$t("AccountManagement.actualamount")}}</i></p></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.getAccount")}}</label>
                      <li class="receiveForum">{{$t("AccountManagement.EexchangePlatform")}}</li>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div class="btn-box">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>
                  <button type="button" class="btn btn-primary">{{$t("publicText.ok")}}</button>
              </div>
                
              </div>
          </div>
        </div>
    </div>

    <!--======================== 转账弹出框 ========================-->
    <div class="modal fade" id="transferAccounts" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">{{$t("AccountManagement.goldtransferAccounts")}}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.beneficiary")}}</label>
                      <input v-model="giveGold.address" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.enterTransferAmountOfgold")}}</label>
                      <input v-model="giveGold.num" type="text" class="form-control">
                    </div>
                     <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.transferReason")}}</label>
                      <input v-model="giveGold.remark" type="text" class="form-control">
                    </div>
                    <div class="input-group">
                      <label for="recipient-name" class="control-label">{{ $t('publicText.importmailEamil') }}:</label>
                      <input type="text" class="form-control" v-model="code.emailCode" style="border-radius: 4px 0px 0px 4px;">
                      <span class="input-group-btn" style="vertical-align: bottom;">
                        <button style="color: #EC9530;border-color: #EC9530;background: rgba(0,0,0,.5);"  class="btn btn-default"  type="button" @click="getCode">{{ $t("login.verificationCode")}}</button>
                      </span>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div class="btn-box">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>
                  <button @click="transferAccounts"  type="button" class="btn btn-primary">{{$t("publicText.ok")}}</button>
              </div>
            </div>
          </div>
        </div>
         <!-- 验证码 
        <div class="Verification">
            <h4 class="modal-title">{{ $t("login.verificationCode")}}</h4>
            <div class="code-box" @click="updateCode"><img :src="code.imgCode"></div>
            <div class="code-input-box">
                <input type="text" placeholder="" v-model="code.code">
            </div>
            <div class="btn-box">
              <button class="cancel-btn" @click="closeCode">{{ $t("publicText.off") }}</button>
              <button class="sure-btn" @click="submitCode">{{ $t("publicText.ok") }}</button>
            </div>
        </div>-->
    </div>
    
   
  
  </div>
</template>

<script>

export default {
  name: 'accountSide',
  data () {
    return {
      // 验证码
      email:'',
      code:{
        imgCode:myFn.apiAddress.code.getStaticCode + '?' + Math.random(),
        code:'',
        emailCode:''
      },
      giveGold:{
        num:'',
        address:'',
        remark:''
      },
      tabs:{
        select: 1,
        tabsObj:[
          {
            name: 'tab1',
            list:[],
            // 分页
            current:1,
            showItem:10,
            allpage:0,
          },
          {
            name: 'tab2',
            list:[],
            // 分页
            current:1,
            showItem:10,
            allpage:0,
          },
          {
            name: 'tab3',
            list:[],
            // 分页
            current:1,
            showItem:10,
            allpage:0,
          },
          {
            name: 'tab4',
            list:[],
            // 分页
            current:1,
            showItem:10,
            allpage:0,
          },
          {
            name: 'tab5',
            list:[],
            // 分页
            current:1,
            showItem:10,
            allpage:0,
          },
          {
            name: 'tab6',
            list:[],
            // 分页
            current:1,
            showItem:10,
            allpage:0,
          },
        ]
      },
      current:1,
      showItem:10,
      allpage:0, 
      userInfo:{},
      // 问候语
      greetings:'',  
    }
  },
  created(){
    var self = this;
    this.userInfo = JSON.parse(localStorage.userinfo);
  },
  mounted(){
      // 问候语
      var time = new Date().getHours();
      if(time <= 12){
        this.greetings = this.$t("greetings.time1");
      }else if(time <= 18 ){
        this.greetings = this.$t("greetings.time2");
      }else{
        this.greetings = this.$t("greetings.time3");
      }
      var self = this;

      myFn.myAjax('get',{}, myFn.apiAddress.memberInfo.getInfo, function(msg){
        localStorage.userinfo = JSON.stringify(msg.data);
        self.activeTab(1);
      });

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
    getCode: function(){
      // var self = this
      // if(this.code.emailCode == ''){
      //   alert('邮箱验证码不能为空');
      //   return false;
      // }
      // $('.Verification').fadeIn();
      myFn.myAjax('get',{email:this.userInfo.email}, myFn.apiAddress.code.getNoStatusCode, function(res){
        alert( self.$t("staticMsg.msg001"));
      })
    },
    // 关闭静态验证码弹窗
    closeCode: function(){
      $('.Verification').fadeOut(350);
    },

    // 提交静态码获取邮箱验证码
    submitCode: function(){

      var self = this;
      myFn.myAjax('get',{code:self.code.code,email:self.code.email}, myFn.apiAddress.code.getMailCode, function(res){
        $('.Verification').fadeOut(350);
      })

    },

    transferAccounts: function(){
      var self = this;
      var data = {
        address : this.giveGold.address,
        num : this.giveGold.num,
        remark: this.giveGold.remark
      }
      myFn.myAjax('get', data, myFn.apiAddress.game.transferGold, function(res){
          alert( self.$t("staticMsg.msg002") );
          $('#transferAccounts').modal('toggle');
          self.userInfo.total_currency = res.data.totalmoney;
          localStorage.userinfo = JSON.stringify(self.userInfo);
      })
    },
    copyUrl: function(){

      var Url2=document.getElementById("copyUrlinput");
      Url2.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      alert(this.$t("staticMsg.msg003"));
    },
    goLog: function(){
      this.$router.push({path:'log'});
    },
    // 选择选项卡
    activeTab: function(index){
      // if(index == 6){
      //   this.tabs.select = index;
      //   return false;
      // }
      var self = this;
      // if(self.tabs.tabsObj[index-1].list.length == 0){
        var url = '';
        if(index == 1){
          url = myFn.apiAddress.gameRecord.myfoodincome;
        }else if(index == 2){
          url = myFn.apiAddress.gameRecord.myExchangeGameCurrenc;
        }else if(index == 3){
          url = myFn.apiAddress.gameRecord.myRechargeGold;
        }else if(index == 4){
          url = myFn.apiAddress.gameRecord.myExtractGold;
        }else if(index == 5){
          url = myFn.apiAddress.gameRecord.myTransferGold;
        }else if(index == 6){
          url = myFn.apiAddress.gameRecord.myGoldincome;
        }
        myFn.myAjax('get', {page:self.current,pagenumber: self.showItem}, url, function(res){

            self.tabs.select = index;

            self.tabs.tabsObj[index-1].list = res.data.list;
            self.tabs.tabsObj[index-1].current = res.data.page;
            self.tabs.tabsObj[index-1].allpage = res.data.totalpage;
            self.allpage = res.data.totalpage;
            self.current = self.tabs.tabsObj[index-1].current;
            self.showItem = self.tabs.tabsObj[index-1].showItem;
            self.allpage = self.tabs.tabsObj[index-1].allpage;
        })
      // }
    },
    goto:function(index){
      var self = this
      if(index == self.current) return;
      self.current = index;
      self.tabs.tabsObj[self.tabs.select - 1].current = index;
      //这里可以发送ajax请求
      var url = ''
      if(self.tabs.select == 1){
          url = myFn.apiAddress.gameRecord.myfoodincome;
      }else if(self.tabs.select == 2){
        url = myFn.apiAddress.gameRecord.myExchangeGameCurrenc;
      }else if(self.tabs.select == 3){
        url = myFn.apiAddress.gameRecord.myRechargeGold;
      }else if(self.tabs.select == 4){
        url = myFn.apiAddress.gameRecord.myExtractGold;
      }else if(self.tabs.select == 5){
        url = myFn.apiAddress.gameRecord.myTransferGold;
      }else if(index == 6){
        url = myFn.apiAddress.gameRecord.myGoldincome;
      }

      var data = {
        pagenumber: self.showItem,
        page: self.current,
      }

      myFn.myAjax('get', data, url, function(res){
          self.tabs.tabsObj[self.tabs.select-1].list = res.data.list;
          self.tabs.tabsObj[self.tabs.select-1].current = res.data.page;
          self.tabs.tabsObj[self.tabs.select-1].allpage = res.data.totalpage;
          self.allpage = res.data.totalpage;
          self.current = self.tabs.tabsObj[self.tabs.select-1].current;
          self.showItem = self.tabs.tabsObj[self.tabs.select-1].showItem;
          self.allpage = self.tabs.tabsObj[self.tabs.select-1].allpage;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .color-red{
      color: #e01b1b;      
    }

  /*=======================  main Start Part-1  ======================== */
    .blog-main{
      padding-left: 30;
      padding-right: 0;
    }
    .accountInfo{
      width: 100%;
      border: 1px solid #272523;
      border-radius: 3px;
      background: #1F1C1B;
      padding: 20px 0;
    }
    .accountInfo > div{
      padding: 20px 0;
    }
    .accountInfo button{
      width: 55px;
      background: none;
      border: 1px solid #EC9530;
      border-radius: 3px;
    }
    .headImg{
      text-align: left;
    }
    .headImg img{
      width: 100px;
      height: 100px;
      margin-left: 10px;
      border-radius: 50%;
    }
    .userInfo p{
      padding-left: 30px;
      margin-top: 5px;
      text-align: left;
    }
    .margin-tb{
      margin: 15px 0;
    }
    /*========================  main Start Part-2 ========================*/
    .address{
      width: 100%;
      border: 1px solid #272523;
      border-radius: 3px;
      background: #1F1C1B;
      padding: 20px 15px;
      text-align: left;
      margin-top: 25px;
    }
    .remarks{
      color: #837D7A;
    }
    .address > div {
      padding-left: 0;
    }
    .input-left,.input-right{
      width: 100%;
      margin-top: 20px;
      text-align: center;
      background: transparent;
      border:1px #EC9530 solid;
      height: 30px;
      border-radius: 3px;
    }
    .input-left{
      border:1px #837D7A solid
    }
    /*========================  main Start Part-3 ========================*/
    .record{
      width: 100%;
      border: 1px solid #272523;
      border-radius: 3px;
      background: #1F1C1B;
      padding:0;
      text-align: left;
      margin-top: 25px;
    }
    .record-list{
      width: 100%;
      height: 42px;
      margin-bottom: 0;
      padding-left: 0;
    }
    .record-list li{
      width: 16%;
      height: 100%;
      float: left;
      text-align: center;
    }
    .record-list li span{
      height: 100%;
      line-height: 42px;
      display: inline-block;
      color: #837D7A;
    }
    .on-active{
      color: #EC9530!important;
      border-bottom: 1px solid #EC9530;
    }
    .back-color{
      background: #161413;
    }
    .content{
      padding-bottom: 20px;
      text-align: center;
      color: #837D7A;
    }
    .content > .row{
      width: 100%;
      margin-left: 0;
      padding: 0 30px; 
    }
    .content > .row > .row{
      padding: 15px 0; 
    }
    .exchange-term{
      color: #EC9530;
      font-size: 16px;
    }
    .pageList{
      margin: auto;
      display: inline-block;
      height: 20px;
      padding-left:0; 
    }
    .pageList li{
      float: left;
      margin: 0 10px;
    }
    .pageList li:first-child,.pageList li:last-child{
      color: #EC9530;
    }
    /* ======================== 弹出框基础样式 ======================== */
    .modal-dialog{
      color: #EC9530;
      margin-top: 5%;
      text-align: left;
    }
    .modal-dialog .modal-header{
      text-align: center;
      background: #161413;
      border-color: #090808;
    }
    .modal-dialog .modal-header .close{
      color: #EC9530;
    }
    .modal-dialog .modal-content{
      border: 1px solid #272523;
      background: #1F1C1B;
    }
    .modal-dialog .modal-body{
      padding-top: 0px;
      border-top: 1px solid #2B2725;
    }
    .modal-dialog .modal-body .form-group{
      margin-top: 15px;
      padding: 10px 0;
    }
    .modal-dialog .modal-body .form-group .control-label{
      margin-bottom: 10px;
    }
    .modal-dialog .modal-body input{
      color: #ccc;
      background: none;
      border: 1px solid #EC9530;
    }
    .modal-dialog .modal-footer{
      text-align: center;
      border: none;
      padding-top: 0;
      padding-bottom: 30px; 
    }
    .modal-dialog .modal-footer .btn-box{
      display: inline-block;
      margin: auto;
    }
    .modal-dialog .modal-footer .btn-box button{
      background: none;
      width: 80px;
      height: 34px;
      border-color: #EC9530;
      border-radius: 5px;
      color: #EC9530;
      text-align: center;
      margin: 0 20px;
    }
    .modal-dialog .modal-footer .btn-box button:hover{
      color: #ccc;
    }
    /*========================  充值/提币 弹出框  ========================*/
    .fee{
      padding-top: 30px;
      text-align: center;
    }
    .receiveForum{
      width: auto;
      height: 34px;
      color: #ccc;
      background: #131111;
      border-radius: 5px;
      text-align: left;
      line-height: 34px;
      text-indent: 15px;
    }
    /*========================  触发弹出框的点击按钮  ========================*/
    .btn-primary{
      color: #EC9530;
    }
    .btn-primary:hover{
      color: #ccc;
      background: none;
      border-color: #EC9530;
    }
    .btn-primary:focus{
      border-color: #EC9530;
      background: none;
    }

    /* 验证码模态框 */
    /*.Verification{
      width: 300px;
      height: 270px;
      margin:0px;
      padding-top: 7px;
      position: absolute;
      left: 0%;top: 0%;right: 0px;bottom: 0px;
      margin:auto;
      z-index: 9999;
      background: #1f1c1b;
      box-shadow: 3px 3px 10px #1a1515;
      display: none;
    }
    .Verification h4{
      color: #ec9532;
      margin-top: 10px;
    }
    .Verification input{
      border:none !important;
      background:#151312;
      color: #555;
    }
    .code-box{
      width: 80%;
      margin: auto;
      margin-top: 20px;
      height: 44px;
      border: 1px solid #ccc;
      background: #ccc;
    }
    .code-box img{
      width: 100%;
      height: 100%;
    }
    .code-input-box input{
      width: 80%;
      color: #fff;
      margin-left: 10%;
      margin-top: 15px;
      height: 44px;
      border: 1px solid #ccc;
      text-indent: 10px;
    }
    .cancel-btn:hover{
      color: #fff;
      background: #ccc;
    }
    .sure-btn{
      color: #151312;
      background: #363534;
    }
    .sure-btn:hover{
      color:#fff;
    }
    .btn-box button:hover{
       color:#fff; 
      background: transparent;
    }
    .btn-box button{
      width: 40%;
      height: 40px;
      border: none;
      border-radius: 2px;
      background: #363534;
      margin-top: 15px;
    }
    .cancel-btn{
      margin-left: 10%;
      background: none;
      color: #777;
    }
    .cancel-btn:hover{
      color: #fff;
      background: #ccc;
    }*/
</style>
