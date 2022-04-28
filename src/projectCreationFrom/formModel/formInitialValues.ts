import {projectFormModel} from './projectFormModel'

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

type formFieldsType = {
	formField: {
		projectName: string
		requestNumber: string
		budget: string,
		contract: string,
		competition: string,
		contractFrom: any
		contractYear: any
		announced: boolean,
		session: string | null
		announcedInput: string,
		projectGoal: string,
		projectDescription: string,
		projectStatus: null | string
		projectFinishDate: any
	}
}
export const initialValues: formFieldsType = {
	formField: {
		projectName: "",
		requestNumber: '',
		budget: "",
		contract: "",
		competition: "",
		contractFrom: null,
		contractYear: null,
		announced: false,
		session: null,
		announcedInput: "",
		projectGoal: "",
		projectDescription: "",
		projectStatus: null,
		projectFinishDate: null,
	}
}
