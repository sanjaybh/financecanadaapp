import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from './config';

const initialState = [];

export const reducer = (state = initialState, action) => {
 switch(action.type){
    case ADD_TO_CART:
        return [
            ...state,
            action.data
        ]
    case REMOVE_FROM_CART:
        let result = state.filter(item=>{
            return item.id != action.data
        })
        return [...result]
    case SET_USER_DATA:
        return action.data
    default:
        return state
 }
}