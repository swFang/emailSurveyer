//form shows a form for user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component { 
    RenderFields() {
        return (
            <div>
               
               <Field label = "Survey Title" type = "text" name = "title" component = {SurveyField} />
               <Field label = "Subject Line" type = "text" name = "Subject" component = {SurveyField} />
               <Field label = "Email body" type = "text" name = "body" component = {SurveyField} />
               <Field label = "Recipient List" type = "text" name = "emails" component = {SurveyField} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values =>console.log(values))}>
                    {this.RenderFields()}
                    <Field 
                        type="text"
                        name="surveyTitle"
                        component="input"
                    />
                    <button type = "submit"> Submit </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);