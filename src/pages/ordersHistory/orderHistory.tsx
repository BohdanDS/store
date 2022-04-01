import React from 'react';
import {Button, Space, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {ORDER_STATUSES, USER_STATUSES} from "../../models/feels";
import {ChangeOrderStatus} from "../../store/orders/actions";
import OrderStatus from "../../components/filters/orderStatus/orderStatus";
import OrderDate from "../../components/filters/orderDate/orderDate";
import {ordersByStatus} from "../../store/orders/selections";

type keyType = {
    key: string,
    name: string,
    email: string,
    address: string,
    city: string,
    status: ORDER_STATUSES
}

const OrderHistory = () => {

    //Заглушки
    const role = USER_STATUSES.ADMIN_USER
    const filterValue = ORDER_STATUSES.ORDER_PAID


    const userOrders = useSelector(ordersByStatus(filterValue))

    const dispatch = useDispatch()

    const markAsPaidHandler = (key: string, role: string, status: string) => {
        if (status === ORDER_STATUSES.ORDER_IN_PROGRESS && role === USER_STATUSES.AUTHORIZED_USER) {
            dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_PAID))
        } else if (status === ORDER_STATUSES.ORDER_PAID && role === USER_STATUSES.ADMIN_USER) {
            dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_ON_THE_WAY))
        } else {
            dispatch(ChangeOrderStatus(key, ORDER_STATUSES.ORDER_FINISHED))
        }
    }

    const actionName = (key: keyType, role: string, status: string) => {
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
            render: (status: string, key: keyType) => (
                <Space size="middle">
                    <>{status}</>
                    {actionName(key, role, status)}
                </Space>)
        },
    ];

    const Items = userOrders.map(order => {
        return ({
            key: order.id,
            name: `${order.delivery.firstName} ${order.delivery.lastName}`,
            email: order.userEmail,
            address: order.delivery.addressLine,
            city: order.delivery.city,
            status: order.status
        })
    })

    return (
        <div>
            <OrderDate/>
            <OrderStatus/>
            <Table columns={columns} dataSource={Items}/>,
        </div>
    );
};

export default OrderHistory;