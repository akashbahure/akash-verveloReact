import {useState} from 'react'

const Counter = () => {
  const initialize=0;
     const [count, setcount] =useState(initialize);

    //  const handleCount=()=>{
    //     setcount(count+1);
    //  }

    const incrementFive=()=>{
      for (let i = 0; i < 5; i++) {
        setcount(prevCount=>prevCount+1)
        }
    }

  return (
    <div>
      count: {count}
      <button onClick={()=>setcount(prevCount=> prevCount+1)}>increment </button>
      <button onClick={()=>setcount(prevCount=> prevCount-1)}>Decrement</button>
      <button onClick={()=>setcount(initialize)}>reset</button>
      <button onClick={incrementFive}>increment 5</button>

    </div>
  )
}

export default Counter
