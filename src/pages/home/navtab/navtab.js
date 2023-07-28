import "./navtab.scss";
import best1 from "../../../assets/images/Zara-childrern-2-665x825.webp";
import best2 from "../../../assets/images/7493915710_1_1_1.jpg";
import best3 from "../../../assets/images/D6RWwQlXoAECKVk.jpg";
import best4 from "../../../assets/images/Zara-Man-Summer-2019-Linen-006.jpg";




export const Navtab = () => {

    return (
        <>
            <div className=" nav_tab ">
                <h3 className="text-center">OUR PRODUCTS</h3>

                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-secondary bg-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-secondary bg-white" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-secondary bg-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-secondary bg-white" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Disabled</button>
                    </li>
                </ul>
                {/* best sale */}
                <div class="tab-content all-tab" id="pills-tabContent">
                    <div class="tab-pane fade show active container  all_div" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best2} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <img src={best3} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                            </div>
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1 ">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best1} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <button className="sale">Sale</button>
                                    <img src={best4} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <div className="d-flex justify-conten-start">
                                        <h5 className="oldprix">$75.00</h5>
                                        <h5 className=" slprix">$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade container all_div" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best2} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <img src={best3} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                            </div>
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1 ">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best1} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <button className="sale">Sale</button>
                                    <img src={best4} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <div className="d-flex justify-conten-start">
                                        <h5 className="oldprix">$75.00</h5>
                                        <h5 className=" slprix">$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade container all_div" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best2} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <img src={best3} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                            </div>
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1 ">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best1} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <button className="sale">Sale</button>
                                    <img src={best4} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <div className="d-flex justify-conten-start">
                                        <h5 className="oldprix">$75.00</h5>
                                        <h5 className=" slprix">$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade container all_div" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                    <div className=" best_saler d-lg-flex justify-content-lg-center align-items-lg-center ">
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best2} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <img src={best3} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                            </div>
                            <div className="best d-block d-md-flex  d-lg-flex mb-md-1 ">
                                <div className="prdt1 ">
                                    <button className="nw">New</button>
                                    <img src={best4} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <h5>$75.00</h5>
                                </div>
                                <div className="prdt1  mx-md-2">
                                    <button className="sale">Sale</button>
                                    <img src={best1} alt="" srcset="" />
                                    <p>Herschel supply co 25l</p>
                                    <div className="d-flex justify-conten-start">
                                        <h5 className="oldprix">$75.00</h5>
                                        <h5 className=" slprix">$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
