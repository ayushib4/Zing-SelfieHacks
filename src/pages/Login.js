import React from "react";
import Fade from "react-reveal/Fade";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <Fade>
      <section className="login">
        <div className="loginContainer">
          <h1 className="zing-Heading">Zing</h1>
          <label>Email</label>
          <input
            type="text"
            placeholder="test@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            placeholder="123456"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>
                  Have an account?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign In
                  </span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleLogin}>Sign In</button>
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign Up
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Login;
