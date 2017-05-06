
<template>
        <div class="col-lg-10 col-md-10 col-sm-12 blog-main" style="margin-bottom:100px;">
            <div class="row accountInfo">
                <div class="col-md-5 right-border">
                    <div class="row">
                        <div class="col-lg-4 col-md-3 col-sm-3 headImg" >
                            <!-- <img src="../assets/images/back-img.png"> -->
                        </div>
                        <div class="col-lg-8 userInfo">

                            <p><span>{{ greetings }}，{{userInfo.username}}</span></p>

                            <p><span>ID：</span>{{userInfo.username}}</p>

                            <p><span>{{$t("AccountManagement.loginTime")}}：</span>{{userInfo.login_time}}</p>

                            <p><span>{{$t("AccountManagement.login")}}：</span>{{userInfo.ip_addr}}</p>

                            <p>
                                <span>{{$t("AccountManagement.loginAddress")}}：</span>
                                {{userInfo.login_addr}}
                                <a @click="goLog" class="color-red" style="margin-left: 10px;">{{$t("AccountManagement.loadMore")}}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 right-border left-border food-balance">
                    <p>{{$t("AccountManagement.grainBalance")}}</p>
                    <p class="margin-tb color-red food-number" >{{userInfo.total_foods}}</p>
                    <router-link to="/game/shop"><button>{{$t("AccountManagement.exchange")}}</button></router-link>
                </div>
                <div class="col-md-3 col-sm-4 right-border left-border gold-balance">
                    <p>{{$t("AccountManagement.goldBalance")}}</p>
                    <p class="margin-tb color-red gold-number">{{userInfo.total_currency}}</p>
                    <!-- <button type="button" class="btn" data-toggle="modal" data-target="#recharge" data-whatever="@mdo">{{$t("AccountManagement.recharge")}}</button> -->
                    <button data-toggle="modal" data-target="#extractCurrency" data-whatever="@mdo">{{$t("AccountManagement.currency")}}</button>
                    <button data-toggle="modal" data-target="#transferAccounts" data-whatever="@mdo">{{$t("AccountManagement.transferAccounts")}}</button>
                </div>
                <div class="col-md-2 col-sm-4 left-border card-balance" style="border:none;">                      
                    <p>{{$t("AccountManagement.constellationCard")}}</p>
                    <p class="margin-tb color-red card-number">3</p>
                    <button>{{$t("AccountManagement.check")}}</button>
                </div>
            </div>


          <div class="row address">
            <div class="col-lg-12">
                <p> <span class="remarks">{{$t("AccountManagement.accountAddress")}}</span>({{$t("AccountManagement.accountAddressUse")}})</p>
            </div>
            <div class="col-lg-11 col-md-11 col-sm-10">
              <input class="input-left" type="text" v-model="userInfo.transion_addr" id="copyUrlinput" readonly="" />
            </div>
            <div class="col-lg-1 col-md-2 col-sm-2">
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
                  <div class="col-md-3 col-sm-6"><p>{{ $t("AccountManagement.foodTranslateTime")}}</p></div>
                  <div class="col-md-2 col-sm-4"><p>{{ $t("AccountManagement.foodTranslateType")}}</p></div>
                  <div class="col-md-2 col-sm-4"><p>{{ $t("AccountManagement.foodTranslateNum")}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[0].list">
                  <div class="col-md-3 col-sm-4"><p v-html="item.time">2017-4-7 15:59</p></div>
                  <div class="col-md-2 col-sm-4"><p v-html="item.type">10</p></div>
                  <div class="col-md-2 col-sm-4"><p v-html="item.qnt">10</p></div>
                </div>
              </div>
            </div>
            <div class="content" v-if="tabs.select==2">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-3 col-sm-2"><p>{{ $t("AccountManagement.exchangeTime" )}}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeGrainQuantity" )}}</p></div>
                  <div class="col-md-1 col-sm-2"><p>{{ $t("AccountManagement.exchangeProportion" ) }}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeRate" ) }}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.convertTheGoldCoins" )}}</p></div>
                  <div class="col-md-2 col-sm-2"><p>{{ $t("AccountManagement.exchangeGetGold" )}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[1].list">
                  <div class="col-md-3 col-sm-2"><p v-html="item.time">2017-4-7 15:59</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.sale_count">20</p></div>
                  <div class="col-md-1 col-sm-2"><p v-html="item.sale_ratio">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.ex_ratio">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.rev_sale_count">20</p></div>
                  <div class="col-md-2 col-sm-2"><p v-html="item.money">10</p></div>
                </div>
              </div>
            </div>
            <div class="content" v-if="tabs.select==3">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-3 col-sm-4"><p>{{$t("AccountManagement.rechargeTime")}}</p></div>
                  <div class="col-md-2 col-sm-4"><p>{{$t("AccountManagement.rechargeNum")}}</p></div>
                  <div class="col-md-2 col-sm-4"><p>{{$t("AccountManagement.rechargeSource")}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[2].list">
                  <div class="col-md-3 col-sm-4"><p v-html="item.crt_time">2017-4-7 15:59</p></div>
                  <div class="col-md-2 col-sm-4"><p v-html="item.money">20</p></div>
                  <div class="col-md-2 col-sm-4"><p v-html="item.re_type" v-if="item.re_type == 1">{{ $t("platform.type1") }}</p></div>
                </div>
              </div>
            </div>
            <div class="content" v-if="tabs.select==4">
              <div class="row">
                <div class="row border-b exchange-term">
                  <div class="col-md-3 col-sm-4"><p>{{$t("AccountManagement.currencyTime")}}</p></div>
                  <div class="col-md-2 col-sm-4"><p>{{$t("AccountManagement.currencyNum")}}</p></div>
                  <div class="col-md-2 col-sm-4"><p>{{$t("AccountManagement.currencyWhere")}}</p></div>
                </div>
              </div>
              <div class="row">
                <div class="row border-t border-b" v-for="item in tabs.tabsObj[3].list">
                  <div class="col-md-3 col-sm-4"><p v-html="item.crt_time">2017-4-7 15:59</p></div>
                  <div class="col-md-2 col-sm-4"><p v-html="item.rev_money">20</p></div>
                  <div class="col-md-2 col-sm-4"><p v-html="item.re_type" v-if="re_type == 2">{{ $t("platform.type2") }}</p></div>
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
                  <div class="col-md-3 col-sm-2"><p v-html="item.time"></p></div>
                  <!-- <div class="col-md-2 col-sm-2"><p v-if="item.get_type == 1">{{ $t("AccountManagement.GoldProfitLogType") }}</p></div> -->
                  <div class="col-md-2 col-sm-2"><p v-html="item.get_type">{{ $t("AccountManagement.GoldProfitLogType") }}</p></div>
                  <div class="col-md-3 col-sm-3 "><p v-html="item.email"></p></div>
                  <div class="col-md-4 col-sm-3 "><p v-html="item.remark"></p></div>
                </div>
              </div>
            </div>

            <p style="text-align: center;padding:20px 0px;margin-right: 30px;" v-show="allpage<1">{{ $t("AccountManagement.pageNoData")}}</p>

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
                <h4 class="modal-title" id="exampleModalLabel">{{$t("AccountManagement.goldrecharge")}}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.pleaseEnterTheAmountOfMoney")}}</label>
                      <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.rechargeWay")}}:</label>
                      <button class="receiveForum">{{$t("AccountManagement.EexchangePlatform")}}</button>
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
                <h4 class="modal-title" id="exampleModalLabel">{{$t("AccountManagement.goldCurrency")}}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.pleaseEnterTheAmountOfgold")}}</label>
                      <input @input="calculationCost" type="text" class="form-control" id="recipient-name" v-model="currency.num">
                      <div class="row fee">
                        <div class="col-md-12 col-sm-6"><p>{{ $t("AccountManagement.fee")}}(<span v-html="currency.feeProportion"></span>%:)<i v-html="currency.feeGoldNum">5</i>{{$t("classifier.number")}}</p></div>
                        <div class="col-md-12 col-sm-6"><p>{{$t("AccountManagement.Thenumberofaccounts")}}:<i v-html="currency.actualQuantity">10</i>{{$t("classifier.number")}}</p></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.getAccount")}}</label>
                      <p>{{ $t("platform.type2") }}(<span v-html="userInfo.email"></span>)</p>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div class="btn-box">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>
                  <button type="button" @click="seedCurrency" class="btn btn-primary">{{$t("publicText.ok")}}</button>
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
                <h4 class="modal-title" id="exampleModalLabel">{{$t("AccountManagement.goldtransferAccounts")}}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.beneficiary")}}</label>
                      <input v-model="giveGold.address" type="text" class="form-control addressInput">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.enterTransferAmountOfgold")}}</label>
                      <input v-model="giveGold.num" type="text" class="form-control">
                    </div>
                     <div class="form-group">
                      <label for="recipient-name" class="control-label">{{$t("AccountManagement.transferReason")}}</label>
                      <textarea v-model="giveGold.remark"  name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <!-- <div class="input-group">
                      <label for="recipient-name" class="control-label">{{ $t('publicText.importmailEamil') }}:</label>
                      <input type="text" class="form-control" v-model="code.emailCode" style="border-radius: 4px 0px 0px 4px;">
                      <span class="input-group-btn" style="vertical-align: bottom;">
                        <button style="color: #EC9530;border-color: #EC9530;background: rgba(0,0,0,.5);"  class="btn btn-default"  type="button" @click="getCode">{{ $t("login.verificationCode")}}</button>
                      </span>
                    </div> -->
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
          <!-- 验证码  -->
       <!--  <div class="Verification">
            <h4 class="modal-title">{{ $t("login.verificationCode")}}</h4>
            <div class="code-box" @click="updateCode"><img :src="code.imgCode"></div>
            <div class="code-input-box">
                <input type="text" placeholder="" v-model="code.code">
            </div>
            <div class="btn-box">
              <button class="cancel-btn" @click="closeCode">{{ $t("publicText.off") }}</button>
              <button class="sure-btn" @click="submitCode">{{ $t("publicText.ok") }}</button>
            </div>
        </div> -->
    </div>

    <!--======================== 安全支付密码 ========================-->
    <div class="modal fade" id="payPwdPopup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">{{ $t("AccountManagement.payPwdPopupTitle") }}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="recipient-name" class="control-label">{{ $t("AccountManagement.payPwdPopupInputTitle") }}</label>
                      <input v-model="giveGold.pay" type="password" class="form-control payInput">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div class="btn-box">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>
                  <button @click="verifySafetyPassword"  type="button" class="btn btn-primary">{{$t("publicText.ok")}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <!--======================== 邮箱验证码 ========================-->
    <div class="modal fade" id="emailCodePopup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">{{ $t("AccountManagement.emailCodeTitle") }}</h4>
            </div>
            <div class="modal-body">
                <form>
                    <p>{{ $t("staticMsg.msg001") }}</p>
                    <p>{{ $t("staticMsg.emailCodeTitle1") }}</p>
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="code.emailCode">
                      <!-- <span class="input-group-btn" style="vertical-align: bottom;">
                        <button style="color: #EC9530;border-color: #EC9530;background: rgba(0,0,0,.5);"  class="btn btn-default"  type="button" @click="getCode">{{ $t("login.verificationCode")}}</button>
                      </span> -->
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div class="btn-box">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>
                  <button @click="verifySafetyMail"  type="button" class="btn btn-primary">{{$t("publicText.ok")}}</button>
              </div>
            </div>
          </div>
        </div>
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

      // 提币金额
      currency:{
        num:'',
        feeProportion:20,
        feeGoldNum:0,
        actualQuantity:0
      }
    }
  },
  created(){
    var self = this;
    this.userInfo = JSON.parse(localStorage.userinfo);
  },
  mounted(){
      
      // this.currency.feeProportion = localStorage.turnOut;

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
        self.userInfo = msg.data;
        self.activeTab(1);
      });

      // $("#emailCodePopup").modal('toggle');
  },
  computed:{
      pages:function(){
        var pag = [];
          if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                //总页数和要显示的条数那个大就显示多少条
                // var i = Math.min(this.showItem,this.allpage);
                var i = Math.max(this.showItem,this.allpage);
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
    // 计算提币需要手续费
    calculationCost: function(){
      this.currency.feeGoldNum = this.currency.num * this.currency.feeProportion / 100;
      this.currency.actualQuantity = this.currency.num - this.currency.feeGoldNum;
    },
    // 提币
    seedCurrency:function(){
      var self = this;
      myFn.myAjax('post',{money:this.currency.num,ptype:'1'}, myFn.apiAddress.gameRecord.currency, function(res){
          self.userInfo.total_currency = self.userInfo.total_currency - this.currency.num 
          myFn.setUserInfo("total_currency", self.userInfo.total_currency);
          alert( self.$t("statiAccountManagementcMsg.coinSuccess") );
          $("extractCurrency").modal('toggle');
      })
    },
    getCode: function(){
      // var self = this
      // if(this.code.emailCode == ''){
      //   alert('邮箱验证码不能为空');
      //   return false;
      // }
      // $('.Verification').fadeIn();
      myFn.myAjax('get',{email:this.userInfo.email}, myFn.apiAddress.code.getNoStatusCode, function(res){
        alert( self.$t("staticMsg.msg001") );
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

    // 转账
    transferAccounts: function(){
      if (this.giveGold.address == '') {
        alert( self.$t("staticMsg.msg021") );
        return false;
      }

      if (this.giveGold.num == '') {
        alert( self.$t("staticMsg.msg022") );
        return false;
      }

      if (this.giveGold.remark == '') {
        alert( self.$t("staticMsg.msg023") );
        return false;
      }
      var data = {
        address : this.giveGold.address,
      }
      myFn.myAjax('post', data, myFn.apiAddress.accountSafety.verifyAddress, function(res){
          $("#transferAccounts").modal('toggle');
          $("#payPwdPopup").modal('toggle');
      })
    },
    verifySafetyPassword: function(){
      if(this.giveGold.pay == ''){
        alert( self.$t("staticMsg.msg017") );
      }else{
        myFn.myAjax('post', {pwd:this.giveGold.pay}, myFn.apiAddress.accountSafety.verifySafetyPassword, function(res){
            $("#payPwdPopup").modal('toggle');
            $("#emailCodePopup").modal('toggle');
        })
      }
    },

    verifySafetyMail: function(){
      if(this.code.emailCode == ""){
        alert( self.$t("staticMsg.msg145") );
        return false;
      }
      var self = this;
      var data = {
        address : this.giveGold.address,
        num : this.giveGold.num,
        remark: this.giveGold.remark,
        code:this.code.emailCode
      }
      myFn.myAjax('post', data, myFn.apiAddress.game.transferGold, function(res){
          alert( self.$t("staticMsg.msg002") );
          $('#emailCodePopup').modal('toggle');
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
    .exchange-term{
      background: #F5F5F5;
    }

  /*=======================  main Start Part-1  ======================== */
    
    .accountInfo{
      width: 100%;
      border-radius: 3px;
      background: #fff;
      padding: 20px 0;
      padding-bottom: 30px;
      font-size: 0.9em;
    }
    .accountInfo > div{
        height: 130px;
        border-right: 1px #ccc solid;
    }
    .userInfo p{
        font-weight: 100;
        padding-left: 10px;
        text-align: left;
        margin-bottom: 7px;
    }
    .userInfo p span{
        font-weight: 700;
        color: #436D80;
        display: inline-block;
        min-width: 75px;
    }
    .headImg{
      border-radius: 3px;
      padding-right: 0px;
      padding-left: 0px;
      text-align: right;
    }
    
    .headImg img{
        width: 85%;
    }

    .food-balance,.gold-balance,.card-balance{
        color: #436D80;
        font-weight: 700; 
    }
    .food-number,.gold-number,.card-number{
        font-size:30px;
        color: #33AFB1;
        font-weight: 100;
    }
    .food-balance a button,.gold-balance button,.card-balance button{
        width: 70px;
        height: 30px;
        background: #ccc;
        border: none;
        border-radius: 2px;
        font-weight: 100; 
    }
    .gold-balance a{
        margin-left: 10px;
        vertical-align: sub;
        text-decoration: none;
        cursor: pointer;
    }
    
    .margin-tb{
      margin: 15px 0;
    }
    /*========================  main Start Part-2 ========================*/
    .address{
      width: 100%;
      border-top: 1px #ccc solid;
      background: #fff;
      padding: 20px 15px;
      text-align: left;
    }
    .remarks{
      color: #436D80;
      font-weight: 700;
    }
    .address > div {
      padding-left: 0;
    }
    .input-left,.input-right{
      width: 100%;
      border:1px #ccc solid;
      height: 40px;
      border-radius: 2px;
    }
    .input-left{
        height: 40px;
        padding-left: 20px;
        border:1px #837D7A solid;
        border:1px #ccc solid;
        background: #F5F5F5;
    }
    /*========================  main Start Part-3 ========================*/
    .record{
      width: 100%;
      margin-top: 15px;
      border-radius: 3px;
      background: #fff;
      padding:0;
      text-align: left;
    }
    .record-list{
      width: 100%;
      height: 42px;
      font-size: 15px;
      margin-bottom: 0;
      padding-left: 0;
      border-bottom: 1px #ccc solid;
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
      color: #436D80;
    }
    .on-active{
      font-weight: 700;
      border-bottom: 2px solid #30ADB3;
    }
    .back-color{
      background: #fff;
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
      margin: 15px 0;
      height: 40px;
      line-height: 40px;
      font-weight: 700;
      font-size: 15px;
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
      width: 350px;
      color: #436D80;
      margin-top: 8%;
      text-align: left;
    }
    .modal-header{
        width: 80%;
        margin:auto;
        margin-top: 10px;
        border-bottom: 1px #ccc solid;
    }
    .modal-header h4{
        color: #2BACB8 !important;
        font-weight: 700;
    }
    .modal-dialog .modal-header{
      text-align: center;
      background: #fff;
      margin-bottom: 10px;
    }
    .modal-dialog .modal-header .close{
      color: #EC9530;
    }
    .modal-dialog .modal-content{
      background: #fff;
    }
    .modal-dialog .modal-body{
      padding-top: 0px;
      width: 90%;
      margin:auto;
    }
    #emailCodePopup p{
      font-size: 13px;
      margin: 15px 0px;
    }
    #emailCodePopup input{
      width: 100%;
      border-radius: 0px;
    }
    .modal-dialog .modal-body .form-group .payInput{
      letter-spacing: 20px;
      height: 50px;
      font-size: 1.3em;
    }
    .modal-dialog .modal-body .form-group .addressInput{
      color: #436D80;
      font-size: 14px;
      height: 30px;
    }
    .modal-dialog .modal-body .form-group textarea{
      width: 100%;
      height: 100px;
      border:1px #ccc solid;
      padding:10px;
    }
    .modal-dialog .modal-body .form-group{
      margin-bottom: 0px;
      padding-top: 10px;
    }
    .modal-dialog .modal-body .form-group .control-label{
      margin-bottom: 10px;
      font-weight: 100;
      font-size: 0.9em;
    }
    .modal-dialog .modal-body input{
      height: 45px;
      font-size: 30px;
      color: #2BACB8;
      background: none;
      border: 1px solid #ccc;
      border-radius:0px;
      box-shadow: none;
      margin-bottom: 5px;
    }
    .modal-dialog .modal-footer{
      width: 95%;
      text-align: right;
      border: none;
      padding-top: 0;
      padding-bottom: 30px; 
    }
    .modal-dialog .modal-footer .btn-box{
      display: inline-block;
      margin: auto;
    }
    .modal-dialog .modal-footer .btn-box button{
      background: transparent;
      width: 80px;
      height: 34px;
      border:none;
      border-radius: 0px;
      color: #2BACB8;
      text-align: center;
    }
    .modal-dialog .modal-footer .btn-box button:last-child{
        color: #fff;
        background: #2BACB8;
    }
    .modal-dialog .modal-footer .btn-box button:hover{
      color: #ccc;
    }
    /*========================  充值/提币 弹出框  ========================*/
    .fee{
      padding-top: 15px;
      text-align: left;
      font-size: 0.9em;
    }
    .fee p {
        margin-bottom: 5px;
    }
    .fee i {
        color: #2BACB8;
        margin:0px 5px;
        font-size: 15px;
    }
    .receiveForum{
      width: 120px;
      height: 34px;
      font-size: 0.9em;
      display: block;
      background: transparent;
      text-align: center;
      color: #ccc;
      border:1px #ccc solid;
      border-radius: 2px;   
      line-height: 34px;
    }
    .modal-title{
        font-size: 15px;
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
