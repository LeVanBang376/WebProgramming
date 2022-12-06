import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom"
import './styles.css'
const BASE_URL = 'http://localhost/pdo';
export default function ChangeInformation() {
    const location = useLocation()
    const user = location.state
    const [fullname, setFullname] = useState(user.fullname)
    const [phone_number, setPhone_Number] = useState(user.phone_number)
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address)
    const [dateofbirth, setDateofbirth] = useState(user.dateofbirth)
    const [avatar, setAvatar] = useState(user.avatar)
    const [gender, setGender] = useState(user.gender)
    const navigate = useNavigate()
    const [err, setErr] = useState('');
    const handleSubmit = async () => {
        await axios.put(BASE_URL + '/user', { fullname, phone_number, email, address, gender, dateofbirth, avatar }, {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
            }
        })
            .then((res) => {
                alert("Thay đổi thông tin cá nhân thành công, thay đổi sẽ được hiển thị trong lần đăng nhập sau")
            })
            .catch((err) => {
                setErr(err.response.data.message)
            })
    }
    return (
        <section class="gradient-custom">
            <div class="container py-5 h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-12 col-lg-9 col-xl-7">
                        <div class="card shadow-2-strong card-registration">
                            <div class="card-body p-4 p-md-5">
                                <Button onClick={() => navigate(-1)}>Quay lại</Button>
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <h2 className='mt-4 mb-5 text-center'>Thay đổi thông tin cá nhân</h2>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="fullname">Họ tên</label>
                                                <input type="text" id="fullname" class="form-control" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="phone_number">Số điện thoại</label>
                                                <input type="text" id="phone_number" class="form-control" name="phone_number" value={phone_number} onChange={(e) => setPhone_Number(e.target.value)} />

                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="email">Email</label>
                                                <input type="email" id="email" class="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">

                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="address">Địa chỉ</label>
                                                <input type="text" id="address" class="form-control" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />

                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0" >
                                                <label class="form-label me-2">Giới tính: </label>

                                                {gender === "Nam" ? (<div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="nam"
                                                        value="Nam" checked onChange={(e) => setGender(e.target.value)} />
                                                    <label class="form-check-label" for="nam">Nam</label>
                                                </div>) : (<div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="nam"
                                                        value="Nam" onChange={(e) => setGender(e.target.value)} />
                                                    <label class="form-check-label" for="nam">Nam</label>
                                                </div>)}
                                                {gender === "Nữ" ? (<div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="nu"
                                                        value="Nữ" checked onChange={(e) => setGender(e.target.value)} />
                                                    <label class="form-check-label" for="nu">Nữ</label>
                                                </div>) : (<div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="nu"
                                                        value="Nữ" onChange={(e) => setGender(e.target.value)} />
                                                    <label class="form-check-label" for="nu">Nữ</label>
                                                </div>)}
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="dateofbirth">Ngày sinh</label>
                                                <input type="date" id="dateofbirth" class="form-control" name="dateofbirth" value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="avatar">Ảnh đại diện</label>
                                                <input type="text" id="avatar" class="form-control" name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                                            </div>
                                        </div>
                                        <Button onClick={() => handleSubmit()}>Xác nhận</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
