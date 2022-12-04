import React from 'react'
import Image from '../../assets/images/home_introduction.png'
export default function HomeNews() {
    return (
        <div class="card mb-3 maxW">
            <div class="row g-0 pt-2 pb-2">
                <div class="col-md-4 d-flex align-items-center">
                    <img src={Image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
