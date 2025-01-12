import { useEffect, useState } from 'react'
import './App.css'
import AddTransaction from './components/AddTransaction'
import Transactions from './components/Transactions'
import { contextData } from './context/context'
import { getData } from './utils/localstorage'

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(getData());
  },[]);

  return <>
    <contextData.Provider value={{data, setData}}>
      <AddTransaction />
      <Transactions />
    </contextData.Provider>
  </>
}

export default App;
