import {useState} from "react";

const useHoverHandler = () => {
    const [viewOnHover, setViewOnHover] = useState<boolean>(false)

    const onFocus = () => {
        setViewOnHover(true)
    }

    const onLooseFocus = () => {
        setViewOnHover(false)
    }

    return {viewOnHover, onFocus, onLooseFocus}
}

export {useHoverHandler}