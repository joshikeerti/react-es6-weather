import React, { PropTypes } from 'react';

function InputField (props){
    return (
        <input className="form-control"
            type="text"
            placeholder='Cupertino, CA'
            value={props.city} onChange={props.onUpdateCity}/>
    );
}
export default InputField;
