import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class ProfileComponent extends Component {

    state = {
        name: 'Brett',
        lastname: 'Gamble'
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }


    render() {
        console.log(this.state)
        return(
            <>
                <form>
                    <div>
                        <label>
                            Enter Name
                        </label>
                        <br/>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <br />
                    <br />
                    <div>
                        <label>
                            Enter LastName
                        </label>
                        <br/>
                        <input
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleLastNameChange}
                        />
                    </div>
                </form>
            </>
        )
    }

}

// ProfileComponent.propTypes = {
//     // name: PropTypes.string,
//     // name: PropTypes.oneOf(['Francis', 'James', 'Steve']),
//     name: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.oneOf(['Francis', 'James', 'Steve'])
//     ]),
//     lastname: PropTypes.string,
//     age: PropTypes.number,
//     hobbies: PropTypes.arrayOf(PropTypes.string),
//     spanish: PropTypes.bool,
//     message: PropTypes.func,
//     car: PropTypes.object,
//     // mother: PropTypes.string.isRequired
//     mother: function(props, propName, componentName){
//         if(props[propName] !== 'Jane') {
//             return new Error(`The name ${props[propName]} is incorrect`)
//         }
//     }
// }

export default ProfileComponent;