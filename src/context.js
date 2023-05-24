//useState ---->prop drilling
//context api
//context api + useReducer
//redux toolkit
import React,{createContext,useContext,useReducer} from "react";
import data from "./data";

const ProductContext=createContext();

const reducer=(state,action)=>{
    if(action.type==="INC")
    {
        const newItem=state.product.map(el=>{
            if(el.id===action.payload)
             {
                 return {...el,
                 amount:el.amount+1}
             }
             return el;
        })
        return {...state,product:newItem}
    }
    else if(action.type==="DEC")
    {
        const newItem=state.product.map(el=>{
            if(el.id===action.payload)
             {
                 return {...el,
                 amount:el.amount-1}
             }
             return el;
        })
        return {...state,product:newItem}
    }
    return state;
}
// const [product,setProduct]=useState(data);
const initialState={
    product:data,
    amount:10
}

const ProductProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);

    const inc=(id)=>{
        dispatch({type:'INC',payload:id})
    }

    const dec=(id)=>{
        dispatch({type:'DEC',payload:id})
    }
    return(
        <ProductContext.Provider value={{...state,inc,dec}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(ProductContext);
}

export {ProductContext,ProductProvider}
