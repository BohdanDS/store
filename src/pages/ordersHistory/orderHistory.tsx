import React from 'react';
import { Table, Tag, Space } from 'antd';

const OrderHistory = () => {
    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'key',
            key: 'key',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Add',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            // render: tags => (
            //     <>
            //         {tags.map(tag => {
            //             let color = tag.length > 5 ? 'geekblue' : 'green';
            //             if (tag === 'loser') {
            //                 color = 'volcano';
            //             }
            //             return (
            //                 <Tag color={color} key={tag}>
            //                     {tag.toUpperCase()}
            //                 </Tag>
            //             );
            //         })}
            //     </>
            // ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text:string, record:{name:string}) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];


    return (
        <div>
            <Table columns={columns} dataSource={data} />,
        </div>
    );
};

export default OrderHistory;