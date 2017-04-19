
<template>
	<div class="col-md-10 col-sm-12 blog-main">
		<div class="row accountInfo">
			<p class="font-style">888888888</p>
			<p>{{$t("accountCard.accumulatedthenumber")}}</p>
		</div>

		<div class="row record">
			<div class="back-color">
				<ul class="record-list">
					<p class="part-title">{{$t("accountCard.Mybeast")}}</p>
				</ul>	
			</div>
			<div class="content">
				<div class="row myconstellation">
					<div class="col-md-12">
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast")}}</i></li>
					</div>
				</div>
			</div>
		</div>

		<div class="row record">
			<div class="back-color">
				<ul class="record-list">
					<p class="part-title">{{$t("accountCard.Myconstellationcard")}}</p>
				</ul>	
			</div>
			<div class="content border-b">
				<div class="row myconstellation">
					<p>{{$t("accountCard.Constellationprizepool")}}</p>
					<div class="col-md-12">
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast1")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast2")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast3")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast4")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast5")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast6")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast7")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast8")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast9")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast10")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast11")}}</i></li>
						<li><img src="#333"><i>{{$t("accountCard.constellationBeast12")}}</i></li>
					</div>
				</div>
				<div class="row synthesis">
					<button>{{$t("accountCard.synthesis")}}</button>
				</div>
			</div>
			<p class="xingzuoshou border-t">{{$t("accountCard.prompt")}}</p>
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
		margin-top: 25px;
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
		color: #837D7A;
	}
	.content > .row{
		width: 100%;
		margin-left: 0;
		padding: 0 30px; 
	}
	.content > .row > .row{
		padding: 15px 0; 
	}
	.myconstellation > div > li{
		width: 120px;
		height: 180px;
		margin: 0 20px 30px 0;
		float: left;
	}
	.myconstellation > div > li > img{
		width: 100%;
		height: 100%;
	}
	.myconstellation p{
		text-align: left;
		margin-bottom: 20px;
		padding-left: 10px;
	}
	.part-title{
		font-size: 16px;
		text-align: center;
		padding-top: 7px;
	}
	.xingzuoshou{
		color: #837D7A;
		text-align: center;
		padding: 20px 0;
	}
	.synthesis button{
		width: 80px;
		height: 32px;
		color: #EC9530;
		background: none;
		border: 1px solid #EC9530;
		border-radius: 3px;
		margin-top: 15px;
	}
</style>
