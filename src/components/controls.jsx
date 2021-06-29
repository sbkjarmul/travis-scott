import React from 'react'
import { NavLink } from 'react-router-dom'

const Controls = () => {
  return (
    <div className="controls">
      <NavLink to="/" activeClassName="active" exact>
        <div className="controls__circle"></div>
      </NavLink>
      <NavLink to="/album" activeClassName="active">
        <div className="controls__circle"></div>
      </NavLink>
      <NavLink to="/video" activeClassName="active">
        <div className="controls__circle"></div>
      </NavLink>
      <NavLink to="/events" activeClassName="active">
        <div className="controls__circle"></div>
      </NavLink>
    </div>
  )
}

export default Controls;