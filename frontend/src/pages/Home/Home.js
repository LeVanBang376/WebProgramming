import React, { useState } from 'react'
import Tra from '../../assets/images/traxanh0do.png'
import introductionImg from '../../assets/images/home_introduction.png'
import { Link } from 'react-router-dom'
import HomeNews from '../../components/HomeNews/HomeNews'
import HomeProduct from '../../components/HomeProduct/HomeProduct'
import axios from 'axios'
import parse from "html-react-parser";

const BASE_URL = 'http://localhost/pdo';
export default function Home() {
    const [list, setList] = React.useState()
    const [produtcs, setProducts] = React.useState()
    const [success, setSucess] = React.useState(false)
    const [content, setContent] = React.useState("")

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
                setContent(res.data.data.address)
            })
            .catch((err) => {
            })
    }

    const getNews = async (e) => {
        await axios.get(BASE_URL + '/news/getall', {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => {
                setList(res.data.data)
            })
            .catch((err) => {

            })
    }

    const getProducts = async (e) => {
        await axios.get(BASE_URL + '/product/getall', {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((err) => {

            })
    }

    React.useEffect(() => {
        getNews()
        getProducts()
        getInfo()
    }, [success])
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
                    <Link to="/Introduction" className='text-dark'><h1>Giới thiệu về chúng tôi</h1></Link>
                    <hr />
                    {parse(content)}
                </div>

                <div className='col-md-6'>
                    <img src={introductionImg} className='img-fluid' alt='Giới thiệu' />
                </div>
            </div>

            {/* Tin tức mới nhất */}
            <div className='row p-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Tin tức mới nhất</h1>
                    <Link to="/News">Xem tất cả</Link>
                </div>
                <hr />
                {list ? list.slice(-3).map(item => <HomeNews title={item.title} content={item.content} thumbnail={item.thumbnail} />) : null}
            </div>

            <div className='row p-5 bg-light'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Các sản phẩm mới ra mắt</h1>
                    <Link to="/Products">Xem tất cả</Link>
                </div>
                <hr />
                {/* Sản phẩm mới ra mắt */}
                <div className='row p-5 justify-content-around'>
                    {produtcs ? produtcs.slice(-10).map(item => <HomeProduct title={item.title} price={item.price} />) : null}
                </div>
            </div>
        </div >
    )
}
