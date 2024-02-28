import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/game')
  }

  return (
    <div className="container container-signin sign-img">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="item flexa">
            <label className="add-text" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="item flexa">
            <label className="add-text" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="item flexa">
            <button disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
          </div>
        </form>
        <h3 className="border-sign">
          if dont have account{' '}
          <Link className="Link" to="/register">
            Register
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default SignIn
