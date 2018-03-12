import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = bw => {
  return <li key={bw.id}>{bw.name}</li>
}

const buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <Link to="/buzzwords/new">Add New Buzzword</Link>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(buzzwords)

// class Buzzwords extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       buzzwords: []
//     }
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:5000/buzzwords')
//       .then(res => res.json())
//       .then(apiBWs => this.setState({ buzzwords: apiBWs }))
//       .catch(err => {
//         console.log('BUZZWORD FETCH ERROR', err)
//         this.setState({ fetchErrorMsg: 'Problem getting buzzwords from api.' })
//       })
//   }
//
//   render(props) {
//     return (
//       <div>
//         <h1>Buzzwords</h1>
//         <ul>{map(li, this.state.buzzwords)}</ul>
//       </div>
//     )
//   }
// }
//
// export default Buzzwords
