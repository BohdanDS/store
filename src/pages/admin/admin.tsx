import React, {useState} from 'react';
import {Button, Pagination, Tabs} from "antd";
import './index.less'
import OrderHistory from "../ordersHistory/orderHistory";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {ItemType} from "../../store/catalog";
import ArticleList from "../../components/article/article";
import Article from "../../modals/article /article";

const {TabPane} = Tabs;

const Admin = () => {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const items = useSelector<AppRootStateType, ItemType[]>(state => state.catalog)


    return (
        <div className="card-container">
            <Tabs type="card">
                <TabPane tab="Articles" key="1">
                    <Button onClick={showModal}>Add Article</Button>
                    <Article visible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {
                            items.map(item => {
                                return (
                                    <ArticleList key={item.id} title={item.title} price={item.cost} id={item.id}/>
                                )
                            })
                        }
                    </div>
                    <Pagination className='card-container__pagination' defaultCurrent={1} total={50}/>
                </TabPane>
                <TabPane tab="Orders" key="3" className='ordersTab'>
                    <OrderHistory/>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Admin;