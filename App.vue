<template>
  <div id="app">
    
    <div id="bonfire-pageloader">
      <div class="bonfire-pageloader-icon">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <path id="loading-12-icon" d="M291,82.219c0,16.568-13.432,30-30,30s-30-13.432-30-30s13.432-30,30-30S291,65.65,291,82.219z
           M261,404.781c-15.188,0-27.5,12.312-27.5,27.5s12.312,27.5,27.5,27.5s27.5-12.312,27.5-27.5S276.188,404.781,261,404.781z
           M361.504,113.167c-4.142,7.173-13.314,9.631-20.487,5.489c-7.173-4.141-9.631-13.313-5.49-20.487
          c4.142-7.173,13.314-9.631,20.488-5.489C363.188,96.821,365.645,105.994,361.504,113.167z M188.484,382.851
          c-14.348-8.284-32.697-3.368-40.98,10.98c-8.285,14.349-3.367,32.696,10.98,40.981c14.35,8.283,32.697,3.367,40.98-10.981
          C207.75,409.482,202.834,391.135,188.484,382.851z M421.33,184.888c-8.368,4.831-19.07,1.965-23.901-6.404
          c-4.832-8.368-1.965-19.07,6.404-23.902c8.368-4.831,19.069-1.964,23.9,6.405C432.566,169.354,429.699,180.056,421.33,184.888z
           M135.399,329.767c-8.285-14.35-26.633-19.266-40.982-10.982c-14.348,8.285-19.264,26.633-10.979,40.982
          c8.284,14.348,26.632,19.264,40.981,10.98C138.767,362.462,143.683,344.114,135.399,329.767z M436.031,277.249
          c-11.044,0-20-8.953-20-19.999c0-11.045,8.955-20.001,20.001-20.001c11.044,0,19.999,8.955,19.999,20.002
          C456.031,268.295,447.078,277.249,436.031,277.249z M115.97,257.251c-0.001-16.57-13.433-30.001-30.001-30.002
          c-16.568,0.001-29.999,13.432-30,30.002c0.001,16.566,13.433,29.998,30.001,30C102.538,287.249,115.969,273.817,115.97,257.251z
           M401.333,364.248c-10.759-6.212-14.446-19.97-8.234-30.73c6.212-10.759,19.971-14.446,30.731-8.233
          c10.759,6.211,14.445,19.971,8.232,30.73C425.852,366.774,412.094,370.46,401.333,364.248z M135.398,184.736
          c8.285-14.352,3.368-32.698-10.98-40.983c-14.349-8.283-32.695-3.367-40.981,10.982c-8.282,14.348-3.366,32.696,10.981,40.981
          C108.768,204,127.115,199.082,135.398,184.736z M326.869,421.328c-6.902-11.953-2.807-27.242,9.148-34.145
          s27.243-2.806,34.146,9.149c6.902,11.954,2.806,27.243-9.15,34.145C349.059,437.381,333.771,433.284,326.869,421.328z
           M188.482,131.649c14.352-8.286,19.266-26.633,10.982-40.982c-8.285-14.348-26.631-19.264-40.982-10.98
          c-14.346,8.285-19.264,26.633-10.98,40.982C155.787,135.017,174.137,139.932,188.482,131.649z"/>
        </svg>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'app',
  data(){
    return{}
  },
  mounted(){
      // require( './css/pageloader.css')
      // require ('./js/pageloader.js')
      // require( './css/pageloader.css')
      // require ('./js/pageloader.js')
  },
  watch:{},
  methods:{}
}

</script>

<style>
  /***********************************************************
*** CUSTOMIZE THE LOADING SCREEN BACKGROUND + ICON COLORS
************************************************************/
/* loading screen background color */
#bonfire-pageloader {
  background-color:rgba(0, 0, 0, .1);
}
/* loading icon color */
#bonfire-pageloader svg {
  fill:#fff;
}


/***********************************************************
*** THE NITTY-GRITTY
************************************************************/
/* the pageloader */
#bonfire-pageloader {
  position:absolute;
  z-index:99999999999999;
  width:100%;
  /*height:100%;*/
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin-top:-50px;
}
.bonfire-pageloader-fade {
  opacity:0 !important;
  
  -webkit-transition: all .75s ease;
  -moz-transition: all .75s ease;
  -o-transition: all .75s ease;
  -ms-transition: all .75s ease;
  transition: all .75s ease;
}
.bonfire-pageloader-hide {
  display:none;
}

/* the loading icon */
.bonfire-pageloader-icon {
  width:100px;
  height:100px;
  position:absolute;
  margin:100px 0 0 0;
  opacity:1;
  top:0;
  text-align: center;
  color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.bonfire-pageloader-icon-hide {
  opacity:0 !important;
  
  -webkit-transition: all .25s ease;
  -moz-transition: all .25s ease;
  -o-transition: all .25s ease;
  -ms-transition: all .25s ease;
  transition: all .25s ease;
}
#bonfire-pageloader svg {
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite;
  width:100px;
  height:100px;
}
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(-360deg); } }
@-moz-keyframes spin { 100% { -moz-transform: rotate(-360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }

/* lets give the page body that subtle slide-in animation */
html {
  height:100%;
  
  -webkit-backface-visibility: hidden;
  
  -webkit-transform-origin:top;
  -moz-transform-origin:top;
  -ms-transform-origin:top;
  -o-transform-origin:top;
  transform-origin:top;
  
  -webkit-transition: all .75s ease;
  -moz-transition: all .75s ease;
  -o-transition: all .75s ease;
  -ms-transition: all .75s ease;
  transition: all .75s ease;
}
.bonfire-html-onload {  
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -o-transform: translateY(0px);
  transform: translateY(0px);

  -webkit-transition: all 0s ease;
  -moz-transition: all 0s ease;
  -o-transition: all 0s ease;
  -ms-transition: all 0s ease;
  transition: all 0s ease;
}



body,textarea,input,select,option {color:#333;font-family:Tahoma,Arial,sans-serif;}
h1,h2,h3,h4,h5,h6 {font-size:100%;}
body,h1,h2,h3,h4,h5,h6,blockquote,ol,ul,dl,dd,p,textarea,input,select,option,form {margin:0;}
ol,ul,textarea,input,option,th,td {padding:0;}
table {border-collapse:collapse;}
ol,ul {list-style-type:none;}
.clearfix:before,.clearfix:after {content:'';display:table;}
.clearfix:after {clear:both;}.clearfix {*zoom:1;}
.clearfix:after {content:'.';display:block;height:0;clear:both;visibility:hidden;}
.clearfix {*zoom:1;}
.clear {clear:both;height:0;overflow:hidden;}
a {text-decoration:none;color:#333;}
a,textarea,input{outline:none}
textarea {overflow:auto;resize:none;}
.img img {display:block;}
a img {border:none;}
.z_index{position:fixed;_position:absolute;z-index:999;display:none;}
.pr {position:relative;}.pa {position:absolute;}
.fl {float:left;}.fr {float:right;}

a:hover{text-decoration:underline}


</style>
