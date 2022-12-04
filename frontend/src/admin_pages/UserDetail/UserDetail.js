import React from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom"

export default function UserDetail() {
    const location = useLocation()
    const navigate = useNavigate()
    const username = location.state
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-12 col-lg-9 col-xl-7">
                        <div class="card shadow-2-strong card-registration">
                            <div class="card-body p-4 p-md-5">
                                <Button onClick={() => navigate(-1)}>Quay lại</Button>
                                <h2 className='mt-4 mb-5 '>Thông tin người dùng</h2>
                                <h4>Tên đăng nhập: {username.username}</h4>
                                <h4>Họ tên: {username.fullname}</h4>
                                <h4>Số điện thoại: {username.phone_number}</h4>
                                <h4>Email: {username.email}</h4>
                                <h4>Địa chỉ: {username.address}</h4>
                                <h4>Giới tính: {username.gender}</h4>
                                <h4>Ngày sinh: {username.dateofbirth}</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
