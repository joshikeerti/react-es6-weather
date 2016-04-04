import React, { PropTypes } from 'react';
// import ButtonComponent from './ButtonComponent';
// import InputField from './InputField';

function ButtonComponent ({children, onSubmitLocation}){
    return (
        <button type="button"
            className="btn btn-block btn-success"
             onClick={onSubmitLocation}>
             {children}
        </button>
    );
}

function InputField ({city, onUpdateLocation}){
    return (
        <input className="form-control"
            type="text"
            placeholder='Cupertino, CA'
            value={city} onChange={onUpdateLocation}/>
    );
}

function GetLocation (props){
    console.log(props)
    return (
        <div>
        <InputField city={props.city} onUpdateLocation={props.onUpdateLocation}/>
        <ButtonComponent onSubmitLocation={props.onSubmitLocation}> Get Weather</ButtonComponent>
        </div>
    );
}
export default GetLocation;
