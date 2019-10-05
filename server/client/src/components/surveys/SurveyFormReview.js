import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = ({ onCancel }) => {
    return (
        <div>
            <h5>Please confirm your entries </h5>
            <button
                className = "yellow darken-3 btn-flat"
                onClick = { onCancel }
            >
                Back
            </button>
        </div>
    );
};

export default connect()(SurveyReview); 