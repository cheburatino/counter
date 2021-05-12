export default {
  appName: 'Electron',
  uiAppName: 'Electron',
  apiUrl: () => process.env.NODE_ENV === 'development' ? 'http://localhost:3091' : 'https://system.i-electron.ru',
  wsUrl: () => process.env.NODE_ENV === 'development' ? 'ws://localhost:3091' : 'wss://system.i-electron.ru',
  isEmailAuth: {
    firstName: true,
    lastName: true,
  },
  logoSrc: 'statics/image/electron_logo.png',
  dadataToken: '1cf3a086e3dbe1306ed142d2b5fbc1b324b8eb60',
  // yandexMetrikaId: 54433825,
  breadcrumbIcons: {
    client: 'fas fa-male',
project: 'fas fa-project-diagram',
internal_task: 'fas fa-clipboard-check',
man: 'fas fa-male'
  },
  
  tablesForTask: {},
}
