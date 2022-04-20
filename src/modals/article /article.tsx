import React, {FC} from 'react';
import {Button, Modal} from "antd";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import ImageUploader from "../../formik-controls/imageUploader";
import {useDispatch, useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {ICategory} from "../../models/category";
import MultiSelect from "../../formik-controls/multiSelect";
import {CloseModal} from "../../store/reducers/modals/actions";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import {arrayToObjArray} from "../../utils/arrayToObjArray";


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
        price: 0,
        img: '',
        categories: [],
    }
    type InitialState = typeof initialState

    const handlerButton = (values: InitialState, onSubmitProps: any) => {
        setIsModalVisible(false)
        const categoriesObj = arrayToObjArray(values.categories)
        dispatch({type: CatalogActionType.START_CREATE_NEW_ARTICLE, ...values, categories: categoriesObj})
        onSubmitProps.resetForm()

    }
    const onCancel = () => {
        dispatch(CloseModal())
    }

    return (
        <Formik initialValues={initialState} onSubmit={handlerButton}>
            {formik => (
                <Modal visible={visible} onOk={() => handlerButton(formik.values, formik)}
                       onCancel={handleCancel}>
                    <Form>
                        <InputComponent name={'title'} label={'Article Name'}/>
                        <InputComponent type='number' name={'price'} label={'Price'}/>
                        <MultiSelect name={'categories'} label={'Select Category'} options={categories}/>
                        <ImageUploader name={'img'} label={'Upload Images'}/>
                        <div className='modal_controls'>
                            <Button type={'default'} onClick={onCancel}>Cancel</Button>
                            <Button htmlType="submit" type={'default'}>Create</Button>
                        </div>
                    </Form>
                </Modal>
            )
            }
        </Formik>
    );
};

export default Article;