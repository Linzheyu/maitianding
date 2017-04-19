

<template>
  <div class="accountSide">
    <div class="container">
      <div class="col-md-2 blog-sidebar">
        <div class="accountAdministration">
          <div class="border-b title"><p>{{$t("sider.accountManagement")}}</p></div>
          <li class="border-t border-b"><router-link to="/game/account/index" activeClass="on-click">{{$t("sider.accountInfo")}}</router-link></li>
          <li class="border-t border-b"><router-link to="/game/account/card" activeClass="on-click">{{$t("sider.accountMycard")}}</router-link></li>
          <li class="border-t border-b"><router-link to="/game/account/benefit" >{{$t("sider.accountMycommonweal")}}</router-link></li>
          <li class="border-t"><router-link to="/game/account/myProfile" activeClass="on-click">{{$t("sider.accountMyProfile")}}</router-link></li>
        </div>
        <div class="accountAdministration margin-t-Separate">
          <div class="border-b title"><p>{{$t("sider.accountsafetyManagement")}}</p></div>
          <li class="border-t"><router-link to="/game/account/loginpsw" activeClass="on-click">{{$t("sider.accountLoginManagement")}}</router-link></li>
          <!-- <li class="border-t border-b"><router-link to="/game/account/setpayment" activeClass="on-click">{{$t("safetySetPay.title")}}</router-link></li> -->
          <li class="border-t border-b"><router-link to="/game/account/payment" activeClass="on-click">{{$t("sider.accountPatmentManagement")}}</router-link></li>
          <li class="border-t border-b"><router-link to="/game/account/bound" activeClass="on-click">{{$t("sider.accountBinding")}}</router-link></li>
        </div>
        <div class="accountAdministration margin-t-Separate">
          <div class="border-b title"><p>{{$t("sider.accountlog")}}</p></div>
          <li class="border-t"><router-link to="/game/account/log" activeClass="on-click" >{{$t("sider.operatingLog")}}</router-link></li>
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
      width: 100%;
      height: 100%;
      color: #ccc !important;
      border-left: 1px solid #EC9530;
      border-right: 1px solid #EC9530;
      display: inline-block;
    }
</style>
