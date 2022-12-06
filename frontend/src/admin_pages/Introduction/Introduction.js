import React, { useState } from 'react'
import './styles.css'
import heroImage from "../../assets/images/heroimage.jpg"
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import parse from "html-react-parser";
const BASE_URL = 'http://localhost/pdo';
let globalContent = ""
export default function Introduction() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userInfo, setUserInfo] = useState()
    const [content, setContent] = useState("")

    const handleSubmit = async () => {
        await axios.put(BASE_URL + '/user', {
            fullname: userInfo.fullname, phone_number: userInfo.phone_number,
            email: userInfo.email, address: content, gender: userInfo.gender,
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
                alert("Thay đổi thông tin cá nhân thành công, thay đổi sẽ được hiển thị trong lần đăng nhập sau")
                globalContent = content
            })
            .catch((err) => {
            })
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
                setContent(res.data.data.address)
            })
            .catch((err) => {
            })
    }

    React.useEffect(() => {
        if (content === "") {
            getInfo()
            globalContent = content
        }
    }, [content])

    return (
        <>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <textarea rows="20" className='fit' name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy bỏ
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>Xác nhận</Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* <div className="hero-image">
                <img src={heroImage} width='100%' height='auto' />
                <div className="hero-text">
                    <h1>Giới thiệu</h1>
                </div>
            </div> */}
            <div className='container p-5'>
                <Button onClick={() => { setTitle("Về chúng tôi"); handleShow() }} variant="secondary">Sửa</Button>
                <h2 className='pb-4'>Về chúng tôi</h2>
                {parse(content)}
            </div>
            <div className='container-fluid bgColor'>
                <h1 className='col-12 text-center p-5'>Những người đồng sáng lập</h1>
                <div className='row justify-content-evenly'>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là <br />sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                </div>
                <div className='row justify-content-evenly'>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export { globalContent }

