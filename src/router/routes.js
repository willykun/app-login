import LoginPage from '../pages/Login.vue'
import WelcomePage from '../pages/Welcome.vue'

const routes = [
    {
        path: '/login',
        component: LoginPage,
        name: 'login'
    },
    {
        path: '/welcome',
        component: WelcomePage,
        name: 'welcome',
        meta:{
            requiresAuth: true
        }
    }
]

export default routes