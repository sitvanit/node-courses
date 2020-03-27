import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // allows us to use this.context.authenticated instead of <AuthContext.Consumer>
    // can be used only in class components in functions we'll use useContext.
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        // under the wood, it's exactly like using Aux (in hoc)
        return (
            <Fragment>
                {/*<AuthContext.Consumer>*/}
                {/*    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}*/}
                {/*</AuthContext.Consumer>*/}
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>
                    {this.props.children}
                </p>
                <input
                    type="text"
                    // ref={(inputElement) =>  {this.inputElement = inputElement}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
