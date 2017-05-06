
<template>
	<div class="col-md-10 col-sm-12 blog-main">
				
			<div class="row record">
				<div class="back-color">
					<div class="record-list">
						<p class="part-title"><i class="glyphicon glyphicon-resize-small"></i>{{$t("safetyBound.accountBinding")}}</p>
					</div>	
				</div>
				<div class="content border-t">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="row platform-type">
								<div class="col-md-3 col-sm-3 left">
									<i class="icon icon1" style="background: transparent url('../static/images/icon.png')"></i><span>{{$t("safetyBound.safeMailbox")}}</span>
								</div>
								<div class="col-md-7 col-sm-7 left">
									<p>{{$t("safetyBound.safeMailboxDescription")}}</p>
								</div>
								<div class="col-md-2 col-sm-2 right">
									<p>{{$t("safetyBound.yesBing")}}</p>
									<!-- <p class="red">{{$t("safetyBound.noBing")}}</p> -->
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="content">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="row border-t platform-type">
								<div class="col-md-3 col-sm-3 left">
									<i class="icon icon2" style="background: transparent url('../static/images/icon.png')"></i><span>{{$t("safetyBound.run")}}</span>
								</div>
								<div class="col-md-7 col-sm-7 left">
									<p>{{$t("safetyBound.runDescription")}}</p>
								</div>
								<div class="col-md-2 col-sm-2 right">
									<p  v-show="userInfo.live_account == 1">{{$t("safetyBound.yesBing")}}</p>
									<p class="red" v-show="userInfo.live_account == 0">{{$t("safetyBound.noBing")}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="row border-t platform-type">
								<div class="col-md-3 col-sm-3 left">
									<i class="icon icon3" style="background: transparent url('../static/images/icon.png')"></i><span>{{$t("safetyBound.ExchangePlatform")}}</span>
								</div>
								<div class="col-md-7 col-sm-7 left">
									<p>{{$t("safetyBound.ExchangePlatformDescription")}}</p>
								</div>
								<div class="col-md-2 col-sm-2 right">
									<p v-show="userInfo.force_account == 1">{{$t("safetyBound.yesBing")}}</p>
									<p class="red" v-show="userInfo.force_account == 0">{{$t("safetyBound.noBing")}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="row border-t platform-type" style="border:none;">
								<div class="col-md-3 col-sm-3 left">
									<i class="icon icon4" style="background: transparent url('../static/images/icon.png')"></i><span>{{$t("safetyBound.laserExchangePlatform")}}</span>
								</div>
								<div class="col-md-7 col-sm-7 left">
									<p>{{$t("safetyBound.laserExchangePlatformDescription")}}</p>
								</div>
								<div class="col-md-2 col-sm-2 right">
									<p v-show="userInfo.aurora_account == 1">{{$t("safetyBound.yesBing")}}</p>
									<p v-show="userInfo.aurora_account == 0" class="red" @click="binding4" >{{$t("safetyBound.noBing")}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="modal fade" id="extractCurrency" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false">
		        <div class="modal-dialog" role="document">
		          <div class="modal-content">
		              <div class="modal-header">
		                <h4 class="modal-title" id="exampleModalLabel">{{$t("safetyBound.Bing4")}}</h4>
		            </div>
		            <div class="modal-body">
		                <form>
		                    <div class="form-group">
		                      <label for="recipient-name" class="control-label">{{$t("safetyBound.codePrompt")}}</label>
		                      <input v-model="emailCode" type="text" class="form-control" id="recipient-name">
		                    </div>
		                </form>
		            </div>
		            <div class="modal-footer">
		              <div class="btn-box">
		                <button type="button" class="btn btn-default" data-dismiss="modal">{{$t("publicText.off")}}</button>
		                  <button type="button" @click="SendCode" class="btn btn-primary">{{$t("publicText.ok")}}</button>
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
      emailCode:'',
      userInfo:{}
    }
  },
  mounted(){
      this.userInfo = JSON.parse(localStorage.userinfo);
  },
  methods:{
  	binding4:function(){
  		var self = this;
  		myFn.myAjax('get',{}, myFn.apiAddress.binding.getMeailCode, function(res){
          alert( self.$t("AccountManagement.sendEmailCode") );
      	})
          $("#extractCurrency").modal("toggle");
  	},
  	SendCode:function(){
  		var self = this;
  		myFn.myAjax('post',{code:this.emailCode}, myFn.apiAddress.binding.binding4, function(res){
  			self.userInfo.aurora_account = 1;
  			myFn.setUserInfo('aurora_account', 1);
          	alert( self.$t("AccountManagement.bindingSuccess") );	          
      	})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.icon{
		width: 25px;
		height: 20px;
		display: inline-block;
		vertical-align: sub;
		margin-right: 7px;
		background-position: 21px 78px !important;
	} 

	.icon1{
		background-position: 28px 134px !important;
	}
	.icon2{
		background-position: 28px 97px !important;
	}
	.icon3{
		background-position: 28px 60px !important;
	}
	.icon4{
		background-position: 28px 26px !important;
	}

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
		.platform-type{
			width: 100%;
			margin: auto;
			height: 40px;
			color: #23527c;	
			line-height: 40px;
			border-bottom: 1px #f3f3f3 solid;
		}
		.record-list{
			width: 92%;
			margin: auto;
			padding-left: 0;
			margin-bottom: 30px;
			border-bottom: 1px #ccc solid;
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
		.content > .row{
			width: 100%;
			margin-left: 0;
			padding: 0 30px; 
		}
		.part-title{
			width: 90px;
			font-size: 15px;
			text-align: left;
			margin-bottom: 0px;
			padding-top: 20px;
			padding-bottom: 7px;
			border-bottom: 3px #30ADB3 solid;
		}
		.part-title i{
			color: #30ADB3;
			margin-right: 10px;
		}
		.left{
			text-align: left;
		}
		.left img{
			width: 60px;
			height: 60px;
			margin-right: 20px;
		}
		.red{
			color: red;
			cursor: pointer;
		}


	.modal-dialog{
      width: 350px;
      color: #436D80;
      margin-top: 8%;
      text-align: left;
    }
    .modal-header{
        width: 80%;
        margin:auto;
        margin-top: 10px;
        border-bottom: 1px #ccc solid;
    }
    .modal-header h4{
        color: #2BACB8 !important;
        font-weight: 700;
    }
    .modal-dialog .modal-header{
      text-align: center;
      background: #fff;
      margin-bottom: 10px;
    }
    .modal-dialog .modal-header .close{
      color: #EC9530;
    }
    .modal-dialog .modal-content{
      background: #fff;
    }
    .modal-dialog .modal-body{
      padding-top: 0px;
      width: 90%;
      margin:auto;
    }
    #emailCodePopup p{
      font-size: 13px;
      margin: 15px 0px;
    }
    #emailCodePopup input{
      width: 100%;
      border-radius: 0px;
    }
    .modal-dialog .modal-body .form-group .payInput{
      letter-spacing: 20px;
      height: 50px;
      font-size: 1.3em;
    }
    .modal-dialog .modal-body .form-group .addressInput{
      color: #436D80;
      font-size: 14px;
      height: 30px;
    }
    .modal-dialog .modal-body .form-group textarea{
      width: 100%;
      height: 100px;
      border:1px #ccc solid;
      padding:10px;
    }
    .modal-dialog .modal-body .form-group{
      margin-bottom: 0px;
      padding-top: 10px;
    }
    .modal-dialog .modal-body .form-group .control-label{
      margin-bottom: 10px;
      font-weight: 100;
      font-size: 0.9em;
    }
    .modal-dialog .modal-body input{
      height: 45px;
      font-size: 30px;
      color: #2BACB8;
      background: none;
      border: 1px solid #ccc;
      border-radius:0px;
      box-shadow: none;
      margin-bottom: 5px;
    }
    .modal-dialog .modal-footer{
      width: 95%;
      text-align: right;
      border: none;
      padding-top: 0;
      padding-bottom: 30px; 
    }
    .modal-dialog .modal-footer .btn-box{
      display: inline-block;
      margin: auto;
    }
    .modal-dialog .modal-footer .btn-box button{
      background: transparent;
      width: 80px;
      height: 34px;
      border:none;
      border-radius: 0px;
      color: #2BACB8;
      text-align: center;
    }
    .modal-dialog .modal-footer .btn-box button:last-child{
        color: #fff;
        background: #2BACB8;
    }
    .modal-dialog .modal-footer .btn-box button:hover{
      color: #ccc;
    }
</style>
