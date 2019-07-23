import React from 'react'
import { connect } from 'react-redux'
import Smurf from '../components/smurf'

const SmurfsList = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
      
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </ul>
  )
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    smurf: state.smurf
  }
}

export default connect(mapStateToProps, null)(SmurfsList);


  