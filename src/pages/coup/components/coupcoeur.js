import React from 'react';
import "./coupcoeur.scss";
import about from "../../../assets/images/Zara-childrern-2-665x825.webp"

export const Coupcoeurt = () => {
    return (
        <>
            <div className='coup'>
                <div className='bg_coup'>
                    <h1>COUP DE COEUR</h1>
                </div>
                <div className='fvr '>
                    <div className='frv_0  d-lg-flex justify-content-lg-evenly container '>
                        <p className='mx-lg-7 text-end'>PRODUCT</p>
                        <div className=' price d-lg-flex justify-content-lg-around align-items-lg-center mx-lg-9'>
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                        </div>
                        <div className='total d-lg-flex justify-content-lg-evenly align-items-lg-center'>
                            <p>TOTAL</p>
                            <p>ADD</p>
                        </div>
                    </div>
                    <div>

                        <div className='frv_0 d-lg-flex justify-content-lg-between align-items-lg-center container mt-lg-2 mb-lg-2'>
                            <img src={about} alt="" srcset="" />
                            <p>Men Tshirt</p>
                            <div className=' price d-lg-flex justify-content-lg-around align-items-lg-center'>
                                <p>$36.00</p>
                                <div className=' d-lg-flex justify-content-lg-between align-items-lg-center text-lg-center plus'>
                                    <button>+</button>
                                    <p className='name'></p>
                                    <button>-</button>
                                </div>
                            </div>
                            <div className='total d-lg-flex justify-content-lg-evenly align-items-lg-center'>
                                <p>TOTAL</p>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                    <div>


                    <div className='frv_0  d-lg-flex justify-content-lg-between align-items-lg-center container'>
                            <img src={about} alt="" srcset="" />
                            <p>Men Tshirt</p>
                            <div className='price d-lg-flex justify-content-lg-around align-items-lg-center'>
                                <p>$36.00</p>
                                <div className=' d-lg-flex justify-content-lg-between align-items-lg-center text-lg-center plus'>
                                    <button>+</button>
                                    <p className='name'></p>
                                    <button>-</button>
                                </div>
                            </div>
                            <div className='total d-lg-flex justify-content-lg-evenly align-items-lg-center'>
                                <p>TOTAL</p>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className='frv_0 allttl  d-lg-flex justify-content-lg-between align-items-lg-center container mb-lg-3 mt-lg-1'>

                    <p className=''></p>
                    </div>

                </div>
            </div>

        </>


    )
}