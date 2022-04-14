import React, {useState} from 'react';
import {Button, Tabs} from "antd";
import './index.less'
import OrderHistory from "../ordersHistory/orderHistory";
import Article from "../../modals/article /article";
import ItemsMain from "../../components/itemsMain/itemsMain";
import Categories from "../../components/categories/categories";

const {TabPane} = Tabs;

const Admin = () => {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className="card-container">
            <Tabs type="card">
                <TabPane tab="Articles" key="1">
                    <div>
                        <Button className='Articles__btn' onClick={showModal}>Create Article</Button>
                        {isModalVisible && <Article visible={isModalVisible} setIsModalVisible={setIsModalVisible}/>}
                    </div>
                    <ItemsMain/>
                </TabPane>
                <TabPane tab="Categories" key="2" className='ordersTab'>
                    <Categories/>
                </TabPane>
                <TabPane tab="Orders" key="3" className='ordersTab'>
                    <OrderHistory/>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Admin;