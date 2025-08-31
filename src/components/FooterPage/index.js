
import React, { useState } from 'react';
import { RiInformationLine } from "react-icons/ri";
import "./index.css";

const FooterPage = () => {
  const [activeUMF, setActiveUMF] = useState("24");

  return (
    <div className='footerpage-container'>

      <div className='aboutproductContainer'>
        <img src='https://res.cloudinary.com/dlaypemls/image/upload/v1756637644/logo_jgjhwr.png' alt='logo' className='logo' />
        <p className='logo-text'>
          Colourclub members earn up to <span className='number'>56</span> reward points when buy this item. Sign up or log in
        </p>
      </div>


      <div className='delivery-details-container'>
        <div className='delivery-part-container'>
          <h4 className='delivery-text'>DELIVERY</h4>
          <p className='delivery-para'>FREE DELIVERY ON ORDERS OVERS $30</p>
        </div>

        <div className='delivery-part-container'>
          <h4 className='delivery-text'>ESTIMATED DELIVERY DATE:</h4>
          <p className='delivery-para'>Jun 9 - Jun 13 to</p>
        </div>
        <hr />
      </div>


      <div className='delivery-details-container'>
        <div className='delivery-part-container'>
          <h4 className='delivery-text'>AFTER PAY</h4>
          <p className='delivery-para'>
            or 4 interest-free payments of $13.97 with
            <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756638969/button_logo_keprxj.png" alt="log" className='logo-btn' />
            <RiInformationLine />
          </p>
        </div>
        <hr />
      </div>


      <div className="umf-scale-container">
        <h4 className="scale-title">UMF™ SCALE</h4>
        <div className="umf-options">
          <span className={`umf-option orange ${activeUMF === "10" ? "active" : ""}`} onClick={() => setActiveUMF("10")}>UMF™ 10+</span>
          <span className={`umf-option red ${activeUMF === "15" ? "active" : ""}`} onClick={() => setActiveUMF("15")}>UMF™ 15+</span>
          <span className={`umf-option pink ${activeUMF === "20" ? "active" : ""}`} onClick={() => setActiveUMF("20")}>UMF™ 20+</span>
          <span className={`umf-option purple ${activeUMF === "24" ? "active" : ""}`} onClick={() => setActiveUMF("24")}>UMF™ 24+</span>
          <span className={`umf-option skyblue ${activeUMF === "26" ? "active" : ""}`} onClick={() => setActiveUMF("26")}>UMF™ 26+</span>
          <span className={`umf-option green ${activeUMF === "28" ? "active" : ""}`} onClick={() => setActiveUMF("28")}>UMF™ 28+</span>
          <span className={`umf-option blue ${activeUMF === "30" ? "active" : ""}`} onClick={() => setActiveUMF("30")}>UMF™ 30+</span>
        </div>


        <h4 className="scale-title">TASTE PROFILE</h4>
        <div className="taste-bar">
          <span className="taste-left">Clean & Intense</span>
          <div className="taste-line">
            <div className="taste-dot"></div>
          </div>
          <span className="taste-right">Bold & Intense</span>
        </div>
      </div>
    </div>
  )
}

export default FooterPage;
