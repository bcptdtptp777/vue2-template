import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const fileList = require.context('@/views', true, /router.js/)

const routes = fileList.keys().map(path => {
  return require(`@/views${path.replace('.', '')}`)
})

routes.push({
  path: '/',
  redirect: routes[0].path
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
