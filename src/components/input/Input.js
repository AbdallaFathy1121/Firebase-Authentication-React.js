import React, {useState, useRef} from 'react'
import "./Input.css"
import useFirestore from './../../useFirestore';


const initialItem = { title: '', type: '', date: '' }

const Input = () => {

    const {addItem} = useFirestore();

    const [item, setItem] = useState(initialItem)
    const [amount, setAmount] = useState('')
    const selectedOption = useRef(null);

    const handleChange = ({target}) => {
        setItem({
            ...item,
            [target.name]: target.value, 
            type: selectedOption.current.value,
         })
    }

    const handleAmount = ({target}) => {
        setAmount(target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let actualAmount = selectedOption.current.value == 'expense'
            ? -Math.abs(parseInt(amount))
            : parseInt(amount)

        await addItem(item, actualAmount)
        setItem(initialItem)
        setAmount('');
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                
                <input type="text" name="title" placeholder="Enter Title" value={item.title} onChange={handleChange} required/>
                <input type="number" name="amount" placeholder="Amount" value={amount} onChange={handleAmount} required/>
                <input type="date" name="date" placeholder="Date" value={item.date} onChange={handleChange} required/>

                <label htmlFor="type">Type</label>
                <select name="type" onChange={handleChange} ref={selectedOption} >
                    <option value="income" key="">Income</option>
                    <option value="expense" key="">Expense</option>
                </select>

                <input type="submit" value="ADD" />

            </form>
        </div>
    )
}

export default Input
