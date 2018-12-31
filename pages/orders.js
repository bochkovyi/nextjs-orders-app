import React, { Component } from 'react'
import Page from '../layouts/main'

export default class extends Component {
  static getInitialProps ({ query: { id, users } }) {
    return { postId: id, users }
  }

  render () {
    return (
      <Page>
        <div>
          <h1>My blog post #{this.props.postId}</h1>
          <div><pre>{JSON.stringify(this.props.users, null, 2) }</pre></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Page>
    )
  }
}
