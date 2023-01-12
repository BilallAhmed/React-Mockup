import React from 'react'
import '../portfolio/portfolio.css'
import Gone from './assets/g-one-img.png'
function portfolio() {
  return (
    <div>
        <section className='portfolio-section'>
      <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <h4 className='center-heading'>PORTFOLIO</h4>
                <h2 className="mc-main-about-heading">
                OUR <span> RECENT </span> PORTFOLIO
              </h2> 
              &nbsp;
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
            </div>
            
        </div>
     </div>
     <div className="container-fluid tab-container">
        <div className="row">
        <div className="col-2 my-4">
            <button className='btn pf-btns'>ALL</button><br/><br/>
                <button className='btn pf-btns-white'>WEBSITE DESIGN</button><br/><br/>
                <button className='btn pf-btns-white'>MOBILE APP</button><br/><br/>
                <button className='btn pf-btns-white'>DEVELOPMENT</button><br/><br/>
                <button className='btn pf-btns-white'>VIDEO ANIMATION</button><br/><br/>
                <button className='btn pf-btns-white'>STRATEGY</button><br/><br/>
                <button className='btn pf-btns-white'>BRANDING</button><br/><br/>
            </div>
            <div className="col-2">
                <div className='grid-one'>
                    <img src={Gone} alt=""/>
                </div>
                <div className='grid-one'></div>
            </div>
        </div>
     </div>
     </section>
    </div>
  )
}

export default portfolio
