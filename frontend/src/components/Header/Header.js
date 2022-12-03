import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './styles.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { BsCart, BsList, BsPersonCircle, BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
    const location = useLocation();
    const initialState = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(initialState);
    const navigate = useNavigate();
    useEffect(() => {
        setUser(initialState)
    }, [location]);

    const [clicked, setClicked] = React.useState(false)
    const [searchClicked, setSearchClicked] = React.useState(false)

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true)
    }
    const handleSearchClick = () => {
        searchClicked ? setSearchClicked(false) : setSearchClicked(true)
    }

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
        navigate("/Login")
    }

    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='row g-1'>
                    <div className='toggleIconContainer '>
                        <button className={clicked ? "activeButton" : "notActiveButton"} onClick={() => handleClick()}>
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsList />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className='col-xxl-3 col-xl-2 col-lg-2 col-10 d-flex justify-content-center'>
                        <Link className='logoName' to="/" exact="true" >
                            Nhóm 1
                        </Link>
                    </div>
                    <div className={clicked ? "col-xxl-4 col-xl-5 col-lg-5 d-flex justify-content-between menu2" : "col-xxl-4 col-xl-5 col-lg-5 d-flex justify-content-between menu1"} >
                        <NavLink to="/" avtiveclassname="active" exact="true">Trang chủ</NavLink>
                        <NavLink to="/Introduction" avtiveclassname="active" >Giới thiệu</NavLink>
                        <NavLink to="/Product" avtiveclassname="active">Sản phẩm</NavLink>
                        <NavLink to="/News" avtiveclassname="active">Tin tức</NavLink>
                        <NavLink to="/Contact" avtiveclassname="active">Liên hệ</NavLink>
                    </div>
                    <div className='searchIconContainer'>
                        <button className={searchClicked ? "activeButton" : "notActiveButton"} onClick={() => handleSearchClick()} >
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsSearch />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className={clicked ? "col-xxl-2 col-xl-2 col-lg-2 d-flex align-items-center Search2" : [searchClicked ? "col-xxl-2 col-xl-2 col-lg-2 d-flex align-items-center Search3" : "col-xxl-2 col-xl-2 col-lg-2 d-flex align-items-center Search1"]}>
                        <input type="text" class="form-control" placeholder="Tìm kiếm..." />
                    </div>
                    <div className='col-xxl-1 col-xl-1 col-lg-1 d-flex justify-content-center cart'>
                        <NavLink to="/Cart" avtiveclassname="active" exact="true">
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsCart />
                            </IconContext.Provider>
                        </NavLink>
                    </div>
                    {!user
                        ? (
                            <>
                                <div className='col-xxl-2 col-xl-2 col-lg-2 d-flex justify-content-center loginTextDisappear'>
                                    <NavLink to="/Login" avtiveclassname="active" exact="true">Đăng nhập</NavLink>
                                </div>
                                <div className='loginIcon'>
                                    <NavLink to="/Login" avtiveclassname="active" exact="true">
                                        <IconContext.Provider value={{ size: 30 }}>
                                            <BsPersonCircle />
                                        </IconContext.Provider>
                                    </NavLink>
                                </div>
                            </>)
                        : (
                            <div className='col-xxl-2 col-xl-2 col-lg-2 username d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <div class="text-primary">{user.username}</div>
                                    <Dropdown.Toggle id="dropdown-basic">

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/Login" role="button" class="btn">Change Account</Link></Dropdown.Item>
                                        <Dropdown.Item><p role="button" class="text-danger" onClick={handleLogout}>logout</p></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        )}
                </div>
            </div >
        </div >
    )
}
