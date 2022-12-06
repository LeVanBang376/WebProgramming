import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from "react-router-dom"
export default function Information() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = location.state
  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration">
              <div class="card-body p-4 p-md-5">
                <div className='d-flex justify-content-between'>
                  <Button onClick={() => navigate(-1)}>Quay lại</Button>
                  <Link to="/ChangeInformation" state={user} className="btn btn-success text-light">Sửa đổi</Link>
                </div>
                <h2 className='mt-4 mb-5 '>Thông tin người dùng</h2>
                <h4>Họ tên: {user.fullname}</h4>
                <h4>Số điện thoại: {user.phone_number}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Địa chỉ: {user.address}</h4>
                <h4>Giới tính: {user.gender}</h4>
                <h4>Ngày sinh: {user.dateofbirth}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
