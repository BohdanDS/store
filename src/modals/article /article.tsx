import React, {FC} from 'react';
import {Modal} from "antd";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import ImageUploader from "../../formik-controls/imageUploader";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {CreateNewArticle} from "../../store/catalog/actions";


type Props = {
    visible: boolean
    setIsModalVisible: (visible: boolean) => void
}

const Article: FC<Props> = ({visible, setIsModalVisible}) => {

    const dispatch = useDispatch()

    // const handleOk = (values: InitialState) => {
    //     debugger
    //     // dispatch(CreateNewArticle({...values, added_date: new Date().toDateString(), available: true, id: uuidv4()}))
    //     console.log(values)
    //     setIsModalVisible(false)
    // };

    const handleCancel = () => {
        setIsModalVisible(false)
        console.log('handleCancel')
    }

    const initialState = {
        title: '',
        description: '',
        cost: 0,
        uploadedImages: [],
        maker: '',
        category: '',
        subcategory: '',
    }
    type InitialState = typeof initialState

    const handlerButton = (values: InitialState) => {
        setIsModalVisible(false)
        dispatch(CreateNewArticle({...values, added_date: new Date().toDateString(), available: true, id: uuidv4(), rating:0, comment:{}}))
        console.log(values)
    }

    const test = (values: any) => {
        console.log('test', values)
    }


    return (
        <Formik initialValues={initialState} onSubmit={handlerButton}>
            {formik =>
                <Modal visible={visible} onOk={() => handlerButton(formik.values)} onCancel={handleCancel}>
                    <Form>
                        <InputComponent name={'title'} label={'Article Name'}/>
                        <InputComponent name={'description'} label={'Description'}/>
                        <InputComponent type='number' name={'cost'} label={'Price'}/>
                        <InputComponent name={'maker'} label={'Maker'}/>
                        <InputComponent name={'category'} label={'Category'}/>
                        <InputComponent name={'subcategory'} label={'Subcategory'}/>
                        <ImageUploader print={test} name={'uploadedImages'} label={'Upload Images'}/>
                    </Form>
                </Modal>}
        </Formik>

    );
};

export default Article;