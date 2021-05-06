import { ProductConst } from "../Actions/ActionConst";
const initial = {
  AllCategories: [],
  Specific_Categorydata: [],
  Product_details: {},
  Error: null,
  Message: "",
};
const Productreducer = (state = initial, action) => {
    console.log(action);
  switch (action.type) {
    case `${ProductConst.PRODUCT_CATEGORY_GET}_REQUEST`:
      return state= {
        ...state,
      };
    case `${ProductConst.PRODUCT_CATEGORY_GET}_SUCCESS`:
      return state=  {
        ...state,

        AllCategories: action.payload.categarydata,
        Message:action.payload.message
      };

    case `${ProductConst.PRODUCT_CATEGORY_GET}_FAILURE`:
      return state=  {
        ...state,
        Error: action.payload.message,
      };












      case `${ProductConst.PRODUCT_SUBCATAGORY}_REQUEST`:
      return state= {
        ...state,
      };
    case `${ProductConst.PRODUCT_SUBCATAGORY}_SUCCESS`:
      return state=  {
        ...state,

        Specific_Categorydata: action.payload.Product_Categorydat,
        Message:action.payload.message
      };

    case `${ProductConst.PRODUCT_SUBCATAGORY}_FAILURE`:
      return state=  {
        ...state,
        Error: action.payload.message,
      };












      case `${ProductConst.PRODUCT_DETAILS}_REQUEST`:
        return state= {
          ...state,
        };
      case `${ProductConst.PRODUCT_DETAILS}_SUCCESS`:
        return state=  {
          ...state,
  
          Product_details: action.payload.pdata,
          Message:action.payload.message
        };
  
      // case `${ProductConst.PRODUCT_DETAILS}_FAILURE`:
      //   return state=  {
      //     ...state,
      //     Error: action.payload.message,
      //   };
    default:
      return state;
  }
};

export default Productreducer;


