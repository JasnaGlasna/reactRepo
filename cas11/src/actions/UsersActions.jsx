import {FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from '../constants/UsersConstant';
import axios from "axios";

export const fetchUsersSuccess = (users) => {
    return{
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFail = (error) => {
    return{
        type:FETCH_USERS_FAIL,
        payload:error
    }
}
export const fetchUsersRequest = () => {
    return dispatch =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => dispatch(fetchUsersSuccess(result.data)))
        .catch(error=>dispatch(fetchUsersFail(error.message)))
    }
}