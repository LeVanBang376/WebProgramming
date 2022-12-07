import PItems from './ProductsItem';
import "./ProductStyle.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BASE_URL = "http://localhost/pdo";
const Products = ({ name, desc, price, addItem }) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState()
    const [price1, setPrice1] = useState()
    const [image, setImage] = useState()
    const [des, setDes] = useState()
    const [discount, setDiscount] = useState()
    const getProduct = async () => {
        await axios.get(`${BASE_URL}/product/getall`,
            {
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
            })
    }

    const handleAdd = async () => {
        await axios.post(BASE_URL + '/product/', { title: title, price: price1, thumbnail: image, description: des, discount: discount }, {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => alert("Thêm sản phẩm thành công, load lại trang để cập nhập"))
            .catch((err) => alert("Lỗi"))
    }
    useEffect(() => {
        getProduct();
    }, []);
    if (!data) return null;

    return (
        <section className="Products">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Tên sản phẩm:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Giá:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setPrice1(e.target.value)} />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Ảnh:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setImage(e.target.value)} />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Mô tả:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setDes(e.target.value)} />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="reType">Discount:</label>
                            <input type="text" id="reType" class="form-control" onChange={(e) => setDiscount(e.target.value)} />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy bỏ
                    </Button>
                    <Button variant="primary" onClick={() => { handleAdd(); handleClose() }}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="slider">
                <p class="text-center fs-1">Sản phẩm</p>
            </div>

            <div className="container">
                <button type="button" class="btn btn-primary pt-2 pb-2" onClick={handleShow}>Thêm sản phẩm mới</button>
                <div className="row">
                    {
                        data.map((data, index) => (
                            <div className="col-md-4">
                                <PItems
                                    item_id={data.id}
                                    name={data.title}
                                    price={data.price}
                                    disc={data.discount}
                                    img={data.thumbnail}
                                    desc={data.description}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;