import React, { Component, createContext } from 'react'
import { connect } from 'react-redux'
import { showPane } from '../../actions'
import './index.css'
import Pane from '../../containers/Pane'
import imageSources from '../../images/'
import {
  FacebookShareButton, FacebookIcon, FacebookShareCount,
  GooglePlusShareButton, GooglePlusIcon, GooglePlusShareCount,
  TwitterShareButton, TwitterIcon,
} from 'react-share'

const mapStateToProps = state => {
  return {
    panes: state.paneList.panes,
    clicked: state.paneList.tried
  }
}

const mapDispatchToProps = dispatch => ({
  showPane: id => dispatch(showPane(id))
})

const PaneList = ({ panes, clicked, showPane }) => {
  console.log(panes.filter(pane => pane.visible).length)
  return (
    <div>
      <div class="info">
        <TwitterShareButton url={window.location.href} title={
          panes.filter(pane => pane.visible).length == panes.length ?
          "就活生神経衰弱をプレイしよう！私は" + clicked + "回クリックしてクリアしました #就活神経衰弱" :
          "就活生神経衰弱をプレイしよう！ #就活神経衰弱"
        }>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <span> {clicked} 回クリックしました</span>
        <a href="https://github.com/KilledByNLP/shukatsu">Show GitHub</a>
      </div>
      <div className="PaneList">
        {panes.map(pane => {
          return <Pane
            key={pane.id}
            {...pane}
            onClick={() => showPane(pane.id)}
          />
        })}
      </div>
    </div>
  )
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaneList)