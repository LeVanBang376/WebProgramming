import React from 'react'
import './styles.css'
import heroImage from "../../assets/images/heroimage.jpg"
import axios from 'axios'
const BASE_URL = 'http://localhost/pdo';
export default function Introduction() {
    const [content, setContent] = React.useState("")
    const [userInfo, setUserInfo] = React.useState()
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
                setContent(res.data.data.address)
            })
            .catch((err) => {
            })
    }

    React.useEffect(() => {
        getInfo()
    }, [content])
    return (
        <>
            <div className="hero-image">
                <img src={heroImage} width='100%' height='auto' />
                <div className="hero-text">
                    <h1>Giới thiệu</h1>
                </div>
            </div>
            <div className='container p-5'>
                <h2 className='pb-4'>Về chúng tôi</h2>
                <p>{content}</p>
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
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
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

