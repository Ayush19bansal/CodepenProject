export const SetUser=(user)=>{
    return{
        type:"SET_USER",
        user:user
    }
}

export const SetUserNull=()=>{
    return{
        type:"SET_USER_NULL"
    }
}