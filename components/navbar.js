export default () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">Orders app</a>
        <ul className="navbar-nav">
          {
            [{href: '/new', title: 'New order'}, {href: '/orders', title: 'All orders'}, {href: '/payments', title: 'Payments history'}]
            .map(item =>
              <li className="nav-item" key={item.title}>
                <a href={item.href} className="nav-link">{item.title}</a>
              </li>)
          }
        </ul>
    </nav>
    <style jsx>{`
      .navbar-nav {
        flex-direction: row;
      }
      .nav-item {
        padding-right: 0.5rem;
      }
    `}
    </style>
  </header>
)
