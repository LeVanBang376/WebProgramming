import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styles.css'
import axios from 'axios';
import parse from "html-react-parser";
const BASE_URL = 'http://localhost/pdo';
export default function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userInfo, setUserInfo] = useState()
    const [success, setSucess] = useState(false)
    const [content1, setContent1] = useState("")
    const [content2, setContent2] = useState("")
    const getInfo = async (e) => {
        await axios.get(BASE_URL + '/user?id=1', {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => {
                setUserInfo(res.data.data)
                setContent1(res.data.data.email)
                setContent2(res.data.data.fullname)
            })
            .catch((err) => {
            })
    }

    const handleSubmit = async () => {
        await axios.put(BASE_URL + '/user', {
            fullname: content2, phone_number: userInfo.phone_number,
            email: content1, address: userInfo.address, gender: userInfo.gender,
            dateofbirth: userInfo.dateofbirth, avatar: userInfo.avatar
        }, {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
            }
        })
            .then((res) => {
                alert("Thay đổi thông tin liên hệ thành công, thay đổi sẽ được hiển thị trong lần đăng nhập sau")
            })
            .catch((err) => {
            })
    }

    React.useEffect(() => {
        getInfo();
    }, [success])

    return (
        <div className='Contact'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin liên hệ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Trụ sở chính:</p>
                    <textarea rows="6" className='fit' name="content1" value={content1} onChange={(e) => setContent1(e.target.value)}></textarea>
                    <p>Cộng tác:</p>
                    <textarea rows="6" className='fit' name="content2" value={content2} onChange={(e) => setContent2(e.target.value)}></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy bỏ
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="slider">
                <p class="text-center fs-1">Liên hệ với chúng tôi</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <button type="button" class="btn btn-light mb-3" onClick={handleShow}>Chỉnh sửa thông tin liên hệ</button>
                        <div class="headquarter">
                            <h2>Trụ sở chính</h2>
                            {parse(content1)}
                        </div>
                        <div class="collaboration">
                            <h2>Cộng tác</h2>
                            {parse(content2)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}