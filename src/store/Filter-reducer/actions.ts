import {FilterActionType} from "./action-types";

export const SetMinPriceFilterValue = (minValue:number)=>({
    type: FilterActionType.SET_MIN_PRICE_VALUE,
    minValue
})

export const SetMaxPriceFilterValue = (maxValue: number) =>({
    type: FilterActionType.SET_MAX_PRICE_VALUE,
    maxValue
})

export const SelectProducer = (producerName:string[]) =>({
    type: FilterActionType.CHANGE_PRODUCER,
    producerName
})

export const ChangeInMarketToggle = (status:boolean) => ({
    type: FilterActionType.CHANGE_IN_MARKET_TOGGLE,
    status
})

export const SetSearchQuery = (searchQuery:string) =>({
    type: FilterActionType.SET_SEARCH_QUERY,
    searchQuery
})
