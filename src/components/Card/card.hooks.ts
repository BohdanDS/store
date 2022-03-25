import {useState} from "react";

const useCardHandlers = () => {
    const [viewOnHover, setViewOnHover] = useState<boolean>(false)

    const onFocus = () => {
        setViewOnHover(true)
    }

    const onLooseFocus = () => {
        setViewOnHover(false)
    }
    return {viewOnHover, onFocus, onLooseFocus}
}

export {useCardHandlers}