import React from 'react'
import Page from '../layouts/main'
import Router from 'next/router'

export default () => {
  const onClick = (e) => {
    e.preventDefault();
    Router.push('/new');
  }
  return (<Page>
    <div className="jumbotron">
      <h1 className="display-3">Orders app</h1>
      <p className="lead">Here you can create the order and check the status</p>
      <hr className="my-4" />
      <p>Also you have the list of payment transactions. No real payments handling, just a demo.</p>
      <p className="lead">
        <a onClick={onClick} className="btn btn-primary btn-lg" href="#" role="button">Create new order</a>
      </p>
    </div>
  </Page>)
}
