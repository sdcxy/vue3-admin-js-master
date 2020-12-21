import { reactive } from "vue"

// state
export const State = { 
  collapse: false, // 是否折叠
  showLogo: true,  // 显示图标
  showTagsView: false, // 显示TagsView导航栏
  showSettings: false, // 显示设置
  fixedHeader: true, // 是否固定头部
  menus: [
    {
      path: "forget",
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
}

export const createState = () => { 
  return reactive(State)
}