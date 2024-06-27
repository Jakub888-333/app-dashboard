import React, {} from 'react'
import "./css/body.css"
import vyvojPrijmov from '../pages/vyvojPrijmov'
import zakaznici from '../pages/zakaznici'
import nastavenia from '../pages/nastavenia'

const Body = ({ activeIndex }) => {
  
  let Page = null
  switch ( activeIndex ) {
    case 0:
      Page = zakaznici
      break
    case 1:
      Page = vyvojPrijmov
      break
    case 2:
      Page = nastavenia
      break
    default:
      Page = zakaznici
      break
  }


  return (
  <div id="body">
    <div><Page /></div>
  </div>
  )
}

export default Body