import React from 'react'
import { map } from 'ramda'

import { connect } from 'react-redux'

const li = bw => <li key={bw.id}>{bw.name}</li>

const buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const connector = connect(mapStateToProps)

export default connect(buzzwords)
