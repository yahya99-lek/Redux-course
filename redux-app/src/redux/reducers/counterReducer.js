import { DECREMENT, INCREMENT, INC_BY_VALUE} from "../actions/types";

const counterReducer = (state = {count:0} , action) => {
    switch(action.type){
         
        case INCREMENT:
            //console.log(state);
            return {...state, count: state.count+ 1}
        case DECREMENT:
            //console.log(state);
            return {...state, count: state.count- 1}
        case INC_BY_VALUE:
             return {...state, count: state.count + action.value}
        default :
            return state 
    }
}
export default counterReducer

