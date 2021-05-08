import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes
})

  router.beforeEach((to, from, next ) => {                            
    if(to.matched.some(r => r.meta.requiresAuth) && store.getters.signedIn == false) 
    next({ 
        name: 'login'
     })
    else next()
})
export default router