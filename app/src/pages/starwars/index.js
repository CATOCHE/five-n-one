import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'

function li(c) {
  return <li key={c.id}>{c.name}</li>
}

// const StarWars = props => {
//   return (
//     <div>
//       <h1>Star Wars Character Names</h1>
//       {map(li, props.starwars)}
//     </div>
//   )
// }
//
// function mapStateToProps(state) {
//   return { starwars: state.starWarsCharacters }
// }
//
// const connector = connect(mapStateToProps)
//
// export default connector(StarWars)

class Starwars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      starwars: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/starwars')
      .then(res => res.json())
      .then(apiSWs => this.setState({ starwars: apiSWs }))
      .catch(err => {
        console.log('STARWARS FETCH ERROR', err)
        this.setState({
          fetchErrorMsg: 'Problem getting starwars names from api.'
        })
      })
  }

  render(props) {
    return (
      <div>
        <h1>Starwars Names</h1>
        <ul>{map(li, this.state.starwars)}</ul>
      </div>
    )
  }
}

export default Starwars
