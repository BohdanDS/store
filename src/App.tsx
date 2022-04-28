import React from 'react';
import './App.less';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ProjectForm from "./projectCreationFrom/projectForm";

function App() {
	return (
		<div className="App">
			<ProjectForm/>
		</div>
	);
}

export default App;
