

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
			myGoldincome:'/api/myearningsmoney'
		}
	},

	myAjax: function (type, data, url, sucFn) {	
		var self = this;
		self.showLoding();
		$.ajax({
		    url: url ,
		    type: type, //GET
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
		    		if(localStorage.userinfo == 'undefined'){
		    			alert(window.vm.$t("staticMsg.msg012"));
		    		}else{
			    		localStorage.clear();
			    		location.href = location.href;
		    		}
		    	}else if(res.status == -2){
		    		localStorage.clear()
		    	}else{
		    		alert(res.msg);
		    		return false;
			    	switch(res.status){
			    		case 101: alert( window.vm.$t("statusMsg.msg101") ); break;
			    		case 103: alert( window.vm.$t("statusMsg.msg103") ); break;
			    		case 105: alert( window.vm.$t("statusMsg.msg105") ); break;
			    		case 106: alert( window.vm.$t("statusMsg.msg106") ); break;
			    		case 107: alert( window.vm.$t("statusMsg.msg107") ); break;
			    		case 108: alert( window.vm.$t("statusMsg.msg108") ); break;
			    		case 109: alert( window.vm.$t("statusMsg.msg109") ); break;
			    		case 110: alert( window.vm.$t("statusMsg.msg110") ); break;
			    		case 111: alert( window.vm.$t("statusMsg.msg111") ); break;
			    		case 112: alert( window.vm.$t("statusMsg.msg112") ); break;
			    		case 113: alert( window.vm.$t("statusMsg.msg113") ); break;
			    		case 114: alert( window.vm.$t("statusMsg.msg114") ); break;
			    		case 115: alert( window.vm.$t("statusMsg.msg115") ); break;
			    		case 116: alert( window.vm.$t("statusMsg.msg116") ); break;
			    		case 118: alert( window.vm.$t("statusMsg.msg118") ); break;
			    		case 120: alert( window.vm.$t("statusMsg.msg120") ); break;
			    		case 124: alert( window.vm.$t("statusMsg.msg124") ); break;
			    		case 125: alert( window.vm.$t("statusMsg.msg125") ); break;
			    		case 126: alert( window.vm.$t("statusMsg.msg126") ); break;
			    		case 127: alert( window.vm.$t("statusMsg.msg127") ); break;
			    		case 128: alert( window.vm.$t("statusMsg.msg128") ); break;
			    		case 129: alert( window.vm.$t("statusMsg.msg129") ); break;
			    		case 130: alert( window.vm.$t("statusMsg.msg130") ); break;
			    		case 132: alert( window.vm.$t("statusMsg.msg132") ); break;
			    		case 133: alert( window.vm.$t("statusMsg.msg133") ); break;
			    		case 134: alert( window.vm.$t("statusMsg.msg134") ); break;
			    		case 135: alert( window.vm.$t("statusMsg.msg135") ); break;
			    		case 136: alert( window.vm.$t("statusMsg.msg136") ); break;
			    		case 137: alert( window.vm.$t("statusMsg.msg137") ); break;
			    		case 138: alert( window.vm.$t("statusMsg.msg138") ); break;
			    		case 139: alert( window.vm.$t("statusMsg.msg139") ); break;
			    		case 140: alert( window.vm.$t("statusMsg.msg140") ); break;
			    		case 142: alert( window.vm.$t("statusMsg.msg142") ); break;
			    		case 144: alert( window.vm.$t("statusMsg.msg144") ); break;
			    		case 145: alert( window.vm.$t("statusMsg.msg145") ); break;
			    		case 146: alert( window.vm.$t("statusMsg.msg146") ); break;
			    		case 147: alert( window.vm.$t("statusMsg.msg147") ); break;
			    		case 148: alert( window.vm.$t("statusMsg.msg148") ); break;
			    		case 149: alert( window.vm.$t("statusMsg.msg149") ); break;
			    		case 150: alert( window.vm.$t("statusMsg.msg150") ); break;
			    		case 151: alert( window.vm.$t("statusMsg.msg151") ); break;
			    		case 152: alert( window.vm.$t("statusMsg.msg152") ); break;
			    		case 153: alert( window.vm.$t("statusMsg.msg153") ); break;
			    		case 154: alert( window.vm.$t("statusMsg.msg154") ); break;
			    		case 157: alert( window.vm.$t("statusMsg.msg157") ); break;
			    		case 158: alert( window.vm.$t("statusMsg.msg158") ); break;
			    		case 159: alert( window.vm.$t("statusMsg.msg159") ); break;
			    		case 160: alert( window.vm.$t("statusMsg.msg160") ); break;
			    		case 166: alert( window.vm.$t("statusMsg.msg166") ); break;
			    		case 171: alert( window.vm.$t("statusMsg.msg171") ); break;
			    		case 174: alert( window.vm.$t("statusMsg.msg174") ); break;
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

	// myAjax: function (type, data, url, sucFn) {	
	// 	var self = this;
	// 	self.showLoding();
	// 	$.ajax({
	// 	    url: 'http://112.74.162.250' + url ,
	// 	    type: type, //GET
	// 	    // async:true,    //或false,是否异步
	// 	    data:data,
	// 	    timeout:5000,    //超时时间
	// 	    dataType:'jsonp',    //返回的数据格式：json/xml/html/script/jsonp/text
	// 	    jsonp: "jsonpcallback",
 //            jsonpCallback:"jsonpcallback",
	// 	    success: function(res, textStatus, XMLHttpRequest){
	// 	    	setTimeout(function(){
	// 		    	self.hiddenLoding();
	// 	    	},200)

	// 	    	if(res.status == 0){
	// 		        sucFn(res);
	// 	    	}else if(res.status == -1){
	// 	    		if(localStorage.userinfo == 'undefined'){
	// 	    			alert(window.vm.$t("staticMsg.msg012"));
	// 	    		}else{
	// 		    		localStorage.clear();
	// 		    		location.href = location.href;
	// 	    		}
	// 	    	}else if(res.status == -2){
	// 	    		localStorage.clear()
	// 	    	}else{
	// 		    	switch(res.status){
	// 		    		case 101: alert( window.vm.$t("statusMsg.msg101") ); break;
	// 		    		case 103: alert( window.vm.$t("statusMsg.msg103") ); break;
	// 		    		case 105: alert( window.vm.$t("statusMsg.msg105") ); break;
	// 		    		case 106: alert( window.vm.$t("statusMsg.msg106") ); break;
	// 		    		case 107: alert( window.vm.$t("statusMsg.msg107") ); break;
	// 		    		case 108: alert( window.vm.$t("statusMsg.msg108") ); break;
	// 		    		case 109: alert( window.vm.$t("statusMsg.msg109") ); break;
	// 		    		case 110: alert( window.vm.$t("statusMsg.msg110") ); break;
	// 		    		case 111: alert( window.vm.$t("statusMsg.msg111") ); break;
	// 		    		case 112: alert( window.vm.$t("statusMsg.msg112") ); break;
	// 		    		case 113: alert( window.vm.$t("statusMsg.msg113") ); break;
	// 		    		case 114: alert( window.vm.$t("statusMsg.msg114") ); break;
	// 		    		case 115: alert( window.vm.$t("statusMsg.msg115") ); break;
	// 		    		case 116: alert( window.vm.$t("statusMsg.msg116") ); break;
	// 		    		case 118: alert( window.vm.$t("statusMsg.msg118") ); break;
	// 		    		case 120: alert( window.vm.$t("statusMsg.msg120") ); break;
	// 		    		case 124: alert( window.vm.$t("statusMsg.msg124") ); break;
	// 		    		case 125: alert( window.vm.$t("statusMsg.msg125") ); break;
	// 		    		case 126: alert( window.vm.$t("statusMsg.msg126") ); break;
	// 		    		case 127: alert( window.vm.$t("statusMsg.msg127") ); break;
	// 		    		case 128: alert( window.vm.$t("statusMsg.msg128") ); break;
	// 		    		case 129: alert( window.vm.$t("statusMsg.msg129") ); break;
	// 		    		case 130: alert( window.vm.$t("statusMsg.msg130") ); break;
	// 		    		case 132: alert( window.vm.$t("statusMsg.msg132") ); break;
	// 		    		case 133: alert( window.vm.$t("statusMsg.msg133") ); break;
	// 		    		case 134: alert( window.vm.$t("statusMsg.msg134") ); break;
	// 		    		case 135: alert( window.vm.$t("statusMsg.msg135") ); break;
	// 		    		case 136: alert( window.vm.$t("statusMsg.msg136") ); break;
	// 		    		case 137: alert( window.vm.$t("statusMsg.msg137") ); break;
	// 		    		case 138: alert( window.vm.$t("statusMsg.msg138") ); break;
	// 		    		case 139: alert( window.vm.$t("statusMsg.msg139") ); break;
	// 		    		case 140: alert( window.vm.$t("statusMsg.msg140") ); break;
	// 		    		case 142: alert( window.vm.$t("statusMsg.msg142") ); break;
	// 		    		case 144: alert( window.vm.$t("statusMsg.msg144") ); break;
	// 		    		case 145: alert( window.vm.$t("statusMsg.msg145") ); break;
	// 		    		case 146: alert( window.vm.$t("statusMsg.msg146") ); break;
	// 		    		case 147: alert( window.vm.$t("statusMsg.msg147") ); break;
	// 		    		case 148: alert( window.vm.$t("statusMsg.msg148") ); break;
	// 		    		case 149: alert( window.vm.$t("statusMsg.msg149") ); break;
	// 		    		case 150: alert( window.vm.$t("statusMsg.msg150") ); break;
	// 		    		case 151: alert( window.vm.$t("statusMsg.msg151") ); break;
	// 		    		case 152: alert( window.vm.$t("statusMsg.msg152") ); break;
	// 		    		case 153: alert( window.vm.$t("statusMsg.msg153") ); break;
	// 		    		case 154: alert( window.vm.$t("statusMsg.msg154") ); break;
	// 		    		case 157: alert( window.vm.$t("statusMsg.msg157") ); break;
	// 		    		case 158: alert( window.vm.$t("statusMsg.msg158") ); break;
	// 		    		case 159: alert( window.vm.$t("statusMsg.msg159") ); break;
	// 		    		case 160: alert( window.vm.$t("statusMsg.msg160") ); break;
	// 		    		case 166: alert( window.vm.$t("statusMsg.msg166") ); break;
	// 		    		case 171: alert( window.vm.$t("statusMsg.msg171") ); break;
	// 		    		case 174: alert( window.vm.$t("statusMsg.msg174") ); break;
	// 		    		default:  alert(window.vm.$t("staticMsg.msg013") + res.status + window.vm.$t("staticMsg.msg014"));
	// 		    	}
		    		
	// 	    	}

	// 	    },
	// 	    error:function(){
	// 	    	alert(window.vm.$t("staticMsg.msg015"));
	// 	    	self.hiddenLoding();
	// 	    }
	// 	})
	// },
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