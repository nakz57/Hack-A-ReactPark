import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <Link className="Link" to="/addgames">
            Add Games
          </Link>
          <Link className="Link" to="/about">
            About
          </Link>
          <Link className="Link" to="/game">
            Home
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Nav
