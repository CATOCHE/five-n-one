import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

function li(cookie) {
  return <li key={cookie.id}>{cookie.value}</li>
}

class Cookies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cookies: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/fortune-cookies')
      .then(res => res.json())
      .then(apiFCs => this.setState({ cookies: apiFCs }))
      .catch(err => {
        console.log('FORTUNE-COOKIES FETCH ERROR', err)
        this.setState({
          fetchErrorMsg: 'Problem getting fortune-cookies from api.'
        })
      })
  }

  render(props) {
    return (
      <div>
        <h1>Fortune Cookies</h1>
        <ul>{map(li, this.state.cookies)}</ul>
      </div>
    )
  }
}

export default Cookies
