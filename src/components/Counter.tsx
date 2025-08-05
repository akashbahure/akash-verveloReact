import React,{useState} from 'react'

const Counter = () => {
     const [count, setcount] =useState(0);

     const handleCount=()=>{
        setcount(count+1);
     }

  return (
    <div>
      <button onClick={handleCount}>click me {count}</button>
    </div>
  )
}

export default Counter
