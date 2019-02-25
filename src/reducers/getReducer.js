import { GET_DATA, POST_DATA , UPDATE_DATA , DELETE_DATA} from '../actions/types';

const initialState = {
    data : [],
    code: '',
    qty: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATA :
        console.log("in reducer" + action.payload)
         return {
             ...state, 
             data : action.payload
         }
         case POST_DATA :
         return {
             ...state,
             code : action.payload.code,
             qty : action.payload.qty
         }
         case UPDATE_DATA :
         return {
             ...state,
             code : action.payload.code,
             qty : action.payload.qty
         }
         case DELETE_DATA :
         return {
             ...state,
             code : action.payload.code
         }
        default :
            return state;

    }
}