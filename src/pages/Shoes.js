import React from 'react'
import { useGlobalContext } from '../context';
import { useCartContext } from '../cart_context';
import { Link } from "react-router-dom";

export const Shoes = () => {

  const { amount, product,inc,dec }=useGlobalContext();
  const { add } =useCartContext();

  return (
    <div className='products'>
      <h1 style={{letterSpacing:"0.5px",fontSize:"35px",marginBottom:"3rem",textAlign:"center"}}>PRODUCTS</h1>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",
      objectFit:"cover",margin:"0 auto",width:"90vw"}}>
        {
          product.map(el=>{
            return(
              <div key={el.id} style={{margin:"10px"}}>
                   <Link
                  to={`/products/${el.id}`}>
                <img src={el.image} alt={el.name} 
                style={{width:"25vw",height:"65vh"}}
                />
                </Link>
                {/* <h2>{el.name}</h2>
                {
                  el.size.map((size,index)=>{
                    return(
                      <p key={index} onClick={()=>setSize(size)} 
                      >{size}</p>
                    )
                  })
                }
                <p>${el.price}</p>
                {
                  el.color.map((col,index)=>{
                    return(
                      <p key={index} onClick={()=>setColor(col)} 
                      style={{backgroundColor:col}}>{col}</p>
                    )
                  })
                }
                
                <button onClick={()=>dec(el.id)}>-</button>
                <p>{el.amount}</p>
                <button onClick={()=>inc(el.id)}>+</button>
                <button onClick={()=>add(el.id,el.amount,el,color,size)}>Add To Cart</button>
                <button>View in Detail</button> */}
                </div>
            )
          })
        }
      </div>
      
    </div>
  )
}
