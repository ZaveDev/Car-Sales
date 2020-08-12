import React from 'react';

import {connect} from 'react-redux'
import {addFeature} from '../actions'




const AdditionalFeature = props => {
  console.log(props);
  const featureAdded = e => {
    e.preventDefault()
    props.addFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={featureAdded}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, {addFeature})(AdditionalFeature);
