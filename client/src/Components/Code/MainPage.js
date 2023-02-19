import React from 'react'
import "../Styles/Mainp.css"
import logo from "../Images/codeLogo.png"
import "../Styles/Nav.css"
import "../Styles/Foot.css"
import cardImg from "../Images/cardImg.jpg" 
import heroimg from "../Images/heroimg.png" 

export default function MainPage() {
    return (
        <>
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
    <div className='mynav'> 
        <div className='options'> 
            <ul className='ul-item'> 
                <li> 
                    <a href="/">Blogs</a> 
                </li> 
                <li> 
                    <a href="/">Interview prep</a> 
                </li> 
                <li> 
                    <a href="/">Interview experience</a> 
                </li> 
                <li> 
                    <a href="/">write on us</a> 
                </li> 
                <li> 
                    <a href="/">opinion</a> 
                </li> 
            </ul> 
            <div className='myimage'> 
                <img src={heroimg} alt="" /> 
            </div> 
        </div> 
    </div>
        <div>
            <div className="secondpart">

            </div>
            <div className="athird">
                <div className="athirdpart1">
                    <h1>
                        Share Your Knowledge. <br />Write for pephub
                    </h1>
                    <p>
                        Write blogs for us, share your knowledge & experience.
                        Help thousands like you prepare better for their goals.
                    </p>
                    <button>Start Writing Now!</button>
                </div>
                <div className="athirdpart2">
                    <h3>Topics You can write on</h3>
                    <input type="text" name="cogtech" placeholder='Cognizant Digital Nurture Technical Interview Experience' /><br />
                    <input type="text" name="coghr" placeholder='Cognizant Digital Nurture HR Interview Experience' /><br />
                    <input type="text" name="tcsdigi" placeholder='TCS Digital  Technical Interview Experience' /><br />
                    <input type="text" name="tcsninja" placeholder='TCS Ninja  Technical Interview Experience' /><br />
                </div>
            </div>
        </div>
        <div className="tittle"> 
        <h1>Latest Blogs</h1> 
    </div> 
    <div className="card-deck"> 
  <div className="card"> 
    <img className="card-img-top" src={cardImg} alt="Card image cap"/> 
    <div className="card-body"> 
    <h5 className="card-title">Lorem ipsum dolor sit amet.</h5> 
      <p className="sub-title">By prasun das | 10m ago</p> 
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie magna at convallis venenatis. Mauris ut felis pellentesque</p> 
      <div className="para-group"> 
        <p className='p1'>#lorem</p> 
        <p className="p2">#ipsum</p> 
        <p className="p3">#dolor</p> 
      </div> 
    </div> 
  </div> 
  <div className="card"> 
    <img className="card-img-top" src={cardImg} alt="Card image cap"/> 
    <div className="card-body"> 
      <h5 className="card-title">Lorem ipsum dolor sit amet.</h5> 
      <p className="sub-title">By prasun das | 10m ago</p> 
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie magna at convallis venenatis. Mauris ut felis pellentesque</p> 
      <div className="para-group"> 
        <p className='p1'>#lorem</p> 
        <p className="p2">#ipsum</p> 
        <p className="p3">#dolor</p> 
      </div> 
    </div> 
  </div> 
  <div className="card"> 
    <img className="card-img-top" src={cardImg} alt="Card image cap"/> 
    <div className="card-body"> 
    <h5 className="card-title">Lorem ipsum dolor sit amet.</h5> 
      <p className="sub-title">By prasun das | 10m ago</p> 
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie magna at convallis venenatis. Mauris ut felis pellentesque</p> 
      <div className="para-group"> 
        <p className='p1'>#lorem</p> 
        <p className="p2">#ipsum</p> 
        <p className="p3">#dolor</p> 
      </div> 
    </div> 
  </div> 
</div> 
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
        </>
    )
}
