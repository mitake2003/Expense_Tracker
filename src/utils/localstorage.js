const addRecord = (data) => {
    const records = JSON.parse(localStorage.getItem("expenses"));
    if (!records) {
        localStorage.setItem("expenses", JSON.stringify([data]));
    }
    else {
        records.push(data);
        localStorage.setItem("expenses", JSON.stringify(records));
    }
    return records;
}

const getData = () => {
    const records = JSON.parse(localStorage.getItem("expenses"));
    return records?records:[];
}

const removeData = (index) => {
    const records = JSON.parse(localStorage.getItem("expenses"));
    if (records) {
        records.splice(index,1);
        localStorage.setItem("expenses", JSON.stringify(records));
    }
    return records;
}

const getExpenseAndBudget = () => {
    const records = JSON.parse(localStorage.getItem("expenses"));
    let expense = 0;
    let budget = 0;
    if (!records) {
        return {expense, budget};
    }
    //console.log(records);
    for (let i=0; i<records.length; i++) {
        if (records[i].amtType === "expense") {
            expense += parseInt(records[i].Amount);
        }
        else {
            budget += parseInt(records[i].Amount);
        }
    }
    return {expense, budget};
}

export { addRecord, getData, removeData, getExpenseAndBudget };