import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to="/game">
          Sign Out
        </Link>
        <Link className="Link" to="/addgames">
          Add Games
        </Link>
      </nav>
    )
  }
  const publicOptions = (
    <nav>
      <Link to="/game">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )
  return (
    <div>
      <header>
        <nav>
          {/* <Link className="Link" to="/addgames">
            Add Games
          </Link>
          <Link className="Link" to="/about">
            About
          </Link>
          <Link className="Link" to="/game">
            Home
          </Link>
          <Link to="/signin">singin</Link>
          <Link to="/register">Register</Link> */}
          {user ? userOptions : publicOptions}
        </nav>
      </header>
    </div>
  )
}

export default Nav
