import React from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'
import loginImg from '../../assets/images/loginImage.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
// import { FaFacebookF } from 'react-icons/fa'
export default function Login() {
    const navigate = useNavigate();
    const [accountName, setAccountName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = {
            username: formData.get("username"),
            password: formData.get("password")
        }
        await axios
            .post()
            .then((res) => { })
    }

    return (
        <div class="container-fluid h-custom mb-2">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src={loginImg} class="img-fluid" alt="Sample image" />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
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
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                                placeholder="Tên đăng nhập" onChange={(e) => setAccountName(e.target.value)} />
                        </div>


                        <div class="form-outline mb-3">
                            <label class="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div class="d-flex justify-content-between align-items-center">

                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            <a href="#!" class="text-body">Quên mật khẩu?</a>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>Đăng nhập</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Chưa có tài khoản?
                                <Link to="/Signup" className='link-danger'>Đăng ký</Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
