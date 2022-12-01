import React from 'react'
import NewsItem from './NewsItem'

import './style.css'

export default function News() {
    return (
        <div className='News'>
            <div class="slider">
                <p class="text-center fs-1">Tin tức</p>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>

                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>

                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>

                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>

                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>

                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>

                    <div className="col-md-4">
                    <NewsItem
                        author='Author 1'
                        date='01/01/2022'
                        title='Number 1'
                        description='lorem'
                        imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                        newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}