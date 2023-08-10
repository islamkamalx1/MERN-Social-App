import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Social App</h3>
          <span className="login-desc">
            Connect with friends and the world around you
          </span>
        </div>

        <div className="login-right">
          <div className="login-box">
            <input type="email" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot your password?</span>
            <button className="login-register">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
