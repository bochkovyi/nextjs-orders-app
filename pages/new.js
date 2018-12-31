import Page from '../layouts/main'

export default () =>
<Page>
<div className="jumbotron">
  <form action="/orders/create" method="post">
    <fieldset>
      <legend>Create order</legend>
      <div className="form-group row">
        <label htmlFor="orderName" className="col-sm-2 col-form-label">Order Name</label>
        <div className="col-sm-10">
          <input required type="text" name="orderName" className="form-control" id="orderName" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="orderAmount" className="col-sm-2 col-form-label">Order Amount</label>
        <div className="col-sm-10">
          <input required type="number" step="0.01" name="orderAmount" className="form-control" id="orderAmount" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</div>
</Page>
