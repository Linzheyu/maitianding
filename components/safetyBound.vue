
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
				<div class="row record">
					<div class="back-color border-b">
						<ul class="record-list">
							<p class="part-title">{{$t("safetyBound.accountBinding")}}</p>
						</ul>	
					</div>
					<div class="content border-t">
						<div class="row">
							<div class="col-md-12 col-sm-12">
								<div class="row border-b padding-t-30 padding-b-30">
									<div class="col-md-3 col-sm-3 left">
										<img src="#333"><span>{{$t("safetyBound.safeMailbox")}}</span>
									</div>
									<div class="col-md-7 col-sm-7 center">
										<p>{{$t("safetyBound.safeMailboxDescription")}}</p>
									</div>
									<div class="col-md-2 col-sm-2 right">
										<p>{{$t("safetyBound.yesBing")}}</p>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div class="content">
						<div class="row">
							<div class="col-md-12 col-sm-12">
								<div class="row border-t border-b padding-t-30 padding-b-30">
									<div class="col-md-3 col-sm-3 left">
										<img src="#333"><span>{{$t("safetyBound.run")}}</span>
									</div>
									<div class="col-md-7 col-sm-7 center">
										<p>{{$t("safetyBound.runDescription")}}</p>
									</div>
									<div class="col-md-2 col-sm-2 right">
										<p class="red">{{$t("safetyBound.noBing")}}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="content">
						<div class="row">
							<div class="col-md-12 col-sm-12">
								<div class="row border-t border-b padding-t-30 padding-b-30">
									<div class="col-md-3 col-sm-3 left">
										<img src="#333"><span>{{$t("safetyBound.ExchangePlatform")}}</span>
									</div>
									<div class="col-md-7 col-sm-7 center">
										<p>{{$t("safetyBound.ExchangePlatformDescription")}}</p>
									</div>
									<div class="col-md-2 col-sm-2 right">
										<p>{{$t("safetyBound.yesBing")}}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="content">
						<div class="row">
							<div class="col-md-12 col-sm-12">
								<div class="row border-t border-b padding-t-30 padding-b-30">
									<div class="col-md-3 col-sm-3 left">
										<img src="#333"><span>{{$t("safetyBound.laserExchangePlatform")}}</span>
									</div>
									<div class="col-md-7 col-sm-7 center">
										<p>{{$t("safetyBound.laserExchangePlatformDescription")}}</p>
									</div>
									<div class="col-md-2 col-sm-2 right">
										<p class="red">{{$t("safetyBound.noBing")}}</p>
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
      msg: 'Welcome to Your Vue.js App'
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
		.left{
			text-align: left;
		}
		.left img{
			width: 60px;
			height: 60px;
			margin-right: 20px;
		}
		.center p{
			margin-top: 20px;
			color: #837D7A;
		}
		.right p{
			margin-top: 20px;
		}
		.red{
			color: red;
		}
</style>
