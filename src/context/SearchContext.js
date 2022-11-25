import { createContext, useReducer } from "react"

const INITIAL_STATE={
    destination:undefined,
    date:[{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }],
    option:{
        adult:undefined,
        children:undefined,
        room:1
    }
}
const SearchContext= createContext(INITIAL_STATE)

const SearchReducer= (state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE    
        default:
            return state    
    }
}
const SearchContextProvider=({children})=>{
    const [state,dispatch]=useReducer(SearchReducer,INITIAL_STATE)
    return(
        <SearchContext.Provider 
        value={{destination:state.destination,
            date:state.date,
            option:state.option,
            dispatch
        }}
        >
            {children}
        </SearchContext.Provider>
    )
}
export {SearchContext,SearchContextProvider}