import React, { Component } from 'react'
import Page from '../layouts/main'

export default class extends Component {
  static getInitialProps ({ query: { orders } }) {
    return { orders }
  }

  render () {
    return (
      <Page>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Order name</th>
              <th scope="col">Order status</th>
              <th scope="col">Order amount, USD</th>
              <th scope="col">Order created</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.orders.map(item =>
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{(item.amount_cents/100).toFixed(2)}</td>
                <td>{new Date(item.created_at).toLocaleString("en-US")}</td>
              </tr>)
            }
          </tbody>
        </table>
      </Page>
    )
  }
}
