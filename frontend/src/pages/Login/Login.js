import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'
import loginImg from '../../assets/images/loginImage.png'
// import { FaFacebookF } from 'react-icons/fa'

const BASE_URL = 'http://localhost/pdo';


export default function Login() {
    const initialState = { username: '', password: '' };

    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [err, setErr] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(BASE_URL + '/auth/login', form, {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setErr('')
                localStorage.setItem('profile', JSON.stringify(res.data.data));
                if (res.data.data.role === 'user')
                    navigate('/')
                else navigate('/Admin/')
            })
            .catch((err) => {
                setErr(err.response.data.message)
            })
    }
    return (
        <div class="container-fluid h-custom mb-2">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src={loginImg} class="img-fluid" alt="Sample" />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form onSubmit={handleSubmit}>
                        {/* <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FaFacebookF />
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                            </div> */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example3">Username</label>
                            <input type="text" id="form3Example3" className="form-control form-control-lg"
                                placeholder="Tên đăng nhập" name="username" value={form.username} onChange={handleChange} />
                        </div>


                        <div class="form-outline mb-3">
                            <label class="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Mật khẩu" name="password" value={form.password} onChange={handleChange} />
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            {err ? <div class="text-danger my-3">{err}</div> : <></>}
                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            <a href="#!" class="text-body">Quên mật khẩu?</a>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" className="btn btn-primary btn-lg">Đăng nhập</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Chưa có tài khoản? <Link to="/Signup"
                                class="link-danger" >Đăng ký</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
