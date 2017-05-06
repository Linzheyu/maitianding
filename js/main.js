

var myFn = {

	apiAddress:{
		index:{
			// 关于我们
			aboutus:'/api/aboutus',
			// 新闻列表
			nuwList: '/api/newslist',
			// 新闻详情
			nuwDetails: '/api/newsdetail',
			// 官方公告
			communique: '/api/communique'
		},
		/* 获取验证码 */
		code:{
			 // 获取静态验证
			getStaticCode: 'http://112.74.162.250/api/static_code',
			// 获取邮件验证
			getMailCode: '/api/decide_code',
			// 不需要静态验证码发送邮件接口
			getNoStatusCode: '/api/notstaticemail'
		},

		/* 会员登录注册退出登录 */
		memberLogin:{
			// 登录
			login: '/api/login',
			// 会员注册
			register: '/api/register',
			// 判断会员是否登录
			isLogin: '/api/is_login',
			// 退出登录
			quitLogin: '/api/logout'
		},
		accountSafety:{
			// 设置支付密码
			payPassword: '/api/set_paypwd',
			// 修改支付密码
			amendPayPassword: '/api/modify_paypwd',
			// 重置密码发送邮箱验证码
			resetLoginPasswordSendCode : '/api/verify_login?name=verify',
			// 忘记密码重置登录密码
			resetLoginPassword: '/api/reset_pwd',
			// 修改登录密码
			amendLoginPassword: '/api/modify_loginpwd',
			// 验证安全密码
			verifySafetyPassword: '/api/checksafepwd',
			// 验证邮箱验证码
			verifySafetyMail: '/api/checkemailcode',
			// 验证转账地址
			verifyAddress:'/api/validateTransionAddr'
		},
		/*会员邀请码*/
		inviteCode:{
			// 生成邀请码
			create:'/api/invitation_code',
			// 判断邀请码是否可用
			// verify:'/api/check_code'
		},
		/* 会员信息 */
		memberInfo:{
			// 会员信息
			getInfo: '/api/userinfo',
			// 会员登录日志
			getLog: '/api/myloginlogs',
			// 修改会员信息
			setInfo: '/api/modify_info'
		},
		game:{
			// 购买种子
			// buySeed:'/api/buyseed',
			// 
			// 粮食兑换游戏币
			exchangeGold: '/api/sellfood',
			// 用户播种接口
			seed: '/api/seeding',
			// 游戏公告
			notice: '/api/gamebulletin',
			// 游戏宝典
			course: '/api/gameexplain',
			// 生长详情
			growState: '/api/getflmessage',
			// 游戏币转账
			transferGold: '/api/transfer',
			// 播种列表
			getLandList: '/api/getalmessage',
			// 比例
			proportion: '/api/getexchangeratio',
			// 获取土地数据
			getflmessage:'/api/getflmessage',
			// 获取当前播种次数
			getseednum:'/api/getseednum',

		},
		gameRecord:{
			// 我的粮食兑换游戏币记录
			myExchangeGameCurrenc: '/api/mytransfer',
			// 我的游戏币提币记录接口
			myExtractGold:'/api/extractmoney',
			// 我的游戏币充值记录
			myRechargeGold: '/api/myrecharge',
			// 我的游戏币转账
			myTransferGold: '/api/mytransfermoney',
			// 我的播种记录
			mySeed: '/api/seedrecord',
			// 游戏播种加速记录
			mySeedAccelerate: '/api/gamequick',
			// 我的邀请记录
			myInvite: '/api/getinvite',
			// 其他用户兑换游戏币记录
			otherExchangeGameCurrenc: '/api/transferall',
			// 粮食收益记录
			myfoodincome: '/api/myfoodincome',
			// 我的游戏币收益记录 
			myGoldincome:'/api/myearningsmoney',
			// 提币记录
			currency:'/api/withdrawcurr'
		},
		binding:{
			// 获取邮箱验证码
			getMeailCode: "/api/checkbound",
			// 绑定极光平台
			binding4: "/api/boundinfo"
		}
	},

	myAjax: function (type, data, url, sucFn) {	
		var self = this;
		self.showLoding();
		$.ajax({
		    url: url ,
		    type: 'post', //GET
		    // async:true,    //或false,是否异步
		    data:data,
		    timeout:20000,    //超时时间
		    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
		    success: function(res, textStatus, XMLHttpRequest){
		    	setTimeout(function(){
			    	self.hiddenLoding();
		    	},200)

		    	if(res.status == 0){
			        sucFn(res);
		    	}else if(res.status == -1){
		    		if(localStorage.userinfo != 'undefined'){
			    		localStorage.clear();
		    			window.vm.$router.push({path:'/index'});
		    		}
		    	}else if(res.status == -2){
		    		localStorage.clear();
		    		window.vm.$router.push({path:'/index'});
		    	}else{
			    	switch(parseInt(res.status)){
			    		case 10001: alert( window.vm.$t("statusMsg_Java.msg10001"));break;
						case 10002: alert( window.vm.$t("statusMsg_Java.msg10002"));break;
						case 10003: alert( window.vm.$t("statusMsg_Java.msg10003"));break;
						case 10004: alert( window.vm.$t("statusMsg_Java.msg10004"));break;
						case 10005: alert( window.vm.$t("statusMsg_Java.msg10005"));break;
						case 10006: alert( window.vm.$t("statusMsg_Java.msg10006"));break;
						case 10009: alert( window.vm.$t("statusMsg_Java.msg10009"));break;
						case 10010: alert( window.vm.$t("statusMsg_Java.msg10010"));break;
						case 10011: alert( window.vm.$t("statusMsg_Java.msg10011"));break;
						case 10012: alert( window.vm.$t("statusMsg_Java.msg10012"));break;
						case 10016: alert( window.vm.$t("statusMsg_Java.msg10016"));break;
						case 10017: alert( window.vm.$t("statusMsg_Java.msg10017"));break;
						case 10018: alert( window.vm.$t("statusMsg_Java.msg10018"));break;
						case 10019: alert( window.vm.$t("statusMsg_Java.msg10019"));break;
						case 10020: alert( window.vm.$t("statusMsg_Java.msg10020"));break;
						case 10021: alert( window.vm.$t("statusMsg_Java.msg10021"));break;
						case 10022: alert( window.vm.$t("statusMsg_Java.msg10022"));break;
						case 10023: alert( window.vm.$t("statusMsg_Java.msg10023"));break;
						case 10024: alert( window.vm.$t("statusMsg_Java.msg10024"));break;
						case 10025: alert( window.vm.$t("statusMsg_Java.msg10025"));break;
						case 10026: alert( window.vm.$t("statusMsg_Java.msg10026"));break;
						case 10027: alert( window.vm.$t("statusMsg_Java.msg10027"));break;
						case 10028: alert( window.vm.$t("statusMsg_Java.msg10028"));break;
						case 10029: alert( window.vm.$t("statusMsg_Java.msg10029"));break;
						case 10030: alert( window.vm.$t("statusMsg_Java.msg10030"));break;
						case 10031: alert( window.vm.$t("statusMsg_Java.msg10031"));break;
						case 10032: alert( window.vm.$t("statusMsg_Java.msg10032"));break;
						case 10033: alert( window.vm.$t("statusMsg_Java.msg10033"));break;
						case 10034: alert( window.vm.$t("statusMsg_Java.msg10034"));break;
						case 10038: alert( window.vm.$t("statusMsg_Java.msg10038"));break;
						case 10039: alert( window.vm.$t("statusMsg_Java.msg10039"));break;
						case 10040: alert( window.vm.$t("statusMsg_Java.msg10040"));break;
						case 10041: alert( window.vm.$t("statusMsg_Java.msg10041"));break;
						case 10042: alert( window.vm.$t("statusMsg_Java.msg10042"));break;
						case 10014:;
						case 10043: alert( window.vm.$t("statusMsg_Java.msg10043"));break;
						case 10047: alert( window.vm.$t("statusMsg_Java.msg10047"));break;
						case 10048: alert( window.vm.$t("statusMsg_Java.msg10048"));break;
			    		default:  alert(window.vm.$t("staticMsg.msg013") + res.status + window.vm.$t("staticMsg.msg014"));
			    	}
		    		
		    	}

		    },
		    error:function(){
		    	alert(window.vm.$t("staticMsg.msg015"));
		    	self.hiddenLoding();
		    }
		})
	},

	showLoding:function(){
		jQuery("body").css('overflow','hidden');
		jQuery(".bonfire-pageloader-icon").removeClass('bonfire-pageloader-icon-hide');
		jQuery("#bonfire-pageloader").removeClass('bonfire-pageloader-hide');
	},
	hiddenLoding:function(){

		jQuery("body").css('overflow','auto');
		jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-hide');
		jQuery(".bonfire-pageloader-icon").addClass('bonfire-pageloader-icon-hide');
	},

	setUserInfo: function(key, value){
		var userinfo = JSON.parse(localStorage.userinfo);
		userinfo[key] = value;
		localStorage.userinfo = JSON.stringify(userinfo);
		return userinfo;
	},

	getUserInfo: function(key){
		var userinfo = JSON.parse(localStorage.userinfo);
		return userinfo[key]
	},

	getUserInfoAll: function(obj){
		obj = localStorage.userinfo;
	}
}

export {myFn}