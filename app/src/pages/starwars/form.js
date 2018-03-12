import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addStarwarsName, chgStarwars } from '../../action-creators/starwars'

/*
  props will receive the following properties
  history:          some object,
  location:         some Object
  formTitle:        "some string"
  currentStarwarsName:  {id: "some id", name: "some name", value: "some value"}
  onChange:         some function
  onSubmit:         some function
*/

const StarwarsForm = props => {
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        cancelUrl="/starwars"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentStarwarsName)}
        {...props.currentStarwarsName}
        showValueInput={false}
      />
    </div>
  )
}
/*
// Spread Operator that means: // Form.id={props.currentStarwarsName.id}
// Form.name={props.currentStarwarsName.name}
// Form.value={props.currentStarwarsName.value}
*/

const mapStateToProps = state => {
  return {
    currentStarwarsName: state.currentStarwarsName
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgStarwars(field, value))
    },
    onSubmit: (history, starwarsName) => e => {
      e.preventDefault()
      dispatch(addStarwarsName(starwarsName, history))
      // dispatch is used to send an action to redux
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(StarwarsForm)
