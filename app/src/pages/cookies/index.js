import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

function li(cookie) {
  return <li key={cookie.id}>{cookie.value}</li>
}

const cookies = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      <ul>{map(li, props.cookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { cookies: state.cookies }
}

const connector = connect(mapStateToProps)

export default connector(cookies)

// import fetch from 'isomorphic-fetch'
// class Cookies extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cookies: []
//     }
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:5000/fortune-cookies')
//       .then(res => res.json())
//       .then(apiFCs => this.setState({ cookies: apiFCs }))
//       .catch(err => {
//         console.log('FORTUNE-COOKIES FETCH ERROR', err)
//         this.setState({
//           fetchErrorMsg: 'Problem getting fortune-cookies from api.'
//         })
//       })
//   }
//
//   render(props) {
//     return (
//       <div>
//         <h1>Fortune Cookies</h1>
//         <ul>{map(li, this.state.cookies)}</ul>
//       </div>
//     )
//   }
// }
//
// export default Cookies
