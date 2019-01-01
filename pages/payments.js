import React, { Component } from 'react'
import Page from '../layouts/main'

export default class extends Component {
  static getInitialProps ({ query: { payments } }) {
    return { payments }
  }

  render () {
    return (
      <Page>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Method</th>
              <th scope="col">Meta</th>
              <th scope="col">Success</th>
              <th scope="col">Order Id</th>
              <th scope="col">Order Amount</th>
              <th scope="col">Order created</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.payments.map(item =>
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.method}</td>
                <td>{item.meta}</td>
                <td>{item.success ? 'Success' : 'Payment canceled'}</td>
                <td>{item.order_id}</td>
                <td>{item.order ? (item.order.amount_cents/100).toFixed(2) : ''}</td>
                <td>{new Date(item.created_at).toLocaleString("en-US")}</td>
              </tr>)
            }
          </tbody>
        </table>
      </Page>
    )
  }
}
