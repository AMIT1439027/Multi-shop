import { ADD_ITEM_INTO_CART, DECRESE_PRODUCT_QUANTITY, FAILED_CATEGORY, FETCH_REQUEST_CATEGORY, FETCH_REQUEST_PRODUCT, INCRESE_PRODUCT_QUANTITY, SUCCESS_CATEGORY, SUCCESS_PRODUCT, UPDATE_CATEGORY } from "./e-com-types"

const initialState={
    products:[],
    categories:[],
    cart_items:[],
    selected_category:'smartphones',
    loading_category:false,
    error_category:'',
    loading_product:false,
    error_product:''
}
const e_com_reducer=(state=initialState,action)=>{
    switch(action.type){
        /// Check Categories Actions
        case FETCH_REQUEST_CATEGORY :{
            
            return {...state,loading_category:true}
        }
        case SUCCESS_CATEGORY :{
            return {...state,loading_category:false,categories:action.payload}
        }
        case FAILED_CATEGORY :{
            return {...state,loading_category:false,error_category:action.payload}
        }
        case UPDATE_CATEGORY :{
            return {...state,selected_category:action.payload}
        }
        /// Check Product Actions
        case FETCH_REQUEST_PRODUCT :{
            
            return {...state,loading_product:true}
        }
        case SUCCESS_PRODUCT :{
            return {...state,loading_product:false,products:action.payload}
        }
        case FAILED_CATEGORY :{
            return {...state,loading_product:false,error_product:action.payload}
        }
        case ADD_ITEM_INTO_CART:{
            var cart=[...state.cart_items]
            var itemExists=false;
            for(let item of cart){
                if(item.product.id==action.payload.id)
                {
                   item.quantity+=1; 
                   itemExists=true;
                   break;
                }
            }
            if(itemExists==false){
                var item={product:action.payload,quantity:1};
                cart.push(item);
            }
           
            return {...state,cart_items:cart};
        }
        case INCRESE_PRODUCT_QUANTITY :{
            var cart=[...state.cart_items]
            for(let item of cart){
                if(item.product.id==action.payload.id)
                {
                   item.quantity+=1;                    
                   break;
                }
            }

            return {...state,cart_items:cart};
        }
        case DECRESE_PRODUCT_QUANTITY :{
            var cart=[...state.cart_items]
            for(let item of cart){
                if(item.product.id==action.payload.id)
                {
                   item.quantity-=1;                    
                   break;
                }
            }

            return {...state,cart_items:cart};
        }


        //// Action for Cart
        default : return state
        

    }


}
export default e_com_reducer;