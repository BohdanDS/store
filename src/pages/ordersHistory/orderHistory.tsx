import React from 'react';
import {Button, Space, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {OrdersType} from "../../store/orders";
import {ORDER_STATUSES, USER_STATUSES} from "../../models/feels";
import {ChangeOrderStatus} from "../../store/orders/actions";
import OrderStatus from "../../components/filters/orderStatus/orderStatus";
import OrderDate from "../../components/filters/orderDate/orderDate";

const OrderHistory = () => {

    const role = USER_STATUSES.ADMIN_USER

    const dispatch = useDispatch()
    const ordersData = useSelector<AppRootStateType, OrdersType>(state => state.order)
    const orderIds = Object.keys(ordersData)
    console.log(orderIds)

    const markAsPaidHandler = (key: string, role: string, status: string) => {
        if (status === ORDER_STATUSES.ORDER_IN_PROGRESS && role === USER_STATUSES.AUTHORIZED_USER) {
            dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_PAID))
        } else if (status === ORDER_STATUSES.ORDER_PAID && role === USER_STATUSES.ADMIN_USER) {
            dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_ON_THE_WAY))
        } else {
            dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_FINISHED))
        }
    }

    const actionName = (key:any,role: string, status: string) => {
        if (status === ORDER_STATUSES.ORDER_IN_PROGRESS) {
            return <Button onClick={() => markAsPaidHandler(key.key, role, key.status)}>Pay</Button>
        } else if (status === ORDER_STATUSES.ORDER_PAID && role === USER_STATUSES.ADMIN_USER) {
            return <Button onClick={() => markAsPaidHandler(key.key, role, key.status)}>Start Delivery</Button>
        } else if (status === ORDER_STATUSES.ORDER_ON_THE_WAY && role === USER_STATUSES.ADMIN_USER) {
            return <Button onClick={() => markAsPaidHandler(key.key, role, key.status)}>Finish Order</Button>
        } else {
            return null
        }
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
                    {actionName(key, role, status)}
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
    return (
        <div>
            <OrderDate/>
            <OrderStatus/>
            <Table columns={columns} dataSource={order}/>,
        </div>
    );
};

export default OrderHistory;