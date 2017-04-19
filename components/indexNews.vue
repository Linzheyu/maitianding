
<template>
  <div class="indexNews">
    <img src="../assets/images/background-small.png" class="img-responsive" alt="Responsive image">   <!-- 主背景 -->
  
    <div class=" padding-t">
    
    <div class="container">
      <div class="row news-item">
        <div class="col-md-2">
            <img src="../assets/images/mojie.png"/>
        </div>
        <div class="col-md-10">
            <p class="newList-title">我是标题的标题</p>
            <p class="description">月光如洗，如流水般涌动;流水如镜，如月光般静谧。岸柳依依，探出细腰，欲与水中月比美。穿梭千年的小舟从月里推波而来，荡开一圈圈涟漪。</p>
            <img src="../assets/icon/right-2.png">
        </div>
        <div class="col-md-12">
           <div  class="newList-liner"></div>
        </div>
      </div>
      <nav class="page" aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
      msg: 'Welcome to Your Vue.js App'
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
  .page{
    text-align: right;
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
