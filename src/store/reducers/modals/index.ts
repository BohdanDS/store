import * as actions from "./actions";
import {InferValueTypes} from "../../../models/common";
import {ModalActionTypes} from "./actions-types";

const initialState:TModalState = {
    modalToShow: null,
}

export type TModalState = {
    modalToShow: string | null
}


type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): TModalState {
    switch (action.type) {
        case ModalActionTypes.OPEN_MODAL: {
            return {...state, modalToShow: action.modalType}
        }
        case ModalActionTypes.CLOSE_MODAL: {
            return {...state, modalToShow: null}
        }
        default:
            return state
    }
}