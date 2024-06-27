import React, { useState} from 'react'
import "./css/leftMenu.css"


import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import { MenuItem } from '../components'


const LeftMenu = ({activeIndex, onActiveIndexChanged}) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleChevronClick = () => {
    setCollapsed(prev => !prev);
  }
 
  return (
    <div id="leftMenu" className={collapsed ? 'collapsed' : ''}>
      <div id="collapser">
        {!collapsed && <h3>Menu</h3>}
        <span
          className={`chevron ${collapsed ? 'right' : 'left'}`}
          onClick={handleChevronClick}
        />
      </div>
      
      <div id="menu-items">
       
        <MenuItem
          icon={PeopleOutlineIcon}
          label="Zákazníci"
          isActive={activeIndex === 0}
          onClick={()=> onActiveIndexChanged(0)}
          collapsed={collapsed}
        />

        <MenuItem
          icon={TimelineIcon}
          label="Vývoj príjmov"
          isActive={activeIndex === 1}
          onClick={()=> onActiveIndexChanged(1)}
          collapsed={collapsed}
        />

        <MenuItem
          icon={SettingsIcon}
          label="Nastavenia"
          isActive={activeIndex === 2}
          onClick={()=> onActiveIndexChanged(2)}
          collapsed={collapsed}
        />

       
      </div>
    </div>
  )
}

export default LeftMenu