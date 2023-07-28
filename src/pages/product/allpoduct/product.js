import "./product.scss";
import best1 from "../../../assets/images/zara-linen-man-striped-shirt-ecru-black.jpg";
import best2 from "../../../assets/images/1179008537_1_1_1.jpg";
import best3 from "../../../assets/images/2187241075_1_1_1.jpg";
import best4 from "../../../assets/images/2187241075_1_1_1.jpg";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Allproduct = () => {
      //********** */
  class Products {
    constructor(name , type , price , stock , src){
      this.name = name ;
      this.type = type ;
      this.price = price ;
      this.stock = stock ;
      this.src = src ;
    }
  }


//   const [panier , setPanier] = useState([]);


let navigation = useNavigate()

const send = () => {
  navigation("/panier")
}




    return (
        <>
            <div className='product'>
                <div className='bg-product'>
                    <h1>PRODUCT</h1>
                    <p>New Arrivals Women Collection</p>
                </div>
                {/* NAV TAB */}
                <div className='shop container mt-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4>Categories</h4>
                        <p>Nombre de product search :15 all</p>
                    </div>
                    <div class="d-flex align-items-start all_prdct">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link text-secondary bg-white text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All</button>
                            <button class="nav-link text-secondary bg-white text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Women</button>
                            <button class="nav-link text-secondary bg-white text-start" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Men</button>
                            <button class="nav-link text-secondary bg-white text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Kids</button>
                            <button class="nav-link text-secondary bg-white text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Accesories</button>
                        </div>
                        <div class="tab-content all_div " id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                {/*  */}
                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 '>
                                        <div className="prdt1 " onClick={send}>
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 '>
                                        <div className="prdt1 ">
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                        <button className="sale">Sale</button>

                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                        <button className="nw_2">New</button>

                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>


                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 '>
                                        <div className="prdt1 ">
                                            <button className="nw_3">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>

                                {/*  */}
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                {/*  */}
                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 '>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>



                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>


                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>

                                {/*  */}
                            </div>
                            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                                {/*  */}
                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>



                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>


                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>

                                {/*  */}
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                                {/*  */}
                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>



                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>


                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>

                                {/*  */}
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">{/*  */}
                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>



                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>


                                <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                                    <div className='best d-block d-md-flex  d-lg-flex justify-content-lg-around align-content-lg-center mb-md-1 bg-danger'>
                                        <div className="prdt1 ">
                                            <button className="nw">New</button>
                                            <img src={best2} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 mx-2 ">
                                            <img src={best3} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                        <div className="prdt1 ">
                                            <img src={best1} alt="" srcset="" />
                                            <p>Herschel supply co 25l</p>
                                            <h5>$75.00</h5>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>

                                {/*  */}</div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='filter'>
                        <h4>Filter</h4>
                        <input type="search"  placeholder="Search Products..." />

                    </div>
                </div>
            </div>


        </>



    )
}