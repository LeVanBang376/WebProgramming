import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './styles.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { BsCart, BsList, BsPersonCircle, BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'
const BASE_URL = 'http://localhost/pdo';
export default function Header() {
    const location = useLocation();
    const initialState = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(initialState);
    const [userInfo, setUserInfo] = useState()
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

    const getInfo = async (e) => {
        await axios.get(BASE_URL + '/user', {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => {
                setUserInfo(res.data.data)
            })
            .catch((err) => {
            })
    }
    useEffect(() => {
        if (user)
            if (user.role === 'user')
                getInfo()
    }, [user])

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
        setUserInfo(null)
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
                        {!user ?
                            (<Link className='logoName' to="/" exact="true" >
                                Nhóm 1
                            </Link>)
                            : [user.role === 'admin' ?
                                (<Link className='logoName' to="/Admin/" exact="true" >
                                    Nhóm 1
                                </Link>)
                                : (<Link className='logoName' to="/" exact="true" >
                                    Nhóm 1
                                </Link>)
                            ]
                        }
                    </div>
                    <div className={clicked ? "col-xxl-4 col-xl-5 col-lg-5 d-flex justify-content-between menu2" : "col-xxl-4 col-xl-5 col-lg-5 d-flex justify-content-between menu1"} >
                        {!user ?
                            (<>
                                <NavLink to="/" avtiveclassname="active" exact="true">Trang chủ</NavLink>
                                <NavLink to="/Introduction" avtiveclassname="active" >Giới thiệu</NavLink>
                                <NavLink to="/Products" avtiveclassname="active">Sản phẩm</NavLink>
                                <NavLink to="/News" avtiveclassname="active">Tin tức</NavLink>
                                <NavLink to="/Contact" avtiveclassname="active">Liên hệ</NavLink>
                            </>)
                            : [user.role === 'admin' ?
                                (<>
                                    <NavLink to="/Admin/" avtiveclassname="active" exact="true">Trang chủ</NavLink>
                                    <NavLink to="/Admin/Introduction" avtiveclassname="active" >Giới thiệu</NavLink>
                                    <NavLink to="/Admin/Products" avtiveclassname="active">Sản phẩm</NavLink>
                                    <NavLink to="/Admin/News" avtiveclassname="active">Tin tức</NavLink>
                                    <NavLink to="/Admin/Contact" avtiveclassname="active">Liên hệ</NavLink>
                                </>)
                                : (<>
                                    <NavLink to="/" avtiveclassname="active" exact="true">Trang chủ</NavLink>
                                    <NavLink to="/Introduction" avtiveclassname="active" >Giới thiệu</NavLink>
                                    <NavLink to="/Products" avtiveclassname="active">Sản phẩm</NavLink>
                                    <NavLink to="/News" avtiveclassname="active">Tin tức</NavLink>
                                    <NavLink to="/Contact" avtiveclassname="active">Liên hệ</NavLink>
                                </>)
                            ]
                        }

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
                        : [user.role === 'admin' ? (
                            <div className='col-xxl-2 col-xl-2 col-lg-2 username d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {user.username}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => navigate("/Admin/ManageUsers")}>Quản lý người dùng</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ) : (
                            <div className='col-xxl-2 col-xl-2 col-lg-2 username d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {user.username}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/Information" state={userInfo}>Thông tin cá nhân</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/ChangePassword">Đổi mật khẩu</Link></Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>)
                        ]}
                </div>
            </div >
        </div >
    )
}
