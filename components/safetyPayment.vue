
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title">{{$t("safetyPayment.changePassword")}}</p>
				</ul>	
			</div>
			<div class="content border-t">
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<div class="row border-b padding-t-30 padding-b-30 part1">
							<p>{{$t("safetyPayment.changePassword1")}}</p>
							<p>{{$t("safetyPayment.changePassword2")}}</p>
							<p>{{$t("safetyPayment.changePassword3")}}</p>
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
								<input v-model="oldpswd" type="text"/>
							</div>
							<div class="btn-group">
								<label for="#">{{$t("safetyPayment.newpswd")}}</label>
								<input v-model="newpswd" type="password"/>
							</div>
							<div class="btn-group" style="margin-left:-23px;">
								<label for="#">{{$t("safetyPayment.newpswdAgain")}}</label>
								<input v-model="againNewpswd" type="password"/>
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
  		var self = this;
  		var data = {
  			old_password: this.oldpswd,
  			new_password: this.newpswd,
  			renew_password: this.againNewpswd
  		}
  		myFn.myAjax('get', data, myFn.apiAddress.accountSafety.amendPayPassword, function(res){
          alert( self.$t("staticMsg.msg011") );
          self.$router.push({path:'index'});
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
	
	/*========================  main Start Part-3 & Part-2 ========================*/
	.record{
		width: 100%;
		border: 1px solid #272523;
		border-radius: 3px;
		background: #1F1C1B;
		padding:0;
		text-align: left;
		color: #EC9530;
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
		text-align: center;
		color: #EC9530;
	}
	.content > .row{
		width: 100%;
		margin-left: 0;
		padding: 0 30px; 
	}
	.part-title{
		font-size: 16px;
		text-align: center;
		padding-top: 7px;
	}
	.padding-t-30{
		padding-top: 30px;
	}
	.padding-b-30{
		padding-bottom: 30px;
	}
	.part1{
		text-align: left;
	}
	.part1 p{
		margin-top: 5px;
	}
	.btn-group{
		display: block;
		margin: 15px 0;
	}
	.btn-group input{
		width: 35%;
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
</style>
