import React from 'react'
import "./ItemList.css"
import useFirestore from './../../useFirestore';
import Item from '../item/Item';

const ItemList = () => {

    const {items} = useFirestore();

    return (
        <div className="item-list">

            {items.map(item => (
                <Item item={item} key={item.id} />
            ))}

        </div>
    )
}

export default ItemList
