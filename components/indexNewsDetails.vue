
<template>
    <div>
        <img src="../assets/images/background-small.png" class="img-responsive" alt="Responsive image">   <!-- 主背景 -->
    
        <div class="container padding-t">
          <div class="row">
            <div class="col-md-12">
              <p class="titleLeft" v-html="newDetails.title">我是标题的标题的标题</p>
              <p class="margin-p-t aboutContent" v-html="newDetails.content">化为淡淡水墨画。</p>
            </div>
            <!-- <sideNav></sideNav> -->
          </div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import indexSideNav from '@/components/indexSideNav'

Vue.component('sideNav', indexSideNav);

export default {
  name: 'indexAbout',
  data () {
    return {
      newDetails:{}
    }
  },
  mounted(){
    var self = this;
    myFn.myAjax('get', {id:this.$route.query.id}, myFn.apiAddress.index.nuwDetails, function(res){
        self.newDetails = res.data;
    });
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutContent{
    color: #9c9999;
    margin-top: 20px;
  }
  .padding-t{
    padding-top: 60px;
  }

  .titleLeft{
      text-align: center;
      padding: 10px 0;
      font-size: 20px;
      border-bottom: 1px solid #4d4b4b;
      font-weight: bold;
      letter-spacing: 0.5px;
      color: #ccc;
    }
</style>
