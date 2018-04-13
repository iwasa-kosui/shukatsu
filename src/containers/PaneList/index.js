import React, { Component, createContext } from 'react'
import { connect } from 'react-redux'
import { showPane } from '../../actions'
import './index.css'
import Pane from '../../containers/Pane'
import imageSources from '../../images/'

const mapStateToProps = state => {
  return {
    panes: state.paneList.panes
  }
}

const mapDispatchToProps = dispatch => ({
  showPane: id => dispatch(showPane(id))
})

const PaneList = ({ panes, showPane }) => {
  return (
    <div className="PaneList">
      {panes.map(pane => {
        return <Pane
          key={pane.id}
          {...pane}
          onClick={() => showPane(pane.id)}
        />
      })}
    </div>
  )
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaneList)