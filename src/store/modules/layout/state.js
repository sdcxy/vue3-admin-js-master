import { reactive } from "vue"

// state
export const State = { 
  collapse: false, // 是否折叠
  showLogo: true,  // 显示图标
}

export const createState = () => { 
  return reactive(State)
}