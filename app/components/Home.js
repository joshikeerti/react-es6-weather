import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import GetLocation from './GetLocation';

function Home (props){
    return (
      <div className="col-sm-6 col-sm-offset-3 text-center">
        <h1>Enter your city and state</h1>
        <GetLocation/>
      </div>
    );
}
export default Home;
