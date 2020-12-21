const state = {
  isCollapse: false, // 是否折叠菜单
  showLogo: true, // 是否显示图标
}

const mutations = {
  SET_COLLAPSE: (state, status) => { 
    // 设置状态 
    state.isCollapse = status
  },
  SET_SHOW_LOGO: (state) => { 
    state.showLogo = !state.showLogo
  }
}

export default {
  state,
  mutations
}