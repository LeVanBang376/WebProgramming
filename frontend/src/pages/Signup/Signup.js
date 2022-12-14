import React, { useState } from 'react'
import axios from "axios";
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import './styles.css'
const BASE_URL = 'http://localhost/pdo';

export default function Signup() {
    const initialState1 = { username: '', password: '', fullname: '', phone_number: '', address: '', avatar: '', gender: '', dateofbirth: '', email: '' };
    const [form, setForm] = useState(initialState1);
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [sex, setSex] = useState();
    const [modal, setModal] = useState(false)
    const [fullnameVisible, setFullnameVisible] = useState(false)
    const [usernameVisible, setUsernameVisible] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [retypePassword, setRetypePassword] = useState("")
    const [retypePasswordVisible, setRetypePasswordVisible] = useState(false)
    const [phone_numberVisible, setPhone_NumberVisible] = useState(false)
    const [addressVisible, setAddressVisible] = useState(false)
    const [emailVisible, setEmailVisible] = useState(false)
    const [genderVisible, setGenderVisible] = useState(false)
    const [birthdayVisible, setBirthdayVisible] = useState(false)
    const [avatarVisible, setAvatarVisible] = useState(false)
    const [rulesVisible, setRulesVisible] = useState(false)
    const [checkRules, setCheckRules] = useState(false)
    const [success, setSuccess] = useState(false)
    const [mess, setMess] = useState("")
    const handleChange = (e) => {
        if (fullnameVisible)
            setFullnameVisible(false)
        if (usernameVisible)
            setUsernameVisible(false)
        if (passwordVisible)
            setPasswordVisible(false)
        if (phone_numberVisible)
            setPhone_NumberVisible(false)
        if (emailVisible)
            setEmailVisible(false)
        if (addressVisible)
            setAddressVisible(false)
        if (birthdayVisible)
            setBirthdayVisible(false)
        if (avatarVisible)
            setAvatarVisible(false)
        if (rulesVisible)
            setRulesVisible(false)
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleModal = () => {
        setModal(!modal)
    }

    const checkInput = () => {
        if (form.fullname === "") {
            setFullnameVisible(true)
            setMess("H??? t??n kh??ng ???????c ????? tr???ng")
        } else if (form.username === "") {
            setUsernameVisible(true)
            setMess("T??n ????ng nh???p kh??ng ???????c ????? tr???ng")
        } else if (form.password === "") {
            setPasswordVisible(true)
            setMess("M???t kh???u kh??ng ???????c ????? tr???ng")
        } else if (retypePassword === "") {
            setRetypePasswordVisible(true)
            setMess("H??y nh???p l???i m???t kh???u")
        } else if (form.phone_number === "") {
            setPhone_NumberVisible(true)
            setMess("S??? ??i???n tho???i kh??ng ???????c ????? tr???ng")
        } else if (form.email === "") {
            setEmailVisible(true)
            setMess("Email kh??ng ???????c ????? tr???ng")
        } else if (form.address === "") {
            setAddressVisible(true)
            setMess("?????a ch??? kh??ng ???????c ????? tr???ng")
        } else if (form.gender === undefined) {
            setGenderVisible(true)
            setMess("H??y ch???n gi???i t??nh")
        } else if (form.dateofbirth === "") {
            setBirthdayVisible(true)
            setMess("H??y ch???n ng??y sinh")
        } else if (form.avatar === "") {
            setAvatarVisible(true)
            setMess("Avatar kh??ng ???????c ????? tr???ng")
        } else if (checkRules === false) {
            setRulesVisible(true)
            setMess("B???n ch??a ?????ng ?? v???i c??c ??i???u kho???n")
        } else if (retypePassword !== form.password) {
            setRetypePasswordVisible(true)
            setMess("M???t kh???u kh??ng kh???p")
        } else setSuccess(true)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        form.gender = sex
        checkInput()
        if (success) {
            await axios.post(BASE_URL + '/auth/signup', form, {
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    setErr('')
                    handleShow()
                })
                .catch((err) => {
                    setErr(err.response.data.message)
                    alert(err)
                })
        }
    }

    return (
        <section class="bg" >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> ????ng k?? th??nh c??ng</Modal.Title>
                </Modal.Header>
                <Modal.Body>Chuy???n t???i trang ????ng nh???p</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); navigate("/Login") }}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black bd" >
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">????ng k??</p>
                                        <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="fullname">H??? t??n</label>
                                                    <input type="text" id="fullname" class="form-control" name="fullname" value={form.fullname} onChange={handleChange} />
                                                    <p className={fullnameVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="username">T??n ????ng nh???p</label>
                                                    <input type="text" id="username" class="form-control" name="username" value={form.username} onChange={handleChange} />
                                                    <p className={usernameVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="password">M???t kh???u</label>
                                                    <input type="password" id="password" class="form-control" name="password" value={form.password} onChange={handleChange} />
                                                    <p className={passwordVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="reType">Nh???p l???i m???t kh???u</label>
                                                    <input type="password" id="reType" class="form-control" onChange={(e) => { setRetypePassword(e.target.value); setRetypePasswordVisible(false) }} />
                                                    <p className={retypePasswordVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="phone_number">S??? ??i???n tho???i</label>
                                                    <input type="text" id="phone_number" class="form-control" name="phone_number" value={form.phone_number} onChange={handleChange} />
                                                    <p className={phone_numberVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="email">Email</label>
                                                    <input type="email" id="email" class="form-control" name="email" value={form.email} onChange={handleChange} />
                                                    <p className={emailVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="address">?????a ch???</label>
                                                    <input type="text" id="address" class="form-control" name="address" value={form.address} onChange={handleChange} />
                                                    <p className={addressVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <div class="form-outline flex-fill mb-0" >
                                                    <label class="form-label me-2">Gi???i t??nh: </label>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="gender" id="nam"
                                                            value="Nam" onChange={(e) => { setSex(e.target.value); setGenderVisible(false) }} />
                                                        <label class="form-check-label" for="nam">Nam</label>
                                                    </div>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="gender" id="nu"
                                                            value="N???" onChange={(e) => { setSex(e.target.value); setGenderVisible(false) }} />
                                                        <label class="form-check-label" for="nu">N???</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <p className={genderVisible ? 'error2' : 'error1'}>{mess}</p>
                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="dateofbirth">Ng??y sinh</label>
                                                    <input type="date" id="dateofbirth" class="form-control" name="dateofbirth" value={form.dateofbirth} onChange={handleChange} />
                                                    <p className={birthdayVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="avatar">???nh ?????i di???n</label>
                                                    <input type="text" id="avatar" class="form-control" name="avatar" value={form.avatar} onChange={handleChange} />
                                                    <p className={avatarVisible ? 'error2' : 'error1'}>{mess}</p>
                                                </div>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input class="form-check-input me-2" type="checkbox" id="form2Example3c" onChange={() => { setCheckRules(!checkRules); setRulesVisible(false) }} />
                                                <label class="form-check-label" for="form2Example3">
                                                    <span>T??i ?????ng ?? v???i c??c </span><a href="#!">??i???u kho???n</a>
                                                </label>
                                            </div>
                                            <p className={rulesVisible ? 'error2' : 'error1'}>{mess}</p>
                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" class="btn btn-primary btn-lg" >????ng k??</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
