// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Title', name: 'title', noValueError: 'Provide a survey title' },
	{ label: 'Subject Line', name: 'subject', noValueError: 'Provide a subject line' },
	{ label: 'Email Body', name: 'body', noValueError: 'Provide an email body' },
	{ label: 'Recipient List', name: 'emails', noValueError: 'Provide a list of recipients' }
];

class SurveyForm extends React.Component {
	renderFields() {
		return _.map(FIELDS, function({ label, name }) {
			return <Field type="text" label={label} name={name} component={SurveyField} key={name} />;
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});
	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
