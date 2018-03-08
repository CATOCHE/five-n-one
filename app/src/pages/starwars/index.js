import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'

function li(c) {
  return <li key={c.id}>{c.name}</li>
}

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars Character Names</h1>
      {map(li, props.starwars)}
    </div>
  )
}

function mapStateToProps(state) {
  return { starwars: state.starWarsCharacters }
}

const connector = connect(mapStateToProps)

export default connect(StarWars)
