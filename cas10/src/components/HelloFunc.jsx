import {useEffect} from 'react'
import {sayGoodbay, sayHello} from './../actions/SayHelloActions'
import { aGoodMovie, goodBook, niceCity, favFood } from './../actions/GoodMovieAction'
import {useSelector,useDispatch} from 'react-redux'
export const HelloFunc = () => {
    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting)
    const goodnight = useSelector(state=>state.SayHelloReducer.goodnight)
    const goodmovie = useSelector(state=>state.GoodMovieReducer.goodmovie)
    const goodbook = useSelector(state=>state.GoodMovieReducer.goodbook)
    const nicecity = useSelector(state=>state.GoodMovieReducer.nicecity)
    const favfood = useSelector(state=>state.GoodMovieReducer.favfood)
    useEffect(() => {
        dispatch(sayHello());
        dispatch(sayGoodbay());
        dispatch(aGoodMovie());
        dispatch(goodBook())
        dispatch(niceCity())
        dispatch(favFood) 
    }, [dispatch]);
    return(
        <div id ="hello-func">
            <h1>{greeting}</h1>
            <h2>{goodnight}</h2>
            <h3>{goodmovie}</h3>
            <h2>{goodbook}</h2>
            <h2>{nicecity}</h2>
            <h2>{favfood}</h2>
        </div>
    )
}