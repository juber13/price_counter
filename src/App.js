import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [data , setData] = useState([]);
  const [item , setItem] = useState("");
  const [price , setPrice] = useState("");
  const [total, setTotal] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(item !== "" && price !== ""){
      setData([...data , {id: data.length, item , price}])
    }

    setItem("");
    setPrice("");
  }

  const handleDelete = (id) => {
    const newItems = data.filter(item => item.id !== id);
    setData(newItems);
  }

  console.log(total)

    useEffect(() => {
       setTotal(data.reduce((curr , acc) => curr + Number(acc.price) , 0));
    },[item , total])

    return(
      <div className='container'>
      <div className="heading">Budget Planner</div>
          <div className="btns-container">
            <button>Budget 2000</button>
            <button>Rmaining {2000 - total}</button>
            <button>Spent {total}</button>
          </div>  


          <div className="content">
             <div className="">Expense</div>
             <div className="data">
               {data.map((item , index) => {
                 return(
                    <div className='item-container flex' key={index}>
                      <p>{item.item}</p>
                      <p>{item.price}</p>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                 )
               })}
             </div>
          </div>

          <div className="addExpenses">
            <form onSubmit={handleSubmit}>
              <input value={item} type="text"  placeholder='Name' onChange={(e) => setItem(e.target.value)}/>
              <input value={price} type="number"  placeholder='Cost' onChange={e => setPrice(e.target.value)}/>
              <button type='submit'>Save</button>
            </form>
          </div>
      </div>
    )

  
}

export default App