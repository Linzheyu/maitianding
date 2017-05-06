
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title"><i class="icon" style="background: transparent url('../static/images/icon.png')"></i>{{$t("safetySetWPwd.title")}}</p>
				</ul>	
			</div>
			<div class="content border-t">
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<div class="row border-b part1">
							<p>{{$t("safetyPayment.changePassword1")}}</p>
							<p><span>*</span>{{$t("safetyPayment.changePassword2")}}</p>
							<p><span>*</span>{{$t("safetyPayment.changePassword3")}}</p>
						</div>
					</div>
					
				</div>
			</div>
			<div class="content">
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<div class="row border-t border-b padding-t-30 padding-b-30">
							<div class="btn-group">
								<label for="#">{{$t("safetyPayment.oldpswd")}}</label>
								<input v-model="oldpswd" :placeholder="$t('safetyPayment.oldpswdPrompt')" type="text"/>
							</div>
							<div class="btn-group">
								<label for="#">{{$t("safetyPayment.newpswd")}}</label>
								<input v-model="newpswd" :placeholder="$t('safetyPayment.newpswdPrompt')" type="password"/>
							</div>
							<div class="btn-group">
								<label for="#">{{$t("safetyPayment.newpswdAgain")}}</label>
								<input v-model="againNewpswd" :placeholder="$t('safetyPayment.newpswdAgainPrompt')" type="password"/>
							</div>
							<div class="group btn-group">
								<!-- <button>{{$t("publicText.off")}}</button> -->
								<button @click="submit">{{$t("publicText.ok")}}</button>
							</div>
						</div>
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
      oldpswd:'',
      newpswd:'',
      againNewpswd:''
    }
  },
  methods:{
  	submit:function(){
	  	var self  = this;
  		var data = {
  			oldpassword: this.oldpswd,
  			password: this.newpswd,
  			repassword: this.againNewpswd
  		}
  		myFn.myAjax('get', data, myFn.apiAddress.accountSafety.amendLoginPassword, function(res){
          alert(self.$t("statusMsg.msg011"));
          self.$router.push({path:'index'});
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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
		margin-bottom: 30px;
		border-bottom: 1px #ccc solid;
	}
	.record-list .icon{
		width: 20px;
		height: 20px;
		display: inline-block;
		vertical-align: sub;
		margin-right: 7px;
		background-position: 55px 33px !important;
	}
	.on-active{
		color: #EC9530!important;
		border-bottom: 1px solid #EC9530;
	}
	.back-color{
		background: #fff;
	}
	.content{
		color: #436672;
	}
	.content > .row{
		width: 100%;
		margin-left: 0;
		padding: 0 30px; 
	}
	.part-title{
		display: inline-block;
		font-size: 15px;
		text-align: left;
		margin-bottom: 0px;
		padding-top: 20px;
		padding-bottom: 7px;
		border-bottom: 3px #30ADB3 solid;
	}
	.padding-b-30{
		padding-bottom: 30px;
	}
	.part1{
		text-align: left;
		margin-left: 10px;
		padding-bottom: 10px;
	}
	.part1 p{
		margin-top: 5px;
		color: #436D80;
	}
	.part1 p span{
		color: red;
		margin-right: 10px;
	}
	.part1 p:first-child{
		font-weight: 700;
	}
	.btn-group{
		display: block;
		margin: 15px 0;
		margin-left: 25px;
	}
	.btn-group input{
		width: 230px;
		height: 40px;
		padding-left: 15px;
		border:1px #ccc solid;
	}
	.btn-group label{
		width: 95px;
	}
	.btn-group button{
		width: 130px;
		height: 40px;
		color: #fff;
		background: #30ADB3;
		border: none;
		border-radius: 20px;
		margin-top: 15px;
	}
	.btn-group button:first-child{
		margin-left: 90px;
		margin-top: 30px;
	}
</style>
