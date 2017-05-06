
<template>
  <div class="indexContent">
	<div class="hmbg">
	  <div class="header">
		  <div class="header_cn">

			 <div class="header_nav">
				 <a href="#">HOME</a>
				 <a href="#">NEWS</a>
				 <a href="#">NOTICE</a>
				 <a href="#">ABOUT</a>
			 </div> 
			 <div style="height: 60px;width: 300px;float: left;margin-left: 30px;margin-top: 10px;">
				<img style="width: 80%;margin:auto;" src="../assets/images/mtdLogo.png" alt="">
			 </div>       
			 <div class="header_lan">
			   <div class="lang">
				 <img src="../assets/images/chinese.png" class="header_lanicon"></img>
				 <span class="header_lang">CHINESE</span>
				 <span class="header_down"></span>
				 <div class="cb"></div>
			  </div>   

			   <!--下拉菜单-->
			   <div class="header_pop">
				  <p>
					<i class="english_icon"></i>
					<span>ENGLISH</span>
					<b class="cb"></b>
				  </p>
				  <p>
					<i class="chinese_icon"></i>
					<span>CHINESE</span>
					<b class="cb"></b>
				  </p>
			   </div>
			 </div>
			 <div class="cb"></div>
		  </div>       
	  </div>

	  <div class="ftit">
		 <p class="a m_font" >WHEATFIELD</p>
		 <p class="b m_font1">{{ $t("publicText.indexTitle") }}</p>
		 <p class="c">
			<a id="login" class="m_btn">{{ $t("login.enter") }}</a>
			<a @click="register" class="m_btn">{{ $t("login.register") }}</a>
		 </p>
	  </div>
	  <!--岛-->
	  <div  class="d island">
		  <div class="g isbox"></div>
	  </div>
	  <!--云1-->
	  <div class="e cloud1"></div>
	  <!--云2-->
	  <div class="f cloud1"></div>

	  <!--内容区域-->
	  <div class="hcon">
		<!-- guanyuwomen -->
		 <div class="hcon_list">
			<div class="hcon_list_inner">
			  <div class="lgtop">
				<ul>
				   <li class="lgtit">{{ $t("nav.about") }}</li>
				   <!-- gengduo -->
				   <li class="lgmail"><a @click="changeContent(1)" data-toggle="modal" data-target="#dialogPublic">{{ $t("AccountManagement.loadMore") }}</a></li>
				</ul>
				<ul class="cb"></ul>
			  </div>
			  <div class="hcon_list_img">
			  		<img src="../assets/images/aboutUs.jpg" alt="">
			  </div>
			  <div class="hcon_list_cn" v-html="message.aboutAs.desc"></div>
			</div>
		 </div>
		 <!-- guanyuwomen dialog -->
		 <div class="modal fade" id="dialogPublic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
		  <div class="modal-dialog margin-t" role="document" style="width:100%">
			<div class="modal-content overflow">
			  <div class="modal-header">
				<button type="button" class="close newClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="exampleModalLabel" style="text-align:center" v-html="message.aboutAs.title"></h4>
			  </div>
			  <div class="modal-body">
				<p class="txtColor" v-html="message.aboutAs.content"></p>
			  </div>
			</div>
		  </div>
		 </div>
		 <!-- xinwen -->
		 <div class="hcon_list">
			<div class="hcon_list_inner">
			  <div class="lgtop">
				<ul>
				   <li class="lgtit"> {{ $t("nav.news") }}</li>
				   <li class="lgmail"><a @click="showNewList">{{ $t("AccountManagement.loadMore") }}</a></li>
				</ul>
				<ul class="cb"></ul>
			  </div>
			  <div class="hcon_list_img">
			  	<img src="../assets/images/newlist.jpg" alt="">
			  </div>
			  
	  
			  <div class="newslist">
				 <p v-for="(item,key) in message.nuwsObj.list">
				  <a @click="changeContent(item)" v-html="item.title" data-toggle="modal" data-target="#newDialog">The world's first encrypted money fund listed on the exchange</a>
				  </p>
			  </div>
			</div>
		 </div>
		 <!-- newDialog -->
		<div class="modal fade" id="newDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
		  <div class="modal-dialog margin-t" role="document" style="width:100%">
			<div class="modal-content overflow">
			  <div class="modal-header">
				<button type="button" class="close newClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="exampleModalLabel" style="text-align:center" v-html="message.aboutAs.title"></h4>
			  </div>
			  <div class="modal-body">
				<p class="txtColor" v-html="message.aboutAs.content"></p>
			  </div>
			</div>
		  </div>
		 </div>
		  <!-- newInDialog -->
		<div class="modal fade" id="newInDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
		  <div class="modal-dialog margin-t" role="document" style="width:100%">
			<div class="modal-content overflow">
			  <div class="modal-header">
				<button type="button" class="close newClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="exampleModalLabel" style="text-align:center" v-html="message.aboutAs.title"></h4>
			  </div>
			  <div class="modal-body">
				<p class="txtColor" v-html="message.aboutAs.content"></p>
			  </div>
			</div>
		  </div>
		 </div>


		 <!-- xinwenList dialog -->
		<div class="modal fade" id="news" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
		  <div class="modal-dialog margin-t" role="document" style="width:100%">
			<div class="modal-content overflow">
			  <div class="modal-header">
				<button type="button" class="close newClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="exampleModalLabel" style="text-align:center">{{ $t("nav.news") }}</h4>
			  </div>
			  <div class="modal-body txtColor">
				<ul class="media-list" v-for="item in message.nuwsObj.list" data-toggle="modal" data-target="#newInDialog">
				  <li class="media newDetails" @click="goDetails(item)">
					<div class="media-left">
					  <img class="media-object" src="#" style="width:70px;height:70px;">
					</div>
					<div class="media-body" style="border-bottom: 1px dashed #ccc;">
					  <h4 class="media-heading" v-html="item.title">INTERNATIONAL RECOGNITION</h4>
					  <p v-html="item.desc">More than 100 countries and international organizations have already joined the initiative, of which more than 40 have signed cooperation agreements with China.</p>
					</div>
				  </li>
				</ul>
				

				<!-- 分页 -->
				<div class="content" v-show="allpage.length>1">
				  <div class="row sure-btn">
					<div class="border-t">
						<ul class="pagination" >
							<li v-show="current != 1" @click="current-- && goto(current)" ><a>{{ $t('page.previousPage') }}</a></li>
							<li v-for="index in pages" @click="goto(index, 1)" :class="{'active':current == index}" :key="index">
							  <a >{{index}}</a>
							</li>
							<li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a >{{ $t('page.nextPage') }}</a></li>
						</ul>
					</div>
				  </div>
				</div>
		 
			  </div>
			</div>
		  </div>
		 </div>
		 
		 
		 <!-- guanfanggonggao -->
		 <div class="hcon_list">
		  <div class="hcon_list_inner">
			<div class="lgtop">
			  <ul>
				 <li class="lgtit">{{ $t("nav.notice") }}</li>
				 <li class="lgmail"><a @click="showCommuniqueList" >{{ $t("AccountManagement.loadMore") }}</a></li>
			  </ul>
			  <ul class="cb"></ul>
			</div>
			<div class="hcon_list_img">
				<img src="../assets/images/noick.jpg" alt="">
			</div>
			<div class="newslist">
			   <p v-for="item in message.communiqueObj.list">
                    <a data-toggle="modal" data-target="#dialogPublic" @click="getCommuniqueDetails(item)" v-html="item.title"></a>
                </p>
			</div>
		  </div>
		 </div>
		<!-- guanfanggonggaoList dialog -->
		<div class="modal fade" id="notice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
		  <div class="modal-dialog margin-t" role="document" style="width:100%">
			<div class="modal-content overflow">
			  <div class="modal-header">
				<button type="button" class="close newClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="exampleModalLabel" style="text-align:center">{{ $t("nav.notice") }}</h4>
			  </div>
			  <div class="modal-body txtColor" v-for="item in message.communiqueObj.list" data-toggle="modal" data-target="#newInDialog">
				<ul class="media-list" @click="getCommuniqueDetails(item)">
				  <li class="media">
					<div class="media-left">
					  <img class="media-object" src="#" style="width:70px;height:70px;">
					</div>
					<div class="media-body" style="border-bottom: 1px dashed #ccc;" >
					  <h4 class="media-heading" v-html="item.title" >INTERNATIONAL RECOGNITION</h4>
					  <p v-html="item.content">More than 100 countries and international organizations have already joined the initiative, of which more than 40 have signed cooperation agreements with China.</p>
					</div>
				  </li>
				</ul>

				<!-- 分页 -->
				<div class="content" v-show="allpage.length>1">
				  <div class="row sure-btn">
					<div class="border-t">
						<ul class="pagination" >
							<li v-show="current != 1" @click="current-- && goto(current)" ><a>{{ $t('page.previousPage') }}</a></li>
							<li v-for="index in pages" @click="goto(index, 2)" :class="{'active':current == index}" :key="index">
							  <a >{{index}}</a>
							</li>
							<li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a >{{ $t('page.nextPage') }}</a></li>
						</ul>
					</div>
				  </div>
				</div>

			  </div>
			</div>
		  </div>
		 </div>


		 <div class="cb"></div>
	  </div>
	  <!--版权申明-->
	  <div class="footer_cn">
		 <p>www.wheat-farm.com</p>
		 <p>Her-mest@qeveworld.com   copyright 2011 - 2016</p>
	  </div>
  </div>
  <!--登录-->
   <div class="popcon">
	<div class="close"></div>

	<div class="hcon_so">LOGIN WHEATFIELD</div>

	<div>
		<div class="lgtls">
		  <div class="lgtop">
			<ul>
			   <li class="lgtit"> User name</li>
			   <li class="lgmail"><a href="#">Register qeveworld mailbox</a></li>
			</ul>
			<ul class="cb"></ul>
		  </div>


		  <div class="lglb">
			 <input v-model="login.email" maxlength="20" class="lgtxt"></input>
			 <span class="lgsm">@qeveworld.com</span>
		  </div>
		</div>
		<div class="lgtls">

		  <div class="lgtop">
			<ul>
			   <li class="lgtit"> Verification Code</li>
			</ul>
			<ul class="cb"></ul>
		  </div>
		  <div class="lglb">
			 <input v-model="login.emailCode" maxlength="6" class="lgtxt"></input>
			 <a href="#" class="lgcode">Get verification code</a>
		  </div>
		  
		</div>
		<div class="lgtls">
		  <div class="lgtop">
			<ul>
			   <li class="lgtit"> Password</li>
			</ul>
			<ul class="cb"></ul>
		  </div>

		  <div class="lglb">
			 <input v-model="login.password" maxlength="6" class="lgtxt"></input>
		  </div>
		  
		</div>
		<div class="hlin"><a href="#" style="color: #2fadb4; text-decoration: none;">Forget password?</a></div>
		<div @click="loginSubmit()" class="hebtn">LOGIN</div>
	</div>
	
   </div>  
  <!-- footer End-->
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'indexContent',
    data () {
        return {
    	    aboutAs:'',
    	    newsList:[],
    	    communique:'',
    	    userinfo:{},
    	    // 登录表单
    	    login:{
    	        email:'',
    	        password:'',
    	        emailCode:''
    	    },
            // 分页
                current:1,
                showItem:1,
                allpage:0,

        	title:'',
        	content:'',

        } 

    },
    props:{
        message:{
	       type: Object
        }
    },
  computed:{
      	pages:function(){
        	var pag = [];
          	if( this.current < this.showItem ){ 
          		//如果当前的激活的项 小于要显示的条数
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
  mounted(){

	var self = this
	setTimeout(function(){
		self.message.title = self.message.aboutAs.title;
	  	self.message.content = self.message.aboutAs.content;
	},200);

  	$('.lang').click(function(){
	   	$('.header_pop').toggle();
	});

  	$('.header_pop p').click(function(){
		$('.header_pop').hide();
		var id = $(this).index();
		if(id == 0){
		  	$('.header_lang').html('ENGLISH');
		  	Vue.config.lang = 'en';
		  	$('.header_lanicon').attr('src','static/images/english.png')
		}else{
		  	$('.header_lang').html('CHINESE');
		  	Vue.config.lang = 'cn';
		  	$('.header_lanicon').attr('src','static/images/chinese.png')
		}
  	});

  	var mask = '<div class="mask"></div>';
  		$('#login').click(function(){
			$("#exampleModalLogin").modal("toggle");
  		});

  		$('.close').click(function(){
			$('body').find('.mask').remove();
			$('.popcon').hide();
  		})
  	},
  	methods:{
   		showNewList:function(){
        	$("#news").modal("toggle");
        	this.allpage = this.message.nuwsObj.totalpage;
    	},
   		showCommuniqueList: function(){
        	$("#notice").modal("toggle");
        	this.allpage = this.message.communiqueObj.totalpage;
    	},
    	goto:function(index , type){
      		var self = this;
      		if(index == self.current) return;
      		self.current = index;

        	var data = {
            	agenumber: self.showItem,
            		page: self.current,
        	}
        	if(type==1){
            	myFn.myAjax('get', {page:index,pagenumber:6}, myFn.apiAddress.index.nuwList, function(res){
                	self.message.nuwsObj = res.data;
            	});
        	}else{
            	myFn.myAjax('get', {page:index,pagenumber:6}, myFn.apiAddress.index.communique, function(res){
                	self.indexContent.communiqueObj = res.data;
            	});
        	}
    	},
		changeContent:function(item){
	  		var self = this
	  		if (item == 1) {
				self.message.aboutAs.title = self.message.title;
				self.message.aboutAs.content = self.message.content;
				$('#dialogPublic').on('hide.bs.modal', function () {})
	  		}else{
				self.message.aboutAs.title = item.title;
				self.message.aboutAs.content = item.content;
	  		}
		},
		goDetails:function(item){
		    var self = this;
		    self.message.aboutAs.title = item.title;
		    self.message.aboutAs.content = item.content;
		    $('#news').modal('hide');
		
		    $('#newInDialog').on('hide.bs.modal', function () {
		       $('#news').modal('show');
		    })
		
		
		},
		getCommuniqueDetails:function(item){
	        var self = this;
	        self.message.aboutAs.title = item.title;
	        self.message.aboutAs.content = item.content;
	         $('#notice').modal('hide');
	    
	        $('#newInDialog').on('hide.bs.modal', function () {
	           $('#notice').modal('show');
	        })
		},
	  	goGame: function(){
			if(localStorage.userinfo == undefined){
				$('#exampleModalLogin').modal('toggle');
			}else{
				this.$router.push({path:'/game/index'});
			}
	  	},
  		register: function(){
			$("#exampleModalRegister").modal("toggle");
  		},
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*
	**dialog
	 */
	.newClose{
	  right: 0px!important;
	  top: 0px!important;
	  background: #fff!important;
	}
	.overflow{
	  overflow: hidden;
	  width: 60%;
	  margin: auto;
	  padding: 0 15px;
	  max-height: 600px;
	  overflow-y: auto;
	}
	.txtColor{
	  color: #777;
	}
	.media{
	  margin-top: 25px;
	}
	.margin-t{
	  margin-top: 5%;
	}
  



	.indexContent{
	  font-size: 14px;
	  font-family: microsoft yahei;
	  font-size: 14px;
	  position: relative;
	  overflow: hidden;
	  overflow-y: auto
	}
	.cb {
	  clear: both;
	}

	.header {
	  height: 60px;
	  width: 100%;
	  position: relative;
	  z-index: 4;
	}

	.header_cn {
	  height: 60px;
	  width: 100%;
	  margin: 0 auto;
	}

	.header_nav {
	  height: 60px;
	  float: left;
	  display: none;
	}

	.header_nav a {
	  display: inline-block;
	  padding: 0 15px;
	  height: 60px;
	  line-height: 60px;
	  overflow: hidden;
	  color: #f26360;
	  font-weight: bold;
	  text-decoration: none;
	}

	.header_nav a:hover {
	  color: #30adb4
	}

	.header_lan {
	  height: 60px;
	  display: inline-block;
	  float: left;
	  padding: 0 25px;
	  margin-left: 10px;
	  font-weight: bold;
	  position: relative;
	  float: right;
	}

	.header_lanicon {
	  height: 25px;
	  width: 25px;
	  display: inline-block;
	  background: #f00;
	  margin-top: 17px;
	  border-radius: 360px;
	  float: left
	}

	.header_lang {
	  height: 60px;
	  line-height: 60px;
	  margin-left: 8px;
	  float: left;
	}
	.header_down {
	  height: 60px;
	  width: 20px;
	  float: left;
	  margin-left: 8px;
	  background: url(../assets/images/down_icon.svg) no-repeat 50% 50%;
	  background-size: 70%;
	}

	.header_pop {
	  height: auto;
	  width: 100%;
	  position: absolute;
	  left: -1px;
	  top: 60px;
	  background: #fff;
	  display: none;
	}

	.header_pop p {
	  height: 40px;
	  line-height: 40px;
	  padding: 0 25px;
	  border-bottom: 1px solid #e9e9e9;
	  cursor: pointer;
	}

	.header_pop p:last-child {
	  border-bottom: none
	}

	.header_pop p span {
	  height: 25px;
	  line-height: 28px;
	  margin-top: 8px;
	  float: left;
	}

	.header_pop p:hover {
	  background: #f5f5f5;
	}

	.english_icon {
	  height: 25px;
	  width: 25px;
	  background: url(../assets/images/english.png) no-repeat 50% 50%;
	  background-size: cover;
	  border-radius: 360px;
	  -o-border-radius: 360px;
	  -moz-border-radius: 360px;
	  -webkit-border-radius: 360px;
	  -ms-border-radius: 360px;
	  display: inline-block;
	  margin-top: 7px;
	  margin-right: 10px;
	  float: left;
	}

	 .chinese_icon {
	  height: 25px;
	  width: 25px;
	  background: url(../assets/images/chinese.png) no-repeat 50% 50%;
	  background-size: cover;
	  border-radius: 360px;
	  -o-border-radius: 360px;
	  -moz-border-radius: 360px;
	  -webkit-border-radius: 360px;
	  -ms-border-radius: 360px;
	  display: inline-block;
	  margin-top: 7px;
	  margin-right: 10px;
	  float: left;
	}

	.m_font {
	  font-weight: bold;
	  font-family: cooper;
	  font-size: 80px;
	}

	.m_font1 {
	  font-size: 18px;
	  height: 50px;
	  line-height: 50px;
	}

	.m_btn {
	  height: 40px;
	  border-radius: 5px;
	  display: inline-block;
	  padding: 0 30px;
	  margin: 15px 10px;
	  line-height: 40px;
	  text-align: center;
	  background: #159CA4;
	  color: #fff;
	  text-decoration: none;
	  font-weight: bold;
	  transition: 0.4s ease;
	  -ms-transition: 0.4s ease;
	  -webkit-transition: 0.4s ease;
	  -o-transition: 0.4s ease;
	  -moz-transition: 0.4s ease
	}

	.m_btn:hover {
	  background: #f26360;
	  box-shadow: 0px 0px 10px #999;
	  -ms-box-shadow: 0px 0px 10px #999;
	  -moz-box-shadow: 0px 0px 10px #999;
	  -webkit-box-shadow: 0px 0px 10px #999;
	  -o-box-shadow: 0px 0px 10px #999;
	}

	.island {
	  height: 1100px;
	  background: url(../assets/images/1111.png) no-repeat 50% 50%;
	  position: relative;
	  z-index: 2;
	}

	.cloud1 {
	  height: 1100px;
	  width: 100%;
	  background: url(../assets/images/cloud1.png) no-repeat 50% 50%;
	  position: absolute;
	  top: 5%;
	  left: 0px;
	  z-index: 1;
	}

	.island_left {
	  height: 100%;
	  width: 50%;
	  position: absolute;
	  left: 0px;
	  top: 0px;
	}

	.island_right {
	  height: 100%;
	  width: 50%;
	  position: absolute;
	  right: 0px;
	  top: 0px;
	}

	.ftit {
	  height: auto;
	  margin-top: 2%;
	  text-align: center;
	  position: relative;
	  z-index: 3;
	}

	.a {
	  opacity: 0;
	  animation-name: aflash;
	  -ms-animation-name: aflash;
	  -webkit-animation-name: aflash;
	  -moz-animation-name: aflash;
	  -o-animation-name: aflash;
	  animation-duration: 2s;
	  -ms-animation-duration: 2s;
	  -o-animation-duration: 2s;
	  -moz-animation-duration: 2s;
	  -webkit-animation-duration: 2s;
	  animation-delay: 0s;
	  -ms-animation-delay: 0s;
	  -webkit-animation-delay: 0s;
	  -o-animation-delay: 0s;
	  -moz-animation-delay: 0s;
	  animation-timing-function: ease;
	  -ms-animation-timing-function: ease;
	  -moz-animation-timing-function: ease;
	  -webkit-animation-timing-function: ease;
	  -o-animation-timing-function: ease;
	  animation-fill-mode: forwards;
	  -ms-animation-fill-mode: forwards;
	  -webkit-animation-fill-mode: forwards;
	  -o-animation-fill-mode: forwards;
	  -moz-animation-fill-mode: forwards;
	}

	@keyframes aflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}

	@-o-keyframes aflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}
	@-ms-keyframes aflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}
	@-webkit-keyframes aflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}

	@-moz-@keyframes aflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}



	.b {
	  opacity: 0;
	  animation-name: bflash;
	  -o-animation-name: bflash;
	  -ms-animation-name: bflash;
	  -webkit-animation-name: bflash;
	  -moz-animation-name: bflash;
	  animation-duration: 2s;
	  -o-animation-duration: 2s;
	  -ms-animation-duration: 2s;
	  -webkit-animation-duration: 2s;
	  -moz-animation-duration: 2s;

	  animation-delay: 0.3s;
	  -o-animation-delay: 0.3s;
	  -moz-animation-delay: 0.3s;
	  -webkit-animation-delay: 0.3s;
	  -ms-animation-delay: 0.3s;
	  animation-timing-function: ease;
	  -ms-animation-timing-function: ease;
	  -o-animation-timing-function: ease;
	  -moz-animation-timing-function: ease;
	  -webkit-animation-timing-function: ease;
	  animation-fill-mode: forwards;
	  -o-animation-fill-mode: forwards;
	  -webkit-animation-fill-mode: forwards;
	  -moz-animation-fill-mode: forwards;
	  -ms-animation-fill-mode: forwards;
	}

	@keyframes bflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}

	@-moz-@keyframes bflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}




	@-o-@keyframes bflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}
	@-ms-@keyframes bflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}
	@-webkit-@keyframes bflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}

	.c {
	  opacity: 0;
	  animation-name: cflash;
	  -o-animation-name: cflash;
	  -moz-animation-name: cflash;
	  -ms-animation-name: cflash;
	  -webkit-animation-name: cflash;
	  animation-duration: 2s;
	  -ms-animation-duration: 2s;
	  -webkit-animation-duration: 2s;
	  -moz-animation-duration: 2s;
	  -o-animation-duration: 2s;
	  animation-delay: 0.8s;
	  -o-animation-delay: 0.8s;
	  -ms-animation-delay: 0.8s;
	  -webkit-animation-delay: 0.8s;
	  -moz-animation-delay: 0.8s;
	  animation-timing-function: ease;
	  -ms-animation-timing-function: ease;
	  -moz-animation-timing-function: ease;
	  -webkit-animation-timing-function: ease;
	  -o-animation-timing-function: ease;
	  animation-fill-mode: forwards;
	  -ms-animation-fill-mode: forwards;
	  -o-animation-fill-mode: forwards;
	  -moz-animation-fill-mode: forwards;
	  -webkit-animation-fill-mode: forwards;
	}

	@keyframes cflash {
	  0% {
		transform: translateY(200px);
		opacity: 0;
	  }

	  100% {
		transform: translateY(0px);
		opacity: 1;
	  }
	}
	@keyframes cflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}

	@-moz-@keyframes cflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}




	@-o-@keyframes cflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}
	@-ms-@keyframes cflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}
	@-webkit-@keyframes cflash {
	  0% {
		transform: translateY(200px);
		-ms-transform: translateY(200px);
		-o-transform: translateY(200px);
		-webkit-transform: translateY(200px);
		-moz-transform: translateY(200px);
	  }

	  100% {
		transform: translateY(0px);
		-ms-transform: translateY(0px);
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		-o-transform: translateY(0px);
		opacity: 1;
	  }
	}

	.d {
	  animation-name: dflash;
	  -o-animation-name: dflash;
	  -ms-animation-name: dflash;
	  -webkit-animation-name: dflash;
	  -moz-animation-name: dflash;
	  animation-duration: 2s;
	  -ms-animation-duration: 2s;
	  -webkit-animation-duration: 2s;
	  -moz-animation-duration: 2s;
	  -o-animation-duration: 2s;
	  animation-delay: 1.3s;
	  -o-animation-delay: 1.3s;
	  -ms-animation-delay: 1.3s;
	  -webkit-animation-delay: 1.3s;
	  -moz-animation-delay: 1.3s;
	  animation-timing-function: ease-in-out;
	  -ms-animation-timing-function: ease-in-out;
	  -moz-animation-timing-function: ease-in-out;
	  -o-animation-timing-function: ease-in-out;
	  -webkit-animation-timing-function: ease-in-out;
	  animation-fill-mode: forwards;
	  -ms-animation-fill-mode: forwards;
	  -moz-animation-fill-mode: forwards;
	  -webkit-animation-fill-mode: forwards;
	  -o-animation-fill-mode: forwards;
	  opacity: 0;
	}

	@keyframes dflash {
	  0% {
		transform: translateY(200px) scale(0.1,0.1);
		-ms-transform: translateY(200px) scale(0.1,0.1);
		-webkit-transform: translateY(200px) scale(0.1,0.1);
		-moz-transform: translateY(200px) scale(0.1,0.1);
		-o-transform: translateY(200px) scale(0.1,0.1);
		opacity: 1;
	  }

	  100% {
		transform: translateY(0px) scale(1,1);
		-ms-transform: translateY(0px) scale(1,1);
		-webkit-transform: translateY(0px) scale(1,1);
		-moz-transform: translateY(0px) scale(1,1);
		-o-transform: translateY(0px) scale(1,1);
		opacity: 1;
	  }
	}
	@-o-keyframes dflash {
	  0% {
		transform: translateY(200px) scale(0.1,0.1);
		-ms-transform: translateY(200px) scale(0.1,0.1);
		-webkit-transform: translateY(200px) scale(0.1,0.1);
		-moz-transform: translateY(200px) scale(0.1,0.1);
		-o-transform: translateY(200px) scale(0.1,0.1);
		opacity: 1;
	  }

	  100% {
		transform: translateY(0px) scale(1,1);
		-ms-transform: translateY(0px) scale(1,1);
		-webkit-transform: translateY(0px) scale(1,1);
		-moz-transform: translateY(0px) scale(1,1);
		-o-transform: translateY(0px) scale(1,1);
		opacity: 1;
	  }
	}

	@-ms-keyframes dflash {
	  0% {
		transform: translateY(200px) scale(0.1,0.1);
		-ms-transform: translateY(200px) scale(0.1,0.1);
		-webkit-transform: translateY(200px) scale(0.1,0.1);
		-moz-transform: translateY(200px) scale(0.1,0.1);
		-o-transform: translateY(200px) scale(0.1,0.1);
		opacity: 1;
	  }

	  100% {
		transform: translateY(0px) scale(1,1);
		-ms-transform: translateY(0px) scale(1,1);
		-webkit-transform: translateY(0px) scale(1,1);
		-moz-transform: translateY(0px) scale(1,1);
		-o-transform: translateY(0px) scale(1,1);
		opacity: 1;
	  }
	}
	@-moz-keyframes dflash {
	  0% {
		transform: translateY(200px) scale(0.1,0.1);
		-ms-transform: translateY(200px) scale(0.1,0.1);
		-webkit-transform: translateY(200px) scale(0.1,0.1);
		-moz-transform: translateY(200px) scale(0.1,0.1);
		-o-transform: translateY(200px) scale(0.1,0.1);
		opacity: 1;
	  }

	  100% {
		transform: translateY(0px) scale(1,1);
		-ms-transform: translateY(0px) scale(1,1);
		-webkit-transform: translateY(0px) scale(1,1);
		-moz-transform: translateY(0px) scale(1,1);
		-o-transform: translateY(0px) scale(1,1);
		opacity: 1;
	  }
	}
	@-webkit-keyframes dflash {
	  0% {
		transform: translateY(200px) scale(0.1,0.1);
		-ms-transform: translateY(200px) scale(0.1,0.1);
		-webkit-transform: translateY(200px) scale(0.1,0.1);
		-moz-transform: translateY(200px) scale(0.1,0.1);
		-o-transform: translateY(200px) scale(0.1,0.1);
		opacity: 1;
	  }

	  100% {
		transform: translateY(0px) scale(1,1);
		-ms-transform: translateY(0px) scale(1,1);
		-webkit-transform: translateY(0px) scale(1,1);
		-moz-transform: translateY(0px) scale(1,1);
		-o-transform: translateY(0px) scale(1,1);
		opacity: 1;
	  }
	}

	.e {
	  animation-name: eflash;
	  -ms-animation-name: eflash;
	  -o-animation-name: eflash;
	  -moz-animation-name: eflash;
	  -webkit-animation-name: eflash;
	  animation-duration: 60s;
	  -ms-animation-duration: 60s;
	  -moz-animation-duration: 60s;
	  -webkit-animation-duration: 60s;
	  -o-animation-duration: 60s;
	  animation-delay: 5s;
	  -o-animation-delay: 5s;
	  -moz-animation-delay: 5s;
	  -webkit-animation-delay: 5s;
	  -ms-animation-delay: 5s;
	  animation-timing-function: linear;
	  -ms-animation-timing-function: linear;
	  -moz-animation-timing-function: linear;
	  -webkit-animation-timing-function: linear;
	  -o-animation-timing-function: linear;
	  animation-iteration-count: infinite;
	  -o-animation-iteration-count: infinite;
	  -moz-animation-iteration-count: infinite;
	  -webkit-animation-iteration-count: infinite;
	  -ms-animation-iteration-count: infinite;
	  opacity: 0;
	}

	@keyframes eflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-o-keyframes eflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-moz-keyframes eflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-ms-keyframes eflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-webkit-keyframes eflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}


	.f {
	  animation-name: fflash;
	  -ms-animation-name: fflash;
	  -o-animation-name: fflash;
	  -moz-animation-name: fflash;
	  -webkit-animation-name: fflash;
	  animation-duration: 60s;
	  -o-animation-duration: 60s;
	  -ms-animation-duration: 60s;
	  -moz-animation-duration: 60s;
	  -webkit-animation-duration: 60s;
	  animation-delay: 35s;
	  -o-animation-delay: 35s;
	  -ms-animation-delay: 35s;
	  -moz-animation-delay: 35s;
	  -webkit-animation-delay: 35s;
	  animation-timing-function: linear;
	  -ms-animation-timing-function: linear;
	  -o-animation-timing-function: linear;
	  -moz-animation-timing-function: linear;
	  -webkit-animation-timing-function: linear;
	  animation-iteration-count: infinite;
	  -ms-animation-iteration-count: infinite;
	  -webkit-animation-iteration-count: infinite;
	  -moz-animation-iteration-count: infinite;
	  -o-animation-iteration-count: infinite;
	  opacity: 0;
	}

	@keyframes fflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-o-keyframes fflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-moz-keyframes fflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-ms-keyframes fflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}
	@-webkit-keyframes fflash {
	  0% {
		transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		opacity: 1;
	  }

	  100% {
		transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		opacity: 1;
	  }
	}

	.g {
	  animation-name: gflash;
	  -ms-animation-name: gflash;
	  -o-animation-name: gflash;
	  -moz-animation-name: gflash;
	  -webkit-animation-name: gflash;
	  animation-duration: 30s;
	  -o-animation-duration: 30s;
	  -moz-animation-duration: 30s;
	  -webkit-animation-duration: 30s;
	  -ms-animation-duration: 30s;
	  animation-delay: 5s;
	  -o-animation-delay: 5s;
	  -ms-animation-delay: 5s;
	  -webkit-animation-delay: 5s;
	  -moz-animation-delay: 5s;
	  animation-timing-function: linear;
	  -ms-animation-timing-function: linear;
	  -webkit-animation-timing-function: linear;
	  -moz-animation-timing-function: linear;
	  -o-animation-timing-function: linear;
	  animation-iteration-count: infinite;
	  -o-animation-iteration-count: infinite;
	  -ms-animation-iteration-count: infinite;
	  -moz-animation-iteration-count: infinite;
	  -webkit-animation-iteration-count: infinite;
	  opacity: 1;
	}

	@keyframes gflash {
	  0% {
		transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		opacity: 1;
	  }

	  100% {
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		opacity: 1;
	  }
	}
	@-o-keyframes gflash {
	  0% {
		transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		opacity: 1;
	  }

	  100% {
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		opacity: 1;
	  }
	}
	@-ms-keyframes gflash {
	  0% {
		transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		opacity: 1;
	  }

	  100% {
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		opacity: 1;
	  }
	}
	@-webkit-keyframes gflash {
	  0% {
		transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		opacity: 1;
	  }

	  100% {
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		opacity: 1;
	  }
	}
	@-moz-keyframes gflash {
	  0% {
		transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		opacity: 1;
	  }

	  100% {
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		opacity: 1;
	  }
	}

	@media all and (max-width: 1920px) {
	  .isbox {
		height: 160px;
		width: 160px;
		position: absolute;
		right: 30.7%;
		top: 8%;
		background: url(../assets/images/fc.png) no-repeat 50% 50%;
		background-size:cover; 
	  }
	}

	@media all and (max-width: 1680px) {
	  .isbox {
		height: 160px;
		width: 160px;
		position: absolute;
		right: 26%;
		top: 8%;
		background: url(../assets/images/fc.png) no-repeat 50% 50%;
		background-size:cover; 
	  }
	}

	@media all and (max-width: 1440px) {
	  .isbox {
		height: 160px;
		width: 160px;
		position: absolute;
		right: 24.8%;
		top: 8%;
		background: url(../assets/images/fc.png) no-repeat 50% 50%;
		background-size:cover; 
	  }
	}

	@media all and (max-width: 1366px) {
	  .isbox {
		height: 160px;
		width: 160px;
		position: absolute;
		right: 23.2%;
		top: 8%;
		background: url(../assets/images/fc.png) no-repeat 50% 50%;
		background-size:cover; 
	  }
	}

	@media all and (max-width: 1280px) {
	  .isbox {
		height: 160px;
		width: 160px;
		position: absolute;
		right: 21.3%;
		top: 8%;
		background: url(../assets/images/fc.png) no-repeat 50% 50%;
		background-size:cover; 
	  }
	}

	@media all and (max-width: 1024px) {
	  .isbox {
		height: 160px;
		width: 160px;
		position: absolute;
		right: 14.4%;
		top: 8%;
		background: url(../assets/images/fc.png) no-repeat 50% 50%;
		background-size:cover; 
	  }
	}



	.mask {
	  height: 100%;
	  width: 100%;
	  background: rgba(0,0,0,0.5);
	  position: absolute;
	  z-index: 5;
	  left: 0px;
	  top: 0px;
	}

	.popcon {
	  background: #fff;
	  width: 480px;
	  height: auto;
	  border-radius: 10px;
	  position: absolute;
	  top: 5%;
	  padding: 40px;
	  left: 35%;
	  z-index: 6;
	  display: none;
	}

	.close {
	  height: 40px;
	  width: 40px;
	  border-radius: 360px;
	  background: #2fadb4 url(../assets/images/colse.svg) no-repeat 50% 50%;
	  position: absolute;
	  right: -15px;
	  top: -15px;
	}

	.lgtop {
	  height: 30px;
	  line-height: 30px;
	}

	.lgtit {
	  font-size: 16px;
	  font-weight: bold;
	  float: left;
	}

	.lgmail {
	  float: right;
	}

	.lgmail a {
	  color: #2fadb4
	}

	.lglb {
	  height: 47px;
	  width: 100%;
	  position: relative;
	}

	.lgtxt {
	  height: 45px;
	  font-size: 18px;
	  border: 1px solid #ccc;
	  width: calc(100% - 2px);
	  text-indent: 10px;
	}

	.lgsm {
	  height: 47px;
	  line-height: 47px;
	  padding: 0 15px;
	  border-left: 1px solid #ccc;
	  position: absolute;
	  width: auto;
	  right: 0px;
	  top: 0px;
	}

	.lgtls {
	  height: auto;
	  margin-bottom: 15px;
	}

	.lgcode {
	  height: 47px;
	  line-height: 47px;
	  padding: 0 15px;
	  position: absolute;
	  color: #2fadb4;
	  text-decoration: none;
	  width: auto;
	  right: 0px;
	  top: 0px;
	}

	.newslist {
	  line-height: 24px;
	  margin-top: 10px;
	}

	.newslist p a {
	  display: block;
	  text-decoration: none;
	  color: #333;
	  padding-left: 20px;
	  background: url(../assets/images/point.svg) no-repeat 0% 50%;
	  background-size: 2%;
	  text-overflow: ellipsis;
	  overflow: hidden;
	  white-space: nowrap;
	}

	.newslist p a:hover {
	  color: #f26360;
	  text-decoration: underline;
	}

	.hcon {
	  background: #fff;
	  height: auto;
	  margin: 60px 10% 0 10%;
	  padding: 60px;
	}

	.hcon_list {
	  float: left;
	  width: 33.33333%;
	}

	.hcon_list_inner {
	  padding: 0 40px;
	}

	.hcon_list_img {
	  background: #ccc;
	  overflow: hidden;
	}
	.hcon_list_img img{
		width: 100%;
	}

	.hcon_list_cn {
	  line-height: 24px;
	  margin-top: 10px;
	}

	.footer_cn {
	  text-align: center;
	  font-size: 14px;
	  color: #666;
	  padding: 50px 0;
	  padding-bottom: 10px;
	  line-height: 24px;
	}

	.hcon_so {
	  font-size: 24px;
	  margin-bottom: 20px;
	}

	.hlin {
	  text-align: right;
	  height: 45px;
	  line-height: 45px;
	}

	.hebtn {
	  height: 45px;
	  width: 100%;
	  border-radius: 8px;
	  -o-border-radius: 8px;
	  -ms-border-radius: 8px;
	  -webkit-border-radius: 8px;
	  -moz-border-radius: 8px;
	  color: #fff;
	  text-align: center;
	  background: #2fadb4;
	  line-height: 45px;
	}
	.hmbg{
	  background: #9DDDFF;
	  height: auto;
	}
	  /*@font-face {
		
		font-family: 'cooper';     
			 src:        
			 url('../assets/fonts/CooperBlackStd.otf') format('woff'),     
			 url('../assets/fonts/CooperBlackStd.otf') format('truetype');   
			 font-weight: normal;   
			 font-style: normal;
	  }﻿*/
</style>
