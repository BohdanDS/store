import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

const catalogState = (state: TApplicationState) => state.catalog.items

export const CategoryArray = () => createSelector(
    catalogState,
    articles => articles.map(article=>article.categories)
)