import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

function li(emoji) {
  return <li key={emoji.id}>{emoji.value}</li>
}

class Emojis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emojis: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/emojis')
      .then(res => res.json())
      .then(apiEmojis => this.setState({ emojis: apiEmojis }))
      .catch(err => {
        console.log('EMOJIS FETCH ERROR', err)
        this.setState({
          fetchErroMsg: 'Problem getting emojis from api.'
        })
      })
  }

  render(props) {
    console.log('render emojis this.state.emojis: ', this.state.emojis)
    return (
      <div>
        <h1>Emojis</h1>
        <ul>{map(li, this.state.emojis)}</ul>
      </div>
    )
  }
}

export default Emojis
