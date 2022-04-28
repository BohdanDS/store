import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {initialValues} from "./formModel/formInitialValues";
import validationSchema from "./formModel/validationSchema";
import {projectFormModel} from "./formModel/projectFormModel";
import ProjectCreation from "./form-steps/project-creation/projectCreation";
import './index.less'

const {formId, formField} = projectFormModel
const steps = ['Project Creation', 'Project Theme Details', 'Project Resources', 'Project Executor'];


const ProjectForm = () => {

	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;

	const submitForm = (values: any, actions: any) => {
		console.log(values)
		actions.setSubmitting(false);
		setActiveStep(activeStep + 1);
	}

	function handleSubmit(values: any, actions: any) {
		if (isLastStep) {
			submitForm(values, actions);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	}

	function handleBack() {
		console.log(activeStep)
		setActiveStep(activeStep - 1);
	}


	return (
		<>
			{activeStep === steps.length ? ('Project Creation is Finished')
				: (<Formik initialValues={initialValues.formField} onSubmit={handleSubmit}
					// validationSchema={validationSchema[activeStep]}
				>
					{(formik) => (
						<Form id={formId}>
							<ProjectCreation formFiled={formField}/>
							<div className='form-Buttons'>
								{activeStep !== 0 && (
									<button type='button' className='form-Buttons__back' onClick={handleBack}><span>Back</span></button>
								)}
									<button className='form-Buttons__success' type="submit">
										<span>{isLastStep ? 'Finish' : 'Next'}</span>
									</button>
							</div>
						</Form>
					)}
				</Formik>)}
		</>
	);
};

export default ProjectForm;