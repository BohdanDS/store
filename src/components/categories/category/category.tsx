import React, {FC, KeyboardEvent} from 'react';
import EditableSpan from "../../editableSpan/editableSpan";
import {Button} from "antd";
import './index.less'

type Props = {
    id: string
    value: string
    onChange?: (newValue: string) => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>, id?: string, title?: string) => void
    onRemove: (categoryId: string) => void
}

const Category: FC<Props> = ({id, value, onEnter, onRemove, onChange}) => {

    const removeHandler = () => {
        onRemove(id)
    }

    return (
        <>
            <div className='category-container'>
                <div>
                    <EditableSpan id={id} value={value} onEnter={onEnter}/>
                </div>
                <div>
                    <Button onClick={removeHandler}>Remove</Button>
                </div>
            </div>
            <div className='category-container__divider'></div>
        </>
    )
};

export default Category;