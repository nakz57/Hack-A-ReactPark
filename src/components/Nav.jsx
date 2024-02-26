import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/addgames">Add Games</Link>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>
    </div>
  )
}

export default Nav
