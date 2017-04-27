import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexContent from '@/components/indexContent'
import indexNews from '@/components/indexNews'
import indexNewsDetails from '@/components/indexNewsDetails'
import indexFoot from '@/components/indexFoot'
import indexAbout from '@/components/indexAbout'
import indexNotice from '@/components/indexNotice'

import game from '@/components/game'
// import gameIndex from '@/components/gameIndex'
// 
const gameIndex = resolve => require(['@/components/gameIndex'], resolve);

import gameExchangeshop from '@/components/gameExchangeshop'
import gameLoveBenefit from '@/components/gameLoveBenefit'
import gameLoveBenefitAudit from '@/components/gameLoveBenefit_audit'
import gameAccountSide from '@/components/accountSide'
import gameAccountIndex from '@/components/accountIndex'
import gameAccountCard from '@/components/accountCard'
import gameAccountBsenefit from '@/components/accountBenefit'
import gameAccountMyProfile from '@/components/accountMyProfile'
import gameSafetyBound from '@/components/safetyBound'
import gameSafetyPayment from '@/components/safetyPayment'
// import gameSafetySetPayment from '@/components/safety_setpaypwd'
import gameSafetyloingpsw from '@/components/safety_loginpsw'
import gameOperationLog from '@/components/operationLog'




window.Router = Router;
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/index',
      children: [
      	{ 
      		path: '/index',
      		components: {
      			indexContent: indexContent,
      			indexFoot: indexFoot
      		}
      	},
        { 
          path: '/news',
          components: {
            indexContent: indexNews,
            indexFoot: indexFoot
          }
        },
        { 
          path: '/NewsDetails',
          components: {
            indexContent: indexNewsDetails,
            indexFoot: indexFoot
          }
        },
      	{ 
      		path: '/notice',
      		components: {
      			indexContent: indexNotice,
      			indexFoot: indexFoot
      		}
      	},
        {
          path: '/aboutUs',
          components: {
            indexContent: indexAbout,
            indexFoot: indexFoot
          }
        }
      ]
    },
    {
      path: '/game',
      name: 'game',
      component: game,
      redirect: '/game/index',
      children: [
        {
          path: "index",
          components:{
            default:gameIndex
          }
        },
        {
          path:"shop",
          components:{
            default:gameExchangeshop
          }
        },
        {
          path:"benefit",
          components:{
            default:gameLoveBenefit
          }
        },
        {
          path:"benefit/audit",
          component: gameLoveBenefitAudit
        },
        {
          path:"account",
          component: gameAccountSide,
          children:[{
            path:"index",
            components:{
              default:gameAccountIndex
            }
          },
          {
            path:"card",
            components:{
              default:gameAccountCard
            }
          },
          {
            path:"benefit",
            components:{
              default:gameAccountBsenefit
            }
          },
          {
            path:"myProfile",
            components:{
              default:gameAccountMyProfile
            }
          },
          {
            path:"bound",
            components:{
              default:gameSafetyBound
            }
          },
          {
            path:"payment",
            components:{
              default:gameSafetyPayment
            }
          },
          // 缺少登录密码管理
          /*{
            path:"register",
            components:{
              default:gameSafetyBound
            }
          },*/
          // {
          //   path:"setpayment",
          //   components:{
          //     default:gameSafetySetPayment
          //   }
          // },
          {
            path:"loginpsw",
            components:{
              default:gameSafetyloingpsw
            }
          },

          {
            path:"log",
            components:{
              default:gameOperationLog
            }
          }]
        },
      ]
    }
  ]
})
