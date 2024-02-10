import React from 'react'

function SearchReducer(state=null ,action) {
    switch(action.type){
        case "SET_SEARCH":
            return{
                ...state,
                search:action.search
            }
        case "SET_SEARCH_NULL":
            return{
                ...state,
               search:""
            }
        default:
            return state;
    }
}

export default SearchReducer
