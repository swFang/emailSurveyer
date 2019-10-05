//SurveNew shows form and formreview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyReview from './SurveyFormReview';

class SurveyNew extends Component { 
    constructor(props) {
        super(props);

        this.state = { showFormReview: false };
    }

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyReview
            onCancel = { () => this.setState({ showFormReview : false})}
            />;
        }
        return <SurveyForm onSurveySubmit={ () => this.setState({showFormReview: true})}
        />;
    }
    //state = { formReview: false};

    render() {
        return (        
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyNew);