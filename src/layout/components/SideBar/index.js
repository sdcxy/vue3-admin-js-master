export const menus = [
  {
    path: "foeget",
    name: "Forget",
    meta: {
      icon: 'account',
      title: '基础管理'
    },
    hidden: false,
    children: []
  },
  {
    path: "login",
    name: "Login",
    meta: {
      icon: 'password',
      title: '系统管理'
    },
    hidden: false,
    children: [
      {
        path: "home",
        name: "Home",
        meta: {
          icon: 'slider',
          title: '人员管理'
        },
        hidden: false,
        children: []
      }
    ]
  }
]