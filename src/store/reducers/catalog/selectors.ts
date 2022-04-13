import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

const catalogState = (state: TApplicationState) => state.catalog

export const makersArray = () => createSelector(
    catalogState,
    articles => Object.values(articles).map(article => article.maker)
)