import React from 'react'

function Item({name}) {
    return (
        <div class="card col-lg-3 col-md-4 col-sm-6 col-xs-6 m-3">
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Item {name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Item;
