// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
require('easel-js/lib/easeljs-0.8.2.combined.js');
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/main.css'
import {EnLanguage} from './language/en.js'
import {CnLanguage} from './language/cn.js'
import {myFn} from './js/main.js'

window.myFn = myFn;

Vue.config.productionTip = false
Vue.use(VueI18n)

var locales = {
  en: EnLanguage,
  cn: CnLanguage
}

Vue.config.lang = 'cn'
// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})


/* eslint-disable no-new */
window.vm =  new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

