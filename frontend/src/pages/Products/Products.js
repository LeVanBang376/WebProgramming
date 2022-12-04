import PItems from './ProductsItem';
import "./ProductStyle.css";
//import React, {useState, useEffect} from 'react';
import traxanh from "../../assets/images/chai_tra_xanh_0_do.jpg";

const Products = ({name, desc, price, addItem}) => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios
    //     .get("/api/food?type=2")
    //     .then((res) => setData(res.data));
    // }, [])
    const data = [
        {
            id: 0,
            name: "Tra xanh",
            desc: "0 do",
            img: traxanh,
            price: 111,
        },
        {
            id: 1,
            name: "Tra xanh",
            desc: "0 do",
            img: traxanh,
            price: 111,
        },
        {
            id: 2,
            name: "Tra xanh",
            desc: "0 do",
            img: traxanh,
            price: 111,
        },
        {
            id: 3,
            name: "Tra xanh",
            desc: "0 do",
            img: traxanh,
            price: 111,
        }
    ]
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
                                name= {data.name}
                                desc= {data.desc}
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