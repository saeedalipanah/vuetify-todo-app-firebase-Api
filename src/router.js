import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Team from './pages/Team'


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: Dashboard },
    { path: '/projects', component: Projects },
    { path: '/team', component: Team },
   
  ]
  export default new VueRouter({mode: 'history', routes})