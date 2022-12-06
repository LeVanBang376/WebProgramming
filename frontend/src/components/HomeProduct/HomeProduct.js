import React from 'react'

import Item from '../../assets/images/chai_tra_xanh_0_do.jpg'
export default function HomeProduct(props) {
    return (
        <div className="card setWidth col-xl-3 col-lg-3 col-md-5 col-sm-5 m-2" >
            <img src={Item} class="card-img-top" alt="..." />
            <div class="card-body text-center">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text text-primary">{String(props.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</p>
                <a class="btn btn-primary">Mua</a>
            </div>
        </div >
    )
}
