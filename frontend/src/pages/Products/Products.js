import PItems from './ProductsItem';
import "./ProductStyle.css";
import React, {useState, useEffect} from 'react';
import axios from "axios";
const BASE_URL = "http://localhost/pdo";



const Products = ({name, desc, price, addItem}) => {
    const [data, setData] = useState([]);

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
            console.log(res);
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
        <section className="Products">
            <div class="slider">
                <p class="text-center fs-1">Sản phẩm</p>
            </div>

            <div className="container">
                <div className="row">
                    {
                        data.map((data, index) => (
                            <div className="col-md-4">
                            <PItems 
                                item_id={data.id}
                                name= {data.title}
                                desc= {data.description}
                                img = {data.img}
                                price= {data.price}
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