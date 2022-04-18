import React, {FC} from 'react';
import {Modal} from "antd";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import ImageUploader from "../../formik-controls/imageUploader";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {CreateNewArticle} from "../../store/reducers/catalog/actions";
import MultiSelect from "../../formik-controls/multiSelect";
import {TApplicationState} from "../../store/aplication-state";
import {ICategory} from "../../models/category";


type Props = {
    visible: boolean
    setIsModalVisible: (visible: boolean) => void
}

const Article: FC<Props> = ({visible, setIsModalVisible}) => {

    const dispatch = useDispatch()
    const categories = Object.values(useSelector<TApplicationState, ICategory[]>(state => state.category))

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const initialState = {
        title: '',
        description: '',
        cost: 0,
        uploadedImages: [],
        maker: '',
        category: [],
        subcategory: '',
    }
    type InitialState = typeof initialState

    const handlerButton = (values: InitialState, onSubmitProps: any) => {
        setIsModalVisible(false)
        // dispatch(CreateNewArticle({
        //     ...values,
        //     added_date: new Date().toDateString(),
        //     available: true,
        //     id: uuidv4(),
        //     rating: 0,
        //     comment: {}
        // }))
        onSubmitProps.resetForm()

    }

    return (
        <Formik initialValues={initialState} onSubmit={handlerButton}>
            {formik => (
                    <Modal visible={visible} onOk={() => handlerButton(formik.values, formik)}
                           onCancel={handleCancel}>
                        <Form>
                            <InputComponent name={'title'} label={'Article Name'}/>
                            <InputComponent name={'description'} label={'Description'}/>
                            <InputComponent type='number' name={'cost'} label={'Price'}/>
                            <InputComponent name={'maker'} label={'Maker'}/>
                            {/*<MultiSelect name={'category'} label={'Select Category'} options={categories}/>*/}
                            <ImageUploader name={'uploadedImages'} label={'Upload Images'}/>
                        </Form>
                    </Modal>
                )
            }
        </Formik>
    );
};

export default Article;