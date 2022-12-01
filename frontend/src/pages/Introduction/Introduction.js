import React from 'react'
import './styles.css'
import heroImage from "../../assets/images/heroimage.jpg"
export default function Introduction() {
    return (
        <>
            <div className="hero-image">
                <img src={heroImage} width='100%' height='auto' />
                <div className="hero-text">
                    <h1>Giới thiệu</h1>
                </div>
            </div>
            <div className='description1 col-6 container d-flex justify-content-center align-items-center'>
                <p className='text-center p-5'>Nhóm 1 là một nhóm của lớp L03 môn Lập trình Web thí nghiệm. Nhóm này được thành lập là để làm bài tập lớn.</p>
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

