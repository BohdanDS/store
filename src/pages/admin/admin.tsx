import React, {useState} from 'react';
import {Button, Pagination, Tabs} from "antd";
import './index.less'
import OrderHistory from "../ordersHistory/orderHistory";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CatalogInitialState, ItemType} from "../../store/reducers/catalog";
import Article from "../../modals/article /article";
import ItemsMain from "../../components/itemsMain/itemsMain";

const {TabPane} = Tabs;

const Admin = () => {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const [listView, setListView] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    };
    const items = useSelector<AppRootStateType, CatalogInitialState>(state => state.catalog)

    const changeView = (listView: boolean) => {
        setListView(listView)
        console.log(listView)
    }


    return (
        <div className="card-container">
            <Tabs type="card">
                <TabPane tab="Articles" key="1">
                    <div>
                        <Button className='Articles__btn' onClick={showModal}>Create Article</Button>
                        <Article visible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                    </div>
                    <ItemsMain/>
                </TabPane>
                <TabPane tab="Orders" key="3" className='ordersTab'>
                    <OrderHistory/>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Admin;