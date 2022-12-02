import React from 'react'
import Tra from '../../assets/images/traxanh0do.png'
import introductionImg from '../../assets/images/home_introduction.png'

import HomeNews from '../../components/HomeNews/HomeNews'
import HomeProduct from '../../components/HomeProduct/HomeProduct'
export default function Home() {
    return (
        <div className="container-fluid">
            {/* Bức ảnh full  */}
            <div className="row">
                <div className="col p-0">
                    <img src={Tra} alt="Tra xanh 0 do" width="100%" height="auto" />
                </div>
            </div>
            {/* Giới thiệu về chúng tôi */}
            <div className='row bg-light p-5'>
                <div className='col-md-6'>
                    <h1>Giới thiệu về chúng tôi</h1>
                    <hr />
                    <p>Nhóm 1 là một nhóm của lớp L03 môn Lập trình Web thí nghiệm. Nhóm này được thành lập là để làm bài tập lớn.</p>
                </div>

                <div className='col-md-6'>
                    <img src={introductionImg} className='img-fluid' alt='Giới thiệu' />
                </div>
            </div>

            {/* Tin tức mới nhất */}
            <div className='row p-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Tin tức mới nhất</h1>
                    <p>Xem tất cả</p>
                </div>
                <hr />
                <HomeNews />
                <HomeNews />
                <HomeNews />
            </div>

            {/* Sản phẩm bán chạy */}
            <div className='row p-5'>
                <div className='col-3'>
                    <HomeProduct />
                </div>
            </div>
        </div>

    )
}
