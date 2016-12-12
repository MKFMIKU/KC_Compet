import Admin from './components/Admin.vue'
import Compet from './components/Compet.vue'

import CompetForm from './components/lib/CompetForm.vue'
import CompetList from './components/lib/CompetList.vue'

export default [
  { path: '/', redirect: '/compet' },
  {path: '/compet', component: Compet},
  { path: '/admin',
    component: Admin,
    children: [
      {
        path: 'form',
        component: CompetForm
      },
      {
        path: 'list',
        component: CompetList
      }
    ]}
]
