import * as React from "react" 

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            <i className="bi bi-person"></i>
          </label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <i className="bi bi-envelope"></i>
          </label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            <i className="bi bi-lock"></i>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="save-info" />
          <label className="form-check-label" htmlFor="save-info">
            Remember Me
          </label>
        </div>

        <button type="submit" className="default-btn three">
          Login Now <i className="flaticon-plus-1"></i>
        </button>
      </form>
    </>
  )
}

export default LoginForm
