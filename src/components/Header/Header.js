import React from 'react'

import './styles.css'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { BsCart, BsList, BsPersonCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function Header() {



    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='toggleIcon '>
                        <button onClick={() => alert("Settings page")}>
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsList />
                            </IconContext.Provider>
                        </button>

                    </div>
                    <div className='col-xl-3 col-lg-2 col-10 d-flex justify-content-center '>
                        <Link className='logoName' to="/" exact="true" >
                            Nhóm 1
                        </Link>
                    </div>
                    <div className='col-xl-4 col-lg-5 d-flex justify-content-between menu'>
                        <NavLink to="/" avtiveclassname="active" exact="true">Trang chủ</NavLink>
                        <NavLink to="/Introduction" avtiveclassname="active" >Giới thiệu</NavLink>
                        <NavLink to="/Product" avtiveclassname="active">Sản phẩm</NavLink>
                        <NavLink to="/News" avtiveclassname="active">Tin tức</NavLink>
                        <NavLink to="/Contact" avtiveclassname="active">Liên hệ</NavLink>
                    </div>
                    <div className='col-xl-2 col-lg-2 d-flex align-items-center Search'>
                        <input type="text" class="form-control" placeholder="Search..." />
                    </div>
                    <div className='col-xl-1 col-lg-1 d-flex justify-content-center cart'>
                        <NavLink to="/Cart" avtiveclassname="active" exact="true">
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsCart />
                            </IconContext.Provider>
                        </NavLink>
                    </div>
                    <div className='col-xl-2 col-lg-2 d-flex justify-content-center loginTextDisappear'>
                        <NavLink to="/Login" avtiveclassname="active" exact="true">Đăng nhập</NavLink>
                    </div>
                    <div className='loginIcon'>
                        <NavLink to="/Login" avtiveclassname="active" exact="true">
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsPersonCircle />
                            </IconContext.Provider>
                        </NavLink>
                    </div>
                </div>
            </div >
        </div >
    )
}
