
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
          <input id="InvitationUrl" value="2a28a98ee1c2b74c4d3fd27f61b3e65107" readonly="" />
          <canvas id="canvas" width="1140" height="647"></canvas>
      </div>
  </div>
</template>

<script>
// import {init} from '../js/gameMain.js';
var FARMBG_PATH          = require('../assets/gameImg/farmbg.png')  // 游戏背景
var INFOBOX_PATH         = require('../assets/gameImg/infobox.png') // 用户信息底图
var INFOGOLDICON         = require('../assets/gameImg/goldIcon.png') // 用户信息金币图标
var INFOFOODICON         = require('../assets/gameImg/foodIcon.png') // 用户信息食物图标
// 进度条
var OVERALLSCHEDULE_PATH = require('../assets/gameImg/overallSchedule.png') // 总进度
var CURRENTPROGRESS_PATH = require('../assets/gameImg/currentProgress.png') // 当前进度
var SECTION_PATH         = require('../assets/gameImg/section.png')    // 进度条区间分割
// 商店&任务&公告
var SHOPIMG_PATH         = require('../assets/gameImg/shop.png')    // 商店
var TASKIMG_PATH         = require('../assets/gameImg/task.png')   // 任务
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
var EXTENSIONL_PATH      = require('../assets/gameImg/extensionL.png')   // 上一块
var EXTENSIONR_PATH      = require('../assets/gameImg/extensionR.png')   // 下一块
var EXTENSION_PATH      = require('../assets/gameImg/extension.png')   // 扩建
var EXTENSION_PATH1      = require('../assets/gameImg/extension1.png')   // 扩建
// 游戏宝典
var CANONIMG_PATH        = require('../assets/gameImg/canon.png')    // 游戏宝典
// 底部游戏记录
var MYWAREHOUSE_PATH     = require('../assets/gameImg/myWarehouse.png') // 我的仓库
var INVITATION_PATH      = require('../assets/gameImg/Invitation.png')  // 邀请好友
var RECORD_PATH          = require('../assets/gameImg/record.png')     // 记录
// 弹框关闭按钮
var CLOSEPOPU_PATH       = require('../assets/gameImg/popupClose.png')   // 弹窗关闭
var POPUPSHOPBG_PATH     = require('../assets/gameImg/popushop.png')   // 商店弹框背景
var POPUP_HAS_TITLE_PATH = require('../assets/gameImg/popupBg.png')  // 商店弹框背景
// 游戏商店弹出面层
var POPUPPAYBG_PATH      =  require("../assets/gameImg/payPassBg.png") //支付密码弹出层
var POPUPPYESPAY_PATH    =  require("../assets/gameImg/yespay.png")     // 确认支付按钮
var POPUPPNOPAY_PATH     =  require("../assets/gameImg/nopay.png")    // 取消支付按钮
// 分割线
var DIVISION_PATH         = require('../assets/gameImg/cuttingLine.png') //分割线
// 商店
var POPUPBG_FOODICON_PATH =  require("../assets/gameImg/food.png")  // 食物图标
var ADD_PATH              =  require("../assets/gameImg/add.png")   // 添加
var REDUCE_PATH           =  require("../assets/gameImg/reduce.png") // 减去
var POPUPBG_PAYMENT_PATH  =  require("../assets/gameImg/payment.png")// 支付
// 我的仓库
var POPUPBG_GOLD_PATH       =  require("../assets/gameImg/gold.png")  // 金币图标
var POPUPBG_RECHARGE_BUTTON =  require("../assets/gameImg/recharge.png")  // 充值按钮
var POPUPBG_EXTRACT_BUTTON  =  require("../assets/gameImg/extract.png") // 提币按钮
var POPUPBG_TRANSFER_BUTTON =  require("../assets/gameImg/transfer.png")  // 转账按钮
var POPUPBG_EXCHANGE_BUTTON =  require("../assets/gameImg/exchange.png")  // 兑换按钮
// 邀请好友
var POPUPBG_COPYLINK_BUTTON =  require("../assets/gameImg/copylink.png")  // 兑换按钮
// 播种记录
var POPUPBUTTON_SOWING_ACTIVE_PATH     = require('../assets/gameImg/sowing_active.png')     // 播种记录
var POPUPBUTTON_SOWING_PATH            = require('../assets/gameImg/sowing.png')    
var POPUPBUTTON_INVITE_ACTIVE_PATH     = require('../assets/gameImg/invite_active.png')     // 邀请记录
var POPUPBUTTON_INVITE_PATH            = require('../assets/gameImg/invite.png')
var POPUPBUTTON_ACCELERATE_ACTIVE_PATH = require('../assets/gameImg/accelerate_active.png') // 加速记录
var POPUPBUTTON_ACCELERATE_PATH        = require('../assets/gameImg/accelerate.png')
// page
var POPUPBUTTON_PAGE_LEFT_PATH = require('../assets/gameImg/pageLeft.png');
var POPUPBUTTON_PAGE_RIGHT_PATH = require('../assets/gameImg/pageRight.png');
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
          pageNum:11,
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
          list:[], 
          // 需要渲染的土地对象
          exampleObj:null,
          // 鼠标移入时土地的详细信息框
          landStatusBox: null,
        },
        // 左右切换按钮
        toggleButton: null
      },
      // 记录
      record:[{
        current:1,
        showItem:5,
        allpage:0,
      },
      {
        current:1,
        showItem:5,
        allpage:0,
      },
      {
        current:1,
        showItem:5,
        allpage:0,
      }],
      // 当前查看记录
      activeRecord: 0
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
        this.stage.addChild(stageBg);
        // 显示用户信息
        this.showUserInfo();
        // 显示进度条
        // this.showProgress();
        // 显示右上角功能区
        this.shop_Task_NoticenImg();
        // 获取已种植土地列表
        myFn.myAjax('get', {}, myFn.apiAddress.game.getLandList, function(res){
            if(res.data.list.length != 0){
              self.gameObj.land.list = res.data.list;
            }
            self.showLand(1);
            // 显示我的仓库&邀请好友&游戏记录
            self.showMyInformation();
            // 左右切换土地按钮
            self.gameObj.toggleButton = self.showToggleLand();
        })
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
    // 创建进度条
    showProgress: function () {
        // 时间进度文本
        this.gameObj.progress.time = creatTextObj('', '15px Arial', 'red', 230, -5);
        this.gameObj.progress.time.text = '还未播种';
        var timePrompt = creatTextObj('距离完成时间:', '15px Arial', 'red', 120, -5);
        // 进度条总长度
        var overallSchedule = creatImgObj(OVERALLSCHEDULE_PATH, 0, 20);
        // 当前进度矩形
        var drawRoundRect1 = new createjs.Graphics().beginStroke("#5bd522").beginFill("#5bd522").drawRoundRect (-535, 21, 535, 8, 4);
        this.gameObj.progress.Progressbar = new createjs.Shape(drawRoundRect1);
        // 分割区间图
        var section = creatImgObj(SECTION_PATH, 15, 20);
        // 所有元素添加到进度条盒子，并设置遮罩层
        var progress = creatViewObj([timePrompt, this.gameObj.progress.time,overallSchedule, this.gameObj.progress.Progressbar, section], 300, 30);
        var mask = new createjs.Shape();
        mask.graphics.beginFill("#000000");
        mask.graphics.drawRoundRect( 0, 20, 600, 43, 4);
        mask.x = 300;
        mask.y = 0;
        progress.mask = mask;
        // 添加到舞台中
        this.stage.addChild(progress);
    },
    // 商店&任务&公告
    shop_Task_NoticenImg: function () {
        var shopPopup = '';
        var self = this;
        // 创建商店图标,点击弹出商店
        var shopImg = creatImgObj(SHOPIMG_PATH, 0, 0);
        shopImg.addEventListener("click", function() {
          self.gameShopPopup();
        });
        // 创建任务图标,点击弹出任务
        var taskImg = creatImgObj(TASKIMG_PATH, 67, 0);
        taskImg.addEventListener("click", function() {
          self.gameShowTaskPopup();
        });
        // 创建公告图标,点击弹出公告
        var noticenImg = creatImgObj(NOTICEIMG_PATH, 135, 0);
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
        if(total_investment >= 500){
          $(".standarButton").eq(0).attr('disabled', 'true');
          $(".standarButton").eq(0).addClass('notClick');
        }
        if(total_investment >= 1000 ){
          $(".standarButton").eq(1).attr('disabled', 'true');
          $(".standarButton").eq(1).addClass('notClick');
        }
        if(total_investment >= 2000){
          $(".standarButton").eq(2).attr('disabled', 'true');
          $(".standarButton").eq(2).addClass('notClick');
        }
        if(total_investment < 500){
          $(".standarButton").eq(0).addClass('active');
        }
        if(total_investment >= 500  && total_investment < 1000){
          $(".standarButton").eq(1).addClass('active');
        }else if(total_investment >= 1000 && total_investment < 2000){
          $(".standarButton").eq(2).addClass('active');
        }else if(total_investment >= 2000){
          $(".standarButton").eq(3).addClass('active');
        }
        var shopPopup = new popup(self.stage);
        // 创建商店弹框背景
        var popupBg = creatImgObj(POPUPSHOPBG_PATH, 0, 0);
        
        // 创建商店左侧内容并加入盒子中
        var shopTitle = creatTextObj("商店", "20px Arial", "#ec9530", 270, 15);
        var BottomFrame = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
        var shopleftBox = creatViewObj([
            BottomFrame,
            creatImgObj(POPUPBG_FOODICON_PATH, 40, 60),
            creatTextObj("种子", "17px Arial", "#ec9530", 83, 235)
        ], 10, 30)
        /**
         * 创建商店右侧部分共四部分
         * 1.售价和比例
         * 2.规格选择按钮
         * 3.倍数调整按钮
         * 4.应付价格
         */
        
        // 1.第一部分售、比例、分割线创建后添加到盒子中
        var unitPrice = creatTextObj("售价：1金币", "17px Arial", "#ec9530", 0, 0);
        var proportionArray = localStorage.gameFood.split(':');
        var proportion = creatTextObj("(" + proportionArray[0] + "金币 : " + proportionArray[1] + "粮食)", "16px Arial", "red", 110, 0);
        var shopDivision = creatImgObj(DIVISION_PATH, 0, 30);
        shopDivision.scaleX = 0.6
        var priceBox = creatViewObj([unitPrice, proportion, shopDivision], 210, 55);
        // 2.第二部分创建规格选项卡调整位子
        // 显示隐藏的规格按钮div
        // 添加分割线并添加到盒子中
        // 添加规格切换事件
        var standardText = creatTextObj("规格：", "18px Arial", "#ec9530", 0, 0);
        var standard100 = new createjs.DOMElement(document.getElementById("standard100"));
        var standard500 = new createjs.DOMElement(document.getElementById("standard500"));
        standard500.x = 75;
        var standard1000 = new createjs.DOMElement(document.getElementById("standard1000"));
        standard1000.x = 150;
        var standard2000 = new createjs.DOMElement(document.getElementById("standard2000"));
        standard2000.x = 225;
        var standardNumBox = creatViewObj([standard100, standard500, standard1000, standard2000], 0, 37);
        var standardDivision = creatImgObj(DIVISION_PATH, 0, 80);
        standardDivision.scaleX = 0.6;
        document.getElementById('standarBox').style.display = 'block';        
        var standardBox = creatViewObj([standardText, standardNumBox, standardDivision], 210, 100);
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
        var selectedStandar = $('.active').val();
        var numInput = $("#number");
        var total = calculationMoney(1);
        numInput.keyup(function(){
           getBuyNum($(this));
        })
        // 计算可购买数量
        function getBuyNum(el){
            if( selectedStandar == 100 && el.val() > (500-total_investment)/100){
                el.val((500-total_investment)/100);
            }else if(selectedStandar == 500 && el.val() > Math.ceil((1000-total_investment)/500)){
               el.val(Math.ceil((1000-total_investment)/500));
            }else if(selectedStandar == 1000 && el.val() > Math.ceil((2000-total_investment)/1000)){
              el.val(Math.ceil((2000-total_investment)/1000));
            }
            money.text = calculationMoney(2);
        }
        // 调整数量
        var reduceNum = creatImgObj(REDUCE_PATH, 0, 13);
        var addNum = creatImgObj(ADD_PATH, 75, 14);
        var number = new createjs.DOMElement(document.getElementById("number"));
        // 调整数量事件
        reduceNum.addEventListener("click", function() {
            if (parseInt(numInput.val()) <= 1 || numInput.val() == '') {
                numInput.val(1);
            } else {
                numInput.val(parseInt(numInput.val()) - 1);
            }
            money.text = calculationMoney(2);
        })
        addNum.addEventListener("click", function() {
            if(numInput.val() == ''){
                numInput.val(0);
            }
            numInput.val(parseInt(numInput.val()) + 1);
            getBuyNum(numInput);
        })
        number.x = 30;
        number.y = 10;
        var adjustmentBox = creatViewObj([addNum, reduceNum, number], 210, 185);
        // 4.第四部分应付价格和支付按钮
        // 支付按钮添加点击事件弹出支付密码框
        var money = creatTextObj("应付：" + total + " 金币", "20px Arial", "#ec9530", 210, 240);
        var payButton = creatImgObj(POPUPBG_PAYMENT_PATH, 242, 280);
        // 弹出支付框
        payButton.addEventListener("click", function() {
            self.gameShowPayPopup(numInput.val(), selectedStandar,calculationMoney(1));
        })
        shopPopup.addOtherElements([popupBg, shopTitle, shopleftBox, priceBox, standardBox, adjustmentBox, money, payButton]);
        shopPopup.callBackClose = function() {
            document.getElementById("standarBox").style.display = "none";
        }
        shopPopup.setBoxSeat(283, 150);
        shopPopup.setCloseButtonSeat(545, -20);
        shopPopup.showPopup();
        // 计算支付金币数量
        // 传递1返回数值，传递2返回拼接字符串, 传递3返回购买粮食数量
        function calculationMoney(type) {
            if (type == 1) {
                return numInput.val() * selectedStandar / proportionArray[0] / proportionArray[1];
            } else if (type == 2) {
                return "应付:" + (numInput.val() * selectedStandar / proportionArray[0] / proportionArray[1]) + " 金币";
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
        alert('购买数量不能为空');
        return false;
      }else if(multiple == 0){
        alert('购买数量不能为0');
        return false;
      }
      if(self.userInfo.total_currency < num){
        alert('您的金币余额不足');
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
      var explain         = creatTextObj("*输入支付密码后点击获取获取您的邮箱验证码", "14px Arial", "red", -40, -20);
      var payTitle        = creatTextObj("支付购买", "18px Arial", "#ec9530", 245, 25);
      var pswTxetEl1 = document.getElementById("passwordText1");
      var passwordText1Lable         = creatTextObj("支付密码:", "14px Arial", "#ec9530", -37, 30);
      var passwordText1   = new createjs.DOMElement(pswTxetEl1);
      passwordText1.y = 21;
      passwordText1.x = 35;
      // 创建表单布局
      // 邮件验证码部分
      var mailCodeDom = document.getElementById('mailCode');
      var mailCode   = new createjs.DOMElement(mailCodeDom);
      mailCode.y = 80;
      mailCode.x = 35;
      var mailCodeLable = creatTextObj("邮箱验证码:", "14px Arial", "#ec9530", -50, 90);
      var getCodeButtonEL = document.getElementById('getMailCode');
      var getCodeButton = new createjs.DOMElement(getCodeButtonEL);
      getCodeButton.y = 80;
      getCodeButton.x = 190;
      // 添加点击事件验证支付密码表单并发送邮件
      getCodeButtonEL.addEventListener("click" , function(){
           if(pswTxetEl1.value == ''){
              alert('支付密码不能为空')
           }else{
              myFn.myAjax('get',{pwd:pswTxetEl1.value}, myFn.apiAddress.accountSafety.verifySafetyPassword, function(res){
                alert("验证码已发送至您的邮箱请查收");
              })
           }
      })
      // 添加所有已创建好元素到盒子中 
      var passwordTextBox = creatViewObj([explain,passwordText1,passwordText1Lable,mailCode,mailCodeLable,getCodeButton], 180, 100);
      // 确认购买提交静态验证码判断是否正确
      var yesPayButton = creatImgObj(POPUPPYESPAY_PATH, 240, 250);
      
      yesPayButton.addEventListener("click", function() {
          // 验证邮箱验证码
          myFn.myAjax('get',{emailcode:mailCodeDom.value}, myFn.apiAddress.accountSafety.verifySafetyMail, function(res){
            // 播种
            myFn.myAjax('get',{
              number:selectedStandar,
              num:multiple,
            }, 
            myFn.apiAddress.game.seed, 
            function(res){
              myFn.myAjax('get',{id:res.data.list[0].id}, myFn.apiAddress.game.getflmessage, function(msg){
                  self.gameObj.land.list.push(msg.data.list);
                  self.showLand();
                  alert('播种成功');
                  if(self.gameObj.land.list.length % self.gameObj.land.pageNum == 1){
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
      payPassview.setCloseButtonSeat(545, -20);
      payPassview.showPopup();
    },
    gameShowTaskPopup:function(){
      // 添加弹出层对象
      var noticPopup = new popup(this.stage);
      // 弹出框背景,标题设置
      var noticeBg = new creatImgObj(POPUP_NOTICEBG, 0 ,0);
      var noticTitle = new creatTextObj('任务', '20px Arial', '#e8b71b', 230, 20);
      var textList = [];
      textList.push(creatViewObj([creatTextObj('一、运动5000步', '15px Arial', '#ccc', 0, 0)], 30, 0));
      var noticList = creatViewObj(textList, 0, 80);
      noticPopup.addOtherElements([noticeBg, noticTitle, noticList]);
      noticPopup.setBoxSeat(320, 150);
      noticPopup.setCloseButtonSeat(490, -20);
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
      var noticTitle = new creatTextObj('公告', '20px Arial', '#e8b71b', 230, 20);
      
      myFn.myAjax('get', {page:1,pagenumber:3}, myFn.apiAddress.game.notice, function(res){
        var textList = [];
        for(var i=0; i<res.data.list.length; i++){
          textList.push(creatViewObj([creatTextObj(res.data.list[i].time, '16px Arial', '#e8b71b', 0, 0),creatTextObj(res.data.list[i].bulletin, '15px Arial', '#ccc', 0, 25)], 30, 0+i*55));
        }
        var noticList = creatViewObj(textList, 0, 80);
        noticPopup.addOtherElements([noticeBg, noticTitle, noticList]);
        noticPopup.setBoxSeat(320, 150);
        noticPopup.setCloseButtonSeat(490, -20);
        noticPopup.showPopup();
      });
    },
    /*
     * 显示土地并返回土地
     * 返回一个包含add方法的土地盒子
     * add方法用来添加土地
     * 参数 1.页码，2.每页显示数量
     */
      showLand: function(){
        var self = this;
        // 创建默认的土地列表
        var defaultList = [];
        
        for(var i=0; i<12; i++){
          if(i<4){
            defaultList.push(creatImgObj(LANDMG_PATH, i*87 , i*43));
          }else if(i<8){
            defaultList.push(creatImgObj(LANDMG_PATH, (i-4)*87 - 90 , (i-4)*43 + 45));
          }else if(i<11){
            defaultList.push(creatImgObj(LANDMG_PATH, (i-8)*87 - 180 , (i-8)*43 + 90));
          }
        }
        var defaultLandView = creatViewObj(defaultList, 0, 0);
        // 每一快地可种植数量(每页可显示数量);
        self.gameObj.land.pageNum = defaultLandView.children.length;
        // 总页数
        self.gameObj.land.page = Math.ceil(self.gameObj.land.list.length / defaultLandView.children.length);
        // 已种植土地列表渲染
        self.gameObj.land.exampleObj = creatViewObj(self.landSeat(self.gameObj.land.currentPage), -8, -57);
        defaultLandView.addEventListener("mouseover", function(e){
            // 计算当前查看区域在数组中的下标
            var index = defaultLandView .children.indexOf(e.target);
            // 计算翻页当前位子加上每页显示数量
            var index = index + self.gameObj.land.pageNum*(self.gameObj.land.currentPage-1)
            if(index < self.gameObj.land.list.length && lastPopup == ''){
              self.showLandStatus(index, e.target.x, e.target.y);
            }
        });
        defaultLandView.addEventListener("mouseout", function(e){
          if(self.gameObj.land.landStatusBox != null && lastPopup === self.gameObj.land.landStatusBox){
            self.gameObj.land.landStatusBox.closePopup();
          }
        });
        // 扩建土地
        var extensionVime = creatViewObj([creatImgObj(EXTENSION_PATH1, 3 * 87 - 180 , 3 * 43 + 90)], 0, 0);
        var extension = creatImgObj(EXTENSION_PATH, 3 * 87 - 130 , 3 * 43 + 70);
        extensionVime.addChild(extension);
        extension.addEventListener("click", function(){
          self.gameShopPopup();
        })
        var landView = creatViewObj([defaultLandView, self.gameObj.land.exampleObj, extensionVime], 480, 310);
        this.stage.addChild(landView);
        // console.log(self.gameObj.land.exampleObj.children  = self.landSeat(2));
    },
    // 计算已播种显示位子
    // 参数1.当前需要显示页码
    landSeat:function(currentPage){
      var self = this;
      var growList = [];
      // 显示数量
      var landlenth = 0;
      if (currentPage < this.gameObj.land.page) {
        landlenth = this.gameObj.land.pageNum;
      }else{
        landlenth = this.gameObj.land.list.length - this.gameObj.land.pageNum * (currentPage-1);
      }
      for(var i=0; i < landlenth; i++){
        if(i<4){
          growList.push(creatImgObj(this.gameObj.land.statusImg[parseInt(this.gameObj.land.list[((currentPage-1)*self.gameObj.land.pageNum) + i].week)], i*89 , i*43));
        }else if(i<8){
          growList.push(creatImgObj(this.gameObj.land.statusImg[parseInt(this.gameObj.land.list[((currentPage-1)*self.gameObj.land.pageNum) + i].week)], (i-4)*89 - 90 , (i-4)*43 + 45));
        }else if(i<11){
          growList.push(creatImgObj(this.gameObj.land.statusImg[parseInt(this.gameObj.land.list[((currentPage-1)*self.gameObj.land.pageNum) + i].week)], (i-8)*89 - 180 , (i-8)*43 + 90));
        }
      }
      return growList;
    },
    // 提供当前所需要显示详情信息的土地下表.
    // 显示数组中对应的详细信息
    showLandStatus:function(index, x, y){
      var self = this;
      var landStatusBg = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#ccc").drawRect(0, 0, 300, 100));
      var statusText1 = creatTextObj("播种时间：" + this.gameObj.land.list[index].crt_time, "15px Arial", "black", 7, 10);
      var statusText2 = creatTextObj("播种数额：" + this.gameObj.land.list[index].qnt, "15px Arial", "black", 7, 31);
      var statusText3 = creatTextObj("已获收益：" + this.gameObj.land.list[index].income, "15px Arial", "black", 7, 53);
      var statusText4 = creatTextObj("加速次数：" + this.gameObj.land.list[index].speed_cnt + "次(" + this.gameObj.land.list[index].speed_week + "周)", "15px Arial", "black", 7, 75);
      var landStatusBox = creatViewObj([landStatusBg,statusText1,statusText2,statusText3,statusText4],0,0);
      
      var landStatus = new popup(self.stage);
      landStatus.addOtherElements([landStatusBox]);
      landStatus.elObjs.closeButton.alpha = 0;
      landStatus.setBoxSeat(500 + x, 200 + y);
      landStatus.showPopup();
      this.gameObj.land.landStatusBox = landStatus
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
      var leftLandmg = creatImgObj(EXTENSIONL_PATH, 170, 350);
      var rightLandmg = creatImgObj(EXTENSIONR_PATH, 920, 380);
      leftLandmg.alpha = 0;
      if(self.gameObj.land.list.length > 11){
        rightLandmg.alpha = 1;
      }else{
        rightLandmg.alpha = 0;
      }
      // 上一块切换事件
      leftLandmg.addEventListener("click", function(){
        if(1 < self.gameObj.land.currentPage){
          self.gameObj.land.currentPage--;
          self.gameObj.land.exampleObj.children = self.landSeat(self.gameObj.land.currentPage);
        }
        if(1 == self.gameObj.land.currentPage){
          leftLandmg.alpha = 0;
        }
        rightLandmg.alpha = 1;
        // rightLandmg.alpha = 1;
        // self.selectLand = self.selectLand - 1 ;
        // leftLandmg.isShow();
      });
      // 下一块块切换事件
      rightLandmg.addEventListener("click", function(){
        if(self.gameObj.land.page > self.gameObj.land.currentPage){
          self.gameObj.land.currentPage++;
          self.gameObj.land.exampleObj.children = self.landSeat(self.gameObj.land.currentPage);
        }
        if(self.gameObj.land.page == self.gameObj.land.currentPage){
          rightLandmg.alpha = 0;
        }
        leftLandmg.alpha = 1;
        // leftLandmg.alpha = 1;
        // self.selectLand = self.selectLand + 1 ;
        // rightLandmg.isShow();
      });
      // leftLandmg.isShow = function(){
      //   if(self.selectLand == 0){
      //     this.alpha = 0;
      //   }
      // }
      // 
      // 
  
      // rightLandmg.isShow = function(){
      //   if(self.lands.length > 1 && self.selectLand  < (self.lands.length - 1)){
      //     this.alpha = 1;
      //   }else{
      //     this.alpha = 0;
      //   }
      // }
      // leftLandmg.isShow();
      // rightLandmg.isShow();
      this.stage.addChild(leftLandmg, rightLandmg); 
      return {left:leftLandmg,right:rightLandmg}
    },
 
    // 创建游戏宝典
    showCourse: function () {
      var self = this;
        var canonImg = creatImgObj(CANONIMG_PATH, 0, 0);
        var course = creatViewObj([canonImg], 40, 560);
        canonImg.addEventListener("click", function() {
            var noticPopup = new popup(self.stage);
            var noticeBg = new creatImgObj(POPUP_NOTICEBG, 0 ,0);
            var noticTitle = new creatTextObj('游戏宝典', '20px Arial', '#e8b71b', 210, 20);
            myFn.myAjax('get', {page:1,pagenumber:5}, myFn.apiAddress.game.course, function(res){
              var textList = [];
              for(var i=0; i<res.data.list.length; i++){
                textList.push(creatViewObj([creatTextObj(res.data.list[i].question, '16px Arial', '#e8b71b', 0, 0),creatTextObj(res.data.list[i].answer, '15px Arial', '#ccc', 0, 25)], 30, 0+i*55));
              }
              var noticList = creatViewObj(textList, 0, 80);
              noticPopup.addOtherElements([noticeBg, noticTitle, noticList]);
              noticPopup.setBoxSeat(320, 150);
              noticPopup.setCloseButtonSeat(490, -20);
              noticPopup.showPopup();
            }) 
        })
        this.stage.addChild(course);
    },
    // 底部我的仓库& 邀请好友 &游戏记录
    showMyInformation: function () {
        var self = this;
        var myWarehouseImg = creatImgObj(MYWAREHOUSE_PATH, 370, 350);
        myWarehouseImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
        myWarehouseImg.addEventListener("click", function() {
            var popupBg = creatImgObj(POPUPSHOPBG_PATH, 0, 0);
            var popup_exchange = creatImgObj(POPUPBG_EXCHANGE_BUTTON, 55, 270);
            // 跳转兑换页面
            popup_exchange.addEventListener("click", function(){
              self.$router.push('shop')
            })
            var BottomFrame = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
            var shopleftBox = creatViewObj([
                BottomFrame,
                creatImgObj(POPUPBG_FOODICON_PATH, 40, 60),
                creatTextObj("粮食:" + self.gameObj.goodFood, "17px Arial", "#ec9530", 37, 235),
                popup_exchange
            ], 60, 10)
            var popup_recharge = creatImgObj(POPUPBG_RECHARGE_BUTTON, 0, 0);
            var popup_extract = creatImgObj(POPUPBG_EXTRACT_BUTTON, 100, 0);
            // 提币
            popup_extract.addEventListener("click", function(){
              self.$router.push({path:"account/index"});
            })
            // 转账
            var popup_transfer = creatImgObj(POPUPBG_TRANSFER_BUTTON, 200, 0);
             popup_transfer.addEventListener("click", function(){
              self.$router.push({path:"account/index"});
            })
            var popup_button_box = creatViewObj([popup_recharge, popup_extract, popup_transfer], 270, 280);
            var BottomFrameRight = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
            var shopRightBox = creatViewObj([
                BottomFrameRight,
                creatImgObj(POPUPBG_GOLD_PATH, 40, 60),
                creatTextObj("金币:" + self.gameObj.gameGold.text, "17px Arial", "#ec9530", 50, 235)
            ], 310, 10)
            var myWarehousePopup = new popup(self.stage);
            myWarehousePopup.addOtherElements([popupBg, shopleftBox, shopRightBox, popup_button_box]);
            myWarehousePopup.setBoxSeat(283, 150);
            myWarehousePopup.setCloseButtonSeat(545, -20);
            myWarehousePopup.showPopup();
        })
        var InvitationImg = creatImgObj(INVITATION_PATH, 468, 350);
        InvitationImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
        // 邀请好友弹出层
        InvitationImg.addEventListener("click", function() {
          var codeInput = document.getElementById('InvitationUrl');
          myFn.myAjax('get', {}, myFn.apiAddress.inviteCode.create, function(res){
            codeInput.value = res.data;
          })
          var InvitationPopup =  new popup(self.stage);
          var invitationPoputBg = creatImgObj(POPUP_HAS_TITLE_PATH);
          var InvitationTitle = creatTextObj("邀请好友", "17px Arial", "#ec9530", 250, 25);
          var InvitationContent = creatTextObj("使用下面的链接邀请好友注册并参与游戏!即可获得好友投资额除以您的投资额剩余5%的直推收益", "13px Arial", "#ec9530", 63, 110);
          InvitationContent.lineHeight = 20;
          InvitationContent.lineWidth = 450;
          document.getElementById('InvitationUrl').style.display = "block";
          var InvitationUrl = new createjs.DOMElement(codeInput);
          InvitationUrl.x = 90;
          InvitationUrl.y = 180;
          var copylink = creatImgObj(POPUPBG_COPYLINK_BUTTON, 240, 275);
          var Warn_isCopy = creatTextObj("复制成功", "17px Arial", "#ec9530", 250, 240);
          copylink.addEventListener("click", function(){
              var Url2=document.getElementById("InvitationUrl");
              Url2.select(); // 选择对象
              document.execCommand("Copy"); // 执行浏览器复制命令
              alert("复制成功");
              myFn.myAjax('get', {}, myFn.apiAddress.inviteCode.create, function(res){
                codeInput.value = res.data;
              })
            Warn_isCopy.alpha = 1;
        })
        Warn_isCopy.alpha = 0;
          
            InvitationPopup.addOtherElements([invitationPoputBg, InvitationTitle, InvitationContent, InvitationUrl, copylink, Warn_isCopy]);
            InvitationPopup.callBackClose = function() {
                document.getElementById("InvitationUrl").style.display = "none";
            }
            InvitationPopup.setBoxSeat(283, 150);
            InvitationPopup.setCloseButtonSeat(545, -20);
            InvitationPopup.showPopup();
        })
        var recordImg = creatImgObj(RECORD_PATH, 550, 358);
        recordImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
        recordImg.addEventListener("click", function() {
        var recordPoputBg = creatImgObj(POPUP_HAS_TITLE_PATH);
        // 播种记录
        var planting_record_button = creatImgObj(POPUPBUTTON_SOWING_PATH, -117, 0);
        var planting_record_active_button = creatImgObj(POPUPBUTTON_SOWING_ACTIVE_PATH, -117, 0);
        // 每行数据数组
        var planting_record_content_row = creatViewObj([], 0, 70);
        var planting_record_content = creatViewObj([
            // 表格头
            creatViewObj([
              creatTextObj("播种时间", "17px Arial", "#ec9530", 120, 25),
              creatTextObj("种子数量", "17px Arial", "#ec9530", 380, 25)
            ], 0, 0),
            // 表格内容行
            planting_record_content_row
          ], 0, 0);
        
        planting_record_content.alpha = 1;
        planting_record_button.addEventListener("click", function(){
          self.activeRecord = 0;
          toggleRecord();
          planting_record_content.alpha = 1;
          planting_record_active_button.alpha = 1;
        })
        // 邀请记录
        var invite_record_button = creatImgObj(POPUPBUTTON_INVITE_PATH, -116, 36);
        var invite_record_active_button = creatImgObj(POPUPBUTTON_INVITE_ACTIVE_PATH, -116, 36);
        var invite_record_content_row = creatViewObj([], 0, 70);
        var invite_record_content = creatViewObj([
            // 表格头
            creatViewObj([
              creatTextObj("用户", "17px Arial", "#ec9530", 95, 25),
              creatTextObj("投资数量", "17px Arial", "#ec9530", 250, 25),
              creatTextObj("投资时间", "17px Arial", "#ec9530", 400, 25)
            ], 0, 0),
            // 表格内容行
            invite_record_content_row
          ])
        
        invite_record_button.addEventListener("click", function(){
          self.activeRecord = 1;
          toggleRecord();
          invite_record_content.alpha = 1;
          invite_record_active_button.alpha = 1;
        })
        // 加速记录
        var speed_record_button = creatImgObj(POPUPBUTTON_ACCELERATE_PATH, -116, 72);
        var speed_record_active_button = creatImgObj(POPUPBUTTON_ACCELERATE_ACTIVE_PATH, -116, 72);
        var speed_record_content_row = creatViewObj([], 0, 70);
        var speed_record_content = creatViewObj([
            // 表格头
            creatViewObj([
              creatTextObj("加速时间", "17px Arial", "#ec9530", 80, 25),
              creatTextObj("类型", "17px Arial", "#ec9530", 210, 25),
              creatTextObj("加速比", "17px Arial", "#ec9530", 275, 25),
              creatTextObj("时间收益", "17px Arial", "#ec9530", 350, 25),
              creatTextObj("粮食收益", "17px Arial", "#ec9530", 450, 25)
            ], 0, 0),
            // 表格内容行
            speed_record_content_row
          ])
        myFn.myAjax('get', {page:1,pagenumber:5}, myFn.apiAddress.gameRecord.mySeed, function(res){
          var textList = [];
          for(var i=0; i<res.data.list.length; i++){
            textList.push(creatViewObj([creatTextObj(res.data.list[i].time, "17px Arial", "#ec9530", 60, 0),creatTextObj(res.data.list[i].qnt, "17px Arial", "#ec9530", 400, 0),creatImgObj(DIVISION_PATH, 30, 30)], 0, 0+i*55));
          }
          self.record[0].allpage = res.data.totalpage;
          // 播种列表每行数据
          planting_record_content_row.children = textList;
        myFn.myAjax('get', {page:1,pagenumber:5}, myFn.apiAddress.gameRecord.myInvite, function(res){
          var textList = [];
          for(var i=0; i<res.data.list.length; i++){
            textList.push(creatViewObj([
                creatTextObj(res.data.list[i].username, "17px Arial", "#ec9530", 50, 0),
                creatTextObj(res.data.list[i].num, "17px Arial", "#ec9530", 270, 0),
                creatTextObj(res.data.list[i].crt_time, "17px Arial", "#ec9530", 370, 0),
                creatImgObj(DIVISION_PATH, 30, 30)
              ], 0, 0+i*55));
          }
          self.record[1].allpage = res.data.totalpage;
          // 播种列表每行数据
          invite_record_content_row.children = textList;
        myFn.myAjax('get', {page:1,pagenumber:5}, myFn.apiAddress.gameRecord.mySeedAccelerate, function(res){
          var textList = [];
          for(var i=0; i<res.data.list.length; i++){
            textList.push(creatViewObj([
                // creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 50, 0),
                creatTextObj(res.data.list[i].time, "17px Arial", "#ec9530", 40, 0),
                creatTextObj(res.data.list[i].type, "17px Arial", "#ec9530", 210, 0),
                creatTextObj(res.data.list[i].rate, "17px Arial", "#ec9530", 280, 0),
                creatTextObj(res.data.list[i].speedday, "17px Arial", "#ec9530", 370, 0),
                creatTextObj(res.data.list[i].qnt, "17px Arial", "#ec9530", 460, 0),
                creatImgObj(DIVISION_PATH, 30, 30)
              ], 0, 0+i*55));
          }
          self.record[2].allpage = res.data.totalpage;
            // 播种列表每行数据
            speed_record_content_row.children = textList;
            recordPopup.showPopup();
            });
            
          });
          
        });
        speed_record_content.alpha = 0;
        speed_record_button.addEventListener("click", function(){
          self.activeRecord = 2;
          toggleRecord();
          speed_record_content.alpha = 1;
          speed_record_active_button.alpha = 1;
        })
          /* page */
          var pageLeft = creatImgObj(POPUPBUTTON_PAGE_LEFT_PATH, 15, 290,);
          var pageRight = creatImgObj(POPUPBUTTON_PAGE_RIGHT_PATH, 530, 290);
          pageLeft.addEventListener("click", function(){
             self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) - 1;
            if(self.activeRecord == 0){
              if(self.record[self.activeRecord].current == 0){
                self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) + 1;
                alert('已经是第一页了');
                return false;
              }
              myFn.myAjax('get', {page:self.record[self.activeRecord].current,pagenumber:5}, myFn.apiAddress.gameRecord.mySeed, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                  textList.push(creatViewObj([creatTextObj(res.data.list[i].time, "17px Arial", "#ec9530", 60, 0),creatTextObj(res.data.list[i].qnt, "17px Arial", "#ec9530", 400, 0),creatImgObj(DIVISION_PATH, 30, 30)], 0, 0+i*55));
                }
                planting_record_content_row.children = textList;
              });
            }else if(self.activeRecord == 1){
              if(self.record[self.activeRecord].current == 0){
                self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) + 1;
                 alert('已经是第一页了');
                return false;
              }
              myFn.myAjax('get', {page:self.record[self.activeRecord].current,pagenumber:5}, myFn.apiAddress.gameRecord.myInvite, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                  textList.push(creatViewObj([
                      creatTextObj(res.data.list[i].username, "17px Arial", "#ec9530", 50, 0),
                      creatTextObj(res.data.list[i].num, "17px Arial", "#ec9530", 270, 0),
                      creatTextObj(res.data.list[i].crt_time, "17px Arial", "#ec9530", 370, 0),
                      creatImgObj(DIVISION_PATH, 30, 30)
                    ], 0, 0+i*55));
                }
                // 播种列表每行数据
                invite_record_content_row.children = textList;
              });
            }else if(self.activeRecord == 2){
              if(self.record[self.activeRecord].current == 0){
                self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) + 1;
                 alert('已经是第一页了');
                return false;
              }
               myFn.myAjax('get', {page:self.record[self.activeRecord].current,pagenumber:5}, myFn.apiAddress.gameRecord.mySeedAccelerate, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                  textList.push(creatViewObj([
                      // creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 50, 0),
                      creatTextObj(res.data.list[i].time, "17px Arial", "#ec9530", 40, 0),
                      creatTextObj(res.data.list[i].type, "17px Arial", "#ec9530", 210, 0),
                      creatTextObj(res.data.list[i].rate, "17px Arial", "#ec9530", 280, 0),
                      creatTextObj(res.data.list[i].speedday, "17px Arial", "#ec9530", 370, 0),
                      creatTextObj(res.data.list[i].qnt, "17px Arial", "#ec9530", 460, 0),
                      creatImgObj(DIVISION_PATH, 30, 30)
                    ], 0, 0+i*55));
                }
                  // 播种列表每行数据
                  speed_record_content_row.children = textList;
                })
            }
          });
          pageRight.addEventListener("click", function(){
            self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) + 1;
            if(self.activeRecord == 0){
              if(self.record[self.activeRecord].current > self.record[self.activeRecord].allpage){
                self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) - 1;
                alert('没有更多数据了');
                return false;
              }
              myFn.myAjax('get', {page:self.record[self.activeRecord].current,pagenumber:5}, myFn.apiAddress.gameRecord.mySeed, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                  textList.push(creatViewObj([creatTextObj(res.data.list[i].time, "17px Arial", "#ec9530", 60, 0),creatTextObj(res.data.list[i].qnt, "17px Arial", "#ec9530", 400, 0),creatImgObj(DIVISION_PATH, 30, 30)], 0, 0+i*55));
                }
                planting_record_content_row.children = textList;
              });
            }else if(self.activeRecord == 1){
              if(self.record[self.activeRecord].current > self.record[self.activeRecord].allpage){
                self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) - 1;
                alert('没有更多数据了');
                return false;
              }
              myFn.myAjax('get', {page:self.record[self.activeRecord].current,pagenumber:5}, myFn.apiAddress.gameRecord.myInvite, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                  textList.push(creatViewObj([
                      creatTextObj(res.data.list[i].username, "17px Arial", "#ec9530", 50, 0),
                      creatTextObj(res.data.list[i].num, "17px Arial", "#ec9530", 270, 0),
                      creatTextObj(res.data.list[i].crt_time, "17px Arial", "#ec9530", 370, 0),
                      creatImgObj(DIVISION_PATH, 30, 30)
                    ], 0, 0+i*55));
                }
                // 播种列表每行数据
                invite_record_content_row.children = textList;
              });
            }else if(self.activeRecord == 2){
              if(self.record[self.activeRecord].current > self.record[self.activeRecord].allpage){
                self.record[self.activeRecord].current = parseInt(self.record[self.activeRecord].current) - 1;
                alert('没有更多数据了');
                return false;
              }
               myFn.myAjax('get', {page:self.record[self.activeRecord].current,pagenumber:5}, myFn.apiAddress.gameRecord.mySeedAccelerate, function(res){
                var textList = [];
                for(var i=0; i<res.data.list.length; i++){
                  textList.push(creatViewObj([
                      // creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 50, 0),
                      creatTextObj(res.data.list[i].time, "17px Arial", "#ec9530", 40, 0),
                      creatTextObj(res.data.list[i].type, "17px Arial", "#ec9530", 210, 0),
                      creatTextObj(res.data.list[i].rate, "17px Arial", "#ec9530", 280, 0),
                      creatTextObj(res.data.list[i].speedday, "17px Arial", "#ec9530", 370, 0),
                      creatTextObj(res.data.list[i].qnt, "17px Arial", "#ec9530", 460, 0),
                      creatImgObj(DIVISION_PATH, 30, 30)
                    ], 0, 0+i*55));
                }
                  // 播种列表每行数据
                  speed_record_content_row.children = textList;
                })
            }
          })
          var recordPopup = new popup(self.stage);
          recordPopup.addOtherElements([recordPoputBg, 
              // 添加播种记录元素
              planting_record_button,
              planting_record_active_button, 
              planting_record_content, 
              // 添加播种邀请元素
              invite_record_button,
              invite_record_active_button, 
              invite_record_content, 
              // 添加播种收益元素
              speed_record_button, 
              speed_record_active_button, 
              speed_record_content,
              // page
              pageLeft,
              pageRight 
            ]);
            recordPopup.setBoxSeat(283, 150);
            recordPopup.setCloseButtonSeat(545, -20);
            
            function toggleRecord(){
              planting_record_button = planting_record_button;
              planting_record_content.alpha = 0;
              planting_record_active_button.alpha = 0;
              invite_record_button = invite_record_button;
              invite_record_content.alpha = 0;
              invite_record_active_button.alpha = 0;
              speed_record_button = speed_record_button;
              speed_record_content.alpha = 0;
              speed_record_active_button.alpha = 0;
            }
            toggleRecord();
            planting_record_content.alpha = 1;
            planting_record_active_button.alpha = 1;
        })
        var decorateBanch = creatImgObj(DECORATE_BENCH, 363, 415);
        var bottomButton = creatViewObj([myWarehouseImg, InvitationImg, recordImg, decorateBanch], 100, 195);
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
    }
  .gameBox{
    width:1200px;
    height:705px;
    border-radius: 8px;
    margin: auto;
    display: block;
    margin-top: 100px;
    background:url('../assets/gameImg/border.png');
    padding: 29px 29px;
    box-sizing: border-box;
    margin-top: 0px;
  }
  .notClick{
    border-color: #4b4b4b !important;
    color: #4b4b4b !important;
  }
  .standarButton, #number, .passwordText{
    width: 60px;
    height: 30px;
    font-size: 1.1em;
    color: #7c7674;
    border-color: inherit;
    border-style: solid;
    border-width: 0.9px;
    background: #161413;
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
    width: 40px;
    border:none;
    color: #484848;
    padding-left: 10px;
  }
  .active{
    color: #e8b71b !important;
  }
  #InvitationUrl{
    width: 400px;
    height: 40px;
    background: #161413;
    border: none;
    color: #e8b71b;
    padding: 10px 5px;
    display: none;
    font-size: 16px;
  }
</style>
