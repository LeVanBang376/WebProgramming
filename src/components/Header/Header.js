import React from 'react'
import "./styles.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa"
export default function Header() {
    return (
        <div class="header">
            <div class="header__logo">
                <img src={logo} alt="logo-softdrink" width="auto" height="100%" />
            </div>
            <div class="header__menu">
                {/* <!-- <div>Trang chủ</div>
            <div>Giới thiệu</div>
            <div>Sản phẩm</div>
            <div>Tin tức</div>
            <div>Liên hệ</div> --> */}
                <Link to="/">
					<span class="my-auto">Trang chủ</span>
				</Link>
                <span>Giới thiệu</span>
                <Link to="/items">
					<span>Sản phẩm</span>
				</Link>
                <span>Tin tức</span>
                <span>Liên hệ</span>
            </div>
            <div class="header__search">
                <input type="text" placeholder="Search..." />
                <i class="fa fa-search fa-lg" aria-hidden="true"></i>
            </div>
            <div class="header__cart">
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </div>
            <div class="header__login">
                <span>
                    <FaUser /> Đăng nhập
                </span>
            </div>
        </div>
    )
}
