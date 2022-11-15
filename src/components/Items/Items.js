import React from 'react'
import Item from './Item/Item.js'

function Items() {

    const items = ['a', 'b', 'c', 'd', 'e', 'f'];

    return (
    <>
        <div class="text-center text-danger">Items List</div>
        <div class="row align-items-start justify-content-center">
            {items.map( (item) => <Item  name = {item}/> )}
        </div>
    </>

)};

export default Items;
