import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProfileComponent extends Component {

    render() {
        console.log(this.props)
        return(
            <>
                Profile
            </>
        )
    }

}

ProfileComponent.propTypes = {
    // name: PropTypes.string,
    // name: PropTypes.oneOf(['Francis', 'James', 'Steve']),
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['Francis', 'James', 'Steve'])
    ]),
    lastname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.arrayOf(PropTypes.string),
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    // mother: PropTypes.string.isRequired
    mother: function(props, propName, componentName){
        if(props[propName] !== 'Jane') {
            return new Error(`The name ${props[propName]} is incorrect`)
        }
    }
}

export default ProfileComponent;