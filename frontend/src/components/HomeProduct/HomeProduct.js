import React from 'react'

import Item from '../../assets/images/chai_tra_xanh_0_do.jpg'
export default function HomeProduct() {
    return (
        <div className="card setWidth" >
            <img src={Item} class="card-img-top" alt="..." />
            <div class="card-body text-center">
                <h5 class="card-title">Tên sản phẩm</h5>
                <p class="card-text text-primary">Giá</p>
                <a class="btn btn-primary">Mua</a>
            </div>
        </div >
    )
}
