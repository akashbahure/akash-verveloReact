import React from 'react'

type Product = {
    title:string,
    isFruit:boolean,
    id:number
}

const products: Product[]= [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

const ShoppingList :React.FC = () => {
   
    const listItem=products.map((product)=>(
        <li key={product.id}
            style={{
                color:product.isFruit ? 'magenta' : 'darkgreen',
            }}
        >
            {product.title}
        </li>
    ))
  
    return (
   <ul>
    {listItem}
   </ul>
  )
}

export default ShoppingList
