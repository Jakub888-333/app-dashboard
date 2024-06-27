import React, {} from 'react'
import "./css/menuItem.css"

const MenuItem = ({icon: Icon, label, isActive, onClick, collapsed}) => {
  return (
    <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>  
      <Icon/>
      {collapsed ? null : <div>{label}</div>}
    </div>
  )
}

export default MenuItem