import { ProductConst } from './ActionConst'
import axios from 'axios'
export const ProductCate=()=>{
   
        return async (dispatch)=>{
            
            dispatch({type:`${ProductConst.PRODUCT_CATEGORY_GET}_REQUEST`});
            axios.get(`https://fakestoreapi.com/products/categories`).then((res)=>{console.log(res.data);
            dispatch({type:`${ProductConst.PRODUCT_CATEGORY_GET}_SUCCESS`,payload:{message:"Successful",categarydata:res.data}})
            
            }).catch((err)=>{
              
            dispatch({type:`${ProductConst.PRODUCT_CATEGORY_GET}_FAILURE`,payload:{message:"Fail"}})
            
        
            })
            }
    }



    export const subcatagory = (sub) =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${ProductConst.PRODUCT_SUBCATAGORY}_REQUEST`});
        axios.get(`https://fakestoreapi.com/products/category/${sub}`)
        .then((res)=>{
            
            dispatch({type:`${ProductConst.PRODUCT_SUBCATAGORY}_SUCCESS`,payload:{message:"Successful",Product_Categorydat:res.data}});
        })
        .catch((error)=>
        {
            dispatch({type:`${ProductConst.PRODUCT_SUBCATAGORY}_FAILURE`});
        })

    }
}


export const productdetails = (pid) =>
{
    return async (dispatch) =>{
    dispatch({type:`${ProductConst.PRODUCT_DETAILS}_REQUEST`});
    axios.get(`https://fakestoreapi.com/products/${pid}`)
    .then((res)=>{
        const pdata = res.data;
        dispatch({type:`${ProductConst.PRODUCT_DETAILS}_SUCCESS`,payload:{message:"Successful",pdata:res.data}});
    })
    .catch((error)=>{
        dispatch({type:`${ProductConst.PRODUCT_DETAILS}_FAILURE`});
    })
    }

}