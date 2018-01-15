import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(){
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
