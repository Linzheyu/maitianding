
<template>
	<div>
		<!-- <img src="../assets/images/background-small.png" class="img-responsive" alt="Responsive image">  -->
	
		<div class="container padding-t">
		  <div class="row">
				<div class="col-md-12">
			 	 <p class="titleLeft" v-html="message.aboutAs.title">我是标题的标题的标题</p>
			 	 <p class="margin-p-t aboutContent" v-html="message.aboutAs.content">化为淡淡水墨画。</p>
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
	  msg: 'Welcome to Your Vue.js App'
	}
  },
  props:{
	message:{
	  type:Object
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutContent{
	color: #9c9999 !important;
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
