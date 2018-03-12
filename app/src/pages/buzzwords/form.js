import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addBuzzword, chgBuzzword } from '../../action-creators/buzzwords'

/*
  props will receive the following properties
  history:          some object,
  location:         some Object
  formTitle:        "some string"
  currentBuzzword:  {id: "some id", name: "some name", value: "some value"}
  onChange:         some function
  onSubmit:         some function
*/

const BuzzwordForm = props => {
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        cancelUrl="/buzzwords"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentBuzzword)}
        {...props.currentBuzzword}
        showValueInput={false}
      />
    </div>
  )
}
// Spread Operator that means: // Form.id={props.currentBuzzword.id}
// Form.name={props.currentBuzzword.name}
// Form.value={props.currentBuzzword.value}

function mapStateToProps(state) {
  console.log('BuzzwordForm state', state)
  return {
    currentBuzzword: state.currentBuzzword
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgBuzzword(field, value))
    },
    onSubmit: (history, buzzword) => e => {
      e.preventDefault()
      dispatch(addBuzzword(buzzword, history))
      // dispatch is used to send an action to redux
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(BuzzwordForm)
