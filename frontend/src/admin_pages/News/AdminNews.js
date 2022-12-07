import React, { useState, useEffect } from 'react'
import AdminNewsItem from './AdminNewsItem'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const BASE_URL = "http://localhost/pdo/"
export default function AdminNews() {

    const userInfo = { user_id: '', username: '', fullname: '', phone_number: '', address: '', avatar: '', gender: '', dateofbirth: '', email: '' };
    const [allUser, setList] = useState([])
    const [err, setErr] = useState('');
    const [userID, setUserID] = useState('')
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [thumbnail, setThumbnail] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getUsers = async (e) => {
        await axios.get(BASE_URL + '/user/getall', {
            // headers: {
            //     "Content-Type": "application/json",
            //     "Access-Control-Allow-Origin": "*",

            // }
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => {
                setErr('')
                setList(res.data.data)
            })
            .catch((err) => {
                setErr(err.response.data.message)
            })
    }

    React.useEffect(() => {
        getUsers()
    })
    /////////////////////////////////////////////////
    const [news, setNews] = useState('');
    const navigate = useNavigate();
    const getNews = async () => {
        await axios.get(BASE_URL + 'news/getall', {
            crossDomain: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setNews(res.data.data);
        })
            .catch((err) => console.log(err))
    };

    const handleAdd = async () => {
        await axios.post(BASE_URL + 'news/', { title: title, content: content, thumbnail: thumbnail }, {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => alert("Thêm thành công, load lại trang để cập nhập"))
            .catch((err) => alert("Lỗi"))
    }
    useEffect(
        () => getNews, []);

    if (!news) {
        return null;
    }


    return (
        <div className='News'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm tin tức mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Tiêu đề:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Nội dung:</label>
                            <textarea rows="15" className='fit' id="reType" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Ảnh:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setThumbnail(e.target.value)} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleAdd(); handleClose() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="slider">
                <p class="text-center fs-1">Tin tức</p>
            </div>
            <div className='container'>
                <button type="button" class="btn btn-primary" onClick={handleShow}>Thêm tin tức mới</button>
                <div className='row'>
                    {
                        news.map((child) =>
                            <div className="col-md-4">
                                <AdminNewsItem
                                    key={child.id}
                                    id={child.id}
                                    author='Author 1'
                                    date='01/01/2022'
                                    title={child.title}
                                    description={child.thumbnail}
                                    imgUrl={child.thumbnail}
                                    newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
