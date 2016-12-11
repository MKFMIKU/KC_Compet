import Admin from './components/Admin.vue'
import Compet from './components/Compet.vue'

export default [
  { path: '/', redirect: '/compet' },
  {path: '/admin', component: Admin},
  {path: '/compet', component: Compet}
]
