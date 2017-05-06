
<template>
  <div class="gameindex">
      <div class="gameBox" style="position: relative;">
          <div style="display: none;" id="standarBox">
            <input class="standarButton" maxlength="1" type="button" id="standard100" value="100" />
            <input class="standarButton"  maxlength="1" type="button" id="standard500" value="500" />
            <input class="standarButton" maxlength="1" type="button" id="standard1000" value="1000" />
            <input class="standarButton" type="button" id="standard2000" value="2000" />
            <input type="text" id="number" value="1" oninput="this.value=this.value.replace(/\D/g,'');if (this.value>100000000) {this.value=100000000}"  onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
          </div>
          <div style="display: none;" id="passwordTextBox">
            <input type="password"  maxlength="10" class="passwordText" id="passwordText1"/>
            <input type="text"  maxlength="6" class="passwordText" id="mailCode"/>
            <input type="button" class="passwordText" :value="$t('publicText.get')" id="getMailCode"/>
          </div>
          <div id="pageBox" class="pageBox">
              <span>1</span>
              <div v-for="index in pagesRecord">
                  <span>{{index}}</span>
              </div>
              <span v-show=" allpageRecord > 6 " id="recordAllpage"></span>
          </div>
          <input id="InvitationUrl" value="2a28a98ee1c2b74c4d3fd27f61b3e65107" readonly="" />
          <canvas id="canvas" width="1180" height="679"></canvas>
      </div>
  </div>
</template>

<script>
var FARMBG_PATH          = require('../assets/gameImg/farmbg.png')    // 游戏背景
var FARMBG_PATH2          = require('../assets/gameImg/farmbg2.png')  // 树



var INFOBOX_PATH         = require('../assets/gameImg/infobox.png') // 用户信息底图
var INFOGOLDICON         = require('../assets/gameImg/goldIcon.png') // 用户信息金币图标
var INFOFOODICON         = require('../assets/gameImg/foodIcon.png') // 用户信息食物图标

// 商店&任务&公告
var SHOPIMG_PATH         = require('../assets/gameImg/shop.png')    // 商店
var TASKIMG_PATH         = require('../assets/gameImg/task.png')   // 任务
var TASKIMG_TITLEBG_PATH = require('../assets/gameImg/taskTitleBg.png')
var NOTICEIMG_PATH       = require('../assets/gameImg/notice.png')  // 公告
// 土地
var LANDMG_PATH          = require('../assets/gameImg/land.png')         // 未种植土地

var LANDMG_PATH1          = require('../assets/gameImg/landstatus/1.png')  // 已经种植状态
var LANDMG_PATH2          = require('../assets/gameImg/landstatus/2.png') 
var LANDMG_PATH3          = require('../assets/gameImg/landstatus/3.png') 
var LANDMG_PATH4          = require('../assets/gameImg/landstatus/4.png') 
var LANDMG_PATH5          = require('../assets/gameImg/landstatus/5.png') 
var LANDMG_PATH6          = require('../assets/gameImg/landstatus/6.png') 
var LANDMG_PATH7          = require('../assets/gameImg/landstatus/7.png') 
var LANDMG_PATH8          = require('../assets/gameImg/landstatus/8.png') 
var LANDMG_PATH9          = require('../assets/gameImg/landstatus/9.png') 
var LANDMG_PATH10         = require('../assets/gameImg/landstatus/10.png') 
var LANDMG_PATH11         = require('../assets/gameImg/landstatus/11.png') 
var LANDMG_PATH12         = require('../assets/gameImg/landstatus/12.png') 
var LANDMG_PATH13         = require('../assets/gameImg/landstatus/13.png') 
var LANDMG_PATH14         = require('../assets/gameImg/landstatus/14.png') 
var LANDMG_PATH15         = require('../assets/gameImg/landstatus/15.png') 
var LANDMG_PATH16         = require('../assets/gameImg/landstatus/16.png') 
var LANDMG_PATH17         = require('../assets/gameImg/landstatus/17.png') 
var LANDMG_PATH18         = require('../assets/gameImg/landstatus/18.png') 
var LANDMG_PATH19         = require('../assets/gameImg/landstatus/19.png') 
var LANDMG_PATH20         = require('../assets/gameImg/landstatus/20.png') 
var LANDMG_PATH21         = require('../assets/gameImg/landstatus/21.png') 
var LANDMG_PATH22         = require('../assets/gameImg/landstatus/22.png') 
var LANDMG_PATH23         = require('../assets/gameImg/landstatus/23.png') 
var LANDMG_PATH24         = require('../assets/gameImg/landstatus/24.png') 
var LANDMG_PATH25         = require('../assets/gameImg/landstatus/25.png') 
var LANDMG_PATH26         = require('../assets/gameImg/landstatus/26.png') 
var LANDMG_PATH27         = require('../assets/gameImg/landstatus/27.png') 
var LANDMG_PATH28         = require('../assets/gameImg/landstatus/28.png') 
var LANDMG_PATH29         = require('../assets/gameImg/landstatus/29.png') 
var LANDMG_PATH30         = require('../assets/gameImg/landstatus/30.png') 
var LANDMG_PATH31         = require('../assets/gameImg/landstatus/31.png') 
var LANDMG_PATH32         = require('../assets/gameImg/landstatus/32.png') 
var LANDMG_PATH33         = require('../assets/gameImg/landstatus/33.png') 
var LANDMG_PATH34         = require('../assets/gameImg/landstatus/34.png') 
var LANDMG_PATH35         = require('../assets/gameImg/landstatus/35.png') 
var LANDMG_PATH36         = require('../assets/gameImg/landstatus/36.png') 
var LANDMG_PATH37         = require('../assets/gameImg/landstatus/37.png') 
var LANDMG_PATH38         = require('../assets/gameImg/landstatus/38.png') 
var LANDMG_PATH39         = require('../assets/gameImg/landstatus/39.png') 
var LANDMG_PATH40         = require('../assets/gameImg/landstatus/40.png')
var LOTUS_PATH      = require('../assets/gameImg/lotus.png')   // 莲花
var EXTENSIONL_PATH      = require('../assets/gameImg/extensionL.png')   // 上一块
var EXTENSIONR_PATH      = require('../assets/gameImg/extensionR.png')   // 下一块
var EXTENSION_PATH      = require('../assets/gameImg/extension.png')   // 扩建
// 游戏宝典
var CANONIMG_PATH        = require('../assets/gameImg/canon.png')    // 游戏宝典
// 底部游戏记录
var MYWAREHOUSE_PATH     = require('../assets/gameImg/myWarehouse.png') // 我的仓库
var INVITATION_PATH      = require('../assets/gameImg/Invitation.png')  // 邀请好友
var RECORD_PATH          = require('../assets/gameImg/record.png')     // 记录
// 弹框关闭按钮
var CLOSEPOPU_PATH       = require('../assets/gameImg/popupClose.png')   // 弹窗关闭
var POPUPSHOPBG_PATH     = require('../assets/gameImg/popushop.png')   // 商店弹框背景
// 游戏商店弹出面层
var POPUPPAYBG_PATH      =  require("../assets/gameImg/payPassBg.png") //支付密码弹出层
var POPUPPYESPAY_PATH    =  require("../assets/gameImg/payPassBg.png")     // 确认支付按钮
// 分割线
var DIVISION_PATH         = require('../assets/gameImg/cuttingLine.png') //分割线
// 商店
var POPUPBG_FOODICON_PATH =  require("../assets/gameImg/food.png")  // 食物图标
var ADD_PATH              =  require("../assets/gameImg/add.png")   // 添加
var REDUCE_PATH           =  require("../assets/gameImg/reduce.png") // 减去
var POPUPBG_PAYMENT_PATH  =  require("../assets/gameImg/payment.png")// 支付

// 我的仓库
var POPUP_WAREHOUSE_BG = require("../assets/gameImg/warehousebg.png");
var POPUPBG_GOLD_PATH       =  require("../assets/gameImg/gold.png")  // 金币图标
// 邀请好友
var POPUPBG_BG =  require("../assets/gameImg/inviteFriends.png")  // 邀请好友弹框背景
// 播种记录
var POPUPBUTTON_SOWING_BG = require('../assets/gameImg/sowingBg.png')
var POPUPBUTTON_SOWING_ACTIVE_PATH     = require('../assets/gameImg/accelerate_active.png')     // 播种记录
var POPUPBUTTON_SOWING_PATH            = require('../assets/gameImg/accelerate.png')    
var POPUPBUTTON_INVITE_ACTIVE_PATH     = require('../assets/gameImg/accelerate_active.png')     // 邀请记录
var POPUPBUTTON_INVITE_PATH            = require('../assets/gameImg/accelerate.png')
var POPUPBUTTON_ACCELERATE_ACTIVE_PATH = require('../assets/gameImg/accelerate_active.png') // 加速记录
var POPUPBUTTON_ACCELERATE_PATH        = require('../assets/gameImg/accelerate.png')

var POPUP_NOTICEBG = require('../assets/gameImg/noticenImg.png') // 公告背景
// 装饰
var DECORATE_BENCH = require('../assets/gameImg/bench.png'); // 板凳

export default {
  name: 'game',
  data () {
    return {
      // 会员信息
      userInfo:{},
      // 画布
      stage: null,
      // 土地投种列表
      lands: [{time:'还未播种'}],
      // 土地盒子
      landBox: null,
      
      // 当前选中土地下标
      selectLand: 0,
      // 邀请码
      inviteCode:'',
      
        // 游戏对象属性
        gameObj:{
            gameGold:'',
            gameFood:'',
            gameSeed:'',
            progress:{
                time:'',
                Progressbar:"",
            },
            land:{
                // 总页数
                page:1,
                // 每页显示条数
                pageNum:20,
                // 当前页数
                currentPage:1,

                statusImg:[
                    LANDMG_PATH1,
                    LANDMG_PATH2,
                    LANDMG_PATH3,
                    LANDMG_PATH4,
                    LANDMG_PATH5,
                    LANDMG_PATH6,
                    LANDMG_PATH7,
                    LANDMG_PATH8,
                    LANDMG_PATH9,
                    LANDMG_PATH10,
                    LANDMG_PATH11,
                    LANDMG_PATH12,
                    LANDMG_PATH13,
                    LANDMG_PATH14,
                    LANDMG_PATH15,
                    LANDMG_PATH16,
                    LANDMG_PATH17,
                    LANDMG_PATH18,
                    LANDMG_PATH19,
                    LANDMG_PATH20,
                    LANDMG_PATH21,
                    LANDMG_PATH22,
                    LANDMG_PATH23,
                    LANDMG_PATH24,
                    LANDMG_PATH25,
                    LANDMG_PATH26,
                    LANDMG_PATH27,
                    LANDMG_PATH28,
                    LANDMG_PATH29,
                    LANDMG_PATH30,
                    LANDMG_PATH31,
                    LANDMG_PATH32,
                    LANDMG_PATH33,
                    LANDMG_PATH34,
                    LANDMG_PATH35,
                    LANDMG_PATH36,
                    LANDMG_PATH37,
                    LANDMG_PATH38,
                    LANDMG_PATH39,
                    LANDMG_PATH40,
                ],
                // 等待生成为对象的土地数据列表
                list:[], 
                // 包含所有已经生成为对象的土地对象列表盒子
                exampleObj:null,
                // 每页中需要显示土地列表
                thisExampleList:null,
                // 鼠标移入时土地的详细信息框
                landStatusBox: null,
            },
        // 左右切换按钮
        toggleButton: null
        },

        // 记录
        record:[{
            current:1,
            showItem:4,
            allpage:0,
        },
        {
            current:1,
            showItem:4,
            allpage:0,
        },
        {
            current:1,
            showItem:4,
            allpage:0,
        }],
      // 当前查看记录
      activeRecord: 0,
      // 当前所在页
      currentRecord:1,
      // 总页数
      allpageRecord:0,
      pagesRecord: []
    }
  },
  created(){
    this.gameObj.gameGold = myFn.getUserInfo('total_currency');
    this.gameObj.goodFood = myFn.getUserInfo('total_foods');
    this.userInfo = JSON.parse(localStorage.userinfo);
  },
  mounted(){
     var self = this;
      myFn.myAjax('get', {}, myFn.apiAddress.game.proportion, function(res){
        localStorage.foodGame = res.data.data.food_to_game;
        localStorage.gameFood = res.data.data.game_to_food;
        localStorage.fee      = res.data.data.game_fee;
        localStorage.turnOut = res.data.data.game_out_charge
        self.init();
    });
  },
  watch:{
    lands(){
        
    }
  },
  methods:{
    // 页面加载完成后初始化舞台设置并开始游戏
    init: function(){
      this.stage = new createjs.Stage(document.getElementById('canvas'));
      // 开启鼠标移入事件
      this.stage.enableMouseOver();
      createjs.Ticker.addEventListener("tick", this.handleTick);
      // 设置FPS
      createjs.Ticker.setFPS(60);
      // 游戏开始
      this.start();
    },
    handleTick:function(e) {
        this.stage.update();
    },
    // 开始游戏初始化元素&逻辑
    start: function () {
        var self = this;
        // 创建舞台背景
        var stageBg = new createjs.Bitmap(FARMBG_PATH);
        // 树
        var stageBg2 = new createjs.Bitmap(FARMBG_PATH2);
        stageBg2.y = 38;
        var lotus = new createjs.Bitmap(LOTUS_PATH);
        lotus.x = 600;
        lotus.y = 525;
        this.stage.addChild(stageBg,stageBg2,lotus);
        // 显示用户信息
        this.showUserInfo();
        // 显示右上角功能区
        this.shop_Task_NoticenImg();
        // 默认土地列表
        this.defaultLand();
        // 获取已种植土地列表
        myFn.myAjax('get', {}, myFn.apiAddress.game.getLandList, function(res){
            if(res.data.list.length != 0){
              self.gameObj.land.list = res.data.list;
            }
            self.showLand(1);
            // 左右切换土地按钮
            self.gameObj.toggleButton = self.showToggleLand();
        })

        // 显示我的仓库&邀请好友&游戏记录

        self.showMyInformation();
        // 显示游戏宝典
        this.showCourse();
    },
    // 创建用户信息
    showUserInfo: function() {
        var userInfoBg = creatImgObj(INFOBOX_PATH, 10, 0);
        var userHeadImg = creatImgObj(require("../assets/gameImg/headImg.png"), 20, 42);
        var userName = creatTextObj(this.userInfo.username, "13px Arial", "#fff", 75, 40);
        var infoGoldIcon = creatImgObj(INFOGOLDICON, 75, 60);
        // 用户拥有金币数量
        var infoGoldNum = creatTextObj(this.gameObj.gameGold, "15px Arial", "#e8b71b", 95, 61);
        
        this.gameObj.gameGold = infoGoldNum;
        var infoFoodIcon = creatImgObj(INFOFOODICON, 75, 80);
        // 用户拥有粮食数量
        var infoFoodNum = creatTextObj(this.gameObj.goodFood, "15px Arial", "#e8b71b", 95, 80)
        var userInfoBox = creatViewObj([userInfoBg, userHeadImg, userName, infoGoldIcon, infoGoldNum, infoFoodIcon, infoFoodNum], 10, -5);
        this.stage.addChild(userInfoBox);
    },
    // 商店&任务&公告
    shop_Task_NoticenImg: function () {
        var shopPopup = '';
        var self = this;
        // 创建商店图标,点击弹出商店
        var shopImg = creatImgObj(SHOPIMG_PATH, 0, 0);
        shopImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        shopImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });
        shopImg.addEventListener("click", function() {
          self.gameShopPopup();
        });
        // 创建任务图标,点击弹出任务
        var taskImg = creatImgObj(TASKIMG_PATH, 67, 0);
        taskImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        taskImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });
        taskImg.addEventListener("click", function() {
          self.gameShowTaskPopup();
        });
        // 创建公告图标,点击弹出公告
        var noticenImg = creatImgObj(NOTICEIMG_PATH, 135, 0);
        noticenImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        noticenImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });
        noticenImg.addEventListener("click", function() {
            self.gameNoticenPopup();
        });
        // 添加商店、任务、公告三个对象到容器中并设置位子
        var upRiFnView = creatViewObj([shopImg, taskImg, noticenImg], 935, 30);
        this.stage.addChild(upRiFnView);
    },
    gameShopPopup: function(){
        var self = this;
        /**
         * 获取当前播种额度
         * 计算当前播种额度并设置选项卡
         */
        var total_investment = self.userInfo.total_investment;

        $('.standarButton').removeClass('active');
        if(total_investment > 300){
          $(".standarButton").eq(0).attr('disabled', 'true');
          $(".standarButton").eq(0).addClass('notClick');
        }
        if(total_investment > 500 ){
          $(".standarButton").eq(1).attr('disabled', 'true');
          $(".standarButton").eq(1).addClass('notClick');
        }
        if(total_investment > 1000){
          $(".standarButton").eq(2).attr('disabled', 'true');
          $(".standarButton").eq(2).addClass('notClick');
        }

        if(total_investment < 300){
          $(".standarButton").eq(0).addClass('active');
        }else if(total_investment >= 300  && total_investment < 600){
          $(".standarButton").eq(1).addClass('active');
        }else if(total_investment >= 600 && total_investment < 1100){
          $(".standarButton").eq(2).addClass('active');
        }else if(total_investment >= 1100){
          $(".standarButton").eq(3).addClass('active');
        }



        var shopPopup = new popup(self.stage);
        // 创建商店弹框背景
        var popupBg = creatImgObj(POPUPSHOPBG_PATH, 0, 0);
        popupBg.addEventListener("mouseover", function(){});
        popupBg.addEventListener("mouseout", function(){});
        
        // 创建商店左侧内容并加入盒子中
        // var shopTitle = creatTextObj("商店", "20px Arial", "#ec9530", 270, 15);
        var BottomFrame = new createjs.Shape(new createjs.Graphics().beginFill("#fff").drawRoundRect(20, 20,150, 150, 20));
        var textBox = new createjs.Shape(new createjs.Graphics().beginFill("#cf9a54").drawRoundRect(20, 190,150, 45, 23));
        var shopleftBox = creatViewObj([
            BottomFrame,
            creatImgObj(POPUPBG_FOODICON_PATH, 40, 40),
            textBox,
            creatTextObj( self.$t( "gameIndex.seed" ) , "17px Arial", "#904900", 80, 205)
        ], 40, 60);

        /**
         * 创建商店右侧部分共四部分
         * 1.售价和比例
         * 2.规格选择按钮
         * 3.倍数调整按钮
         * 4.应付价格
         */
        
        // 1.第一部分售、比例、分割线创建后添加到盒子中
        var unitPrice = creatTextObj( self.$t("gameIndex.price") + "：1" + self.$t("gameIndex.gold"), "17px Arial", "#ca1616", 0, 0);
        var proportionArray = localStorage.gameFood.split(':');
        var proportion = creatTextObj("(" + proportionArray[0] +  self.$t("gameIndex.gold") + " : " + proportionArray[1] + self.$t("gameIndex.foodstuff") + ")", "16px Arial", "red", 110, 0);
        var shopDivision = creatImgObj(DIVISION_PATH, 0, 30);
        shopDivision.scaleX = 0.9
        var priceBox = creatViewObj([unitPrice, proportion, shopDivision], 250, 80);


        // 2.第二部分创建规格选项卡调整位子
        // 显示隐藏的规格按钮div
        // 添加分割线并添加到盒子中
        // 添加规格切换事件
        var standardText = creatTextObj( self.$t("gameIndex.specifications") + "：", "18px Arial", "#804900", 0, 0);
        var standard100 = new createjs.DOMElement(document.getElementById("standard100"));
        var standard500 = new createjs.DOMElement(document.getElementById("standard500"));
        standard500.x = 75;
        var standard1000 = new createjs.DOMElement(document.getElementById("standard1000"));
        standard1000.x = 150;
        var standard2000 = new createjs.DOMElement(document.getElementById("standard2000"));
        standard2000.x = 225;
        var standardNumBox = creatViewObj([standard100, standard500, standard1000, standard2000], 0, 33);
        var standardDivision = creatImgObj(DIVISION_PATH, 0, 80);
        standardDivision.scaleX = 0.9;
        document.getElementById('standarBox').style.display = 'block';        
        var standardBox = creatViewObj([standardText, standardNumBox, standardDivision], 250, 130);
        $('.standarButton').click(function() {
            $('.standarButton').removeClass('active');
            $(this).addClass('active');
            selectedStandar = $(this).val();
            money.text = calculationMoney(2);
            numInput.keyup();
        })

        
        // 3.第三部分设置倍数添加左右调整倍数事件
        // 按照游戏制度计算当前可买倍数
        // 添加左右按钮事件条调整数量
        var selectedStandar = $('input.active').val();
        var numInput = $("#number");
        var total = calculationMoney(1);
        numInput.keyup(function(){
           getBuyNum($(this));
        })

        // 计算可购买数量
        function getBuyNum(el){

            if(el.val() == 0 ){
                el.val(1);
            }

            if( selectedStandar == 100){

                if(el.val() < total_investment/100){

                  el.val(total_investment/100);
                
                }
                
                if(el.val() > 5){
                  el.val(5);
                }

            }else if(selectedStandar == 500){

                if( el.val() < Math.ceil(total_investment/500) ){
                    el.val(Math.ceil(total_investment/500));
                }

                if(el.val() > 2){
                   el.val(2)
                }

            }else if(selectedStandar == 1000){

                if( el.val() < Math.ceil(total_investment/1000) ){
                    el.val(Math.ceil(total_investment/1000));
                }

                if(el.val() > 2){
                  el.val(2)
                }
            }

            money.text = calculationMoney(2);
        }
        // 调整数量
        var reduceNum = creatImgObj(REDUCE_PATH, 0, 13);
        var addNum = creatImgObj(ADD_PATH, 93, 13);
        var number = new createjs.DOMElement(document.getElementById("number"));
        // 调整数量事件
        reduceNum.addEventListener("click", function() {

            numInput.val(parseInt(numInput.val()) - 1);
            getBuyNum(numInput);
        })
        addNum.addEventListener("click", function() {

            numInput.val(parseInt(numInput.val()) + 1);
            getBuyNum(numInput);

        })
        number.x = 35;
        number.y = 12;
        var adjustmentBox = creatViewObj([addNum, reduceNum, number], 250, 215);
        // 4.第四部分应付价格和支付按钮
        // 支付按钮添加点击事件弹出支付密码框
        var money = creatTextObj( self.$t("gameIndex.copeWith") + "：" + total + self.$t("gameIndex.gold"), "20px Arial", "#fb0a00", 250, 275);
        getBuyNum(numInput);
        var payText = creatTextObj( self.$t("gameIndex.paymentText") , "20px Arial", "#fff", 330, 322);
        var payButton = creatImgObj(POPUPBG_PAYMENT_PATH, 242, 310);
        // 弹出支付框
        payButton.addEventListener("click", function() {

            self.gameShowPayPopup(numInput.val(), selectedStandar,calculationMoney(1));
        })
        shopPopup.addOtherElements([popupBg, shopleftBox, priceBox, standardBox, adjustmentBox, money, payButton, payText]);
        shopPopup.callBackClose = function() {
            document.getElementById("standarBox").style.display = "none";
        }
        shopPopup.setBoxSeat(283, 120);
        shopPopup.setCloseButtonSeat(600, -20);
        shopPopup.showPopup();
        // 计算支付金币数量
        // 传递1返回数值，传递2返回拼接字符串, 传递3返回购买粮食数量
        function calculationMoney(type) {
            if (type == 1) {
                return numInput.val() * selectedStandar / proportionArray[0] / proportionArray[1];
            } else if (type == 2) {
                return self.$t("gameIndex.copeWith") + (numInput.val() * selectedStandar / proportionArray[0] / proportionArray[1]) + self.$t("gameIndex.gold");
            } else if(type == 3){
                return numInput.val() * selectedStandar;
            }
        }
    },
    // 支付弹出框，验证购买数量，支付
    // 接受购买倍数和购买总金额进行表单验证
    // 支付并创建土地
    // 1.购买数量 2.规格 3.购买总价
    gameShowPayPopup: function(multiple, selectedStandar, num){
      var self = this;
      
      // 接受购买数量并进行表单验证
      if(multiple == ''){
        alert( self.$t("staticMsg.msg018") );
        return false;
      }else if(multiple == 0){
        alert( self.$t("staticMsg.msg018") );
        return false;
      }
      if(self.userInfo.total_currency < num){
        alert( self.$t("staticMsg.msg019") );
        return false;
      }
      // 创建支付框弹出对象并设置背景
      var payPassview = new popup(self.stage);
      // 添加移入移出时间防止事件穿透bug
      var payPassBg       = creatImgObj(POPUPPAYBG_PATH, 0, 0);

      payPassBg.addEventListener("mouseover", function(){});
      payPassBg.addEventListener("mouseout", function(){});
      // 隐藏商店element元素显示支付框element元素
      document.getElementById("standarBox").style.display = "none";
      document.getElementById("passwordTextBox").style.display = "block";
      // 创建表单布局
      // 支付密码部分
      var explain         = creatTextObj("*" + self.$t("gameIndex.payContent"), "14px Arial", "red", -15, -20);

        var payTitle = creatTextObj( self.$t("gameIndex.payTitle"), "23px Arial", "#6B4012", 265, 18 );
        payTitle.shadow = new createjs.Shadow("#fff", 0, 1, 0);

      var pswTxetEl1 = document.getElementById("passwordText1");
      var passwordText1Lable         = creatTextObj( self.$t("gameIndex.payPassword"), "14px Arial", "#ec9530", -17, 30);
      var passwordText1   = new createjs.DOMElement(pswTxetEl1);
      passwordText1.y = 21;
      passwordText1.x = 55;
      // 创建表单布局
      // 邮件验证码部分
      var mailCodeDom = document.getElementById('mailCode');
      var mailCode   = new createjs.DOMElement(mailCodeDom);
      mailCode.y = 80;
      mailCode.x = 55;
      var mailCodeLable = creatTextObj( self.$t("gameIndex.emailCode") , "14px Arial", "#ec9530", -27, 90);
      var getCodeButtonEL = document.getElementById('getMailCode');
      var getCodeButton = new createjs.DOMElement(getCodeButtonEL);
      getCodeButton.y = 80;
      getCodeButton.x = 210;
      // 添加点击事件验证支付密码表单并发送邮件
      getCodeButtonEL.addEventListener("click" , function(){
           if(pswTxetEl1.value == ''){
              alert( self.$t("staticMsg.msg017") );
              return false;
           }else{
              myFn.myAjax('get',{pwd:pswTxetEl1.value}, myFn.apiAddress.accountSafety.verifySafetyPassword, function(res){
                alert( self.$t("staticMsg.msg001") );
              })
           }
      })
      // 添加所有已创建好元素到盒子中 
      var passwordTextBox = creatViewObj([explain,passwordText1,passwordText1Lable,mailCode,mailCodeLable,getCodeButton], 180, 100);
      // 确认购买提交静态验证码判断是否正确
        var yesPayBtnBg = new createjs.Shape(new createjs.Graphics().beginStroke("#fff").beginFill("#A6DC0A").drawRoundRect(0, 0,120, 30, 15));
        var yesPayBtnText = creatTextObj( self.$t("gameIndex.payment"), "13px Arial", "#fff", 45, 10);
        var yesPayButton = creatViewObj([yesPayBtnBg, yesPayBtnText], 250, 225);
      
      yesPayButton.addEventListener("click", function() {
            if(pswTxetEl1.value == ''){
                alert( self.$t("staticMsg.msg017") );
                return false;
            }

            if(mailCodeDom.value == ''){
                alert( self.$t("staticMsg.msg145") );
                return false;
            }

          // 验证邮箱验证码
          myFn.myAjax('get',{emailcode:mailCodeDom.value}, myFn.apiAddress.accountSafety.verifySafetyMail, function(res){
            // 播种
            myFn.myAjax('get',{
              number:selectedStandar,
              num:multiple,
            }, 
            myFn.apiAddress.game.seed, 
            function(res){

              self.userInfo.total_investment = res.data.total_investment;
              myFn.setUserInfo('total_investment', res.data.total_investment);

              myFn.myAjax('get',{id:res.data.list[0].id}, myFn.apiAddress.game.getflmessage, function(msg){
                  self.gameObj.land.list.push(msg.data.list);
                  self.AdditionalLand();
                  alert( self.$t("staticMsg.msg020") );

                  if(self.gameObj.land.list.length % self.gameObj.land.pageNum == 0 && self.gameObj.land.list.length >= self.gameObj.land.pageNum){
                    self.gameObj.toggleButton.right.alpha = 1;
                  }
                  payPassview.closePopup();
                  myFn.setUserInfo('total_currency', (parseFloat(self.gameObj.gameGold.text) - num).toFixed(4));
                  self.gameObj.gameGold.text = myFn.getUserInfo('total_currency');
                  self.showMyInformation();
                  // if (self.lands[0].id == undefined) {
                  //   self.lands[0] = msg.data.list;
                  //   self.gameObj.progress.time.text = '距离完成时间:' + msg.data.list.time;
                  // }else{
                  //   self.lands.push(msg.data.list);
                  // }
                  /**
                   * 优化
                   */
                  // self.landBox.add(self.landObj());
                  // self.toggleButton.right.isShow();
                  // self.userInfo.total_investment = parseFloat(self.userInfo.total_investment) + parseFloat(num.toFixed(4));
                  // myFn.setUserInfo('total_investment', self.userInfo.total_investment);
                  
               })
      
            })
            payPassview.closePopup();
          })
      })
      
      // 添加以上元素到容器中 
      payPassview.addOtherElements([payPassBg, payTitle, passwordTextBox, yesPayButton]);
      // 关闭出发回调因此element
      payPassview.callBackClose = function() {
          document.getElementById("passwordTextBox").style.display = "none"
      }
      payPassview.setBoxSeat(283, 150);
      payPassview.setCloseButtonSeat(595, 10);
      payPassview.showPopup();
    },
    gameShowTaskPopup:function(){
      // 添加弹出层对象
      var noticPopup = new popup(this.stage);
      // 弹出框背景,标题设置
      var noticeBg = new creatImgObj(POPUP_NOTICEBG, 0 ,0);
      var noticTitleBg = new creatImgObj( TASKIMG_TITLEBG_PATH, 0, 0);
      var noticTitle = new creatTextObj( this.$t("gameIndex.task") , '23px Arial', '#6B4012', 70, 18);
      noticTitle.shadow = new createjs.Shadow("#fff", 0, 1, 0);

      var noticeTitleView = new creatViewObj([noticTitleBg, noticTitle], 170, -30);
      
      var textList = [];
      textList.push(creatViewObj([creatTextObj('一、运动5000步', '20px Arial', '#ec9530', 0, 0)], 0, 0));
      var noticList = creatViewObj(textList, 40, 60);
      noticPopup.addOtherElements([noticeBg, noticeTitleView, noticList]);
      noticPopup.setBoxSeat(320, 150);
      noticPopup.setCloseButtonSeat(540, -20);
      noticPopup.showPopup();
      // myFn.myAjax('get', {page:1,pagenumber:5}, myFn.apiAddress.game.course, function(res){
      //   var textList = [];
      //   for(var i=0; i<res.data.data.length; i++){
      //     textList.push(creatViewObj([creatTextObj('一、消耗5000金币', '15px Arial', '#ccc', 0, 0)], 30, 0));
      //   }
      //   var noticList = creatViewObj(textList, 0, 80);
      //   noticPopup.addOtherElements([noticeBg, noticTitle, noticList]);
      //   noticPopup.setBoxSeat(320, 150);
      //   noticPopup.setCloseButtonSeat(490, -20);
      //   noticPopup.showPopup();
      // }) 
    },
    gameNoticenPopup: function(){
        var noticPopup = new popup(this.stage);
        var noticeBg = new creatImgObj(POPUP_NOTICEBG, 0 ,0);

        var noticTitleBg = new creatImgObj( TASKIMG_TITLEBG_PATH, 0, 0);
        var noticTitle = new creatTextObj(this.$t("gameIndex.bulletin"), '23px Arial', '#6B4012', 70, 18);
        noticTitle.shadow = new createjs.Shadow("#fff", 0, 1, 0);
        var noticeTitleView = new creatViewObj([noticTitleBg, noticTitle], 170, -30);
      
      myFn.myAjax('get', {page:1,pagenumber:3}, myFn.apiAddress.game.notice, function(res){
        var textList = [];
        for(var i=0; i<res.data.list.length; i++){
          textList.push(creatViewObj([
                creatTextObj(res.data.list[i].time, '20px Arial', '#ec9530', 0, 0),
                creatTextObj(res.data.list[i].bulletin, '15px Arial', '#ec9530', 0, 35)
                ], 40, 0+i*85));
        }
        var noticList = creatViewObj(textList, 0, 60);
        noticPopup.addOtherElements([noticeBg, noticeTitleView, noticList]);
        noticPopup.setBoxSeat(320, 150);
        noticPopup.setCloseButtonSeat(540, -20);
        noticPopup.showPopup();
      });
    },
    // 需要显示的页数
    showLand:function(page){
        var length  = 0;
        var self = this;
        // 如果列表不为空代表不是第一次初始化可以不全部生成
        if(this.gameObj.land.exampleObj != null){

            this.gameObj.land.thisExampleList.children = [];
            if(page * this.gameObj.land.pageNum < this.gameObj.land.exampleObj.length){
                length = page * this.gameObj.land.pageNum;
            }else{
                length = this.gameObj.land.exampleObj.length -  ((page-1) * this.gameObj.land.pageNum);
                length = (page-1) * this.gameObj.land.pageNum + length
            }

            for(var i = (page-1) * this.gameObj.land.pageNum; i < length ; i++){
                this.gameObj.land.thisExampleList.addChild(this.gameObj.land.exampleObj[i]);
            }
        }else{
            this.landList();
            this.gameObj.land.thisExampleList = creatViewObj([],435,295);
            this.gameObj.land.list.length >= this.gameObj.land.pageNum ? length = this.gameObj.land.pageNum : length = this.gameObj.land.list.length+1; 
            for(var i=0; i < length ; i++){
                 this.gameObj.land.thisExampleList.addChild(this.gameObj.land.exampleObj[i])
            }
            
            this.gameObj.land.page = Math.ceil(this.gameObj.land.exampleObj.length/this.gameObj.land.pageNum);

        }

        this.stage.addChild(this.gameObj.land.thisExampleList);
    },
    // 生成后的土地对象列表
    landList: function(){
        var landList = [];
        var week = 0;
        // 未计算位子对象
        var noSeat = null;
        // 计算后的
        var yesSeat = null;
        // 是否显示扩建
        var yesExtension = false;
        for(var i = 0; i < this.gameObj.land.list.length; i++){

            week = this.gameObj.land.list[i].week;
            // 没经过位子计算的土地对象
            noSeat  = this.createLand(week, i);
            // 经过计算后的土地对象
            yesSeat = this.landIndexSeat( i % this.gameObj.land.pageNum, noSeat);

            landList.push(yesSeat);
        }
        // 数据添加完毕后添加扩建标示土地
        noSeat  = this.createLand(-1);
        yesSeat = this.landIndexSeat( (this.gameObj.land.list.length) % this.gameObj.land.pageNum, noSeat);
        landList.push(yesSeat);
        this.gameObj.land.exampleObj = landList;
    },
    // 默认土地
    defaultLand:function(){
        var defaultLandBox = creatViewObj([],435,295);
        for(var i=0; i<this.gameObj.land.pageNum; i++){
            var defaultLand = creatImgObj(LANDMG_PATH, 0, 0);
            defaultLand = this.landIndexSeat(i, defaultLand);
            defaultLandBox.addChild(defaultLand);
        }
            this.stage.addChild(defaultLandBox);
        // alert(this.gameObj.land.pageNum);
    },
    // 创建单个土地对象
    // 1.周数，如果为-1代表扩建
    createLand: function(status, index){

        var landStatus = null;
        var self = this;
        if(status != -1){
            landStatus = creatImgObj(this.gameObj.land.statusImg[status], 10, 3);
        }else{
            landStatus = creatImgObj(EXTENSION_PATH, 20, -35);
            var self = this;
            landStatus.addEventListener("click" , function(){
                self.gameShopPopup();
            })
        }

        var defaultLand = creatImgObj(LANDMG_PATH, 0, 0);
        var landObj = creatViewObj([
                defaultLand,
                landStatus
            ],0,0);

            defaultLand.addEventListener("mouseover", function(e){
                if(index != undefined && lastPopup == ''){
                    self.showLandStatus(index, 10, 10);
                }
            });
            defaultLand.addEventListener("mouseout", function(e){
                if(index != undefined && lastPopup === self.gameObj.land.landStatusBox){
                    lastPopup.closePopup();
                }
            });
        

        return landObj;
    },

    // 计算土地位子
    landIndexSeat: function(item, obj){
        var x = 0;
        var y = 0;

        x = (item - parseInt(item/4)* 4) * -60;
        y = (item - parseInt(item/4)* 4) * 31;

        x = x + parseInt(item/4) * 55
        y = y + parseInt(item/4) * 30;


        obj.x = x;
        obj.y = y;

        return obj;
    },
    // 向列表追加一块地
    AdditionalLand:function(){

        var week = 0;
        // 未计算位子对象
        var noSeat = null;
        // 计算后的
        var yesSeat = null;

        week = this.gameObj.land.list[this.gameObj.land.list.length - 1].week;
        noSeat  = this.createLand(week);
        yesSeat = this.landIndexSeat( (this.gameObj.land.list.length - 1) % this.gameObj.land.pageNum, noSeat);
        this.gameObj.land.exampleObj[this.gameObj.land.exampleObj.length-1] = yesSeat;

        noSeat  = this.createLand(-1);
        yesSeat = this.landIndexSeat( (this.gameObj.land.list.length) % this.gameObj.land.pageNum, noSeat);
        this.gameObj.land.exampleObj.push(yesSeat);

        // 重新计算页码
        this.gameObj.land.page = Math.ceil(this.gameObj.land.exampleObj.length/this.gameObj.land.pageNum);

        this.showLand(this.gameObj.land.currentPage);
    },

    /*
     * 显示土地
     * 添加移入淡入淡效果
     * 添加点击切换事件
     * 返回左右切换按键对象
     */
    showToggleLand: function(){
        var self = this;
        // 左右土地切换图片
        var leftLandmg = creatImgObj(EXTENSIONL_PATH, 140, 380);
        var rightLandmg = creatImgObj(EXTENSIONR_PATH, 820, 380);
        leftLandmg.alpha = 0;

        if(self.gameObj.land.list.length >= self.gameObj.land.pageNum){
            rightLandmg.alpha = 1;
        }else{
            rightLandmg.alpha = 0;
        }
        // 上一块切换事件
        leftLandmg.addEventListener("click", function(){

            if(1 < self.gameObj.land.currentPage){
                self.gameObj.land.currentPage--;
                self.showLand(self.gameObj.land.currentPage);
            }
            if(1 == self.gameObj.land.currentPage){
                leftLandmg.alpha = 0;
            }
            rightLandmg.alpha = 1;

        });
        // 下一块块切换事件
        rightLandmg.addEventListener("click", function(){

            if(self.gameObj.land.page >= self.gameObj.land.currentPage){
                self.gameObj.land.currentPage++;
                self.showLand(self.gameObj.land.currentPage);
            }
            if(self.gameObj.land.page == self.gameObj.land.currentPage){
                rightLandmg.alpha = 0;
            }
            leftLandmg.alpha = 1;

        });

        this.stage.addChild(leftLandmg, rightLandmg); 
        return {left:leftLandmg,right:rightLandmg}
    },

    // 提供当前所需要显示详情信息的土地下表.
    // 显示数组中对应的详细信息
    showLandStatus:function(index, x, y){
      var self = this;
      var landStatusBg = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#ccc").drawRect(0, 0, 300, 100));
      var statusText1 = creatTextObj( self.$t("gameIndex.sowingTime")   + "：" + this.gameObj.land.list[index].crt_time, "15px Arial", "black", 7, 10);
      var statusText2 = creatTextObj( self.$t("gameIndex.sowingAmount") + "：" + this.gameObj.land.list[index].qnt, "15px Arial", "black", 7, 31);
      var statusText3 = creatTextObj( self.$t("gameIndex.earnedIncome") + "：" + this.gameObj.land.list[index].income, "15px Arial", "black", 7, 53);
      var statusText4 = creatTextObj( self.$t("gameIndex.accelerationTimes") + "：" + this.gameObj.land.list[index].speed_cnt + self.$t("classifier.second") + "(" + this.gameObj.land.list[index].speed_week + self.$t("classifier.week") + ")", "15px Arial", "black", 7, 75);
      var landStatusBox = creatViewObj([landStatusBg,statusText1,statusText2,statusText3,statusText4],0,0);
      
      var landStatus = new popup(self.stage);
      landStatus.addOtherElements([landStatusBox]);
      landStatus.elObjs.closeButton.alpha = 0;
      landStatus.setBoxSeat(500 + x, 200 + y);
      landStatus.showPopup();
      this.gameObj.land.landStatusBox = landStatus
    },
 
    // 创建游戏宝典
    showCourse: function () {
        var self = this;
        var canonImg = creatImgObj(CANONIMG_PATH, 0, 0);
        var course = creatViewObj([canonImg], 40, 600);

        canonImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        canonImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });

        canonImg.addEventListener("click", function() {

            var noticPopup = new popup(self.stage);
            var noticeBg = new creatImgObj(POPUP_NOTICEBG, 0 ,0);

            var noticTitleBg = new creatImgObj( TASKIMG_TITLEBG_PATH, 0, 0);
            var noticTitle = new creatTextObj( self.$t("gameIndex.canon"), '23px Arial', '#6B4012', 70, 18);
            noticTitle.shadow = new createjs.Shadow("#fff", 0, 1, 0);
            var noticeTitleView = new creatViewObj([noticTitleBg, noticTitle], 170, -30);


            myFn.myAjax('get', {page:1,pagenumber:3}, myFn.apiAddress.game.course, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                    textList.push(creatViewObj([
                            creatTextObj(res.data.list[i].question, '20px Arial', '#ec9530', 0, 0),
                            creatTextObj(res.data.list[i].answer, '15px Arial', '#ec9530', 0, 35)
                        ], 40, 0+i*85));
                }
                var noticList = creatViewObj(textList, 0, 60);
                noticPopup.addOtherElements([noticeBg, noticeTitleView, noticList]);
                noticPopup.setBoxSeat(320, 150);
                noticPopup.setCloseButtonSeat(540, -20);
                noticPopup.showPopup();
            }) 
        })
        this.stage.addChild(course);
    },
    // 底部我的仓库& 邀请好友 &游戏记录
    showMyInformation: function () {

        var self = this;
        // 我的仓库
        var myWarehouseImg = creatImgObj(MYWAREHOUSE_PATH, 370, 383);
        myWarehouseImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
        myWarehouseImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        myWarehouseImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });

        myWarehouseImg.addEventListener("click", function() {
            
            var popupBg = creatImgObj(POPUP_WAREHOUSE_BG, 0, 0);
            var wareHouse = creatTextObj( self.$t("gameIndex.myWareHouse"), "23px Arial", "#6B4012", 270, 20);
            wareHouse.shadow = new createjs.Shadow("#fff", 0, 1, 0);

            var BottomFrame = new createjs.Shape(new createjs.Graphics().beginFill("#A37132").drawRoundRect(20, 20,180, 150, 20));

            var exchangeBtnBg = new createjs.Shape(new createjs.Graphics().beginStroke("#fff").beginFill("#A6DC0A").drawRoundRect(0, 0,100, 28, 15));
            var exchangeBtnText = creatTextObj( self.$t("gameIndex.exchange"), "13px Arial", "#fff", 38, 10);
            var popup_exchange = creatViewObj([exchangeBtnBg, exchangeBtnText], 60, 225);
            // 跳转兑换页面
            popup_exchange.addEventListener("click", function(){
              self.$router.push('shop')
            })

            // 粮食数量文本
            var foodNumText =  creatTextObj( self.$t("gameIndex.food") + ': ' + self.gameObj.goodFood, "18px Arial", "#A37132", 110, 190);
            foodNumText.lineHeight = 20;
            foodNumText.lineWidth = 450;
            foodNumText.textAlign = "center";

            var shopleftBox = creatViewObj([
                BottomFrame,
                creatImgObj(POPUPBG_FOODICON_PATH, 50, 40),
                foodNumText,
                popup_exchange
            ], 60, 80)


            var goldNumText = creatTextObj(self.$t("gameIndex.gold") + ": " + self.gameObj.gameGold.text, "18px Arial", "#A37132", 115, 190);
            goldNumText.lineHeight = 20;
            goldNumText.lineWidth = 450;
            goldNumText.textAlign = "center";

            var BottomFrameRight = new createjs.Shape(new createjs.Graphics().beginFill("#A37132").drawRoundRect(20, 20,180, 150, 20));
            var shopRightBox = creatViewObj([
                BottomFrameRight,
                creatImgObj(POPUPBG_GOLD_PATH, 50, 35),
                goldNumText
            ], 350, 80)



            // 提币
            var extractBtnBg = new createjs.Shape(new createjs.Graphics().beginStroke("#fff").beginFill("#A6DC0A").drawRoundRect(0, 0,90, 28, 15));
            var extractBtnText = creatTextObj( self.$t("gameIndex.extract"), "13px Arial", "#fff", 33, 10);
            var popup_extract = creatViewObj([extractBtnBg, extractBtnText], 50, 0);
            popup_extract.addEventListener("click", function(){
              self.$router.push({path:"account/index"});
            })

            // 转账
            var transferBtnBg = new createjs.Shape(new createjs.Graphics().beginStroke("#fff").beginFill("#A6DC0A").drawRoundRect(0, 0,90, 28, 15));
            var transferBtnText = creatTextObj( self.$t("gameIndex.extract"), "13px Arial", "#fff", 33, 10);
            var popup_transfer = creatViewObj([transferBtnBg, transferBtnText], 150, 0);
            popup_transfer.addEventListener("click", function(){
                self.$router.push({path:"account/index"});
            })

            // 充值
            var rechargeBtnBg = new createjs.Shape(new createjs.Graphics().beginStroke("#fff").beginFill("#A6DC0A").drawRoundRect(0, 0,190, 28, 15));
            var rechargeBtnText = creatTextObj( self.$t("gameIndex.recharge"), "13px Arial", "#fff", 80, 10);
            var popup_recharge = creatViewObj([rechargeBtnBg, rechargeBtnText], 50, 40);
            popup_recharge.addEventListener("click", function(){
                self.$router.push({path:"account/index"});
            })

            var popup_button_box = creatViewObj([popup_extract, popup_transfer, popup_recharge], 315, 305);

            var myWarehousePopup = new popup(self.stage);
            myWarehousePopup.addOtherElements([popupBg, wareHouse, shopleftBox, shopRightBox, popup_button_box]);
            myWarehousePopup.setBoxSeat(283, 120);
            myWarehousePopup.setCloseButtonSeat(600, 5);
            myWarehousePopup.showPopup();
        })


        // 邀请好友弹出层
        var InvitationImg = creatImgObj(INVITATION_PATH, 468, 380);
        InvitationImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        InvitationImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });
        InvitationImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
        InvitationImg.addEventListener("click", function() {

            var codeInput = document.getElementById('InvitationUrl');
            myFn.myAjax('get', {}, myFn.apiAddress.inviteCode.create, function(res){
                codeInput.value = res.data;
            })

            var InvitationPopup =  new popup(self.stage);
            var invitationPoputBg = creatImgObj(POPUPBG_BG);
            var InvitationTitle = creatTextObj( self.$t("gameIndex.inviteFriends"), "23px Arial", "#6B4012", 240, 18 );
            InvitationTitle.shadow = new createjs.Shadow("#fff", 0, 1, 0);

            var InvitationContent = creatTextObj( self.$t("gameIndex.inviteFriendsText"), "13px Arial", "#ec9530", 63, 85);
            InvitationContent.lineHeight = 20;
            InvitationContent.lineWidth = 450;
            document.getElementById('InvitationUrl').style.display = "block";
            var InvitationUrl = new createjs.DOMElement(codeInput);
            InvitationUrl.x = 90;
            InvitationUrl.y = 140;

            var copylinkBtnBg = new createjs.Shape(new createjs.Graphics().beginStroke("#fff").beginFill("#A6DC0A").drawRoundRect(0, 0,153, 35, 15));
            var copylinkBtnText = creatTextObj( self.$t("gameIndex.copy"), "15px Arial", "#fff", 60, 11);
            var popup_copylinkBtnBg = creatViewObj([copylinkBtnBg, copylinkBtnText], 210, 300);

            popup_copylinkBtnBg.addEventListener("click", function(){
                var Url2=document.getElementById("InvitationUrl");
                Url2.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                alert("复制成功");
                myFn.myAjax('get', {}, myFn.apiAddress.inviteCode.create, function(res){
                codeInput.value = res.data;
            })
        })
          
        InvitationPopup.addOtherElements([invitationPoputBg, InvitationTitle, InvitationContent, InvitationUrl, popup_copylinkBtnBg]);
        InvitationPopup.callBackClose = function() {
            document.getElementById("InvitationUrl").style.display = "none";
        }
            InvitationPopup.setBoxSeat(283, 150);
            InvitationPopup.setCloseButtonSeat(545, 0);
            InvitationPopup.showPopup();
        })


        // 游戏记录
        var recordImg = creatImgObj(RECORD_PATH, 550, 388);
        recordImg.addEventListener("mouseover", function(e){ e.target.alpha = 0.5});
        recordImg.addEventListener("mouseout", function(e){ e.target.alpha = 1 });
        recordImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
        recordImg.addEventListener("click", function() {
            var recordPopup = new popup(self.stage);
            var noticTitleBg = new creatImgObj( TASKIMG_TITLEBG_PATH, 0, 0);
            var noticTitle = new creatTextObj( self.$t("gameIndex.record"), '23px Arial', '#6B4012', 250, 18);
            noticTitle.shadow = new createjs.Shadow("#fff", 0, 1, 0);

            var recordPoputBg = creatImgObj(POPUPBUTTON_SOWING_BG);
            var recordPoputbigBg = new createjs.Shape(new createjs.Graphics().beginFill("#F5EADF").drawRoundRect(30, 110,530, 280, 5));
            recordPoputBg.addEventListener("mouseover", function(){});
            recordPoputBg.addEventListener("mouseout", function(){});

            // 分割横线
            var division = new createjs.Shape(new createjs.Graphics().beginFill("#c8b29d").drawRoundRect(50, 27,450, 2, 0));


            // 播种记录
            var planting_record_button = creatImgObj(POPUPBUTTON_SOWING_PATH, 50, 80);
            var planting_record_active_button = creatImgObj(POPUPBUTTON_SOWING_ACTIVE_PATH, 50, 80);
            var plantingText = creatTextObj(self.$t("gameIndex.seedingRecord"), "16px Arial", "#c87923", 60, 90);
            // 每行数据数组
            var planting_record_content_row = creatViewObj([], 20, 40);
            var planting_record_content = creatViewObj([
                        // 表格头
                        creatViewObj([
                        creatTextObj(self.$t("gameIndex.sowingTime"), "17px Arial", "#c87923", 120, 0),
                        creatTextObj(self.$t("gameIndex.sowNull"), "17px Arial", "#c87923", 380, 0),
                        division
                    ], 0, 0),
                        // 表格内容行
                    planting_record_content_row
                ], 20, 130);
        
                planting_record_content.alpha = 1;
                planting_record_button.addEventListener("click", function(){
                    self.activeRecord = 0;

                    toggleRecord();
                    pagedefault(self.activeRecord)
                    self.allpageRecord = self.record[0].allpage;
                    planting_record_content.alpha = 1;
                    planting_record_active_button.alpha = 1;
            })

            // 播种记录请求
            function mySeedFn(index){
                myFn.myAjax('get', {page:index,pagenumber:self.record[0].showItem}, myFn.apiAddress.gameRecord.mySeed, function(res){
                    var textList = [];

                    for(var i=0; i<res.data.list.length; i++){
                        textList.push(creatViewObj([
                            creatTextObj(res.data.list[i].time, "17px Arial", "#c87923", 60, 0),
                            creatTextObj(res.data.list[i].qnt, "17px Arial", "#c87923", 380, 0),
                        ],0, 0+i*45));
                    }
                    // 播种记录总页数
                    self.record[0].allpage = res.data.totalpage;
                    pagedefault(0);
                    // 播种列表每行数据
                    planting_record_content_row.children = textList;          
                });
            }
            mySeedFn(1);

            // 分割横线
            var division1 = new createjs.Shape(new createjs.Graphics().beginFill("#c8b29d").drawRoundRect(50, 27,450, 2, 0));

            // 邀请记录
            var invite_record_button = creatImgObj(POPUPBUTTON_INVITE_PATH, 140, 80);
            var invite_record_active_button = creatImgObj(POPUPBUTTON_INVITE_ACTIVE_PATH, 140, 80);
            var invite_recordText = creatTextObj(self.$t("gameIndex.invitationRecord"), "16px Arial", "#c87923", 150, 90);
            // 每行数据数组
            var invite_record_content_row = creatViewObj([], -30, 40);
            var invite_record_content = creatViewObj([
                // 表格头
                creatViewObj([
                    creatTextObj(self.$t("gameIndex.user"), "17px Arial", "#c87923", 95, 0),
                    creatTextObj(self.$t("gameIndex.investmentAmount"), "17px Arial", "#c87923", 250, 0),
                    creatTextObj(self.$t("gameIndex.investmentTime"), "17px Arial", "#c87923", 400, 0),
                    division1
                ], 0, 0),
                // 表格内容行
                invite_record_content_row
            ], 20, 130)
        
            invite_record_button.addEventListener("click", function(){
                self.activeRecord = 1;
                toggleRecord(self.activeRecord);
                pagedefault(self.activeRecord );
                self.allpageRecord = self.record[1].allpage;
                invite_record_content.alpha = 1;
                invite_record_active_button.alpha = 1;
            });
            // 邀请记录请求
            function myInviteFn(index){
                myFn.myAjax('get', {page:index,pagenumber:self.record[1].showItem}, myFn.apiAddress.gameRecord.myInvite, function(res){
                    var textList = [];
                    for(var i=0; i<res.data.list.length; i++){
                        textList.push(creatViewObj([
                            creatTextObj(res.data.list[i].username, "17px Arial", "#c87923", 60, 0),
                            creatTextObj(res.data.list[i].num, "17px Arial", "#c87923", 290, 0),
                            creatTextObj(res.data.list[i].crt_time, "17px Arial", "#c87923", 380, 0),
                        ], 0, 0+i*45));
                    }

                    // 邀请记录总页数
                    self.record[1].allpage = res.data.totalpage;
                    // 邀请记录每行数据
                    invite_record_content_row.children = textList;
                });
            }
            myInviteFn(2);

            // 分割横线
            var division2 = new createjs.Shape(new createjs.Graphics().beginFill("#c8b29d").drawRoundRect(50, 27,470, 2, 0));
            // 加速记录
            var speed_record_button = creatImgObj(POPUPBUTTON_ACCELERATE_PATH, 230, 80);
            var speed_record_active_button = creatImgObj(POPUPBUTTON_ACCELERATE_ACTIVE_PATH, 230, 80);
            var speed_recordText = creatTextObj(self.$t("gameIndex.acceleratedRecording"), "16px Arial", "#c87923", 240, 90);
            // 每行数据组
            var speed_record_content_row = creatViewObj([], 0, 40);
            var speed_record_content = creatViewObj([
                // 表格头
                creatViewObj([
                    creatTextObj(self.$t("gameIndex.accelerateTime"), "17px Arial", "#c87923", 80, 0),
                    creatTextObj(self.$t("gameIndex.accelerateType"), "17px Arial", "#c87923", 210, 0),
                    creatTextObj(self.$t("gameIndex.accelerateProportion"), "17px Arial", "#c87923", 275, 0),
                    creatTextObj(self.$t("gameIndex.accelerateProfit"), "17px Arial", "#c87923", 350, 0),
                    creatTextObj(self.$t("gameIndex.accelerateFoodstuff"), "17px Arial", "#c87923", 450, 0),
                    division2
                ], 0, 0),
                // 表格内容行
                speed_record_content_row
            ],21, 130)

            speed_record_button.addEventListener("click", function(){
                self.activeRecord = 2;
                toggleRecord(self.activeRecord);
                pagedefault(self.activeRecord);
                self.allpageRecord = self.record[2].allpage;
                speed_record_content.alpha = 1;
                speed_record_active_button.alpha = 1;
            })

            // 加速记录请求
            function mySeedAccelerateFn(index){
                myFn.myAjax('get', {page:index,pagenumber:self.record[2].showItem}, myFn.apiAddress.gameRecord.mySeedAccelerate, function(res){
                    var textList = [];
                    for(var i=0; i<res.data.list.length; i++){
                        textList.push(creatViewObj([
                            creatTextObj(res.data.list[i].time, "17px Arial", "#c87923", 40, 0),
                            creatTextObj(res.data.list[i].type, "17px Arial", "#c87923", 210, 0),
                            creatTextObj(res.data.list[i].rate, "17px Arial", "#c87923", 270, 0),
                            creatTextObj(res.data.list[i].speedday, "17px Arial", "#c87923", 360, 0),
                            creatTextObj(res.data.list[i].qnt, "17px Arial", "#c87923", 440, 0)
                        ], 0, 0+i*45));
                    }
                    // 加速记录总页数
                    self.record[2].allpage = res.data.totalpage;
                    // 加速列表每行数据
                    speed_record_content_row.children = textList;    
                });
            }
            mySeedAccelerateFn(3);
            

            // 分页
            var pageBox_El = document.getElementById("pageBox");
            
            

            function pagedefault(index){
                var allPage_El = document.getElementById("recordAllpage");
                allPage_El.innerHTML = self.record[index].allpage;
                self.allpageRecord = self.record[index].allpage;
                self.pagesRecord = [];
                for(var i = self.currentRecord; i <= self.allpageRecord &&  i < self.currentRecord + 6 && self.allpageRecord != 1; i++){
                    if(i==1){
                        i++;
                    }
                    self.pagesRecord.push(i);
                }
            }

            pageBox_El.onclick = function(e){

                if(e.target.nodeName == "DIV"){
                    return false;
                }else if(self.currentRecord == e.target.innerHTML){
                    alert( self.$t("gameIndex.pagePrompt"));
                    return false
                }
                
                self.pagesRecord = [];

                if(self.currentRecord > self.allpageRecord - 3 && e.target.innerHTML > 5){
                    self.currentRecord = self.allpageRecord - 5;
                }else if(self.currentRecord > 2 ){
                    self.currentRecord = self.currentRecord - 2;
                }

                if(self.currentRecord  == 1 && self.allpageRecord != 1){
                    self.currentRecord  = 2;
                }

                for(var i = self.currentRecord; i <= self.allpageRecord &&  i < self.currentRecord + 5; i++){
                    if(i == 1){
                        i++;
                    }
                    self.pagesRecord.push(i);
                }

                self.currentRecord = parseInt(e.target.innerHTML);

                if(self.activeRecord == 0){
                    mySeedFn(self.currentRecord);
                }else if(self.activeRecord == 1){
                    myInviteFn(self.currentRecord);
                }else if(self.activeRecord == 2){
                    mySeedAccelerateFn(self.currentRecord);
                }
            }
            pageBox_El.style.display = 'block';
            var pageBox = new createjs.DOMElement(pageBox_El);
            pageBox.y = 360;
            pageBox.x = 285 - parseInt(pageBox_El.offsetWidth) / 2;


            

            recordPopup.callBackClose = function(){
                pageBox_El.style.display = 'none';
            }

            recordPopup.addOtherElements([
                recordPoputBg, 
                recordPoputbigBg,
                noticTitle,
                // 添加播种记录元素
                planting_record_button,
                planting_record_active_button, 
                planting_record_content,
                plantingText,
                // 添加播种邀请元素
                invite_record_button,
                invite_record_active_button, 
                invite_record_content,
                invite_recordText, 
                // 添加播种收益元素
                speed_record_button, 
                speed_record_active_button, 
                speed_record_content,
                speed_recordText,
                // page
                pageBox
            ]);

            recordPopup.showPopup();
            recordPopup.setBoxSeat(283, 150);
            recordPopup.setCloseButtonSeat(560, 10);
            
            // 切换显示隐藏
            function toggleRecord(){
                planting_record_button = planting_record_button;
                planting_record_content.alpha = 0;
                planting_record_active_button.alpha = 0;
                self.currentRecord = 1;
                
                invite_record_button = invite_record_button;
                invite_record_content.alpha = 0;
                invite_record_active_button.alpha = 0;
                self.currentRecord = 1;

                speed_record_button = speed_record_button;
                speed_record_content.alpha = 0;
                speed_record_active_button.alpha = 0;
                self.currentRecord = 1;
            }
            toggleRecord();
            planting_record_content.alpha = 1;
            planting_record_active_button.alpha = 1;
        })
        
        // 创建点击图标
        var decorateBanch = creatImgObj(DECORATE_BENCH, 363, 448);
        var bottomButton = creatViewObj([myWarehouseImg, InvitationImg, recordImg, decorateBanch], 100, 195);
        // 添加底部图标
        this.stage.addChild(bottomButton);
    },
    
  }
}
// 上一个弹窗
var lastPopup = '';
function popup(stage) {
        if(lastPopup != ''){
            lastPopup = lastPopup.closePopup();
        }

        // 创建弹出层中的默认元素对象
        this.elObjs = {};
        this.elObjs.closeButton = creatImgObj(CLOSEPOPU_PATH, 0, 0);
        this.elObjsBox = creatViewObj([], 0, 0);
        var self = this;
        // 关闭按钮并给予关闭事件
        this.closePopup = function() {
            stage.removeChild(self.elObjsBox);
            lastPopup = '';
            // 点击关闭触发回调
            self.callBackClose();
        }
        this.elObjs.closeButton.addEventListener("click", this.closePopup)
        // 关闭按钮的回调
        this.callBackClose = function() {
        }
        // 容纳元素对象的盒子并添加设置盒子位子的方法
        this.setBoxSeat = function(left, right) {
            self.elObjsBox.x = left;
            self.elObjsBox.y = right;
        }
        // 设置关闭按钮的位子
        this.setCloseButtonSeat = function(left, right) {
            self.elObjs.closeButton.x = left;
            self.elObjs.closeButton.y = right;
        }
        // 添加元素对象 
        this.addOtherElements = function(obj) {
            for(var i=0; i<obj.length; i++){
                self.elObjsBox.addChild(obj[i]);
            }
            self.elObjsBox.addChild(self.elObjs.closeButton);
        }
        lastPopup = this;
        // 显示弹出层
        this.showPopup = function() {
          stage.addChild(this.elObjsBox);
        }
        lastPopup.showPopup()
    }
// 弹出框
  // 创建文字对象
  function creatTextObj(str, font, color, left, right) {
      var obj = new createjs.Text(str, font, color);
      obj.x = left;
      obj.y = right;
      return obj;
  }
  // // 创建图片对象
  function creatImgObj(path, left, right) {
      var obj = new createjs.Bitmap(path);
      obj.x = left;
      obj.y = right;
      return obj;
  }
  // 创建容器对象
  function creatViewObj(objs, left, right) {
      var obj = new createjs.Container();
      for(var i=0; i<objs.length; i++){
          obj.addChild(objs[i])
      }
      obj.x = left;
      obj.y = right;
      return obj;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .gameindex{
        text-align: left;
        padding-bottom: 30px;
    }
    #canvas{
        display: block;
    }
  .gameBox{
    width: 1180px;
    border-radius: 11px;
    margin: auto;
    display: block;
    margin-top: 0px;
    border: 3px #424242 solid;
    box-sizing: content-box;
    height: auto;
  }
  .notClick{
    border-color: transparent !important;
    color: #ad6f19 !important;
  }
  .standarButton, #number, .passwordText{
    width: 60px;
    height: 30px;
    font-size: 1.1em;
    color: #8e580d;
    border-color: inherit;
    border-style: solid;
    border-width: 0.9px;
    background: #cf9a54;
    border-radius: 3px;
  }
  .passwordText{
    width:200px;
  }
  #mailCode{
    width: 150px;
  }
  #getMailCode{
    width: 45px;
    padding: 0px;
  }
  #number{
    width: 50px;
    border:none;
    color: #484848;
    padding-left: 10px;
    box-shadow: inset 2px 2px 2px rgba(0,0,0,.2);
  }
  .active{
    color: #000 !important;
  }
  #InvitationUrl{
    width: 400px;
    background: #161413;
    border: none;
    color: #e8b71b;
    padding: 10px 5px;
    display: none;
    font-size: 16px;
    padding: 50px 10px;
    background: #fff4e2;
    text-align: center;
  }
  /* 分页 */
  .pageBox{
    width: 400px;
    text-align: center;
    display: none;
    background:'red';
    word-spacing:-10px;
  }
  .pageBox div{
    display: inline-block;
  }
  .pageBox  span{
    padding: 0px 10px;
    margin:0px 5px;
    display: inline-block;
    text-align: center; 
    background: blue;
    background: #bab4b1;
    border-radius: 3px;
    cursor:pointer
  }

</style>
