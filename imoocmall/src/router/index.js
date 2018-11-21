import Vue from 'vue'
import Router from 'vue-router'
import goodslist from './../views/goodslist'
import Title from './../views/title'

Vue.use(Router)

export default new Router({
  mode: 'hash', //history,默认hash
  routes: [
    {path:'/',redirect:'/goods'},

    { path: '/goods',name: 'goodslist',component: goodslist,
      children:[
        { path:'/title',name:'title',component:Title }
      ]
    }

]
})
