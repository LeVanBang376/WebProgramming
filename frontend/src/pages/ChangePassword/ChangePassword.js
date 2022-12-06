import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom"
import './styles.css'
const BASE_URL = 'http://localhost/pdo';
export default function ChangePassword() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [err, setErr] = useState('');
    const [mess, setMess] = useState("")
    const [success, setSuccess] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [retypePasswordVisible, setRetypePasswordVisible] = useState(false)
    const check = () => {
        if (password === "") {
            setMess("Hãy nhập mật khẩu mới")
            setPasswordVisible(true)
            return false
        } else if (retypePassword === "") {
            setMess("Hãy nhập lại mật khẩu")
            setRetypePasswordVisible(true)
            return false
        } else if (password !== retypePassword) {
            setMess("Mật khẩu không khớp")
            setRetypePasswordVisible(true)
            return false
        } else {
            setMess("Đổi mật khẩu thành công")
            return true
        }
    }

    useEffect(() => {
        setPasswordVisible(false)
        setSuccess(false)
    }, [password])

    useEffect(() => {
        setRetypePasswordVisible(false)
        setSuccess(false)
    }, [retypePassword])


    const handleSubmit = async () => {
        if (check()) {
            await axios.post(BASE_URL + '/auth/changepassword', { password: password }, {
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
                }
            })
                .then((res) => {
                    alert("Đổi mật khẩu thành công")
                    setSuccess(true)
                    setPassword("")
                    setRetypePassword("")
                })
                .catch((err) => {
                    setErr(err.response.data.message)
                })
        }
    }
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-12 col-lg-9 col-xl-7">
                        <div class="card shadow-2-strong card-registration">
                            <div class="card-body p-4 p-md-5">
                                <Button onClick={() => navigate(-1)}>Quay lại</Button>
                                <h2 className='mt-4 mb-5 '>Đổi mật khẩu</h2>
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <label class="form-label" for="password">Mật khẩu mới</label>
                                        <input type="password" id="password" class="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <p className={passwordVisible ? 'error2' : 'error1'}>{mess}</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <label class="form-label" for="retypePassword">Xác nhận mật khẩu</label>
                                        <input type="password" id="retypePassword" class="form-control" name="retypePassword" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                                        <p className={retypePasswordVisible ? 'error2' : 'error1'}>{mess}</p>
                                    </div>
                                </div>
                                <Button onClick={() => handleSubmit()}>Thay đổi</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
