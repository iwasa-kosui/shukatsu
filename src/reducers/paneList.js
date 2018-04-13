import imageSources from '../images/'
const shuffleArray = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
)
let images = shuffleArray(Object.assign(imageSources))
let defaultPanes = images.map((image, i) => {
  return {
    id: i,
    image: image,
    visible: false,
    opened: false,
  }
})
let defaultPaneList = {
  panes: defaultPanes,
  opened: [],
  tried: 0
}

const paneList = (state = defaultPaneList, action) => {
  switch (action.type) {
    case 'SHOW_PANE':
      let newState = {}
      if (state.opened.length == 1 && state.opened[0] == action.id) {
        return state
      }
      if (state.opened.length < 2) {
        newState.panes = state.panes.map(pane =>
          (pane.id === action.id || pane.opened == true)
            ? {...pane, visible: true}
            : pane
        )
        newState.opened = [...state.opened, action.id]
      } else {
        if (state.panes[state.opened[0]].image == state.panes[state.opened[1]].image) {
          state.panes[state.opened[0]].opened = true
          state.panes[state.opened[1]].opened = true
        }
        newState.panes = state.panes.map(pane =>
          (pane.id === action.id || pane.opened == true)
            ? {...pane, visible: true}
            : {...pane, visible: false}
        )
        newState.opened = [action.id]
      }
      newState.tried = state.tried + 1
      console.log(newState.tried)
      return newState
    default:
      return state
  }
}
 
export default paneList