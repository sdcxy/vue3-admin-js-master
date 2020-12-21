export const menus = [
  {
    path: "/login2",
    name: "Layout2",
    meta: {
      icon: 'account',
      title: '基础管理'
    },
    hidden: false,
    children: []
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      icon: 'password',
      title: '系统管理'
    },
    hidden: false,
    children: [
      {
        path: "/forget",
        name: "Forget",
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