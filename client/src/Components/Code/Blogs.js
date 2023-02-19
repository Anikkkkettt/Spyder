import React from 'react'
import "../Styles/Blogp.css"
import img1 from "../Images/hero-side.png"

export default function Blogs() {
  return (
    <div className='blogsbody'>
        <div className="atwo">
            <div className="atwopart1">
                <div className="header">
                <h2>Latest</h2>
                <h5>Top</h5>
                <h5>Your interest  </h5>
                </div>
                <div className="lorem1">
                    <img src={img1} alt="" />
                    <div className="mypart">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eius, eveniet quas illum ratione vitae libero unde maiores laborum minima ad quia iure, doloremque magnam nisi error itaque. Doloribus, veniam!

                        </p>
                        <div className="tags">
                            <p>#lorem</p>
                            <p>#ipsum</p>
                            <p>#dolor</p>
                        </div>
                    </div>
                </div>
                <div className="lorem1">
                    <img src={img1} alt="" />
                    <div className="mypart">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eius, eveniet quas illum ratione vitae libero unde maiores laborum minima ad quia iure, doloremque magnam nisi error itaque. Doloribus, veniam!

                        </p>
                        <div className="tags">
                            <p>#lorem</p>
                            <p>#ipsum</p>
                            <p>#dolor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="atwopart2">
            </div>
            <div className="atwopart3">
                <h2>
                    Trending
                </h2>
                <div><p>#lorem</p><p>number</p></div>
                <div><p>#lorem</p><p>number</p></div>
                <div><p>#lorem</p><p>number</p></div>
                <div><p>#lorem</p><p>number</p></div>
                <div><p>#lorem</p><p>number</p></div>
                <div><p>#lorem</p><p>number</p></div>
            </div>
        </div>
      
    </div>
  )
}
