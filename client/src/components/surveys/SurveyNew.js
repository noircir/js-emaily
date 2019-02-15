// SurveyNew shows SurveyForm and SurveyFormReview
import React from 'react';
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

export default SurveyNew;
