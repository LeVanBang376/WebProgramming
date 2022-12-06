import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PIstyle.css'
const BASE_URL = "http://localhost/pdo";

const ProductInfo = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const getProduct = async () => {
        await axios.get(`${BASE_URL}/product?id=${id}`,
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
            console.log(err);
        })
    }
    useEffect(() => {
        getProduct();
    }, []);

    if (!data) return null;
    console.log(data);

    return (


        <div className="app">
        {
            <div className="details" key={data.id}>
              <div className="big-img">
                <img src={data.thumbnail} alt=""/>
              </div>
              <div className="box">
                <div className="row">
                  <h2>{data.title}</h2>
                  <span>{data.price} VND</span>
                </div>
                <p>{data.description}</p>

                <button className="cart">Add to cart</button>

              </div>
            </div>
        }
      </div>

    )
}
export default ProductInfo;