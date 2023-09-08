import * as React from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

const MyAccount = () => {
  return (
    <>
      <div className="profile-authentication-area">
        <div className="profile-authentication-tabs">
          <Tabs defaultActiveKey="login">
            <Tab eventKey="login" title="Login">
              {/* LoginForm */}
              <LoginForm />
            </Tab>

            <Tab eventKey="register" title="Register">
              {/* RegisterForm */}
              <RegisterForm />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default MyAccount
