import * as React from "react" 

const RegisterForm = () => {
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

        <div className="form-group">
          <label htmlFor="password">
            <i className="bi bi-lock"></i>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="default-btn three">
          Register Now <i className="flaticon-plus-1"></i>
        </button>

        <p>
          The password should be at least eight characters long. To make it
          stronger, use upper and lower case letters, numbers, and symbols like
          ! " ? $ % ^ & )
        </p>
      </form>
    </>
  )
}

export default RegisterForm
