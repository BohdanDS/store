export type InitialStateType = {
    searchQuery: string
}

const initialState = {
    searchQuery :''
}

export type SearchReducerActionsType = SetSearchQueryType


export const searchReducer = (state= initialState, action: SearchReducerActionsType):InitialStateType => {

    switch (action.type){
        case "SET_SEARCH_QUERY": {
            return {...state, searchQuery: action.payload.searchItem}
        }
        default: return state
    }
}



type SetSearchQueryType = ReturnType<typeof setSearchQuery>
export const setSearchQuery = (searchItem: string) => {
    return {
        type: 'SET_SEARCH_QUERY',
        payload:{
            searchItem
        }
    } as const
}
