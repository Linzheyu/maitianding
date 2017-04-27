
<template>
	<div class="col-md-9 col-sm-12 blog-main">
				
		<div class="row record">
			<div class="back-color border-b">
				<ul class="record-list">
					<p class="part-title">{{$t("log.operatingLog")}}</p>
				</ul>	
			</div>
			<div class="content">
				<div class="row border-t">
					<div class="col-md-12 col-sm-12">
						<div class="row border-b padding-tb-20">
							<div class="col-md-3 col-sm-3">{{$t("log.time")}}</div>
							<div class="col-md-3 col-sm-3">{{$t("log.types")}}</div>
							<div class="col-md-3 col-sm-3">{{$t("log.loginIP")}}</div>
							<div class="col-md-3 col-sm-3">{{$t("log.Address")}}</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="content color-content">
				<div class="row" v-for="item in addressList">
					<div class="col-md-12 col-sm-12">
						<div class="row border-t border-b padding-tb-20">
							<div class="col-md-3 col-sm-3" v-html="item.crt_time"></div>
							<div class="col-md-3 col-sm-3" v-show="item.ltype == 0">{{$t("log.typesList")}}</div>
							<div class="col-md-3 col-sm-3" v-show="item.ltype == 1">{{$t("log.quirt")}}</div>
							<div class="col-md-3 col-sm-3" v-html="item.ip_addr"></div>
							<div class="col-md-3 col-sm-3" v-html="item.address"></div>
						</div>
						
					</div>
				</div>
			</div>
			<p style="text-align: center;padding:20px 0px;margin-right: 30px;" v-show="allpage<1">无更多数据</p>
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
</template>

<script>

export default {
  name: 'accountSide',
  data () {
    return {
    	// 分页
      current:1,
      showItem:10,
      allpage:0,
      addressList:[],
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
  created(){

  },
  mounted(){
    var self = this;
    var data = {
      page: self.current,
      pagenumber: self.showItem,
    }
    myFn.myAjax('get', data, myFn.apiAddress.memberInfo.getLog, function(res){
        self.addressList = res.data.list;
        self.allpage = res.data.pagenum;
    });
  },
  methods:{
  	  goto:function(index){
      var self = this
      if(index == self.current) return;
        self.current = index;
        var data = {
          pagenumber: self.showItem,
          page: self.current,
        }
        myFn.myAjax('get', data, myFn.apiAddress.memberInfo.getLog, function(res){
            self.addressList = res.data.list;
       	});
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
	.padding-tb-20{
		padding: 20px 0;
	}
	.color-content{
		color: #837D7A;
	}
</style>
