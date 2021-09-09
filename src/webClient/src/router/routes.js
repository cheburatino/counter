const routes = [
  {path: '/', component: () => import(`../app/components/home.vue`)},
  {
    path: '/check_user_email',
    component: () => import(`../app/components/auth/email/checkUserEmail.vue`),
  },
  {
    path: '/email_auth_recover_password',
    component: () => import(`../app/components/auth/email/emailAuthRecoverPassword.vue`),
  },
  {path: '/users', component: () => import(`../app/components/users/index.vue`)},
  {path: '/users/:id', component: () => import(`../app/components/users/item.vue`), props: true},
  {path: '/profile', component: () => import(`../app/components/currentUser/profile.vue`)},
  // for codeGenerate ##routes_slot1
	{path: '/employee', component: () => import(`../app/components/employee/index.vue`), props: true},
	{path: '/employee/:id', component: () => import(`../app/components/employee/item.vue`), props: true},
	{path: '/meeting', component: () => import(`../app/components/meeting/index.vue`), props: true},
	{path: '/meeting/:id', component: () => import(`../app/components/meeting/item.vue`), props: true},
	{path: '/comment', component: () => import(`../app/components/comment/index.vue`), props: true},
	{path: '/comment/:id', component: () => import(`../app/components/comment/item.vue`), props: true},
	{path: '/contract', component: () => import(`../app/components/contract/index.vue`), props: true},
	{path: '/contract/:id', component: () => import(`../app/components/contract/item.vue`), props: true},
	{path: '/counterparty', component: () => import(`../app/components/counterparty/index.vue`), props: true},
	{path: '/counterparty/:id', component: () => import(`../app/components/counterparty/item.vue`), props: true},
	{path: '/company', component: () => import(`../app/components/company/index.vue`), props: true},
	{path: '/company/:id', component: () => import(`../app/components/company/item.vue`), props: true},
	{path: '/man', component: () => import(`../app/components/man/index.vue`), props: true},
	{path: '/man/:id', component: () => import(`../app/components/man/item.vue`), props: true},
	{path: '/ctlg_time_type', component: () => import(`../app/components/ctlg_time_type/index.vue`), props: true},
	{path: '/ctlg_time_type/:id', component: () => import(`../app/components/ctlg_time_type/item.vue`), props: true},
	{path: '/ctlg_request_state', component: () => import(`../app/components/ctlg_request_state/index.vue`), props: true},
	{path: '/ctlg_request_state/:id', component: () => import(`../app/components/ctlg_request_state/item.vue`), props: true},
	{path: '/request', component: () => import(`../app/components/request/index.vue`), props: true},
	{path: '/request/:id', component: () => import(`../app/components/request/item.vue`), props: true},
	{path: '/functional_requirement', component: () => import(`../app/components/functional_requirement/index.vue`), props: true},
	{path: '/functional_requirement/:id', component: () => import(`../app/components/functional_requirement/item.vue`), props: true},
	{path: '/digital_solution', component: () => import(`../app/components/digital_solution/index.vue`), props: true},
	{path: '/digital_solution/:id', component: () => import(`../app/components/digital_solution/item.vue`), props: true},
	{path: '/sprint', component: () => import(`../app/components/sprint/index.vue`), props: true},
	{path: '/sprint/:id', component: () => import(`../app/components/sprint/item.vue`), props: true},
	{path: '/system', component: () => import(`../app/components/system/index.vue`), props: true},
	{path: '/system/:id', component: () => import(`../app/components/system/item.vue`), props: true},
	{path: '/invoice', component: () => import(`../app/components/invoice/index.vue`), props: true},
	{path: '/invoice/:id', component: () => import(`../app/components/invoice/item.vue`), props: true},
	{path: '/ctlg_dev_task_state', component: () => import(`../app/components/ctlg_dev_task_state/index.vue`), props: true},
	{path: '/ctlg_dev_task_state/:id', component: () => import(`../app/components/ctlg_dev_task_state/item.vue`), props: true},
	{path: '/time', component: () => import(`../app/components/time/index.vue`), props: true},
	{path: '/time/:id', component: () => import(`../app/components/time/item.vue`), props: true},
	{path: '/task', component: () => import(`../app/components/task/index.vue`), props: true},
	{path: '/task/:id', component: () => import(`../app/components/task/item.vue`), props: true},
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../app/components/error404.vue')
  }
]


export default routes
