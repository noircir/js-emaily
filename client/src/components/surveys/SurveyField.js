// SurveyField contains logic to render a single label and text input
import React from 'react';

// Redux-form sends props which are deconstructed here
export default ({ input, label, meta: { touched, error } }) => {
	// console.log(touched, error);
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
