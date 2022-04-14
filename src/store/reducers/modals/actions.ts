import {ModalActionTypes} from './actions-types'

export const OpenModal = (modalType:string) => ({
    type:ModalActionTypes.OPEN_MODAL,
    modalType
})

export const CloseModal = ()=>({
    type: ModalActionTypes.CLOSE_MODAL,
})
