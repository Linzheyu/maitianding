
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title">{{$t("safetySetPay.title")}}</p>
				</ul>	
			</div>
			<div class="content border-t">
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<div class="row border-b padding-t-30 padding-b-30 part1">
							<p>{{$t("safetySetPay.text")}}</p>
						</div>
					</div>
					
				</div>
			</div>
			<div class="content">
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<div class="row border-t border-b padding-t-30 padding-b-30">
							<div class="btn-group">
								<label for="#">{{$t("safetySetPay.inputlable")}}</label>
								<input v-model="password" type="text"/>
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
      password:'',
    }
  },
  methods:{
  	submit:function(){
  		var data = {
  			password: this.password,
  		}
  		myFn.myAjax('get', data, myFn.apiAddress.accountSafety.payPassword, function(res){
          console.log(res);
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*/*=======================  sider Start  /*=======================*/
	.accountAdministration{
		width: 100%;
		border: 1px solid #272523;
		border-radius: 3px;
	}
	.accountAdministration li{
		width: 100%;
		height: 42px;
		padding: 10px 0;
		color: #837D7A;
		background: #1F1C1B;
		user-select: none;
	}
	.margin-t-60{
		margin-top: 60px;
	}
	.title{
		background-color: #161413!important;
		padding: 10px 0;
		font-size: 16px;
		color: #EC9530!important;
		user-select: none;
	}
	.margin-t-Separate{
		margin-top: 30px;
	}
	.on-click{
		color: #ccc!important;
		border-left: 1px solid  #EC9530;
		border-right: 1px solid  #EC9530;
	}
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
