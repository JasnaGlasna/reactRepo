import {FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from './../constants/UsersConstant';

const initialState = {
    users: [],
    error: undefined

}
const UsersReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload
            }
            case FETCH_USERS_FAIL:
                return{
                    ...state,
                    error: action.payload
                }
                default: return state;
    }
}

export default UsersReducer