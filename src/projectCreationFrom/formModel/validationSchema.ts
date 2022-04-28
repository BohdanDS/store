import * as Yup from 'yup';
import {projectFormModel} from "./projectFormModel";

const {
	formField: {
		projectName,
		requestNumber,
		budget,
		contract,
		competition,
		contractFrom,
		contractYear,
		announced,
		session,
		announcedInput,
		projectGoal,
		projectDescription,
		projectStatus,
		projectFinishDate
	}
} = projectFormModel

export default [
	Yup.object().shape({
		[projectName.name]: Yup.string().required(`${projectName.requiredErrorMsg}`),
		[requestNumber.name]: Yup.string().required(`${requestNumber.requiredErrorMsg}`),
		[budget.name]: Yup.string().required(`${budget.requiredErrorMsg}`),
		[contract.name]: Yup.string().required(`${contract.requiredErrorMsg}`),
		[competition.name]: Yup.string().required(`${competition.requiredErrorMsg}`),
		// [contractFrom.name]: Yup.string().required(`${contractFrom.requiredErrorMsg}`),
		[contractYear.name]: Yup.string().required(`${contractYear.requiredErrorMsg}`),
		[announced.name]: Yup.boolean(),
		[session.name]: Yup.string().required(`${session.requiredErrorMsg}`),
		[announcedInput.name]: Yup.string(),
		[projectGoal.name]: Yup.string(),
		[projectDescription.name]: Yup.string(),
		[projectStatus.name]: Yup.string(),
		[projectFinishDate.name]: Yup.string(),
	})
]