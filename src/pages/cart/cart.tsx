import {useFormik} from "formik";
import RadioGroup from "../../formik-controls/radio-group";
import {Button} from "antd";
import * as Yup from 'yup'


const Cart = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required('Field is required').max(32).min(2)
    })

    const formik = useFormik({
        initialValues: {
            city: '',
            addressLine: '',
            postalCode: '',
            mobilePhone: '',
            notes: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: validationSchema
    })


    const handleSubmit = () => {
        formik.handleSubmit()
    }

    return (
        <div>
            <form>
                <RadioGroup/>
                <label htmlFor='city'>City:</label>
                <input type='text' id='city' name='city' onChange={formik.handleChange}
                       value={formik.values.city}/>
                <label htmlFor='addressLine'>Address Line:</label>
                <input type='text' id='addressLine' name='addressLine' onChange={formik.handleChange}
                       value={formik.values.addressLine}/>
                <label htmlFor='postalCode'>Postal Code:</label>
                <input type='text' id='postalCode' name='postalCode' onChange={formik.handleChange}
                       value={formik.values.postalCode}/>
                <label htmlFor='mobilePhone'>Mobile Phone:</label>
                <input type='text' id='mobilePhone' name='mobilePhone' onChange={formik.handleChange}
                       value={formik.values.mobilePhone}/>
                <label htmlFor='notes'>Notes:</label>
                <input type='text' id='notes' name='notes' onChange={formik.handleChange}
                       value={formik.values.notes}/>
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
};

export default Cart;