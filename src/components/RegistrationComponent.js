import React, { useReducer } from 'react';
import { createRegistration } from '../services/registrationService';
import registrationReducer, { initialUserState } from '../reducer/registrationReducer';


export const RegistrationComponent = () => {
    const [ state, dispatch ] = useReducer(registrationReducer, initialUserState);

    const handleSubmit = (event) => {
        event.preventDefault();
        createRegistration(state)
        .then(() => {
            dispatch({ type: 'reset'});
            console.log(`User was successfully added!`);
        })
        .catch(() => {
            console.log('Unable to complete registration.');
        });
    }

    const handleChange = (event) => {
        dispatch({
            type: 'update',
            field: event.target.name,
            value: event.target.value
        });
    };

    return (
        <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                <div className = "card-body">
                    <form onSubmit={handleSubmit}>
                        <div className = "form-group">
                            <label> First Name: </label>
                            <input placeholder="First Name" name="firstName" className="form-control" 
                                value={state.firstName} onChange={(event) => handleChange(event)}/>
                        </div>
                        <div className = "form-group">
                            <label> Last Name: </label>
                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                value={state.lastName} onChange={(event) => handleChange(event)}/>
                        </div>
                        <div className = "form-group">
                            <label> NPI Number: </label>
                            <input placeholder="NPI Number" name="npiNumber" className="form-control" 
                                value={state.npiNumber} onChange={(event) => handleChange(event)}/>
                        </div>
                        <div className = "form-group">
                            <label> Business Address: </label>
                            <input placeholder="Business Address" name="businessAddress" className="form-control" 
                                value={state.businessAddress} onChange={(event) => handleChange(event)}/>
                        </div>
                        <div className = "form-group">
                            <label> Telephone Number: </label>
                            <input placeholder="Telephone Number" name="telephoneNumber" className="form-control" 
                                value={state.telephoneNumber} onChange={(event) => handleChange(event)}/>
                        </div>
                        <div className = "form-group">
                            <label> Email Address: </label>
                            <input placeholder="Email Address" name="emailAddress" className="form-control" 
                                value={state.emailAddress} onChange={(event) => handleChange(event)}/>
                        </div>

                        <input type='submit' className="btn btn-success" value="Save" />
                        <button className="btn btn-danger" >Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationComponent;
