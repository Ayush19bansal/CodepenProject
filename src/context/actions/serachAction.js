export const Setsearch=(search)=>{
    return{
        type:"SET_SEARCH",
        search:search
    }
}

export const SetsearchNull=()=>{
    return{
        type:"SET_SEARCH_NULL"
    }
}