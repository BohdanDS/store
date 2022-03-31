import React from 'react';
import {Space, Table} from 'antd';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {OrdersType} from "../../store/orders";

const OrderHistory = () => {

    const ordersData = useSelector<AppRootStateType, OrdersType>(state => state.order)
    const orderIds = Object.keys(ordersData)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Address',
            key: 'address',
            dataIndex: 'address',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
        },
    ];

    const order =
        orderIds.map(id=>{
            return(
                {
                    name:`${ordersData[id].delivery.firstName} ${(ordersData[id].delivery.lastName)}`,
                    email:ordersData[id].userEmail,
                    address:ordersData[id].delivery.addressLine,
                    // items: ordersData[id].items,
                    city:ordersData[id].delivery.city,
                    status:ordersData[id].status
                }
            )
        })

    console.log(order)

    return (
        <div>
            <Table columns={columns} dataSource={order}/>,
        </div>
    );
};

export default OrderHistory;