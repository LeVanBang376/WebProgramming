import React, {useState} from 'react';
import "./style.css";
import {useLocation} from 'react-router-dom';
import logoCod from '../../assets/images/cod.png'
import logoJcb from '../../assets/images/jcb.png'
import logoVs from '../../assets/images/visa.png'
import logoSp from '../../assets/images/shopeepay.png'

const Checkout = () => {
    const location = useLocation();
    const {fList} = location.state;
    const cartTotalQty = fList.reduce((acc, data) => acc + data.qty, 0);
    const cartTotalAmount = fList.reduce((acc, data) => acc + data.price * data.qty, 0);
    return (
        <div className="row justify-content-center m-0">
            <div className="col-md-8 mt-5 mb-5">
                <div className="card">
                    <div className="card-header bg-light p-3">
                        <div className="card-header-flex">
                            <h5 className="text-black m-0">Thanh toán</h5>
                        </div>
                    </div>

                    <div className="card-body p-0">
                        {
                                <table className="table cart-table mb-0">
                                    <thead>
                                        <tr>
                                            <th> </th>
                                            <th>Tên sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th className="text-right"><span id="amount" className="amount">Tổng cộng</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            fList.map((data, index) => {
                                                const { id, image, name, price, qty } = data;
                                                return (
                                                    <tr key={index}>
                                                        <td><div className="product-img"><img src={image} alt="" /></div></td>
                                                        <td><div className="product-name"><p>{name}</p></div></td>
                                                        <td>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</td>
                                                        <td>
                                                            <div className="prdct-qty-container">
                                                                
                                                                <input type="text" name="qty" className="qty-input-box" value={qty} disabled />
                                                                
                                                            </div>
                                                        </td>
                                                        <td className="text-right">{String(qty * price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot> 
                                        <tr>
                                            <td colSpan="5" className="text-right">
                                                <div className="cart-total" display="block">
                                                    <div className="cart-total-flex"> Phương thức thanh toán: </div>
                                                     <div className="footer__pay__img">
                                                        <span><a href='#'><img src={logoCod} alt="" /></a></span>
                                                        <span><img src={logoJcb} alt="" /></span>
                                                        <span><img src={logoVs} alt="" /></span>
                                                        <span><img src={logoSp} alt="" /></span>
                                                    </div>
                                                </div>
                                                <div className="cart-payment">
                                                    <div className="cart-total-flex"> Tổng cộng: </div>
                                                    <div className="cart-total-flex"> {String(cartTotalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'} </div>
                                                    <button className="btn btn-primary btn-block" >Thanh toán</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;