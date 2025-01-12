import { useContext, useState } from "react";
import { addRecord } from "../utils/localstorage.js";
import { contextData } from "../context/context.js";

function AddTransaction () {
    const value = useContext(contextData);

    const [data, setData] = useState({
        Type:"",
        Amount:"",
        amtType:"expense"
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.Amount.value = "";
        e.target.Type.value = "";
        const val = addRecord(data);
        value.setData(val);
    }

    return (<div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold text-center mb-3">Expense Tracker</h1>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 m-2">
            <input type="Number" name="Amount" id="Amount" placeholder="Amount"  onChange={handleChange} required
            className="border p-1"/>
            <input type="Text" name="Type" id="Type" placeholder="Type" onChange={handleChange} required
            className="border p-1"/>
            <div className="flex gap-1">
                <input type="radio" id="expense" name="amtType" value="expense" onClick={handleChange}/>
                <label htmlFor="expense">expense</label>
                <input type="radio" id="budget" name="amtType" value="budget" onClick={handleChange}/>
                <label htmlFor="budget">budget</label>
            </div>
            <button className="inline-flex justify-center items-center px-3 py-1 border  rounded bg-green-400">Add</button>
        </form>
    </div>)
}

export default AddTransaction;