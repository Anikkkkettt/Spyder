import React from 'react'
import "../Styles/Foot.css"

export default function Footer() {
  return (
    <div className='footpic'>
      <div className="footmain">
        <div className="footmainpart1">
            <h1>SDE Prep</h1>
        </div>
        <div className="footmainpart2">
            <h5>Blogs</h5>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="footmainpart3">
        <h5>Latest Resources</h5>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <p className='bottomfoot'>
      The Clever World. All rights reserved.
      </p>
    </div>
  )
}
