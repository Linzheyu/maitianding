
<template>
	<div class="indexNews">
		<!-- <img src="../assets/images/background-small.png" class="img-responsive" alt="Responsive image">  -->
	
		<div class=" padding-t">
		
		<div class="container">
			<div class="row news-item" v-for="item in nuwsList.list">
				<router-link :to="{path:'NewsDetails', query: {id:item.id}}">
					<div class="col-md-2">
							<!-- <img src="../assets/images/mojie.png"/> -->
					</div>
					<div class="col-md-10">
							<p class="newList-title" v-html="item.title">我是标题的标题</p>
							<p class="description" v-html="item.desc">月光如洗，如流水般涌动;流水如镜，如月光般静谧。岸柳依依，探出细腰，欲与水中月比美。穿梭千年的小舟从月里推波而来，荡开一圈圈涟漪。</p>
							<img src="../assets/icon/right-2.png">
					</div>
					<div class="col-md-12">
						 <div  class="newList-liner"></div>
					</div>
				</router-link>
			</div>

			<div class="content" v-show="allpage>1">
				<div class="row sure-btn">
					<div class="border-t">
							<ul class="pagination" >
								<li v-show="current != 1" @click="current-- && goto(current)" ><a>{{ $t('page.previousPage') }}</a></li>
								<li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
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
</template>

<script>

import Vue from 'vue'
import indexSideNav from '@/components/indexSideNav'

Vue.component('sideNav', indexSideNav);

export default {
	name: 'indexNews',
	data () {
		return {
			current:1,
			showItem:10,
			allpage:0,
			nuwsList:{}
		}
	},
	computed:{
			pages:function(){
			var pag = [];
				if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
						 //总页数和要显示的条数那个大就显示多少条
						 var i = Math.min(this.showItem,this.allpage);
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
		var self = this;
		myFn.myAjax('get', {page:self.current,pagenumber:self.showItem}, myFn.apiAddress.index.nuwList, function(res){
				self.nuwsList = res.data;
				self.page = res.data.current;
				self.allpage = res.data.pagenum;
		});

	},
	methods:{
		goto:function(index){
			var self = this
			if(index == self.current) return;
			self.current = index;

			//这里可以发送ajax请求

			var data = {
				pagenumber: self.showItem,
				page: self.current,
			}

			myFn.myAjax('get', data, myFn.apiAddress.index.nuwList, function(res){
					self.message = res.data;
			});

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.news-item{
		padding-top: 20px;
	}
	.padding-t{
		padding-top: 60px;
	}
	.newList-box > div{
		margin-top: 30px;
	}
	.newList-title{
		margin-top: -3px;
		color: #ccc;
		font-size: 1.5em;
	}
	.description{
		color: #9c9999;
		padding-bottom: 25px;
	}
	.newList-liner{
		margin-top: 40px;
		border-bottom: 1px dashed #ccc;
	}
	.sure-btn{
		text-align: right;
		padding-right: 50px;
		padding-top: 40px;
	}
	.pagination > li > a{
		color: #777;
		background-color: transparent;
	}
	.pagination > li > a:hover{
		background: transparent;
		color: #fff;
	}
</style>
