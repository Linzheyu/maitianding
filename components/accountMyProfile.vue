
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title">{{$t("accountMyProfile.MyProfile")}}</p>
				</ul>	
			</div>
			<div class="content border-t">
				<div class="row">
					<div class="col-md-8 col-sm-8 content-left">
						<p class="margin-b">{{$t("accountMyProfile.vipAccount")}}{{userInfo.email}}</p>
						<!-- <div class="group">
							<img :src="headimg" />
							<input id="headerImg" type="file" style="margin-top: 10px;" @change="actImg"/>
							value="$t('accountMyProfile.modifyAvatar')" 
						</div> -->
						<div class="group">
							<label for="#">{{$t("accountMyProfile.name")}}</label>
							<input type="text" v-model="userInfo.username"><br>
						</div>
						<div class="group">
							<label for="#">{{$t("accountMyProfile.sex")}}</label>
							<label>
								<input class="duiqi" name="sex" type="radio" value="1" v-model="userInfo.sex" />
								&nbsp&nbsp{{$t("accountMyProfile.men")}}
							</label>
							<label class="margin-l">
								<input class="duiqi" name="sex" type="radio" value="2" v-model="userInfo.sex" />
								&nbsp&nbsp{{$t("accountMyProfile.women")}} 
							</label>
						</div>
						<div class="group">
							<label class="margin-indent" for="#">{{$t("accountMyProfile.accountAddress")}}</label>
							<input id="copyUrlinput" type="text" readonly="" v-model="userInfo.transion_addr"  style="background: transparent;border:none;width: 250px;"/><button class="fuzhi-btn" @click="copyUrl">{{$t("AccountManagement.copy")}}</button>
						</div>
						<div class="group btn-group">
							<button>{{$t("publicText.off")}}</button>
							<button @click="submit">{{$t("publicText.ok")}}</button>
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

      userInfo:{},
      headimg:'',

    }
  },
  created(){
    this.userInfo = JSON.parse(localStorage.userinfo);
  },
  methods:{

  	submit: function(){

  		var fromdata = new FormData();
  		fromdata.append('name',this.userInfo.username);
  		fromdata.append('sex',this.userInfo.sex);
  		fromdata.append('imgfile', document.getElementById('headerImg').files[0]);
  		$.ajax({
		    url: myFn.apiAddress.memberInfo.setInfo,
		    type: 'post', //GET
		    // async:true,    //或false,是否异步
		    data:fromdata,
		    timeout:5000,    //超时时间
		    dataType:'jsonp',    //返回的数据格式：json/xml/html/script/jsonp/text
		    jsonp: "jsonpcallback",
            jsonpCallback:"jsonpcallback",
            contentType: false,
            processData: false,
		    success: function(res){
		    	
		    }
		});
		
  	},
  	actImg:function(){
  		var headerElent = document.getElementById('headerImg');
  		this.headimg  = window.URL.createObjectURL(headerElent.files[0]);
  	},
  	copyUrl: function(){
  		var Url2=document.getElementById("copyUrlinput");
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert( this.$t("staticMsg.msg003") );
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*=======================  main Start Part-1  ======================== */
		.blog-main{
			padding-left: 30;
			padding-right: 0;
			margin-bottom: 60px;
		}
		.accountInfo{
			width: 100%;
			border: 1px solid #272523;
			border-radius: 3px;
			background: #1F1C1B;
			padding: 20px 0;
		}
		.font-style{
			color: red;
			font-size: 50px;
		}
		
		/*========================  main Start Part-3 & Part-2 ========================*/
		.record{
			width: 100%;
			border: 1px solid #272523;
			border-radius: 3px;
			background: #1F1C1B;
			padding:0;
			text-align: left;
		}
		.record-list{
			width: 100%;
			height: 42px;
			margin-bottom: 0;
			padding-left: 0;
		}
		.on-active{
			color: #EC9530!important;
			border-bottom: 1px solid #EC9530;
		}
		.back-color{
			background: #161413;
		}
		.content{
			padding: 20px 0;
			text-align: center;
			color: #EC9530;
		}
		.content > .row{
			width: 100%;
			margin-left: 0;
			padding: 0 30px; 
		}
		.content > .row > .row{
			padding: 15px 0; 
		}
		.part-title{
			font-size: 16px;
			text-align: center;
			padding-top: 7px;
		}
		.content-left{
			padding-left: 60px;
			text-align: left;
		}
		.duiqi{
			vertical-align: middle;
			margin-top:-4px;
		}
		.margin-l{
			margin-left: 15px;
		}
		.group{
			padding: 10px 0;
		}
		.margin-b{
			margin-bottom: 10px;
		}
		.fuzhi-btn{
			margin-left: 10px;
			background: none;
			border: 1px solid #EC9530;
			height: 32px;
			border-radius: 3px;
		}
		.margin-indent{
			margin-left: -28px;
		}
		.btn-group button{
			width: 80px;
			height: 32px;
			color: #EC9530;
			background: none;
			border: 1px solid #EC9530;
			border-radius: 3px;
			margin-top: 15px;
		}
		.btn-group button:first-child{
			margin-left: 50px;
			margin-right: 15px;
		}
		.headImg img{
			width: 120px;
			height: 120px;
		}
</style>
