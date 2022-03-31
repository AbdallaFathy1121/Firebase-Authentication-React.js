import React from "react"
import "./Header.css"
import useFirestore from './../../useFirestore';


const Header = () => {

    const {budget} = useFirestore();

    return (
        <div className="header">
            <div className="header_title">
                <h1>Budget Tracker</h1>
            </div>
            <div className="header_balance">${budget}</div>
        </div>
    )
}

export default Header
















