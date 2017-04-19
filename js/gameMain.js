
var stage = '';

// 舞台背景基本素材图片路径
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
var LANDMG_PATH          = require('../assets/gameImg/land.png')         // 土地
var EXTENSIONL_PATH      = require('../assets/gameImg/extensionL.png')   // 扩建上一块
var EXTENSIONR_PATH      = require('../assets/gameImg/extensionR.png')   // 扩建下一块

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


// 页面加载完成后初始化舞台设置并开始游戏
var init = function(){
    // 开始创建舞台
    stage = new createjs.Stage(document.getElementById('canvas'));
    // 开启鼠标移入事件
    stage.enableMouseOver();
    // // 设置FPS
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(30);
    // 游戏开始
    start();
}

function handleTick(e) {
    stage.update();
}

var currentProgress = ''

// 开始游戏初始化元素&逻辑
function start() {

    // 创建舞台背景
    var stageBg = new createjs.Bitmap(FARMBG_PATH);
    stage.addChild(stageBg);
    // 显示用户信息
    showUserInfo();
    // 显示进度条
    currentProgress = showProgress();
    // 显示土地
    showLandmg();
    // 显示右上角功能区
    showShop();
    // 显示游戏宝典
    showCourse();
    // 显示我的仓库&邀请好友&游戏记录
    showMyInformation();
}

// 创建土地
function showLandmg(){
  var landmg = creatImgObj(LANDMG_PATH, 0, 0);
  var landmgBox = creatViewObj([landmg], 230, 395);
  var leftLandmg = creatImgObj(EXTENSIONL_PATH, 120, 500);
  var rightLandmg = creatImgObj(EXTENSIONR_PATH, 950, 500);
  landmg.addEventListener("click", function(){
        /**
         * 后期要优化
         * 
         */
/************************************************************************************************************************/
        var shopPopup = new popup();
        // 食物比例
        var foodstuffProportion = 2;
        // 金币比例
        var goldProportion = 1

        // 创建商店弹框背景
        var popupBg = creatImgObj(POPUPSHOPBG_PATH, 0, 0);

        // 创建商店左侧内容并加入盒子中
        var BottomFrame = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
        var shopleftBox = creatViewObj([
            BottomFrame,
            creatImgObj(POPUPBG_FOODICON_PATH, 40, 60),
            creatTextObj("粮食", "17px Arial", "#ec9530", 83, 235)
        ], 10, 20)

        // 创建商店右侧内容并加入盒子
        // 创建价格比例
        var unitPrice = creatTextObj("1金币", "17px Arial", "#ec9530", 0, 0);
        var proportion = creatTextObj("(1金币:2粮食)", "16px Arial", "red", 55, 0);
        // 分割线
        var shopDivision = creatImgObj(DIVISION_PATH, 0, 30);
        shopDivision.scaleX = 0.6
        var priceBox = creatViewObj([unitPrice, proportion, shopDivision], 210, 45);

        // 创建规格参数
        var standardText = creatTextObj("规格：", "18px Arial", "#ec9530", 0, 0);
        var standard100 = new createjs.DOMElement(document.getElementById("standard100"));
        var standard500 = new createjs.DOMElement(document.getElementById("standard500"));
        standard500.x = 75;
        var standard1000 = new createjs.DOMElement(document.getElementById("standard1000"));
        standard1000.x = 150;
        var standard2000 = new createjs.DOMElement(document.getElementById("standard2000"));
        standard2000.x = 225;
        var standardNumBox = creatViewObj([standard100, standard500, standard1000, standard2000], 0, 37);
        // 分割线
        var standardDivision = creatImgObj(DIVISION_PATH, 0, 80);
        standardDivision.scaleX = 0.6
        
        var standardBox = creatViewObj([standardText, standardNumBox, standardDivision], 210, 90);

        // 总价&价格
        var selectedStandar = 100;
        var numInput = $("#number");
        var total = calculationMoney(1);
        // 切换规格事件并选中
        $('.standarButton').click(function() {
            $('.standarButton').removeClass('active');
            $(this).addClass('active');
            selectedStandar = $(this).val();
            money.text = calculationMoney(2);
        })


        // 调整数量
        var reduceNum = creatImgObj(REDUCE_PATH, 0, 13);
        var addNum = creatImgObj(ADD_PATH, 70, 10);
        var number = new createjs.DOMElement(document.getElementById("number"));
        // 调整数量事件
        reduceNum.addEventListener("click", function() {
            if (parseInt(numInput.val()) <= 1) {
                numInput.val(1);
            } else {
                numInput.val(parseInt(numInput.val()) - 1);
            }
            money.text = calculationMoney(2);
        })
        addNum.addEventListener("click", function() {
            numInput.val(parseInt(numInput.val()) + 1);
            money.text = calculationMoney(2);
        })
        number.x = 20;
        var adjustmentBox = creatViewObj([addNum, reduceNum, number], 210, 185);

        // 总价格Text
        var money = creatTextObj("$:" + total + " 金币", "20px Arial", "#ec9530", 210, 232);

        // 支付button
        var payButton = creatImgObj(POPUPBG_PAYMENT_PATH, 242, 280);
        payButton.addEventListener("click", function() {
            document.getElementById("standarBox").style.display = "none";
            document.getElementById("passwordTextBox").style.display = "block";

            var payPass = (function() {
                var payPassBg = creatImgObj(POPUPPAYBG_PATH, 0, 0);
                var payTitle = creatTextObj("请输入安全支付密码", "18px Arial", "#ec9530", 200, 25);
                var passwordText1 = new createjs.DOMElement(document.getElementById("passwordText1"));
                var passwordText2 = new createjs.DOMElement(document.getElementById("passwordText2"));
                passwordText2.x = 70;
                var passwordText3 = new createjs.DOMElement(document.getElementById("passwordText3"));
                passwordText3.x = 140;
                var passwordText4 = new createjs.DOMElement(document.getElementById("passwordText4"));
                passwordText4.x = 210;
                var passwordText5 = new createjs.DOMElement(document.getElementById("passwordText5"));
                passwordText5.x = 280;
                var passwordText6 = new createjs.DOMElement(document.getElementById("passwordText6"));
                passwordText6.x = 350;
                var passwordTextBox = creatViewObj([passwordText1, passwordText2, passwordText3, passwordText4, passwordText5, passwordText6], 80, 130);
                var msgText = creatTextObj(" ", "16px Arial", "red", 247, 200);

                var yesPayButton = creatImgObj(POPUPPYESPAY_PATH, 68, 0);
                yesPayButton.addEventListener("click", function() {
                        msgText.text = "密码错误";
                        payPassview.closePopup();
                    })
                    // var nosPayButton = creatImgObj(POPUPPNOPAY_PATH, 0, 0);
                var isPayButton = creatViewObj([yesPayButton], 170, 250);


                var payPassview = new popup();
                payPassview.addOtherElements([payPassBg, payTitle, passwordTextBox, msgText, isPayButton]);
                payPassview.callBackClose = function() {
                    document.getElementById("passwordTextBox").style.display = "none"
                    document.getElementById("standarBox").style.display = "block";
                }
                payPassview.setBoxSeat(283, 150);
                payPassview.setCloseButtonSeat(-105, -20);
                // payPassview.setCloseButtonSeat(545, -20);
                payPassview.showPopup();
            })();

            // 弹出支付密码层

            // alert(calculationMoney(1));
        })

        // 显示隐藏的input
        document.getElementById('standarBox').style.display = 'block';

        
        shopPopup.addOtherElements([popupBg,shopleftBox,priceBox,standardBox, adjustmentBox, money, payButton]);
        shopPopup.callBackClose = function() {
            document.getElementById("standarBox").style.display = "none";
        }
        shopPopup.setBoxSeat(283, 150);
        shopPopup.setCloseButtonSeat(545, -20);
        shopPopup.showPopup();

        // 计算支付金币数量
        // 等于传递1返回数值，传递2返回拼接字符串
        function calculationMoney(type) {
            if (type == 1) {
                return numInput.val() * selectedStandar / foodstuffProportion / goldProportion;
            } else if (type == 2) {
                return "$:" + (numInput.val() * selectedStandar / foodstuffProportion / goldProportion) + " 金币";
            }
        }
  })
/************************************************************************************************************************/

  // 上一块切换事件
  leftLandmg.addEventListener("click", function(){
    // currentProgress.x = 536
    currentProgress.x = 236
  });
  leftLandmg.addEventListener("mouseover", function(e){
    e.target.alpha = .5;
  });
  leftLandmg.addEventListener("mouseout", function(e){
    e.target.alpha = 1;
  });

  // 下一块块切换事件
  rightLandmg.addEventListener("mouseover", function(e){
    e.target.alpha = .5;
  });
  rightLandmg.addEventListener("mouseout", function(e){
    e.target.alpha = 1;
  });
  stage.addChild(leftLandmg, rightLandmg, landmgBox);
} 

// 创建用户信息
function showUserInfo() {

    myFn.myAjax('get',{},myFn.apiAddress.memberInfo.getLog,function(res){
        console.log(res);
    });

    var userInfoBg = creatImgObj(INFOBOX_PATH);
    var userHeadImg = creatImgObj(require("../assets/gameImg/headImg.png"), 10, 12);
    var userName = creatTextObj("王二小", "13px Arial", "#fff", 65, 13);
    var infoGoldIcon = creatImgObj(INFOGOLDICON, 65, 30);
    var infoGoldNum = creatTextObj("5000", "15px Arial", "#e8b71b", 85, 31)
    var infoFoodIcon = creatImgObj(INFOFOODICON, 65, 49);
    var infoFoodNum = creatTextObj("200", "15px Arial", "#e8b71b", 85, 49)
    var userInfoBox = creatViewObj([userInfoBg, userHeadImg, userName, infoGoldIcon, infoGoldNum, infoFoodIcon, infoFoodNum], 20, 10);
    stage.addChild(userInfoBox);
}
// 创建进度条
function showProgress() {
    var time = creatTextObj('距离完成时间：仅剩下265天16小时20秒', '15px Arial', 'red', 140, -10);
    var overallSchedule = creatImgObj(OVERALLSCHEDULE_PATH, 0, 20);
    var drawRoundRect1 = new createjs.Graphics().beginStroke("#5bd522").beginFill("#5bd522").drawRoundRect (-535, 21, 535, 8, 4);
    var currentProgress = new createjs.Shape(drawRoundRect1);
    var section = creatImgObj(SECTION_PATH, 15, 20);

    // 遮罩层
    // var mask=new createjs.Shape();
    // mask.graphics.drawRoundRect("#000000");
    // mask.graphics.drawRoundRect(0, 21, 280, 8, 4);
    // mask.x = 0;
    // mask.y = 0;
    var mask = new createjs.Shape();
    mask.graphics.beginFill("#000000");
    mask.graphics.drawRoundRect( 0, 20, 600, 43, 4);
    mask.x = 300;
    mask.y = 0;

    var progress = creatViewObj([time, overallSchedule, currentProgress, section], 300, 30);
    progress.mask = mask
    stage.addChild(progress);
    return currentProgress;
}

// 创建商店&任务&公告
function showShop() {
    var shopImg = creatImgObj(SHOPIMG_PATH, 0, 0);
    shopImg.addEventListener("click", function() {
        
        var shopPopup = new popup();
        // 食物比例
        var foodstuffProportion = 2;
        // 金币比例
        var goldProportion = 1

        // 创建商店弹框背景
        var popupBg = creatImgObj(POPUPSHOPBG_PATH, 0, 0);

        // 创建商店左侧内容并加入盒子中
        var BottomFrame = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
        var shopleftBox = creatViewObj([
            BottomFrame,
            creatImgObj(POPUPBG_FOODICON_PATH, 40, 60),
            creatTextObj("粮食", "17px Arial", "#ec9530", 83, 235)
        ], 10, 20)

        // 创建商店右侧内容并加入盒子
        // 创建价格比例
        var unitPrice = creatTextObj("1金币", "17px Arial", "#ec9530", 0, 0);
        var proportion = creatTextObj("(1金币:2粮食)", "16px Arial", "red", 55, 0);
        // 分割线
        var shopDivision = creatImgObj(DIVISION_PATH, 0, 30);
        shopDivision.scaleX = 0.6
        var priceBox = creatViewObj([unitPrice, proportion, shopDivision], 210, 45);

        // 创建规格参数
        var standardText = creatTextObj("规格：", "18px Arial", "#ec9530", 0, 0);
        var standard100 = new createjs.DOMElement(document.getElementById("standard100"));
        var standard500 = new createjs.DOMElement(document.getElementById("standard500"));
        standard500.x = 75;
        var standard1000 = new createjs.DOMElement(document.getElementById("standard1000"));
        standard1000.x = 150;
        var standard2000 = new createjs.DOMElement(document.getElementById("standard2000"));
        standard2000.x = 225;
        var standardNumBox = creatViewObj([standard100, standard500, standard1000, standard2000], 0, 37);
        // 分割线
        var standardDivision = creatImgObj(DIVISION_PATH, 0, 80);
        standardDivision.scaleX = 0.6
        // 
        var standardBox = creatViewObj([standardText, standardNumBox, standardDivision], 210, 90);

        // 总价&价格
        var selectedStandar = 100;
        var numInput = $("#number");
        var total = calculationMoney(1);
        // 切换规格事件并选中
        $('.standarButton').click(function() {
            $('.standarButton').removeClass('active');
            $(this).addClass('active');
            selectedStandar = $(this).val();
            money.text = calculationMoney(2);
        })


        // 调整数量
        var reduceNum = creatImgObj(REDUCE_PATH, 0, 13);
        var addNum = creatImgObj(ADD_PATH, 70, 10);
        var number = new createjs.DOMElement(document.getElementById("number"));
        // 调整数量事件
        reduceNum.addEventListener("click", function() {
            if (parseInt(numInput.val()) <= 1) {
                numInput.val(1);
            } else {
                numInput.val(parseInt(numInput.val()) - 1);
            }
            money.text = calculationMoney(2);
        })
        addNum.addEventListener("click", function() {
            numInput.val(parseInt(numInput.val()) + 1);
            money.text = calculationMoney(2);
        })
        number.x = 20;
        var adjustmentBox = creatViewObj([addNum, reduceNum, number], 210, 185);

        // 总价格Text
        var money = creatTextObj("$:" + total + " 金币", "20px Arial", "#ec9530", 210, 232);

        // 支付button
        var payButton = creatImgObj(POPUPBG_PAYMENT_PATH, 242, 280);
        payButton.addEventListener("click", function() {
            var payPassview = new popup();
            document.getElementById("standarBox").style.display = "none";
            document.getElementById("passwordTextBox").style.display = "block";

            var payPass = (function() {
                var payPassBg = creatImgObj(POPUPPAYBG_PATH, 0, 0);
                var payTitle = creatTextObj("请输入安全支付密码", "18px Arial", "#ec9530", 200, 25);
                var passwordText1 = new createjs.DOMElement(document.getElementById("passwordText1"));
                var passwordText2 = new createjs.DOMElement(document.getElementById("passwordText2"));
                passwordText2.x = 70;
                var passwordText3 = new createjs.DOMElement(document.getElementById("passwordText3"));
                passwordText3.x = 140;
                var passwordText4 = new createjs.DOMElement(document.getElementById("passwordText4"));
                passwordText4.x = 210;
                var passwordText5 = new createjs.DOMElement(document.getElementById("passwordText5"));
                passwordText5.x = 280;
                var passwordText6 = new createjs.DOMElement(document.getElementById("passwordText6"));
                passwordText6.x = 350;
                var passwordTextBox = creatViewObj([passwordText1, passwordText2, passwordText3, passwordText4, passwordText5, passwordText6], 80, 130);
                var msgText = creatTextObj(" ", "16px Arial", "red", 247, 200);

                var yesPayButton = creatImgObj(POPUPPYESPAY_PATH, 68, 0);
                yesPayButton.addEventListener("click", function() {
                        msgText.text = "密码错误";
                        payPassview.closePopup();
                    })
                    // var nosPayButton = creatImgObj(POPUPPNOPAY_PATH, 0, 0);
                var isPayButton = creatViewObj([yesPayButton], 170, 250);


                payPassview.addOtherElements([payPassBg, payTitle, passwordTextBox, msgText, isPayButton]);
                payPassview.callBackClose = function() {
                    document.getElementById("passwordTextBox").style.display = "none"
                    document.getElementById("standarBox").style.display = "block";
                }
                payPassview.setBoxSeat(283, 150);
                payPassview.setCloseButtonSeat(-105, -20);
                // payPassview.setCloseButtonSeat(545, -20);
                payPassview.showPopup();
            })();

            // 弹出支付密码层

            // alert(calculationMoney(1));
        })

        // 显示隐藏的input
        document.getElementById('standarBox').style.display = 'block';

        
        shopPopup.addOtherElements([popupBg,shopleftBox,priceBox,standardBox, adjustmentBox, money, payButton]);
        shopPopup.callBackClose = function() {
            document.getElementById("standarBox").style.display = "none";
        }
        shopPopup.setBoxSeat(283, 150);
        shopPopup.setCloseButtonSeat(545, -20);
        shopPopup.showPopup();

        // 计算支付金币数量
        // 等于传递1返回数值，传递2返回拼接字符串
        function calculationMoney(type) {
            if (type == 1) {
                return numInput.val() * selectedStandar / foodstuffProportion / goldProportion;
            } else if (type == 2) {
                return "$:" + (numInput.val() * selectedStandar / foodstuffProportion / goldProportion) + " 金币";
            }
        }
    })

    var taskImg = creatImgObj(TASKIMG_PATH, 67, 0);
    taskImg.addEventListener("click", function() {
        alert("任务")
    })

    var noticenImg = creatImgObj(NOTICEIMG_PATH, 135, 0);
    noticenImg.addEventListener("click", function() {
        alert("公告")
    })

    var upRiFnView = creatViewObj([shopImg, taskImg, noticenImg], 935, 30);
    stage.addChild(upRiFnView);
}

// 创建游戏宝典
function showCourse() {
    var canonImg = creatImgObj(CANONIMG_PATH, 0, 0);
    var canonText = creatTextObj("游戏宝典", "12px Arial", "#fff", 0, 55);
    var course = creatViewObj([canonImg, canonText], 40, 560);
    canonImg.addEventListener("click", function() {
        alert("游戏")
    })
    stage.addChild(course);
}

// 底部我的仓库&邀请好友&游戏记录
function showMyInformation() {

    var myWarehouseImg = creatImgObj(MYWAREHOUSE_PATH, 323, 400);
    myWarehouseImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
    myWarehouseImg.addEventListener("click", function() {

        var popupBg = creatImgObj(POPUPSHOPBG_PATH, 0, 0);

        var popup_exchange = creatImgObj(POPUPBG_EXCHANGE_BUTTON, 55, 270);
        popup_exchange.addEventListener("click", function(){
          location.href = "baidu.com"
        })
        var BottomFrame = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
        var shopleftBox = creatViewObj([
            BottomFrame,
            creatImgObj(POPUPBG_FOODICON_PATH, 40, 60),
            creatTextObj("粮食5000", "17px Arial", "#ec9530", 63, 235),
            popup_exchange
        ], 60, 10)

        var popup_recharge = creatImgObj(POPUPBG_RECHARGE_BUTTON, 0, 0);
        var popup_extract = creatImgObj(POPUPBG_EXTRACT_BUTTON, 100, 0);
        var popup_transfer = creatImgObj(POPUPBG_TRANSFER_BUTTON, 200, 0);
        var popup_button_box = creatViewObj([popup_recharge, popup_extract, popup_transfer], 270, 280);

        var BottomFrameRight = new createjs.Shape(new createjs.Graphics().beginStroke("#714223").beginFill("#161413").drawRect(20, 20, 160, 200));
        var shopRightBox = creatViewObj([
            BottomFrameRight,
            creatImgObj(POPUPBG_GOLD_PATH, 40, 60),
            creatTextObj("金币5000", "17px Arial", "#ec9530", 63, 235)
        ], 310, 10)

        var myWarehousePopup = new popup();
        myWarehousePopup.addOtherElements([popupBg, shopleftBox, shopRightBox, popup_button_box]);
        myWarehousePopup.setBoxSeat(283, 150);
        myWarehousePopup.setCloseButtonSeat(545, -20);
        myWarehousePopup.showPopup();

    })

    var InvitationImg = creatImgObj(INVITATION_PATH, 468, 400);
    InvitationImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
    // 邀请好友弹出层
    InvitationImg.addEventListener("click", function() {
    var InvitationPopup = new popup();
      var invitationPoputBg = creatImgObj(POPUP_HAS_TITLE_PATH);
      var InvitationTitle = creatTextObj("邀请好友", "17px Arial", "#ec9530", 250, 25);
      var InvitationContent = creatTextObj("使用下面的链接邀请好友注册并参与游戏!即可获得好友投资额除以您的投资额剩余5%的直推收益", "13px Arial", "#ec9530", 63, 110);
      InvitationContent.lineHeight = 20;
      InvitationContent.lineWidth = 450;
      document.getElementById('InvitationUrl').style.display = "block";
        var InvitationUrl = new createjs.DOMElement(document.getElementById('InvitationUrl'));
        InvitationUrl.x = 90;
        InvitationUrl.y = 180;
        var copylink = creatImgObj(POPUPBG_COPYLINK_BUTTON, 240, 275);
        var Warn_isCopy = creatTextObj("复制成功", "17px Arial", "#ec9530", 250, 240);
        copylink.addEventListener("click", function(){

            var Url2=document.getElementById("InvitationUrl");
            Url2.select(); // 选择对象
            document.execCommand("Copy"); // 执行浏览器复制命令
            alert("已复制好，可贴粘。");

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

    var recordImg = creatImgObj(RECORD_PATH, 613, 400);
    recordImg.shadow = new createjs.Shadow("#000000", 4, 5, 10);
    recordImg.addEventListener("click", function() {
      var recordPoputBg = creatImgObj(POPUP_HAS_TITLE_PATH);

    // 播种记录
    var planting_record_button = creatImgObj(POPUPBUTTON_SOWING_PATH, -117, 0);
    var planting_record_active_button = creatImgObj(POPUPBUTTON_SOWING_ACTIVE_PATH, -117, 0);
    var planting_record_content = creatViewObj([
        // 表格头
        creatViewObj([
          creatTextObj("播种时间", "17px Arial", "#ec9530", 120, 25),
          creatTextObj("种子数量", "17px Arial", "#ec9530", 380, 25)
        ], 0, 0),
        // 表格内容行
        creatViewObj([
          creatViewObj([
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 80, 0),
            creatTextObj("500", "17px Arial", "#ec9530", 400, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 0),
          creatViewObj([
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 80, 0),
            creatTextObj("500", "17px Arial", "#ec9530", 400, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 50),
          creatViewObj([
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 80, 0),
            creatTextObj("500", "17px Arial", "#ec9530", 400, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 100),
        ], 0, 70)
      ])
    planting_record_content.alpha = 1;
    planting_record_button.addEventListener("click", function(){
      toggleRecord();
      planting_record_content.alpha = 1;
      planting_record_active_button.alpha = 1;
    })

    // 邀请记录
    var invite_record_button = creatImgObj(POPUPBUTTON_INVITE_PATH, -116, 36);
    var invite_record_active_button = creatImgObj(POPUPBUTTON_INVITE_ACTIVE_PATH, -116, 36);

    var invite_record_content = creatViewObj([
        // 表格头
        creatViewObj([
          creatTextObj("用户", "17px Arial", "#ec9530", 95, 25),
          creatTextObj("投资数量", "17px Arial", "#ec9530", 250, 25),
          creatTextObj("投资时间", "17px Arial", "#ec9530", 400, 25)
        ], 0, 0),
        // 表格内容行
        creatViewObj([
          creatViewObj([
            creatTextObj("dsoaojsxxa@qq.com", "17px Arial", "#ec9530", 50, 0),
            creatTextObj("500", "17px Arial", "#ec9530", 270, 0),
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 370, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 0),
          creatViewObj([
            creatTextObj("dsoaojsxxa@qq.com", "17px Arial", "#ec9530", 50, 0),
            creatTextObj("500", "17px Arial", "#ec9530", 270, 0),
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 370, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 50),
          creatViewObj([
            creatTextObj("dsoaojsxxa@qq.com", "17px Arial", "#ec9530", 50, 0),
            creatTextObj("500", "17px Arial", "#ec9530", 270, 0),
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 370, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 100),
        ], 0, 70)
      ])

    invite_record_button.addEventListener("click", function(){
      toggleRecord();
      invite_record_content.alpha = 1;
      invite_record_active_button.alpha = 1;
    })

    // 加速记录
    var speed_record_button = creatImgObj(POPUPBUTTON_ACCELERATE_PATH, -116, 72);
    var speed_record_active_button = creatImgObj(POPUPBUTTON_ACCELERATE_ACTIVE_PATH, -116, 72);
    var speed_record_content = creatViewObj([
        // 表格头
        creatViewObj([
          creatTextObj("加速时间", "17px Arial", "#ec9530", 80, 25),
          creatTextObj("类型", "17px Arial", "#ec9530", 210, 25),
          creatTextObj("加速比", "17px Arial", "#ec9530", 270, 25),
          creatTextObj("时间收益", "17px Arial", "#ec9530", 350, 25),
          creatTextObj("粮食收益", "17px Arial", "#ec9530", 450, 25)
        ], 0, 0),
        // 表格内容行
        creatViewObj([
          creatViewObj([
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 50, 0),
            creatTextObj("直推", "17px Arial", "#ec9530", 210, 0),
            creatTextObj("+5%", "17px Arial", "#ec9530", 280, 0),
            creatTextObj("-47", "17px Arial", "#ec9530", 370, 0),
            creatTextObj("+500", "17px Arial", "#ec9530", 460, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 0),
          creatViewObj([
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 50, 0),
            creatTextObj("直推", "17px Arial", "#ec9530", 210, 0),
            creatTextObj("+5%", "17px Arial", "#ec9530", 280, 0),
            creatTextObj("-47", "17px Arial", "#ec9530", 370, 0),
            creatTextObj("+500", "17px Arial", "#ec9530", 460, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 50),
          creatViewObj([
            creatTextObj("2016/15/28 15:32", "17px Arial", "#ec9530", 50, 0),
            creatTextObj("直推", "17px Arial", "#ec9530", 210, 0),
            creatTextObj("+5%", "17px Arial", "#ec9530", 280, 0),
            creatTextObj("-47", "17px Arial", "#ec9530", 370, 0),
            creatTextObj("+500", "17px Arial", "#ec9530", 460, 0),
            creatImgObj(DIVISION_PATH, 30, 30)
          ], 0, 100)
        ], 0, 70)
      ])

    speed_record_content.alpha = 0;
    speed_record_button.addEventListener("click", function(){
      toggleRecord();
      speed_record_content.alpha = 1;
      speed_record_active_button.alpha = 1;
    })


        var recordPopup = new popup();
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
          speed_record_content
        ]);
        recordPopup.setBoxSeat(283, 150);
        recordPopup.setCloseButtonSeat(545, -20);
        recordPopup.showPopup();

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

    var bottomButton = creatViewObj([myWarehouseImg, InvitationImg, recordImg], 60, 195);
    stage.addChild(bottomButton);
}

// 上一个弹窗
var lastPopup = '';

// 弹出框
function popup() {

    if(lastPopup != ''){
        lastPopup = lastPopup.closePopup();
    }
    

    // 创建弹出层中的默认元素对象
    this.elObjs = {};

    this.elObjs.closeButton = creatImgObj(CLOSEPOPU_PATH, 0, 0);
    var self = this;

    // 关闭按钮并给予关闭事件
    this.closePopup = function() {
        stage.removeChild(self.elObjsBox);
        // 点击关闭触发回调
        self.callBackClose();
    }
    this.elObjs.closeButton.addEventListener("click", self.closePopup)

    // 关闭按钮的回调
    this.callBackClose = function() {

    }

    // 容纳元素对象的盒子并添加设置盒子位子的方法
    this.elObjsBox = creatViewObj([], 0, 0);

    this.setBoxSeat = function(left, right) {
        this.elObjsBox.x = left;
        this.elObjsBox.y = right;
    }

    // 设置关闭按钮的位子
    this.setCloseButtonSeat = function(left, right) {
        this.elObjs.closeButton.x = left;
        this.elObjs.closeButton.y = right;
    }

    // 添加元素对象 
    this.addOtherElements = function(obj) {
        // console.log(this.elObjsBox)
        // console.log(obj.length);
        for(var i=0; i<obj.length; i++){
            this.elObjsBox.addChild(obj[i]);
        }
        this.elObjsBox.addChild(this.elObjs.closeButton);
    }

    // 显示弹出层
    this.showPopup = function() {
        stage.addChild(this.elObjsBox);

        lastPopup = this;
    }
}

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
export {init}