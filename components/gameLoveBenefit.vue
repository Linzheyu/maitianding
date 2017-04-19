
<template>
  <div class="gameShop">
      <!-- 导航 -->   
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

          <div class="row title border-b"><p>{{ $t("loveBenefit.spokesperson") }}</p></div>
          <div class="row content border-t">
            <div class="col-md-4 right-border  border-b"><p>{{ $t("loveBenefit.spokespersonAccount") }}：15494***537@qq.com</p></div>
            <div class="col-md-4 right-border left-border  border-b"><p>{{ $t("loveBenefit.spokespersonName") }}：<input type="text"></p></div>
            <div class="col-md-4 left-border  border-b"><p>{{ $t("loveBenefit.spokespersonTell") }}：<input type="text"></p></div>
          </div>

          <div class="row content">
            <div class="border-b">
              <div class="row idcard">
                  <div class="col-md-10">
                    <div class="input-group">
                        <div class="input-group-btn">
                          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t("loveBenefit.certificateType") }} <span class="caret"></span></button>
                          <ul class="dropdown-menu">
                              <li><a href="#">{{ $t("loveBenefit.certificateType1") }}</a></li>
                              <li><a href="#">{{ $t("loveBenefit.certificateType2") }}</a></li>
                              <li><a href="#">{{ $t("loveBenefit.certificateType3") }}</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                        <input type="text" class="form-control" aria-label="...">
                    </div><!-- /input-group -->
                  </div><!-- /.col-lg-6 -->
                  <div class="col-lg-2">
                    
                  </div><!-- /.col-lg-2 -->
              </div><!-- /.row -->
            </div>
          </div>

          <div class="row content">
            <div class="col-md-12">
              <div class="row load-img-list">
                <div class="col-md-2"><p>{{ $t("loveBenefit.certificatePicture") }}：</p></div>
                <div class="col-md-10">
                  <li><img src="#333" alt=""><i>{{ $t("loveBenefit.front") }}</i></li>
                  <li><img src="#333" alt=""><i>{{ $t("loveBenefit.reversSide") }}</i></li>
                  <li><img src="#333" alt=""><i>{{ $t("loveBenefit.handPicture") }}</i></li>
                </div>
              </div>
            </div>
          </div>

        </div>
    <!-- 其他用户积累 -->

        <div class="box1 margin-b-80">

          <div class="row title border-b"><p>{{ $t("loveBenefit.donorInformation") }}</p></div>
          <div class="row content border-t">
            <div class="col-md-4 right-border  border-b"><p>{{ $t("loveBenefit.donorAccount") }}：15494***537@qq.com</p></div>
            <div class="col-md-4 right-border left-border  border-b"><p>{{ $t("loveBenefit.donorName") }}：<input type="text"></p></div>
            <div class="col-md-4 left-border  border-b"><p>{{ $t("loveBenefit.donorTell") }}：<input type="text"></p></div>
          </div>

          <div class="row content">
            <div class="border-b">
              <div class="row idcard">
                  <div class="col-md-10">
                    <div class="input-group">
                        <div class="input-group-btn">
                          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t("loveBenefit.certificateType") }} <span class="caret"></span></button>
                          <ul class="dropdown-menu">
                              <li><a href="#">{{ $t("loveBenefit.certificateType1") }}</a></li>
                              <li><a href="#">{{ $t("loveBenefit.certificateType2") }}</a></li>
                              <li><a href="#">{{ $t("loveBenefit.certificateType3") }}</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                        <input type="text" class="form-control" aria-label="...">
                    </div><!-- /input-group -->
                  </div><!-- /.col-lg-6 -->
                  <div class="col-lg-2">
                    
                  </div><!-- /.col-lg-2 -->
              </div><!-- /.row -->
            </div>
          </div>

          <div class="row content">
            <div class="col-md-12">
              <div class="row load-img-list border-b">
                <div class="col-md-2"><p>{{ $t("loveBenefit.certificatePicture") }}：</p></div>
                <div class="col-md-10">
                  <li><img src="#333" alt="">{{ $t("loveBenefit.front") }}</i></li>
                  <li><img src="#333" alt="">{{ $t("loveBenefit.reversSide") }}</i></li>
                  <li><img src="#333" alt="">{{ $t("loveBenefit.handPicture") }}</i></li>
                </div>
              </div>
            </div>
          </div>

          <div class="row content">
            <div class="reazon border-t">
              <label for="#">{{ $t("loveBenefit.cause") }}</label>
              <input type="text">
            </div>
            <div class="need-money border-b">
              <label for="#">{{ $t("loveBenefit.needMoney") }}：</label>
              <input type="text"><span>{{ $t("loveBenefit.unit") }}</span><span style="color:#564640">{{ $t("loveBenefit.explanatory") }}</span>
            </div>
            
          </div>

          <div class="row content">
            <div class="desc border-t border-b">
              <label for="#">{{ $t("loveBenefit.describe") }}：</label>
              <textarea name="" id="" cols="30" rows="10"></textarea> 
            </div>
          </div>
          
          <div class="row content">
            <div class="col-md-12">
              <div class="row load-img-list border-t">
                <div class="col-md-2"><p>{{ $t("loveBenefit.relatedPhotos") }}：</p></div>
                <div class="col-md-10">
                  <li><img src="#333" alt=""></li>
                  <li><img src="#333" alt=""></li>
                  <li><img src="#333" alt=""></li>
                  <li class="addImg">+</li>
                </div>
              </div>
            </div>
          </div>

          <div class="row content">
            <div class="promiss">
              <input type="checkbox">
              <span>{{ $t("loveBenefit.clause") }}</span>
            </div>
          </div>
          
          <div class="row sure-btn">
            <div>
              <router-link to="/game/benefit/audit"><button>{{ $t("loveBenefit.submit") }}</button></router-link>
            </div>
          </div>

        </div>

      </div>    
  </div>
</template>

<script>

export default {
  name: 'gameshop',
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
    .sure-btn{
      background: #1F1C1B;
      height: 80px;
      padding: 0 15px;
    }
    button{
      width: 120px;
      height: 40px;
      background: #1F1C1B;
      border: 1px solid #EC9530;
      border-radius: 3px;
      margin-top: 20px;
    }
    .box1 .input-group-btn > .btn{
      margin-top: 0;
        height: 34px;
    }
    .box1 .input-group{
      padding-left: 5%;
    }
    .idcard{
      padding: 20px 0;
    }
    .box1 .form-control{
      background: none;
      border-color: #EC9530;
    }
    .box1 .btn-default{
      background: none;
      border-color: #EC9530;
      color: #EC9530;
      width: 140px;
    }
    .box1 .btn-default span{
      color: #EC9530;
    }
    .btn-default:active, .open > .dropdown-toggle.btn-default{
      border-color: #EC9530;
      background-color: none;
    }
    .col-md-12 input{
      display: block;
    }
    .load-img-list{
      text-align: center;
      padding: 20px 0;
    }
    .load-img-list i{
      display: block;
      margin-top: 10px;
      font-style: normal;
    }
    .col-md-10,.col-md-2{
      padding: 0;
    }
    .col-md-10 li{
      float: left;
      margin-right: 15px;
    }
    .col-md-10 li img{
      width: 100px;
      height: 100px;
    }
    .margin-b-80{
      margin-bottom: 80px;
    }
    .reazon{
      text-align: left;
      padding: 20px 0;
      padding-left: 5%;
    }
    .reazon input{
      width: 73%;
      height: 30px;
    }
    .need-money{
      text-align: left;
      padding-left: 8%;
      padding-bottom: 20px;
    }
    .need-money input{
      width: 150px;
      height: 30px;
    }
    .need-money span{
      padding-left: 15px;
    }
    .desc{
      text-align: left;
      padding: 20px 0;
      padding-left: 11%;
      
    }
    .desc textarea{
      width: 78%;
      height: 130px;
      vertical-align:top;
      border-radius: 3px;
      background: none;
      border: 1px solid #EC9530;
      text-indent: 4px;
      resize: none;
    }
    .addImg{
      width: 100px;
      height: 100px;
      font-size: 30px;
      text-align: center;
      line-height: 100px;
      color: #564640;
      border: 1px solid #564640;
    }
    .promiss{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .promiss input{
      background: none;
      vertical-align:sub;
      width: 30px;
    }
    .promiss span{
      color: #EC9530;
    }
  
</style>
