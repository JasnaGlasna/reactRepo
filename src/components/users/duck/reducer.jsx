import {
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    DELETE_USERS
} from './constants';

const initialState = {
    users: [],
    error: undefined,
};

export default function reducer ( state = initialState, action){
    switch(action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
            };
            case GET_USERS_SUCCESS:
                return{
                    ...state,
                    users: action.payload,
                };
            
                case GET_USERS_FAIL:
                    return{
                        ...state,
                        error: action.payload,
                    };
                    case DELETE_USERS:
                        const updateUsers = sate.users.filter(
                            (user) => user.id== action.payload
                        );
                    
      default: return state;
    }
}