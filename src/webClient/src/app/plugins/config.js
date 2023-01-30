export default {
  appName: 'Counter',
  uiAppName: 'Counter',
  apiUrl: () => process.env.NODE_ENV === 'development' ? 'http://localhost:3098' : 'https://demo-counter.i-electron.ru',
  wsUrl: () => process.env.NODE_ENV === 'development' ? 'ws://localhost:3098' : 'wss://demo-counter.i-electron.ru',
  isEmailAuth: {
    firstName: true,
    lastName: true,
  },
  logoSrc: 'image/counter.png',
  dadataToken: '1cf3a086e3dbe1306ed142d2b5fbc1b324b8eb60',
  // yandexMetrikaId: 54433825,
  breadcrumbIcons: {
    ctlg_history_type: 'fas fa-list-ul',
ctlg_system_state: 'fas fa-list-ul',
ctlg_meeting_state: 'fas fa-list-ul',
ctlg_task_type: 'fas fa-list-ul',
ctlg_task_stage: 'fas fa-list-ul',
ctlg_task_state: 'fas fa-list-ul',
ctlg_work_state: 'fas fa-list-ul',
ctlg_contract_state: 'fas fa-list-ul',
ctlg_technical_task_state: 'fas fa-list-ul',
ctlg_technical_task_work_state: 'fas fa-list-ul',
ctlg_completion_act_state: 'fas fa-list-ul',
ctlg_invoice_state: 'fas fa-list-ul',
ctlg_filter: 'fas fa-list-ul',
ctlg_order_by: 'fas fa-list-ul',
ctlg_time_state: 'fas fa-list-ul',
company: 'fas fa-building',
contact: 'fas fa-male',
system: 'fas fa-project-diagram',
legal_entity: 'far fa-handshake',
contract: 'fas fa-file-signature',
work_time_sheet: 'fas fa-list-ul',
technical_task: 'fas fa-list-ul',
task: 'fas fa-clipboard-check',
meeting: 'fas fa-users',
invoice: 'fas fa-file-invoice-dollar',
payment: 'fas fa-list-ul',
completion_act: 'fas fa-list-ul',
work: 'fas fa-laptop-code',
time: 'fas fa-building'
  },
  
  tablesForTask: {},
}
