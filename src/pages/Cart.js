import React from 'react'
import { useCartContext } from '../cart_context';

export const Cart = () => {
  const { cart,clear,decProd,incProd,del} =useCartContext();

  console.log(cart);
  return (
    <>
     <table>
     <tr>
  <th>Product</th>
  <th>Name</th>
  <th>Color</th>
  <th>Size</th>
  <th>Quantity</th>
  <th>Total</th>
  <th>Delete</th>
</tr>
      {
        cart && cart.map(el=>{
          return(
            <tbody>

<tr>
  
  <td><img src={el.image} alt={el.name}/></td>
  <td>{el.name}</td>
  <td>{el.color}</td>
  <td>{el.size}</td>
 
  <td>
  <button onClick={()=>decProd(el.id)}>-</button>
   {el.amount}
   <button onClick={()=>incProd(el.id)}>+</button>
    </td>
    <td> ${el.price*el.amount}</td>
  <td><i className="fa fa-trash" onClick={()=>del(el.id)}></i></td>
</tr>
</tbody>
            // <div key={el.id}>
            //   <img src={el.image} alt={el.name}/>
            //   <h3>{el.name}</h3>
            //   <p>${el.price*el.amount}</p>
            //   <p>{el.color}</p>
            //   <p>{el.size}</p>
            //   <button onClick={()=>decProd(el.id)}>-</button>
            //   <p>{el.amount}</p>
            //   <button onClick={()=>incProd(el.id)}>+</button>
            //   <button onClick={()=>del(el.id)} className="btn">Del</button>
            //   </div>
          )
        })
      }
    </table> 
    <button onClick={clear} className='btn'>Clear Cart</button>
    </>
  )
}
