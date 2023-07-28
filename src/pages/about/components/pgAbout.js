import React from 'react';
import "./pgAbout.scss";
import about from "../../../assets/images/about.jpg"

export const Pgabout = () => {
    return(
        <>
<div className=' about'>
                <div className='bg_about'>
                    <p>ABOUT</p>
                </div>
                {/*  */}
                <div className='text container-lg d-md-flex d-lg-flex justify-content-lg-between align-items-lg-start  mt-3'>
                    <div className='img-about'>
                        <img src={about} alt="" srcset="" />
                    </div>
                    <div className='text'>
                        <div className=" text_2  ">
                            <h3 className=''>Our Story</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis aspernatur repellendus quia veniam, hic necessitatibus non iure ratione doloribus pariatur minima deserunt modi eligendi ipsa officia dolore nulla. Perspiciatis?
                            Ipsa nisi laudantium explicabo quas voluptatem ipsam quaerat ab aperiam eos fugiat exercitationem alias eum, itaque quod. Veritatis aliquid cupiditate porro. Natus excepturi eos optio minus temporibus ab velit aspernatur.
                            Fugiat illo, iure cumque nemo cum similique. Delectus quae iusto vel optio fugiat illum ea architecto adipisci nemo nobis tenetur harum perferendis sed tempore id vitae alias, fuga debitis explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis?</p>
                        </div>
                        <div className=' para_2 s mx-lg-2 mt-lg-1'>
                            <p className='mx-lg-2'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                            <p className='mx-lg-2'>- Steve Job’s</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}