//form shows a form for user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    {label: 'Survey Title', name : 'title'},
    {label: 'Subject Line', name : 'subject'},
    {label: 'Email Body', name : 'body'},
    {label: 'Recipient List', name : 'emails'}
]

class SurveyForm extends Component { 
    RenderFields() {
        return _.map(FIELDS, field => {
            return <Field key = {field.name} component={SurveyField} type = "text" label = {field.label} name = {field.name}/>
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.RenderFields()}
                    <Link to="/surveys" className = "red btn-flat left white-text">
                        cancel
                    </Link>
                    <button type = "submit" className = "teal btn-flat right white-text"> 
                        Next
                        <i className = "material-icons right"> done </i> 
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors ={};
    
    /*
    if(!values.title) {
        errors.title = 'You must provide a Title'
    }
    */ 
   
    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name }) => {
        if(!values[name]){
            errors[name] = 'You need to must provide a value';    
        }
    });

    return errors;
}


export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);