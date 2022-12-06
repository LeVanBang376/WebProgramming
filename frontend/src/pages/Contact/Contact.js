import React, { useState } from 'react'
import { FormGroup } from 'react-bootstrap'
import './style.css'
import axios from 'axios';
import parse from "html-react-parser";
const BASE_URL = 'http://localhost/pdo';
export default function Contact() {
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

    React.useEffect(() => {
        getInfo();
    }, [success])

    return (
        <div className='Contact'>
            <div class="slider">
                <p class="text-center fs-1">Liên hệ với chúng tôi</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="headquarter">
                            <h2>Trụ sở chính</h2>
                            {parse(content1)}
                        </div>
                        <div class="collaboration">
                            <h2>Cộng tác</h2>
                            {parse(content2)}
                        </div>
                    </div>
                    <div class="col-6">
                        <FormGroup>
                            <div class="mb-3">
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Name*</label>
                                    <input type="text" class="form-control" id="firstname" placeholder="Your Name" aria-label="First name" maxlength="30" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="firstname" placeholder="Your last name" aria-label="First name" maxlength="30" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your email*</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your email address" aria-describedby="emailHelp" />
                            </div>
                            <div class="about mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
                                <textarea class="form-control" id="about" placeholder="Enter your message" rows="3" maxlength="10000"></textarea>
                            </div>
                            <button type="submit" class="btn">Submit</button>
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}