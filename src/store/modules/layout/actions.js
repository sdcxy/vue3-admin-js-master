// actions
// 更新折叠按钮状态
function updateCollapse(state){
  return (collapse) => { 
    state.collapse = collapse;
  }
}


// 更新显示图标状态
function updateShowLogo(state){ 
  return (showLogo) => { 
    state.showLogo = showLogo;
  }
}

export const createActions = (state) => { 
  return {
    updateCollapse: updateCollapse(state),
    updateShowLogo: updateShowLogo(state)
  }
}

