import Meta from '../components/meta'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default ({ children }) => (
  <div className="outer-wrapper">
    <Meta />
    <main role="main" className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-10 offset-md-1">
          { children }
        </div>
      </div>
    </main>
    <Footer />
  </div>
)
