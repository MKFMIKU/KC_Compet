const Admin = resolve => require(['./components/Admin.vue'], resolve)
const Compet = resolve => require(['./components/Compet.vue'], resolve)
const List = resolve => require(['./components/List.vue'], resolve)
const CompetForm = resolve => require(['./components/lib/CompetForm.vue'], resolve)
const CompetList = resolve => require(['./components/lib/CompetList.vue'], resolve)

export default [
  {path: '/', redirect: '/compets'},
  {path: '/compets', component: List},
  {path: '/compet', component: Compet},
  {path: '/admin',
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
