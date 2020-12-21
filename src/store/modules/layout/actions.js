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

// 更新显示设置
function updateShowSettings(state) { 
  return () => { 
    state.showSettings = !state.showSettings;
  }
}

// 更新显示tagsView 导航
function updateShowTagsView(state) { 
  return () => { 
    state.showTagsView = !state.showTagsView;
  }
}

// 更新固定头部状态
function updateFixedHeader(state) { 
  return () => { 
    state.fixedHeader = !state.fixedHeader;
  }
}

export const createActions = (state) => { 
  return {
    updateCollapse: updateCollapse(state),
    updateShowLogo: updateShowLogo(state),
    updateShowTagsView: updateShowTagsView(state),
    updateShowSettings: updateShowSettings(state),
    updateFixedHeader: updateFixedHeader(state),
  }
}

