
<template>
  <div class="gameAudit">
      <div class="container">
        <div class="row step">
          <div class="col-md-4">
            <li>
              <i class="lab onStep">1</i>
              <span>{{ $t("loveBenefit.progress1") }}</span>
            </li>
          </div>
          <div class="col-md-4">
            <li>
              <i class="lab">2</i>
              <span>{{ $t("loveBenefit.progress2") }}</span>
            </li>
          </div>
          <div class="col-md-4">
            <li>
              <i class="lab">3</i>
              <span>{{ $t("loveBenefit.progress3") }}</span>
            </li>
          </div>
        </div>

    <!-- 填写公益大使信息 -->
        <div class="box1">
          <div class="row title border-b">{{ $t('loveBenefitAudit.audit') }}</div>
          <div class="row content border-t examine">
            <p class="glyphicon glyphicon-ok"></p>
            <p>{{ $t('loveBenefitAudit.auditText') }}</p>
          </div>

        </div>

      </div>    
  </div>
</template>

<script>

export default {
  name: 'gameAudit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .step{
      margin-top: 45px;
    }
    .lab{
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      vertical-align:middle;
      font-size: 20px;
      line-height: 30px;
      border: 1px solid #EC9530;
    }
    .onStep{
      background: #EC9530;
      color: #333;
    }
    .float-r{
      float: right;
    }
    .float-l{
      float: left;
    }
    .box1{
      border: 1px solid #383432;
      border-radius: 3px;
      border-bottom-left-radius: none;
      border-bottom-right-radius: none;
      margin-top: 5%;
      padding: 0 15px;
    }
    .title{
      text-align: center;
      background: #161413;
      height: 48px;
      line-height: 48px;
      border-radius: 3px;
    }
    .content{
      padding: 20px 15px;
      background: #1F1C1B;
      padding-top: 0;
      padding-bottom: 0;
    }
    .col-md-6{
      padding: 15px 0;
    }
    .col-md-4{
      padding: 20px 0;
    }
    .col-md-4 input{
      width: 120px;
      height: 20px;
    }
    .col-md-3{
      padding: 15px 0;
    }
    .right-border p{
      border-right: 1px dashed #090808;
    }
    .left-border p{
      border-left: 1px dashed #2B2725;
    }
    .box1 span{
      color: red;
    }
    input{
      width: 60px;
      height: 20px;
      background: #1F1C1B;
      border: 1px solid #EC9530;
      border-radius: 3px;
      text-indent: 2px;
    }
    input:focus{
      border-color: #EC9530!important;
    }
    .border-t{
      border-top: 1px solid #2B2725;
    }
    .border-b{
      border-bottom: 1px solid #090808;
    }

    /*
     *审核部分
     */
    .examine p:first-child{
      font-size: 60px;
      padding: 30px 0;
    }
    .examine p:last-child{
      padding: 30px 0;
    }
  
</style>
