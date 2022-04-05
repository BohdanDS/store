import React from 'react';
import {InputComponent} from "../../formik-controls";
import ImageUploader from "../../formik-controls/imageUploader";


const AddArticle = () => {

    const onSubmit = (values: any) => {
        console.log('Add Article data: ', values)
    }
    return (
        <div>
            {/*<InputComponent name={'title'} label={'Article Name'}/>*/}
            {/*<InputComponent name={'description'} label={'Description'}/>*/}
            {/*<InputComponent name={'price'} label={'Price'}/>*/}
            {/*<ImageUploader/>*/}
            {/*<Button type={'default'}>Cancel</Button>*/}
            {/*<Button htmlType="submit" type={'default'}>Submit</Button>*/}
        </div>
    );
};

export default AddArticle;