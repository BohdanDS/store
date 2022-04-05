import React, {FC} from 'react';
import {TableOutlined, UnorderedListOutlined} from "@ant-design/icons";
import './index.less'

type Props = {
    callback: (listView: boolean) => void
    value:boolean
}

const ViewControls: FC<Props> = ({value,callback}) => {
    return (
        <span className='viewControls'>
            <div className='relativeBlock'>
                <TableOutlined onClick={() => callback(false)}/>
                {!value &&  <div  className='viewControls__showSelected'></div>}
            </div>
            <div className='relativeBlock'>
                <UnorderedListOutlined onClick={() => callback(true)}/>
                {value && <div  className='viewControls__showSelected'></div>}
            </div>
        </span>
    );
};

export default ViewControls;