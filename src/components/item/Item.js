import React from 'react'
import "./Item.css"
import useFirestore from './../../useFirestore';

const Item = ({ item }) => {

    const {deleteItem} = useFirestore();

    return (
        <div className="item">
            <div className="item__title"><h3>{item.title}</h3></div>
            <div className="item__info">
                <p className={item.amount >= 0 ? 'income' : 'expense'} >${Math.abs(item.amount)}</p>
                <p>{item.date}</p>
                <button className="item__delete" onClick={ ()=> deleteItem(item.id) }>Delete</button>
            </div>
        </div>
    )
}

export default Item
