export const projectFormModel = {
	formId: 'projectFrom',
	formField: {
		projectName: {
			name: 'projectName',
			label: 'Project Name*',
			requiredErrorMsg: 'Project name is required!',
			placeholder:'Enter Project name'
		},
		requestNumber: {
			name: 'requestNumber',
			label: 'Request number*',
			requiredErrorMsg: 'Request number is required!',
			placeholder:'Enter Request number'
		},
		budget: {
			name: 'budget',
			label: 'Budget*',
			requiredErrorMsg: 'Budget value is required!',
			placeholder:'Enter Budget'
		},
		contract: {
			name: 'contract',
			label: 'Contract*',
			requiredErrorMsg: 'Contract name is required!',
			placeholder:'Enter Contract'
		},
		competition: {
			name: 'competition',
			label: 'Competition*',
			requiredErrorMsg: 'Please select competition value',
			placeholder:'Enter Competition'
		},
		contractFrom: {
			name: 'contractFrom',
			label: 'From*',
			requiredErrorMsg: 'Please select From value',
			placeholder:'Select Date'
		},
		contractYear: {
			name: 'contractYear',
			label: 'Contract Year*',
			requiredErrorMsg: 'ContractYear is required',
			placeholder:'Select Year'

		},
		announced: {
			name: 'announced',
			label: 'Announced',
		},
		session: {
			name: 'session',
			label: 'Session*',
			requiredErrorMsg: 'Session is required',
			placeholder:'Select Session'
		},
		announcedInput: {
			name: 'announcedInput',
			label: '',
		},
		projectGoal: {
			name: 'projectGoal',
			label: 'Project Goal',
			placeholder:'Enter Project Goal'
		},
		projectDescription: {
			name: 'projectDescription',
			label: 'Project Description',
			placeholder:'Enter Project Description'
		},
		projectStatus: {
			name: 'projectStatus',
			label: 'Status',
			placeholder:'Select Status'
		},
		projectFinishDate: {
			name: 'projectFinishDate',
			label: 'Finish Date',
		},

	}
};

export type ProjectFormType = typeof projectFormModel
export type ProjectFieldType = typeof projectFormModel.formField
