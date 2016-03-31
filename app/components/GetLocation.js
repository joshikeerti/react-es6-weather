import React, { PropTypes } from 'react';
import ButtonComponent from './ButtonComponent';
import InputField from './InputField';

function GetLocation (props){
    return (
        <div>
        <InputField city={props.city} onUpdateCity={props.onUpdateCity}/>
        <ButtonComponent onSubmitLocation={props.onSubmitLocation}> Get Weather</ButtonComponent>
        </div>
    );
}
export default GetLocation;
