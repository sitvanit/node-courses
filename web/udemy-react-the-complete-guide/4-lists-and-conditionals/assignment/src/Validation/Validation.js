import React from 'react';

// Because we are not using state here, it doesn't have to be a class
const validation = props => {
    const validationMessage = props.inputLength > 5 ? 'Text long enough' : 'Text too short';
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation
