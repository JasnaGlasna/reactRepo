import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import SayHelloReducer from "./reducers/SayHelloReducer";
import GoodMovieReducer from "./reducers/GoodMovieReducer";

const reducer = {
    SayHelloReducer: SayHelloReducer,
    GoodMovieReducer: GoodMovieReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddlware)=>getDefaultMiddlware().concat(logger)
})