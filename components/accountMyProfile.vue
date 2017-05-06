
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title"><i class="icon" style="background: transparent url('../static/images/icon.png')"></i>{{$t("accountMyProfile.MyProfile")}}</p>
				</ul>	
			</div>
			<div class="content border-t">
				<div class="row my-content">
					<div class="col-md-12 col-sm-12 content-left">

						<div class="group">
							<label for="#">{{ $t("accountMyProfile.MyProfile") }}：</label>
							<img style="width: 80px;height: 90px;" :src="userInfo.picture" />
							<button id="openFile">{{ $t("accountMyProfile.modify") }}</button>
							<input id="headerImg" type="file" style="display: none;" @change="actImg"/>
						</div>
						<div class="group">
							<label for="#">{{$t("accountMyProfile.vipAccount")}}</label>
							<span>{{userInfo.email}}</span>
						</div>


						<div class="group">
							<label for="#">{{$t("accountMyProfile.name")}}</label>
							<input class="name-input" type="text" v-model="userInfo.username"><br>
						</div>
						<div class="group">
							<label for="#">{{$t("accountMyProfile.sex")}}</label>
								<input class="duiqi" name="sex" type="radio" value="1" v-model="userInfo.sex" />
								&nbsp{{$t("accountMyProfile.men")}}
								<input style="margin-left: 30px;"  class="duiqi" name="sex" type="radio" value="2" v-model="userInfo.sex" />
								&nbsp{{$t("accountMyProfile.women")}} 
							</label>
						</div>
						<div class="group">
							<label for="#">{{$t("accountMyProfile.accountAddress")}}</label>
							<input id="copyUrlinput" type="text" readonly="" v-model="userInfo.transion_addr"  style="background: transparent;border:none;width: 250px;"/><button class="fuzhi-btn" @click="copyUrl">{{$t("AccountManagement.copy")}}</button>
						</div>
						<div class="group btn-group">
							<!-- <button>{{$t("publicText.off")}}</button> -->
							<button @click="submit">{{$t("publicText.preservation")}}</button>
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
  mounted(){
		$("#openFile").click(function(){
			$("#headerImg").click();
		})
  },
  methods:{

  	submit: function(){

  		var fromdata = new FormData();
  		fromdata.append('name',this.userInfo.username);
  		fromdata.append('sex',this.userInfo.sex);
  		fromdata.append('imgfile', document.getElementById('headerImg').files[0]);
  		$.ajax({
		    url: myFn.apiAddress.memberInfo.setInfo,
		    type: 'POST', //GET
		    // async:true,    //或false,是否异步
		    data:fromdata,
		    timeout:5000,    //超时时间
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
			min-height: 550px;
			border-radius: 3px;
			background: #fff;
			padding:0;
			text-align: left;
			color: #436672;
		}
		.record-list{
			width: 92%;
			margin: auto;
			padding-left: 0;
			border-bottom: 1px #ccc solid;
		}
		.record-list .icon{
			width: 20px;
			height: 20px;
			display: inline-block;
			vertical-align: sub;
			margin-right: 7px;
			background-position: 54px 249px !important;
		} 
		.part-title{
			display: inline-block;
			font-size: 15px;
			font-weight: 700;
			text-align: left;
			margin-bottom: 0px;
			padding-top: 20px;
			padding-bottom: 7px;
			border-bottom: 3px #30ADB3 solid;
		}
		.on-active{
			color: #EC9530!important;
			border-bottom: 1px solid #EC9530;
		}
		.back-color{
			background: #fff;
		}
		.content{
			text-align: center;
			color: #EC9530;
		}
		.my-content{
			color: #436672;
		}
		.my-content label{
			width: 80px;

			text-align: left;
		}
		.content > .row{
			width: 100%;
			margin-left: 0;
			padding: 0 30px; 
		}
		.content > .row > .row{
			padding: 15px 0; 
		}
		.content-left{
			padding-left: 25px;
			margin-top: 30px;
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
			padding: 15px 0;
		}
		.margin-b{
			margin-bottom: 10px;
		}
		.fuzhi-btn{
			width: 60px;
			height: 30px;
			margin-left: 30px;
			background: none;
			border: 1px solid #ccc;
		}

		.btn-group button{
			width: 130px;
			height: 40px;
			color: #fff;
			background: #30ADB3;
			border: none;
			border-radius: 20px;
		}
		.btn-group button:first-child{
			margin-left: 90px;
			margin-right: 15px;
		}
		.headImg img{
			width: 120px;
			height: 120px;
		}
		.name-input{
			width: 230px;
			height: 40px;
			border:1px #ccc solid;
			padding-left: 10px;
		}
		#openFile{
			width: 60px;
			height: 30px;
			background: transparent;
			font-weight: 700;
			border:1px #ccc solid;
		}
</style>
