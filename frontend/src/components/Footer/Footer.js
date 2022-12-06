import React, { useState } from 'react'
import "./styles.css"
import logoBe from '../../assets/images/be.png'
import logoCod from '../../assets/images/cod.png'
import logoJcb from '../../assets/images/jcb.png'
import logoSe from '../../assets/images/shopeeexpress.png'
import logoSp from '../../assets/images/shopeepay.png'
import logoVt from '../../assets/images/viettel.png'
import logoVs from '../../assets/images/visa.png'
import logoVn from '../../assets/images/vnpost.png'

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer__information">
                <div className="footer__ContactInfo ">
                    <h3>Contact Info</h3>
                    <p>
                        <i className="fa fa-map-marker" aria-hidden="true"></i> 268 Lý Thường Kiệt, phường 14, quận 10, TP.Hồ
                        Chí Minh
                    </p>
                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> levanbang376@gmail.com</p>
                    <p><i className="fa fa-phone" aria-hidden="true"></i> 0368514720</p>
                    <div className="footer__ContactInfo__facebook"></div>
                </div>

                <div className="footer__pay--ship">
                    <h3>Thanh toán</h3>
                    <div className="footer__pay__img">
                        <div><img src={logoVs} alt="visa" width="100%" height="100%" /></div>
                        <div><img src={logoJcb} alt="visa" width="100%" height="100%" /></div>
                        <div><img src={logoSp} alt="visa" width="100%" height="100%" /></div>
                        <div><img src={logoCod} alt="visa" width="100%" height="100%" /></div>
                    </div>
                    <h3>Đơn vị vận chuyển</h3>
                    <div className="footer__ship__img">
                        <div><img src={logoSe} alt="visa" width="100%" height="100%" /></div>
                        <div><img src={logoVt} alt="visa" width="100%" height="100%" /></div>
                        <div><img src={logoVn} alt="visa" width="100%" height="100%" /></div>
                        <div><img src={logoBe} alt="visa" width="100%" height="100%" /></div>
                    </div>
                </div>
            </div>
            <div className="footer__lineBreak"></div>
            <div className="footer__right">
                <p>© 2022 Nhóm 1. Tất cả các quyền được bảo lưu</p>
            </div>
        </div>
    )
}
