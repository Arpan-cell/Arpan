// import {CartConst} from '../Actions/ActionConst'

// const initial = {
//     CartDetails: [],
//     Error: null,
//     Message: "",

// }

// const CartReducers = (state=initial, action) => {

//     switch(action.type){
//         case `${CartConst.CART_POST}_REQUEST` :
//             return state = {
//                 ...state
//             }

//         case `${CartConst.CART_POST}_SUCCESS` :
//             var Cartt = []
//             Cartt.push(action)
//             return state = {
//                 ...state,
//                 CartDetails: [...action.payload.cartdata],
//                 Message: action.payload.message
//             }

//         case `${CartConst.CART_POST}_FAIL` :
//             return state = {
//                 ...state,
//                 Error: action.payload.message
//             }

//         default: return state
//     }
// }
// export default CartReducers

const inistate={
    products:[],
    totalprice:0,
    totalqty:0
}
const Cartreducers=(state=inistate,action)=>{
    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            console.log(action.payload.product.id);
            const {product,qty}=action.payload
            console.log( product.id,qty);
            const check=state.products.find(pr=>pr.id===product.id)
            if(check){
                return state;
            }else{
                const Tprice=state.totalprice+product.price*qty;
                
                const Tqty=state.totalqty+qty
                product.qty=qty
                return{
                    ...state,products:[...state.products,product],totalprice:Tprice,
                    totalqty:Tqty
                }
            }
            
            
            
            
            
        

        default:
            return  state;
    }

}
export default Cartreducers








