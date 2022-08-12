import Vue from 'vue'
import Router from 'vue-router'
import noDataPage from "@/view/noDataPage.vue";
Vue.use(Router)
export const constantRouterMap =[
    {
        path:'/',
        name:'系统维护中页',
        redirect:'/noDataPage',
        menuShow:false
    },
    {
        path:'/noDataPage',
        name:'系统维护中页',
        component: noDataPage,
        menuShow:false
    },
    {
        path: "*",
        redirect: "/noDataPage"
    }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default new Router({
    routes: constantRouterMap
})