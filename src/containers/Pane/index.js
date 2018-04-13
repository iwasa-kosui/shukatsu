import React, { Component } from 'react'
import './index.css'
import background from '../../images/onsha.png'

const Pane = ({ onClick, visible, image }) => (
  <div
    className="Pane"
    style={{backgroundImage: visible ? `url(${image})` : `url(${background})`}}
    onClick={onClick}
  />
)

export default Pane
