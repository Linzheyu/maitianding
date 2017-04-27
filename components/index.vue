
<template>
  <div class="index">
      <!-- 导航 -->
      <div class="container">       
          <nav class="navbar navbar-default">
              <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <!-- <a class="   .navbar-brand{
  
                    } logo" href="#" style="padding-top:0px;"> <img src="../assets/images/logo.png" alt=""></a>
                    <span style="border-right: 1px solid rgb(255, 255, 255);margin: 10px 15px;display: inline-block;width: 1px;height: 30px;"></span> -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" style="margin-right: 50px;">
                      <img style="width: 80%;margin:auto;" src="../assets/images/logo.png" alt="">
                    </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                      <li><router-link to="/index" activeClass="activeNav">{{ $t("nav.home") }}</router-link></li>
                      <li><router-link to="/news"  activeClass="activeNav">{{ $t("nav.news") }}</router-link></li>
                      <li>
                        <router-link to="/notice"  activeClass="activeNav">{{ $t("nav.notice") }}</router-link></li>
                        <!-- <a href="#"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#publicmsg" data-whatever="@mdo">{{ $t("nav.notice") }}</button></a></li> -->
                      <li><router-link to="/aboutUs" activeClass="activeNav">{{ $t("nav.about") }}</router-link></li>
                      <li v-if="userinfo.email"><a @click="goGame">{{ $t("nav.game") }}</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                      <li style="margin-top: 15px;margin-right: 20px; color: #fff" v-if="userinfo.email">
                        {{ $t("publicText.welcomes") }}, {{userinfo.email }}
                      </li>
                      <li class="login" v-if="userinfo.email">
                        <button type="button" class="btn" style="border:none;color: #c3c4c5;" @click="outLogin">{{ $t("publicText.out") }}</button>
                      </li>
                      <li class="login" v-if="!userinfo.email">
                        <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLogin" data-whatever="@mdo">{{ $t("nav.login") }}</button>
                      </li>
                      <li class="register" v-if="!userinfo.email">
                        <button style="background: red;color: #fff;border-color:red" type="button" class="btn" data-toggle="modal" data-target="#exampleModalRegister" data-whatever="@mdo">{{ $t("nav.register") }}</button>
                      </li>
                      <li class="dropdown">
                        <a style="padding-left: 10px" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ $t("nav.language")  }}<span class="caret"></span></a>
                        <ul class="dropdown-menu" >
                            <li><a @click="cutLanguage('cn')">{{ $t("nav.Chinese")  }}</a></li>
                            <li><a @click="cutLanguage('en')">{{ $t("nav.English")  }}</a></li>
                          </ul>
                      </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
              </div><!-- /.container-fluid -->
          </nav>
         
          <!-- Login -->
          <!-- 登录 -->
          <div class="modal fade" id="exampleModalLogin" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span id="exampleModalLabel" aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title">{{ $t("login.loginTitle") }}</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                          <div class="form-group">
                            <input type="text" class="form-control accountInputfirst"  v-model="login.email" :placeholder="$t('publicText.importAccount')">
                            <span class="input-group-btn accountInputlast">
                              <button  type="button" class="btn btn-primary" disabled="">@qeveworld.com</button>
                            </span>
                          </div>

                          <div class="form-group">
                            <input type="password" class="form-control" :placeholder="$t('publicText.importPassword')" v-model="login.password">
                          </div>

                          <div class="input-group">
                              <input type="text" class="form-control" v-model="login.emailCode" :placeholder="$t('publicText.importCode')">
                              <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" id="getCode" @click="getCode">{{ $t("login.verificationCode")}}</button>
                              </span>
                          </div>
                          <div class="row forgetPSWD">
                            <p><a @click="forgetPwd">{{ $t("login.forget") }}</a></p>
                          </div>
                      </form> 
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-register" @click="loginSubmit">{{ $t("login.enter") }}</button>
                    </div>
                    <div class="row register-tip">
                      <p>{{ $t("login.noAccount") }}<span @click="toggleRegister">{{ $t("login.nowRegister")}}</span></p>
                    </div>
                </div>
              </div>
          </div>      <!-- Login End-->

          
          
          <!-- 注册 -->
          <div class="modal fade" id="exampleModalRegister"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ $t("login.registerTitle") }}</h4>
                  </div>
                  <div class="modal-body">
                    <form>
                        <div class="form-group">
                          <input type="text"  class="form-control" :placeholder="$t('publicText.invitationCode')" v-model="invitationCode">
                        </div>
                        
                        <div class="form-group" style="margin-bottom: 0px;">
                          <input type="text" class="form-control accountInputfirst"  v-model="login.email" :placeholder="$t('publicText.importAccount')" >
                          <span class="input-group-btn accountInputlast">
                            <button  type="button" class="btn btn-primary" disabled="">@qeveworld.com</button>
                          </span>
                        </div>
                        <div class="form-group" style="margin-bottom: 0px;">
                          <div class="row agree">
                            <p style="margin-bottom: 0px;"><a href="http://www.qeveworld.com/mail.php/Login">{{ $t("login.noEmail") }}</a></p>
                          </div>
                        </div>
                        <div class="input-group">
                        <input type="text" class="form-control" :placeholder="$t('publicText.stateCode')" v-model="login.emailCode">
                        <span class="input-group-btn">
                          <button class="btn btn-default"  type="button" @click="getCode">{{ $t("login.verificationCode")}}</button>
                        </span>
                    </div>
                        <div class="form-group">
                          <input type="password" class="form-control" required :placeholder="$t('publicText.importPassword')" v-model="pswd">
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" required :placeholder="$t('publicText.confirmPassword')" v-model="repswd">
                        </div>
                        <div class="row agree">
                          <p><input type="checkbox" v-model="isClause"><span>{{ $t("login.affirmClause") }}</span></p>
                        </div>
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="submit" @click="registerSubmit()" class="btn btn-register">{{ $t("login.register") }}</button>
                  </div>
                  <div class="row register-tip">
                    <p>{{ $t("login.haveAccount") }}<span @click="toggleLogin">{{ $t("login.enter") }}</span></p>
                  </div>
              </div>
            </div>
        </div>

        <!-- 验证登录账号 -->
        <div class="modal fade" id="verificationAccount"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ $t("login.verificationAccount") }}</h4>
                  </div>
                  <div class="modal-body">
                    <form>
                        <div class="form-group" style="margin-bottom: 0px;">
                          <input type="text" class="form-control accountInputfirst"  v-model="login.email" :placeholder="$t('publicText.importAccount')" >
                          <span class="input-group-btn accountInputlast">
                            <button  type="button" class="btn btn-primary" disabled="">@qeveworld.com</button>
                          </span>
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" :placeholder="$t('publicText.stateCode')" v-model="login.emailCode">
                            <span class="input-group-btn">
                              <button class="btn btn-default"  type="button" @click="getCode">{{ $t("login.verificationCode")}}</button>
                            </span>
                        </div>
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="submit" @click="resetSubmit()" class="btn btn-register">{{ $t("publicText.nextStep") }}</button>
                  </div>
              </div>
            </div>
        </div>


        <!-- 重置 -->
        <div class="modal fade" id="resetAccount"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">重置登陆密码</h4>
                  </div>
                  <div class="modal-body">
                    <form>
                        <div class="form-group">
                          <p>您要修改的账号</p>
                          <p>{{ login.email }}@qeveworld.com</p>
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" required placeholder="新密码" v-model="resetPwd.pwd">
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" required placeholder="重复新密码" v-model="resetPwd.repeatpwd">
                        </div>
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="submit" @click="resetPwdSubmit()" class="btn btn-register">{{ $t("publicText.ok")}}</button>
                  </div>
              </div>
            </div>
        </div>

        <!-- 设置支付密码 -->
        <div class="modal fade" id="setPaymentpPassword"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ $t("safetySetPay.title") }}</h4>
                  </div>
                  <div class="modal-body">
                    <form>
                        <div class="form-group">
                          <input type="password" class="form-control" :placeholder="$t('safetySetPay.prompt1')" v-model="PayPassword">
                          <p style="color:red" v-html="$t('safetySetPay.prompt2')"></p>
                          <p style="color:red" v-html="$t('safetySetPay.prompt3')"></p>
                        </div>
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="submit" @click="submitPay()" class="btn btn-register">{{ $t("publicText.ok") }}</button>
                  </div>
              </div>
            </div>
        </div>

        <div class="Verification">
            <h4 class="modal-title">{{ $t("login.verificationCode")}}</h4>
            <div class="code-box" @click="updateCode"><img :src="codeImg"></div>
            <div class="code-input-box">
              <p @click="updateCode" style="color: rgb(10, 10, 255);padding-left: 28px;margin-top: 10px;margin-bottom:0px;">点击刷新</p>
                <input style="margin-top: 10px;" type="text" placeholder="" v-model="staticCode">
            </div>
            <div class="btn-box">
              <button class="cancel-btn" @click="closeCode">{{ $t("publicText.off") }}</button>
              <button class="sure-btn" @click="submitCode">{{ $t("publicText.ok") }}</button>
            </div>
        </div>

      </div>
      <router-view :message="indexContent" name="indexContent"></router-view>
      <router-view name="indexFoot"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'index',
  data () {
    return {

      // 用户信息
      userinfo:{},

      // 登录表单
      login:{
        email:'',
        password:'',
        emailCode:''
      },

      // 静态验证码
      staticCode:'',
      // 静态验证码图片
      codeImg: myFn.apiAddress.code.getStaticCode + '?' + Math.random(),

      // 邀请码
      invitationCode:'',

      // 重置密码
      resetPwd:{
        pwd:'',
        repeatpwd:''
      },

      // 注册时候的新密码和重复新密码
      pswd:'',
      repswd:'',

      // 是否同意条款
      isClause: false,
      // 支付密码
      PayPassword:'',

      // 关于我们&新闻动态&官方公告
      indexContent:{
        aboutAs:{
          title:'',
          content:'',
          desc:''
        },
        nuwsList:null,
        communique:{
          desc:'',
          content:''
        },
      }
    }
  },

  created(){
    // alert(this.userInfo.a = 44848)
    // this. sa();
    // userInfo.a = '515151a5'
  },
  mounted(){


    var self = this;
    myFn.myAjax('get', {}, myFn.apiAddress.memberLogin.isLogin, function(res){
      myFn.myAjax('get',{}, myFn.apiAddress.memberInfo.getInfo, function(msg){
          self.userinfo = msg.data;
          localStorage.userinfo = JSON.stringify(msg.data);
          if(self.userinfo.pay_pwd == null || self.userinfo.pay_pwd == ''){
            $('#setPaymentpPassword').modal('toggle');
          }
       });
    });

    /*
    * 关于我们
    * 新闻动态
    * 官方公告
    */
    myFn.myAjax('get', {}, myFn.apiAddress.index.aboutus, function(res){
        self.indexContent.aboutAs.title = res.data.title;
        self.indexContent.aboutAs.content = res.data.content;
        self.indexContent.aboutAs.desc = res.data.desc;
    });
    myFn.myAjax('get', {page:1,pagenumber:6}, myFn.apiAddress.index.nuwList, function(res){
        self.indexContent.nuwsList = res.data.list;
    });
    myFn.myAjax('get', {}, myFn.apiAddress.index.communique, function(res){
        self.indexContent.communique.title  = res.data.title;
        self.indexContent.communique.desc  = res.data.desc;
        self.indexContent.communique.content  = res.data.content;
    
    });

  },

  methods:{

    /* 更新静态验证码 */
    updateCode:function(){
      this.codeImg = myFn.apiAddress.code.getStaticCode + '?' + Math.random();
    },

    /* 获取静态验证码 */
    getCode: function(){
      if(this.login.email == ''){
        alert( this.$t("staticMsg.msg007") );
        return false;
      }
      $('.Verification').fadeIn();
    },

    /* 提交静态码获取邮箱验证码 */
    submitCode: function(){
      var self = this;
      var data = {
        code: self.staticCode,
        email: self.login.email + '@qeveworld.com',
      }
      myFn.myAjax('get', data, myFn.apiAddress.code.getMailCode, function(res){
        $('.Verification').fadeOut(350);
      })
    },

    /* 关闭静态验证码弹窗 */
    closeCode: function(){
      $('.Verification').fadeOut(350);
    },

   
    /* 注册提交信息 */
    registerSubmit:function(){

      var self = this;

      // 表单验证
      if(self.invitationCode == ''){
        alert(self.$t("statusMsg.msg105"));
        return false;
      }
      if(self.login.email == ''){
        alert(self.$t("statusMsg.msg106"));
        return false;
      }
      if(self.login.emailCode == ''){
        alert(self.$t("statusMsg.msg145"));
        return false;
      }
      if(self.pswd  == ''){
        alert(self.$t("statusMsg.msg110"));
        return false;
      }
      if(self.repswd  == ''){
        alert(self.$t("statusMsg.msg112"));
        return false;
      }

      if(self.isClause){
        myFn.myAjax('get',{
          invitation:self.invitationCode,
          email:self.login.email + '@qeveworld.com',
          code:self.login.emailCode,
          password:self.pswd,
          repassword:self.repswd      
        },
        myFn.apiAddress.memberLogin.register, 
        function(res){
            alert( self.$t("staticMsg.msg008"));
            $('#exampleModalRegister').modal('toggle');
            $('#exampleModalLogin').modal('toggle');
        })
      }else{
        alert(self.$t("staticMsg.msg009"));
      }
    },


    /* 忘记密码 */
    forgetPwd: function(){
      $('#exampleModalLogin').modal('toggle');
      $('#verificationAccount').modal('toggle');
    },

    /* 验证登录邮箱 */
    resetSubmit: function(){
      if(this.login.email == ''){
        alert(this.$t("statusMsg.msg106"));
        return false;
      }

      if(this.login.emailCode == ''){
        alert(this.$t("statusMsg.msg145"));
        return false;
      }
      var data = {
        email: this.login.email + '@qeveworld.com',
        code:this.login.emailCode
      }
      myFn.myAjax('get',data, myFn.apiAddress.accountSafety.resetLoginPasswordSendCode, function(res){
        $('#verificationAccount').modal('toggle');
        $('#resetAccount').modal('toggle');
      })
    },

    /* 重置登陆密码 */
    resetPwdSubmit:function(){

      if (this.resetPwd.pwd == "") {
        alert(this.$t("statusMsg.msg110"));
        return false;
      }

      if (this.resetPwd.repeatpwd == "") {
        alert(this.$t("statusMsg.msg112"));
        return false;
      }
      var self = this;
      var data = {
        password:this.resetPwd.pwd,
        repassword: this.resetPwd.repeatpwd
      }
      myFn.myAjax('get', data, myFn.apiAddress.accountSafety.resetLoginPassword, function(res){
        alert((self.$t("resetPwd.resetPwdButtom")));
        $('#resetAccount').modal('toggle');
      })
    },

    /* 登陆 */
    loginSubmit: function(){
      var self = this;
      if(self.login.email == ''){
        alert(self.$t("statusMsg.msg106"));
        return false;
      }
      if(self.login.password == ''){
        alert(self.$t("statusMsg.msg110"));
        return false;
      }
      console.log(self.login.emailCode)
      if(self.login.emailCode == ''){
        alert(self.$t("statusMsg.msg145"));
        return false;
      }
      var data  = {
        email: self.login.email + '@qeveworld.com',
        password: self.login.password,
        code: self.login.emailCode
      }

      // 提交登录
      myFn.myAjax('get',data, myFn.apiAddress.memberLogin.login, function(res){ 
         // 获取用户信息
         myFn.myAjax('get',data, myFn.apiAddress.memberInfo.getInfo, function(data){
          $('#exampleModalLogin').modal('toggle');
          localStorage.userinfo =  JSON.stringify(data.data);
          self.userinfo = data.data;
          // 是否输入支付密码没有则弹出输入
          if(self.userinfo.pay_pwd == null || self.userinfo.pay_pwd == ''){
            $('#setPaymentpPassword').modal('toggle');
          }
        })
      })
    },

    /* 已有账号去登录 */
    toggleLogin: function(){
      $('#exampleModalRegister').modal('toggle');
      $('#exampleModalLogin').modal('toggle');
    },

    /* 没有账号去注册 */
    toggleRegister: function(){
      $('#exampleModalRegister').modal('toggle');
      $('#exampleModalLogin').modal('toggle');
    },

    /* 跳转游戏中心如果未登录弹出登录模态框 */
    goGame: function(){

      if(localStorage.userinfo == undefined){
        $('#exampleModalLogin').modal('toggle');
      }else{
        this.$router.push({path:'/game/index'});
      }

    },

    /**
     * 退出登录
     * 清除localStorage数据
     */
    outLogin:function(){
      var self = this;
      myFn.myAjax('get',{}, myFn.apiAddress.memberLogin.quitLogin, function(res){
        localStorage.clear();
        self.userinfo = {};
      })
    },

    // 设置支付密码
    submitPay:function(){
        var self = this;
        var data = {
          password: this.PayPassword,
        }
        myFn.myAjax('get', data, myFn.apiAddress.accountSafety.payPassword, function(res){
          self.userinfo.pay_pwd = self.PayPassword;
          myFn.setUserInfo('pay_pwd', self.payPassword);
          alert( self.$t("staticMsg.msg010") );
          $('#setPaymentpPassword').modal('toggle');
        })
    },

    // 切换语言包
    cutLanguage: function(type){
      if(type == 'cn'){
        Vue.config.lang = 'cn';
      }else if(type == 'en'){
        Vue.config.lang = 'en';
      }
    }
  }
}
</script>
<style>
    
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .activeNav{
    color: #fff !important;
  }
  .logo{
    color: #fff !important;
    font-size: 2em;
  }
  .navbar{
      margin-top: 10px;
      border: none;
      background: transparent;
    }

    .navbar-default .navbar-nav > li > a{
      margin-right: 5px;
      color: #c3c4c5;

    }
    .navbar-default .navbar-nav > li > a:hover{
      color: #fff;
    }
    .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a{
      background: transparent;
    }
    .navbar-default .navbar-nav > li > button{
      border-bottom: 1px solid #fff;
      margin-right: 5px;
    }
    .navbar-default .navbar-right > li > button { /*细节需完善*/
      border:1px #697282 solid;
      border-radius: 2px;
      padding: 5px 10px;
      margin-top: 10px;
      background: transparent;
    }
    .nav button{
      color: #777;
      margin-top: -4px;
      border: none;
    }
    .nav button:hover{
      background: none;
      color: #777;
    }
    .navbar-toggle{
      margin-right: 0px;
    }
    .navbar-brand{
      padding: 0px;
    }
    /**
     * 模态框
     */
    .modal-dialog{
      width: 450px;
      margin-top: 8%;
      position: absolute;
      left:0; right:0; top:0; bottom:0;
    }

    .modal-title{
      text-align: center;
    }
    .accountInputfirst{
      width: 374px;
      padding-right: 140px;
      display: inline-block;
    }
    .accountInputlast{
      margin-left: -7px;
      background: transparent;
      float: right;
    }
    .accountInputlast button{
      background: #151312 !important;
      float: right;
      border-left: 1px #3f3f3f solid !important;
    }
    .form-control{
      margin: 10px 0;
      height: 44px;
      color: #fff;
      background: #151312;
      border: none;
      box-shadow: none;
    }
    .input-group-btn:last-child > .btn{
      height: 44px;
      margin-top: 10px;
      background: #424242;;
      color: #fff;
      opacity: .65;
      border-radius: none;
      border: none;
    }
    .modal-content{
      border-radius: 0;
      background: #1f1c1b;
      color: #ec9532;
    }
    .modal-body{
      padding: 15px 35px;
    }
    .modal-header{
      border-bottom: 2px solid #3e3c3c;
    }
    .modal-footer{
      padding: 25px 35px;
      border-top: 2px solid #3e3c3c;
    }
    .modal-header .close{
      color: #fff;
      opacity: .5;
    }
    .forgetPSWD{
      text-align: right;
      padding: 0 20px;
    }
    .forgetPSWD p{
      margin-top: 10px;
      margin-bottom: 0;
    }
    .forgetPSWD a {
      color: #696969;
    }
    .forgetPSWD span{
      color: #777;
      cursor: pointer;
    }
    .register-tip{
      padding: 0px 0px 10px;
      text-align: center;
      color: #777;
    }
    .register-tip span{
      color: #ec9532;
      margin-left: 10px;
    }
    .register-tip span:hover{
      cursor: pointer;
    }
    .agree{
      text-align: right;
      padding: 5px 15px;
      color: #ccc;
    }
    .agree input{
      vertical-align: middle;
      margin-right: 5px;
      margin-top: -2px;
    }
    .Verification{
      width: 300px;
      height: 270px;
      padding-top: 7px;
      margin-left: -150px;
      margin-top: -300px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 9999;
      background: #1f1c1b;
      box-shadow: 3px 3px 10px #1a1515;
      display: none;
    }
    .Verification h4{
      color: #ec9532;
      margin-top: 10px;
    }
    .Verification input{
      border:none !important;
      background:#151312;
      color: #555;
    }
    .btn-register{
      margin: auto;
      width: 100%;
      background: #363534;
      height: 44px;
      color: #151312;
    }
    .btn-register:hover{
      color: #fff;
    }
    .btn-register:active{
      color: #fff;
    }
    .btn-register:visited{
      color: #fff;
    }

    /**
     * 验证码
     */
    .code-box{
      width: 80%;
      margin: auto;
      margin-top: 20px;
      height: 44px;
      border: 1px solid #ccc;
      background: #ccc;
    }
    .code-box img{
      width: 100%;
      height: 100%;
    }
    .code-input-box input{
      width: 80%;
      color: #fff;
      margin-left: 10%;
      margin-top: 15px;
      height: 44px;
      border: 1px solid #ccc;
      text-indent: 10px;
    }
    .cancel-btn:hover{
      color: #fff;
      background: #ccc;
    }
    .sure-btn{
      color: #151312;
      background: #363534;
    }
    .sure-btn:hover{
      color:#fff;
    }
    .btn-box button:hover{
       color:#fff; 
      background: transparent;
    }
    .btn-box button{
      width: 40%;
      height: 40px;
      border: none;
      border-radius: 2px;
      background: #363534;
      margin-top: 15px;
    }
    .cancel-btn{
      margin-left: 10%;
      background: none;
      color: #777;
    }
    .cancel-btn:hover{
      color: #fff;
      background: #ccc;
    }
</style>
