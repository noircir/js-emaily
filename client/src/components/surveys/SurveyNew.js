// SurveyNew shows SurveyForm and SurveyFormReview
import React from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends React.Component {
	state = { showFromReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
		}

		return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

// Generally, the form wiring up here (the parent of SurveyForm and SurveyFormReview)
// is not needed. However, wiring a form here helps to clear up the form fields
// when starting a new review.
export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
