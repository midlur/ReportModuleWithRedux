import { GET_DATA  } from '../actions/types';

const initialState = {
    data : []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATA :
        console.log("in reducer haha")
         return {
             ...state, 
             data : action.payload
         }
        default :
            return state;

    }
}