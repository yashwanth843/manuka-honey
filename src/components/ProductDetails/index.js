import React, { useState } from 'react'
import { RiInformationLine, RiArrowDropDownFill } from "react-icons/ri";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoReload } from "react-icons/io5";
import FooterPage from '../FooterPage';
import "./index.css"

const umfLevels = [
    { value: "10+", color: "#F28C28" },
    { value: "15+", color: "#E63946" },
    { value: "20+", color: "#D63384" },
    { value: "24+", color: "#9B2C9B" },
    { value: "26+", color: "#1D81C2" },
    { value: "28+", color: "#38A169" },
    { value: "30+", color: "#2B3A67" },
];

const mgoLevels = [
    { value: "263+", color: "#F28C28" },
    { value: "514+", color: "#E63946" },
    { value: "829+", color: "#D63384" },
    { value: "1122+", color: "#9B2C9B" },
    { value: "1282+", color: "#1D81C2" },
    { value: "1450+", color: "#38A169" },
    { value: "1620+", color: "#2B3A67" },
];

const ProductDetails = () => {
    const [isShowpop, setShowpop] = useState(false)
    const [increment, setIncreament] = useState(0)

    const onhandlepopupbtn = () => {
        setShowpop(true)
    }

    const onhandleClosebtn = () => {
        setShowpop(false)
    }

    const onhandleincrementBtn = () => {
        setIncreament(prev => prev + 1);
    };

    const onhandledecrementBtn = () => {
        setIncreament(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className='product-container'>
            <div className='image-container'>
                <img src='https://res.cloudinary.com/dlaypemls/image/upload/v1756618297/product_ujv2wp.png' alt="product-img" className='product-img' />
                <img src='https://res.cloudinary.com/dlaypemls/image/upload/v1756629295/product_list_zkgmze.png' alt='product-list' className='product-list' />
            </div>
            <div>
                <div className='product-details-container'>
                    <h1 className='product-heading'>Manuka Honey UMF™ 24+ MGO 1122+</h1>
                    <button type='button' className='pop-up-btn' onClick={onhandlepopupbtn}><RiInformationLine /> what is UFO and MGO?</button>
                </div>
                {isShowpop && (<div className='pop-up-container'>
                    <div className='pop-container'>
                        <p className='umf-para'>UMF is the strength and purity rating of Manuka honey.</p>
                        <div className='color-palet-container'>
                            {umfLevels.map((level) => (
                                <div key={level.value} className="umf-level-wrapper">
                                    <p className="color-text" style={{ color: level.color }}>{level.value}</p>
                                    <div
                                        className="umf-level"
                                        style={{ backgroundColor: level.color }}
                                    >
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className='umf-para-1'>The higher the number, the greater the potency and rarity of manuka honey.</p>
                    </div>
                    <div className='pop-container'>
                        <p className='umf-para'>MGO is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
                        <div className='color-palet-container'>
                            {mgoLevels.map((level) => (
                                <div key={level.value} className="umf-level-wrapper">
                                    <p className="color-text" style={{ color: level.color }}>{level.value}</p>
                                    <div
                                        className="umf-level"
                                        style={{ backgroundColor: level.color }}
                                    >
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className='umf-para-1'>The higher the number, the higher the antibacterial properties in the honey.</p>
                    </div>
                    <button type='button' className='close-btn' onClick={onhandleClosebtn}>Close</button>
                </div>)}
                <div className='product-discription-container'>
                    <h1 className='product-discription-heading'>The Optimiser</h1>
                    <div className='heart-container'>
                        <h1 className='product-discription-heading-1'>The Optimiser</h1>
                        <img src='https://res.cloudinary.com/dlaypemls/image/upload/v1756622684/heart-yellow_xtqrqk.png' alt="rating" className='rating' />
                        <span>795 REVIEWS</span>
                    </div>
                    <p className='description'>For those times in life when quality comes <br /> first.This pure UMF™ 24+ Manuka Honey is <br /> powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body <br /> will love you for it.</p>
                    <div className='certificates-container'>
                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756628370/certifications-1_oorg9j.png" alt='certificates' className='certificates-img' />
                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756628370/certifications-2_n4bszd.png" alt='certificates' className='certificates-img' />
                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756628405/certifications-3_djuax5.png" alt='certificates' className='certificates-img' />
                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756628406/certifications-4_sgx3ss.png" alt='certificates' className='certificates-img' />
                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756628409/certifications-5_sq1fnl.png" alt='certificates' className='certificates-img' />
                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756628411/certifications-6_ijxxmn.png" alt='certificates' className='certificates-img' />
                    </div>
                    <div className='size-product-container'>
                        <div>
                            <p>SIZE (SELECT ONE)</p>
                            <p>Variant: 125g | 4.4oz</p>
                            <div className='size-products-container'>
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627350/product-1_b0vgkb.png" alt="product-img" className='product-size-image' />
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627805/product-2-removebg-preview_xgzq6t.png" alt="product-img" className='product-size-image' />
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627803/product-3-removebg-preview_etixpq.png" alt="product-img" className='product-size-image' />
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627795/product-4-removebg-preview_kn39ua.png" alt="product-img" className='product-size-image' />
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627782/product-5-removebg-preview_zjwbqw.png" alt="product-img" className='product-size-image' />
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627780/product-6-removebg-preview_zuwrod.png" alt="product-img" className='product-size-image' />
                                <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756627777/product-7-removebg-preview_vr2jvj.png" alt="product-img" className='product-size-image' />
                            </div>
                            <div className='payment-option-container'>
                                <p className='payment-option-text'>PAYMENT OPTIONS (SELECT ONE)</p>
                                <div className='payment-type-container'>
                                    <button className='payment-container'>
                                        <p className='payment-name'>One-time purchase</p>
                                        <p className='payment-name'>$55.88 USD</p>
                                    </button>
                                    <button className='payment-container-1'>
                                        <p className='payment-name-1'>One-time purchase</p>
                                        <p className='payment-name-1'>$55.88 USD</p>
                                    </button>
                                    <button type='button' className='restart'><IoReload /> What is a Subscription</button>
                                </div>
                            </div>
                            <p className='select-quantity'>SELECT QUANTITY</p>
                            <div className='quantity-container'>
                                <div className='increament-container'>
                                    <button type='button' className='increment-btn' onClick={onhandledecrementBtn}>-</button>
                                    <p className='increment-btn'>{increment}</p>
                                    <button type='button' className='increment-btn' onClick={onhandleincrementBtn}>+</button>
                                </div>
                                <button type='button' className='cart-btn'>ADD TO CART</button>
                            </div>
                            <div className='beauty-bundle-container'>
                                <h1 className='beauty-heading'><SlArrowLeft /> Beauty Bundle <SlArrowRight /></h1>
                                <div className='product-extra-container'>
                                    <div className='honey-product-container'>
                                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756635478/extra_product-1_gbwuf6.png" alt="honey-img" className='honey-img' />
                                        <p className='honey-product-text'>UMF 20</p>
                                        <button type='button' className='honey-btn'>250g <RiArrowDropDownFill /></button>
                                    </div>
                                    <p>+</p>
                                    <div className='honey-product-container'>
                                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756635479/extra_product-2_hihrlh.png" alt="honey-img" className='honey-img' />
                                        <p className='honey-product-text'>UMF 20</p>
                                        <button type='button' className='honey-btn'>250g <RiArrowDropDownFill /></button>
                                    </div>
                                    <p>+</p>
                                    <div className='honey-product-container'>
                                        <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756635495/extra_product-3_dhbdqm.png" alt="honey-img" className='honey-img' />
                                        <p className='honey-product-text'>Wooden Spoon</p>
                                    </div>
                                    <div className='discount-container'>
                                        <div className='discount-amount-container'>
                                            <p className='amount-1'>$478.75 USD</p>
                                            <h4 className='amount-2'>$430.88 USD</h4>
                                            <span className='save'>Save 10%</span>
                                        </div>
                                        <button type='button' className='discount-btn'>ADD BUNDLE TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <FooterPage/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails

