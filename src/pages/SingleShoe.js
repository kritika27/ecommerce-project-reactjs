import React from 'react'
import { useParams } from "react-router-dom";
import { useGlobalContext } from '../context';
import "./SingleShoe.css";
import { useCartContext } from '../cart_context';

export const SingleShoe = () => {
  const { id } = useParams();
  const { amount, product,inc,dec }=useGlobalContext();
  const {add} =useCartContext();
  const [color,setColor]=React.useState("");
  const [size,setSize]=React.useState("");
  const temp = product.filter((product) => product.id === id);

  console.log(color,size);
  return (
    <div className='single-prod'>
      {temp.map((products) => {
        const { name, price, description, stock, image } = products;
        return (
          <div className="product-center" key={products.id}>
            
              <ul className='prod'>
             <li> <i className="fa fa-facebook fa-2x"></i></li>
          <li><i className="fa fa-twitter fa-2x"></i></li>
         <li><i className="fa fa-youtube fa-2x"></i></li>
          <li><i className="fa fa-linkedin fa-2x"></i></li>
              </ul>
              
            <img className="prod-photo" src={image} alt={name} />
            <section className="content-prod">
            <h1 style={{color:"#333",fontSize:"35px",marginBottom:"1rem"}}>{name}</h1>
            
              <h2 className="price-prod">${price}</h2>
              <p className="description"> {description}</p>
              <form>
                <div className="size-select">
                  <p style={{fontWeight:"bold"}}>Size:</p>
                {
                    
                      products.size.map((size,index)=>{
                        return(
                          <div key={index}>
                           <input type="radio" name="size" value={size} onChange={()=>setSize(size)}/>
                           <span>{size}</span>
                          </div>
                        )
                      })
                    
                }
                </div>
              </form>
              <form>
                <div className="color-select">
                  <p style={{fontWeight:"bold"}}>Color:</p>
                {
                    
                      products.color.map((col,index)=>{
                        return(
                          <div key={index}>
                           <input type="radio" name="size" value={color} onChange={()=>setColor(col)}/>
                           <span style={{backgroundColor:col}}></span>
                          </div>
                        )
                      })
                    
                }
                </div>
              </form>
              <hr/>
              <div className="amount-btns">
      <button type="button" className="amount-btn" onClick={()=>dec(id)}>
        <i className="fa fa-minus"></i>
      </button>
      <h3 className="amount">{products.amount}</h3>
      <button type="button" className="amount-btn" onClick={()=>inc(id)}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
    <div className="btn-container">
      <button
        className="add-cart"
        onClick={() => add(id, amount, products,color,size)}
      >
        Add to cart
      </button>
      
    </div> 
            </section>
             

             
          </div>
        )
          })
        }
        </div>
  )
      }
    