import React, {FC} from 'react';
import {ProjectFieldType} from "../../formModel/projectFormModel";
import InputText from "../../../formik-controls/inputText";
import DatePickerField from "../../../formik-controls/datePickerField";
import SelectField from "../../../formik-controls/SelectField";
import CheckboxField from "../../../formik-controls/CheckboxField";
import {projectStatuses, sessionList, yearsList} from "../../../fakeData";
import './index.less'
import RichTextArea from "../../../formik-controls/richTextArea";
import {Field, FieldAttributes} from "formik";

type Props = {
	formFiled: ProjectFieldType
}

const ProjectCreation: FC<Props> = ({formFiled}) => {
	return (
		<div style={{display: "flex", flexDirection: 'column'}}>
			<div className='projectName'>
				<InputText name={formFiled.projectName.name} label={formFiled.projectName.label}/>
			</div>
			<div className='requestBudget'>
				<div className='requestBudget__Number'><InputText name={formFiled.requestNumber.name}
				                                                  label={formFiled.requestNumber.label}/></div>
				<div className='requestBudget__Budget'><InputText name={formFiled.budget.name}
				                                                  label={formFiled.budget.label}/></div>
			</div>
			<div className='contractAnnounced'>
				<div className='contractAnnounced__contractName'>
					<InputText name={formFiled.contract.name} label={formFiled.contract.label}/>
				</div>
				<div className='contractAnnounced__contractFrom'>
					<DatePickerField name={formFiled.contractFrom.name} label={formFiled.contractFrom.label}/>
				</div>
				<div className='contractAnnounced__announcedCheckbox'>
					<CheckboxField name={formFiled.announced.name} label={formFiled.announced.label}/>
				</div>
				<div className='contractAnnounced__announcedInput'>
					<InputText name={formFiled.announcedInput.name} label={formFiled.announcedInput.label}/>
				</div>
			</div>
			<div className='competitionSession'>
				<div className='competitionSession__competition'>
					<InputText name={formFiled.competition.name} label={formFiled.competition.label}/>
				</div>
				<div className='competitionSession__contractYear'>
					<SelectField name={formFiled.contractYear.name} label={formFiled.contractYear.label}
					             values={yearsList}/>
				</div>
				<div className='competitionSession__session'>
					<SelectField name={formFiled.session.name} label={formFiled.session.label} values={sessionList}/>
				</div>
			</div>
			<div className='statusFinish'>
				<div className='statusFinish__Status'>
					<SelectField name={formFiled.projectStatus.name} label={formFiled.projectStatus.label}
					             values={projectStatuses}/>
				</div>
				<div className='statusFinish__Date'>
					<DatePickerField name={formFiled.projectFinishDate.name} label={formFiled.projectFinishDate.label}/>
				</div>
			</div>
			<div className='richTextBlock'>
				<RichTextArea name={formFiled.projectGoal.name} label={formFiled.projectGoal.label}/>
			</div>
			<div className='richTextBlock'>
				<RichTextArea name={formFiled.projectDescription.name} label={formFiled.projectDescription.label}/>
			</div>
		</div>
	);
};

export default ProjectCreation;