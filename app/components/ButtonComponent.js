import React, { PropTypes } from 'react';

function ButtonComponent (props){
    return (
        <button type="button"
            className="btn btn-block btn-success"
             onClick={props.onSubmitLocation}>
             {props.children}
        </button>
    );
}
export default ButtonComponent;
