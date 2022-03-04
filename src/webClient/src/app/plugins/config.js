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
ctlg_request_priority: 'fas fa-list-ul',
ctlg_time_type: 'fas fa-list-ul',
ctlg_digital_solution_state: 'fas fa-list-ul',
ctlg_digital_solution_specialist_role: 'fas fa-list-ul',
ctlg_functional_requirement_state: 'fas fa-list-ul',
ctlg_functional_requirement_specialist_role: 'fas fa-list-ul',
ctlg_task_type: 'fas fa-list-ul',
ctlg_task_state: 'fas fa-list-ul',
ctlg_task_role: 'fas fa-list-ul',
ctlg_work_state: 'fas fa-list-ul',
ctlg_work_specialist_role: 'fas fa-list-ul',
ctlg_bug_state: 'fas fa-list-ul',
ctlg_customer_task_state: 'fas fa-list-ul',
ctlg_contract_state: 'fas fa-list-ul',
ctlg_technical_task_state: 'fas fa-list-ul',
ctlg_technical_task_work_state: 'fas fa-list-ul',
ctlg_completion_act_state: 'fas fa-list-ul',
ctlg_invoice_state: 'fas fa-list-ul',
ctlg_filter: 'fas fa-list-ul',
meeting: 'fas fa-users',
contract: 'fas fa-file-signature',
technical_task: 'fas fa-list-ul',
counterparty: 'far fa-handshake',
company: 'fas fa-building',
man: 'fas fa-male',
system: 'fas fa-project-diagram',
request: 'far fa-lightbulb',
digital_solution: 'fas fa-rocket',
functional_requirement: 'fas fa-square-root-alt',
invoice: 'fas fa-file-invoice-dollar',
payment: 'fas fa-list-ul',
completion_act: 'fas fa-list-ul',
sprint: 'fas fa-list-ul',
task: 'fas fa-clipboard-check',
work: 'fas fa-laptop-code',
customer_task: 'fas fa-clipboard-check',
bug: 'fas fa-exclamation-triangle',
task_specialist_link: 'fas fa-list-ul',
system_customer_agent_link: 'fas fa-list-ul',
request_customer_agent_link: 'fas fa-list-ul',
functional_requirement_customer_agent_link: 'fas fa-list-ul',
digital_solution_specialist_link: 'fas fa-list-ul',
functional_requirement_specialist_link: 'fas fa-list-ul',
digital_solution_customer_agent_link: 'fas fa-list-ul',
customer_task_customer_agent_link: 'fas fa-list-ul',
bug_customer_agent_link: 'fas fa-list-ul',
work_specialist_link: 'fas fa-list-ul',
work_task_link: 'fas fa-list-ul',
company_man_link: 'fas fa-list-ul',
time: 'fas fa-building',
comment: 'far fa-comment-dots',
news_from_dima: 'far fa-newspaper'
  },
  
  tablesForTask: {},
}
