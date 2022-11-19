import React from 'react'
import Tra from '../../assets/images/traxanh0do.png'
import Chainuoc from '../../assets/images/chai_tra_xanh_0_do.jpg'
export default function Home() {
    return (
        <div className="container-fluid ">
            {/* Bức ảnh full  */}
            <div className="row">
                <div className="col p-0">
                    <img src={Tra} alt="Tra xanh 0 do" width="100%" height="auto" />
                </div>

            </div>
            {/* Các sản phẩm bán chạy */}
            <div className="row m-0 ">
                <div className="col p-0">
                    <div className="row pt-5 pb-5">
                        <div className="col">
                            <h1 className="text-center">Our bestsellers</h1>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <div className="row">
                                <img src={Chainuoc} alt="Tra xanh 0 do" width="100%" height="auto" />
                            </div>
                            <div className="row pt-3 pb-1">
                                <h3>Trà xanh 0 độ</h3>
                            </div>
                            <div className="row">
                                <p>50.000đ</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={Chainuoc} alt="Tra xanh 0 do" width="100%" height="auto" />
                            </div>
                            <div className="row pt-3 pb-1">
                                <h3>Trà xanh 0 độ</h3>
                            </div>
                            <div className="row">
                                <p>50.000đ</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={Chainuoc} alt="Tra xanh 0 do" width="100%" height="auto" />
                            </div>
                            <div className="row pt-3 pb-1">
                                <h3>Trà xanh 0 độ</h3>
                            </div>
                            <div className="row">
                                <p>50.000đ</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={Chainuoc} alt="Tra xanh 0 do" width="100%" height="auto" />
                            </div>
                            <div className="row pt-3 pb-1">
                                <h3>Trà xanh 0 độ</h3>
                            </div>
                            <div className="row">
                                <p>50.000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5 justify-content-center">
                        <div className="col-2 text-center">
                            <button type="button" className="btn btn-outline-dark btn-lg">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
