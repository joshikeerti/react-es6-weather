import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import GetLocationContainer from '../containers/GetLocationContainer';

function Home (props){
    return (
      <div className="col-sm-6 col-sm-offset-3 text-center">
        <h1>Enter your city and state</h1>
        <GetLocationContainer/>
      </div>
    );
}
export default Home;
