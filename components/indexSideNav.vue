
<template>

    <div class="col-md-3 col-md-offset-1">
      <div class="row margin-p-t">
        <div class="col-md-12">
            <div class="input-group search-btn">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </div>
      </div>
       <div class="side-content">
            <span class="side-title">{{ $t("nav.column") }}</span>
       </div>
       <div class="other-content">
         <li class="on">{{ $t("nav.news") }}</li>
         <li>{{ $t("nav.notice") }}</li>
         <li>{{ $t("nav.about") }}</li>
       </div>
     </div>
</template>

<script>
export default {
  name: 'indexSildNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side-content{
    margin-top: 40px;
    border-bottom: 1px solid #85C147;
  }
  .side-title{
    padding: 20px 0;
    padding-left: ;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #85C147;
    display: inline-block;
  }
  .other-content{
    padding: 20px 0;
  }
  .other-content li{
    color: #777;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .margin-p-t{
      margin-top: 60px;
    }
</style>
