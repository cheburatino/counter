export default {
  appName: 'Electron',
  uiAppName: 'Electron',
  apiUrl: () => process.env.NODE_ENV === 'development' ? 'http://localhost:3091' : 'https://system.i-electron.ru',
  wsUrl: () => process.env.NODE_ENV === 'development' ? 'ws://localhost:3091' : 'wss://system.i-electron.ru',
  isEmailAuth: {
    firstName: true,
    lastName: true,
  },
  logoSrc: 'https://sun9-62.userapi.com/impg/F-5YBo8Q_x7zEvb84K3yXcPszuaap01ckDVNFQ/CUIn2MAFtOQ.jpg?size=1126x465&quality=96&proxy=1&sign=429dc4b365be888cca6a277c5ebcfe54',
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
