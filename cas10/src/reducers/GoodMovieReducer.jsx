const initialState = {
    goodmovie: "It's a great movie",
    goodbook: "Verity",
    nicecity: "Barcelona",
    favfood: "Rakija so shopska",


};

const GoodMovieReducer = (state=initialState,action) => {
    switch(action.type){
        case "GOOD_MOVIE":
            return{
                ...state,
                goodmovie:action.payload
            }
            case "GOOD_BOOK":
                return{
                    ...state,
                    goobook:action.payload
                }
                case "BUDAPEST_CITY":
                    return{
                        ...state,
                        nicecity:action.payload
                    }
                    case "SHOPSKA_SALATA":
                        return{
                            ...state,
                            favfood:action.payload
                        }
            default: return state;
    }
}

export default GoodMovieReducer;
