import React from 'react'
import { collection } from "./collection";

export const Featured = () => {
  return (
    <div className='featured'>
        <div className='featured-content'>
        <h1>Featured Collection</h1>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                collection.map(el=>{
                    return(
                        <div key={el.id} style={{margin:"20px"}}>
                            <img style={{height:"55vh",width:"25vw",objectFit:"contain"}}src={el.image} alt="fashion"/>
                            </div>
                    )
                })
            }
        </div>
        </div>
        </div>
  )
}
