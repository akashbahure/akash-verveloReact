import React, { useState } from 'react'

const HookCounterObject = () => {
    const [name,setName]=useState({firstName:"",lastName:""})

  return (
    <div>
        <form>
        <input type="text"
          value={name.firstName}
          onChange={e=> setName({ ...name,firstName: e.target.value })}
        />

        <input type="text"
        value={name.lastName}
        onChange={e=> setName({...name,lastName:e.target.value})}
        />

        <h3>Your first name is - {name.firstName}</h3>
        <h3>Your last name is - {name.lastName}</h3>
       <p>{JSON.stringify(name)}</p>

        </form>
      
    </div>
  )
}

export default HookCounterObject
