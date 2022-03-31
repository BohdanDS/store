import React from 'react';
import {Button, Space, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {OrdersType} from "../../store/orders";
import {ORDER_STATUSES} from "../../models/feels";
import {ChangeOrderStatus} from "../../store/orders/actions";

const OrderHistory = () => {

    const dispatch = useDispatch()
    const ordersData = useSelector<AppRootStateType, OrdersType>(state => state.order)
    const orderIds = Object.keys(ordersData)

    const markAsPaidHandler = (key: string) => {
        dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_PAID))
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
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
            render: (status: string, key: any) => (
                <Space size="middle">
                    <>{status}</>
                    {status === ORDER_STATUSES.ORDER_IN_PROGRESS ?
                        <Button onClick={() => markAsPaidHandler(key.key)}>Pay</Button> : <></>}
                </Space>)
        },
    ];

    const order =
        orderIds.map(id => {
            return (
                {
                    key: id,
                    name: `${ordersData[id].delivery.firstName} ${(ordersData[id].delivery.lastName)}`,
                    email: ordersData[id].userEmail,
                    address: ordersData[id].delivery.addressLine,
                    // items: ordersData[id].items,
                    city: ordersData[id].delivery.city,
                    status: ordersData[id].status
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