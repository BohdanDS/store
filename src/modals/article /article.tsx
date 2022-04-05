import React, {FC} from 'react';
import {Modal} from "antd";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import ImageUploader from "../../formik-controls/imageUploader";
import {IArticle} from "../../models/interfaces";

type Props = {
    visible: boolean
    setIsModalVisible: (visible: boolean) => void
}

const Article: FC<Props> = ({visible, setIsModalVisible}) => {
    const handleOk = (...values: any) => {
        console.log(values)
        setIsModalVisible(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false)
        console.log('handleCancel')
    }

    const initialState: Omit<IArticle, 'id'> = {
        title: '',
        description: '',
        price: '',
        uploadedImages: [],
    }
    //
    // const handlerButton = (...rest:any)=>()=>{
    //     setIsModalVisible(false)
    //     console.log(rest)
    // }

    const handlerButton = (values: Omit<IArticle, 'id'>) => {
        setIsModalVisible(false)
        console.log(values)
    }

    const test = (values: any) => {
        console.log('test', values)
    }


    return (
        <Formik initialValues={initialState} onSubmit={handleOk}>
            {formik =>
                <Modal visible={visible} onOk={() => handlerButton(formik.values)} onCancel={handleCancel}>
                    <Form>
                        <InputComponent name={'title'} label={'Article Name'}/>
                        <InputComponent name={'description'} label={'Description'}/>
                        <InputComponent name={'price'} label={'Price'}/>
                        <ImageUploader print={test} name={'uploadedImages'} label={'Upload Images'}/>
                    </Form>
                </Modal>}
        </Formik>

    );
};

export default Article;