import React from 'react';

const withClassComponent = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClassComponent;
