import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/content/Content.vue'
import GoodPost from '../components/content/GoodPost.vue'
import HotPost from '../components/content/HotPost.vue'
import Partten from '../components/content/Partten.vue'
import ViewPostDetail from '../components/viewPost/ViewPostDetail.vue'
import PublicComp from '../components/publicCom/PublicComp.vue'
import SameComp from '../components/sameComp/SameComp.vue'
import Login from '../components/login/Login.vue'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/sy' },
        { path: '/sy', component: Content },
        { path: '/rmtz', component: HotPost },
        { path: '/jptz', component: GoodPost },
        { path: '/mk', component: Partten },
        { path: '/bz', component: SameComp },
        { path: '/view/detailPost/:code/:id', component: ViewPostDetail },
        { path: '/publicPost', component: PublicComp },
        { path: '/view/friendNavInfo/:id', component: SameComp },
        { path: '/login', component: Login }
    ]
})
