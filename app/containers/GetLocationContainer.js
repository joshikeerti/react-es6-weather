import React, { PropTypes } from 'react';
import GetLocation from '../components/GetLocation';

class GetLocationContainer extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state = { city: '' }
  }

  handleSubmitLocation(event) {
    console.log(this.context)
    event.preventDefault()
    this.context.router.push('/forecast/' + this.state.city)
  }

  handleUpdateLocation(event) {
    this.setState ({
      city: event.target.value
  })
  }


  render() {
    return (
    <GetLocation
      onSubmitLocation= {(event) => this.handleSubmitLocation(event)}
      onUpdateLocation= {(event) => this.handleUpdateLocation(event)}
      city={this.state.city}
      />
    );
  }

}

GetLocationContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default GetLocationContainer;
