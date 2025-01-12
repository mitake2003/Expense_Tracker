import { useContext, useEffect, useState } from "react";
import { getExpenseAndBudget, removeData } from "../utils/localstorage.js";
import {contextData } from "../context/context.js";

function Transactions () {
    const {data, setData} = useContext(contextData); 

    
    const [amtdata, setAmtData] = useState({
        expense:0,
        budget:0
    });

    const setBudgetAndExpense = () => {
        const temp = getExpenseAndBudget();
        const temp2 = amtdata;
        temp2.budget = temp.budget;
        temp2.expense = temp.expense;
        setAmtData(temp2);
    }

    useEffect(()=>{
        setBudgetAndExpense();
    },[]);

    const handleRemove = (index) => {
        setData(removeData(index));
        setBudgetAndExpense();
    }

    return <div className="flex flex-col justify-center items-center">
        <div className="flex w-lvw justify-center items-center my-2">
            <div className="border px-2 rounded mx-12">Expense
                <p className="px-4">{amtdata.expense}</p >
            </div>
            <div className="border px-2 rounded mx-12">Budget
                <p className="px-4">{amtdata.budget}</p>
            </div>
        </div>
        <div className="w-fit">
        <h3 className="text-2xl my-3 text-left ">Transactions</h3>
        <div className="max-w-4xl mx-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-500">
                <tr>
                    <td className="w-48 py-3 px-4 text-left">Type</td>
                    <td className="w-40 py-3 px-4 text-left">Amount</td>
                    <td className="py-3 px-4 text-left">Option</td>
                </tr>
            </thead>
            <tbody>
                {data.map((val, index) => {
                    return <tr key={index}>
                        <td className="w-48 py-3 px-4">{val.Type}</td>
                        <td className="w-40 py-3 px-4">{val.Amount}</td>
                        <td className="py-3 px-4"><button className="border rounded inline-flex justify-center items-center p-1 bg-red-500" name={index} onClick={() => {handleRemove(index)}}>remove</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
        </div>
    </div>
}

export default Transactions;