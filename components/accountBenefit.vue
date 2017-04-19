
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title">我的公益</p>
				</ul>	
			</div>
			<div class="content border-t padding-b-0">
				<div class="row">
					<ul class="status-list border-b">
						<li class="statusOn">审核中</li>
						<li>已通过</li>
						<li>未通过</li>
						<li>已结束</li>
					</ul>
				</div>
			</div>
			<div class="content padding-t-0">
				<div class="row">
					<div class="col-md-12 col-sm-12 border-t article">
						<h3>我是标题我是标题我是标题</h3>
						<p class="color-time">申请时间：2017-4-7 21:50</p>
						<p>回眸，你的轻笑抹过我肩头；一缕长发的幽香散尽，千里之外，你已是让人思念的风景。天涯从此成为寄托温柔的梦乡，牵指漫步的相爱经历，在月华相依的小池荷径模糊了深情。悠然轻放的菊收尽晚秋的花色，叶等久了时间的诺言，枯萎了期待的热情，在霜白露重的清晨落下枝头。芬芳已埋葬在昨日的记忆里，放一只空杯盛满你以往的丝呓纤影，醉了眼神在月夜凄楚的孤零中熬着空境。</p>
					</div>
				</div>
				<div class="row cancel">
					<div class="col-md-12 col-sm-12">
						<div class="row padding-b-20 border-b">
							<div class="col-md-10 col-sm-10">
								<p class="color-time">申请公益额：180万</p>
							</div>
							<div class="col-md-2 col-sm-2">
								<button>取消申请</button>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="room border-t">
						
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
		.status-list{
			height: 34px;
		}
		.status-list li{
			float: left;
			font-size: 16px;
			color: #837D7A;
			margin-right: 60px;
			padding-bottom: 10px;
		}
		.statusOn{
			color: #EC9530;
			border-bottom: 1px solid #EC9530;
		}
		.padding-b-0{
			padding-bottom: 0;
		}
		.padding-t-0{
			padding-top: 0;
		}
		h3{
			margin-bottom: 0;
		}
		.article{
			text-align: left;
			padding-bottom: 20px;
			padding-left: 0;
		}
		.color-time{
			color: #837D7A;
			margin-top: 5px;
		}
		.article p:last-child{
			color: #837D7A;
			margin-top: 30px;
		}
		.cancel{
			text-align: left;
		}
		.cancel button{
			width: 80px;
			height: 32px;
			color: #EC9530;
			background: none;
			border: 1px solid #EC9530;
			border-radius: 3px;
		}
		.cancel .col-md-10,.cancel .col-sm-10{
			padding-left: 0;
		}
		.padding-b-20{
			padding-bottom: 20px;
		}
		.room{
			height: 100px;
			padding: 15px 0;
		}
</style>
