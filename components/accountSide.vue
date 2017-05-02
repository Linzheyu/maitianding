

<template>
	<div class="accountSide">
		<div class="container-fluid">
			<div class="col-lg-2 col-md-2 blog-sidebar">
				<div class="accountAdministration">
					<ul class="border-b title">
						<li><p><i class="glyphicon glyphicon-user" style="color: #628DD2"></i>{{$t("sider.accountManagement")}}</p></li>
						<li class="border-t border-b"><router-link to="/game/account/index" activeClass="on-click">{{$t("sider.accountInfo")}}</router-link></li>
						<li class="border-t border-b"><router-link to="/game/account/card" activeClass="on-click">{{$t("sider.accountMycard")}}</router-link></li>
						<li class="border-t border-b"><router-link to="/game/account/benefit" >{{$t("sider.accountMycommonweal")}}</router-link></li>
						<li class="border-t"><router-link to="/game/account/myProfile" activeClass="on-click">{{$t("sider.accountMyProfile")}}</router-link></li>
					</ul>
					<ul class="border-b title">
						<li><p><i class="glyphicon glyphicon-lock" style="color: #77CAE0"></i>{{$t("sider.accountsafetyManagement")}}</p></li>
						<li class="border-t border-b"><router-link to="/game/account/bound" activeClass="on-click">{{$t("sider.accountBinding")}}</router-link></li>
						<li class="border-t border-b"><router-link to="/game/account/payment" activeClass="on-click">{{$t("sider.accountPatmentManagement")}}</router-link></li>
						<li class="border-t"><router-link to="/game/account/loginpsw" activeClass="on-click">{{$t("sider.accountLoginManagement")}}</router-link></li>
						<!-- <li class="border-t border-b"><router-link to="/game/account/setpayment" activeClass="on-click">{{$t("safetySetPay.title")}}</router-link></li> -->
					</ul>
					<ul class="border-b title">
						<li><p><i class="glyphicon glyphicon-calendar" style="color: #E4D077"></i>{{$t("sider.accountlog")}}</p></li>
						<li class="border-t"><router-link to="/game/account/log" activeClass="on-click" >{{$t("sider.operatingLog")}}</router-link></li>
					</ul>
				</div>
			</div>
			<router-view></router-view>
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
	.container-fluid{
		width: 1300px;
	}
	.accountAdministration{
		color: #436672;
		background: #fff;
		border-radius: 3px;
		font-size: 14px;
		text-align: left;
		padding-top: 30px;
	}
	.accountAdministration li{
		width: 140px;
		height: 30px;
		margin:auto;
		color: #837D7A;
	}
	.accountAdministration li a{
		margin-left: 20px;
		text-decoration: none;
	}
	.accountAdministration li p{
		color: #436D80;
		font-weight: 700;
	}
	.accountAdministration li p i {
		margin-right: 7px;
	}
	.title{
		padding: 10px 0 10px 30px;
		user-select: none;
	}

	.margin-t-60{
		margin-top: 60px;
	}
	
	.margin-t-Separate{
		margin-top: 30px;
	}
	.on-click{
		color: #30ADB3;
	}
</style>
