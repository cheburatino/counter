export default {
  appName: 'Electron',
  uiAppName: 'Electron',
  apiUrl: () => process.env.NODE_ENV === 'development' ? 'http://localhost:3091' : 'https://system.i-electron.ru',
  wsUrl: () => process.env.NODE_ENV === 'development' ? 'ws://localhost:3091' : 'wss://system.i-electron.ru',
  isEmailAuth: {
    firstName: true,
    lastName: true,
  },
  logoSrc: 'image/electron_logo.png',
  dadataToken: '1cf3a086e3dbe1306ed142d2b5fbc1b324b8eb60',
  // yandexMetrikaId: 54433825,
  breadcrumbIcons: {
    ctlg_electron_skill: 'fas fa-code',
ctlg_request_state: 'fas fa-list-ul',
ctlg_time_type: 'fas fa-list-ul',
ctlg_digital_solution_state: 'fas fa-list-ul',
ctlg_functional_requirement_state: 'fas fa-list-ul',
ctlg_task_type: 'fas fa-list-ul',
ctlg_task_state: 'fas fa-list-ul',
ctlg_task_role: 'fas fa-list-ul',
ctlg_dev_task_state: 'fas fa-list-ul',
ctlg_task_status_type: 'fas fa-list-ul',
ctlg_subtask_state: 'fas fa-list-ul',
meeting: 'fas fa-users',
contract: 'fas fa-file-signature',
counterparty: 'far fa-handshake',
company: 'fas fa-building',
man: 'fas fa-male',
system: 'fas fa-project-diagram',
request: 'far fa-lightbulb',
sprint: 'fas fa-running',
digital_solution: 'fas fa-rocket',
functional_requirement: 'fas fa-square-root-alt',
invoice: 'fas fa-file-invoice-dollar',
task: 'fas fa-clipboard-check',
task_specialist_link: 'fas fa-list-ul',
time: 'fas fa-building',
comment: 'far fa-comment-dots'
  },
  
  tablesForTask: {},
}