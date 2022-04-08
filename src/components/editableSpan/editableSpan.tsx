import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {Input, Tooltip} from "antd";
import {EditOutlined} from '@ant-design/icons';
import './index.less'

type Props = {
    id: string
    value: string
    // onChange?: (newValue: string) => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>, id?: string, title?: string) => void
}
const EditableSpan: FC<Props> = ({id, value, onEnter}) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        // onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnter(e, id, title)
            setEditMode(false)
        }
    }

    return editMode
        ?
        <div className='input-container'>
            <Input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} onKeyPress={enterHandler}/>
        </div>
        : <div className='p-container'>
            <Tooltip placement="topLeft" title={'Double Click to edit category'}>
                <p className='p-container__text' onDoubleClick={activateEditMode}>{value}</p>
            </Tooltip>
            <EditOutlined onClick={activateEditMode}/>
        </div>
};

export default EditableSpan;