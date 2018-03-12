import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function li(color) {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/colors/new">Add New Color</Link>
      {map(li, props.colors)}
    </div>
  )
}

const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)

// import fetch from 'isomorphic-fetch'
// class Colors extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       colors: []
//     }
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:5000/colors')
//       .then(res => res.json())
//       .then(apiColors => this.setState({ colors: apiColors }))
//       .catch(err => {
//         console.log('COLORS FETCH ERROR', err)
//         this.setState({ fetchErrorMsg: 'Problem getting colos from api.' })
//       })
//   }
//
//   render(props) {
//     return (
//       <div>
//         <h1>Colors</h1>
//         <ul>{map(li, this.state.colors)}</ul>
//       </div>
//     )
//   }
// }
//
// export default Colors
