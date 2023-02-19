import React from 'react'
import logo from "../Images/codeLogo.png"
import "../Styles/Nav.css"

export default function Navbar() {
  return (
    <div className='mymainbody'>
      <div className="navpart1">
        <img src={logo} alt="" />
      </div>
      <div className="mybuttons">
      <img src="https://img.icons8.com/fluency/35/null/crescent-moon.png" alt=""/>
      <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"/>

        <button>Start Preparing Now!</button>
      </div>
    </div>
  )
}
