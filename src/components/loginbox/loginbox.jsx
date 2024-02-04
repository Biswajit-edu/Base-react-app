import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import "./loginbox.css";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
const Loginbox = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "316164397011-unbfb8qa8k4e5clij94i1ng1upmpe3ot.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
  };
  const onFailure = (response) => {
    console.log("Failed", response);
  };
  return (
    <div>
      <form class="from">
        <div className=' font-bold text-4xl m-2'>
           Sign In
        </div>
        <div className=" mb-4 ml-2">
          sign in to your account.
        </div>
        <div class="btn-group gap-x-2">
          <button class="btn">
            <img
              className="logox ml-2"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d1c98974-c62d-4071-8bd2-ab859fc5f4e9"
              alt=""
            />
            <GoogleLogin
               clientId={
                "316164397011-unbfb8qa8k4e5clij94i1ng1upmpe3ot.apps.googleusercontent.com"
              }
              onSuccess={onSuccess}
              onFailure={onFailure}
              render={(renderProps) => (
                <p onClick={renderProps.onClick} className="Auth_Btn">
                <span className=" ml-4">Sign in with Google</span>
                </p>
               )}
            />
          </button>
          <button class="btn">
            <img
              className="logox ml-2"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/59c1561b-8152-4d05-b617-0680a7629a0e"
              alt=""
            />
            <span className="ml-4">Sign in with Apple</span>
          </button>
        </div>
        <div className="frombox">
          <label for="email">Email</label>
          <input
            className=" logoinput border-0 bg-gray-100 p-2 w-full rounded-md flex"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <label for="password">Password</label>
          <input
            className=" logoinput border-0 bg-gray-100 p-2 w-full rounded-md"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <a href="#">Forgot password?</a>
          <Link to="/home" className="login-link">
      <button type="submit" className="login-btn">
        Sign In
      </button>
    </Link>
        </div>

        <div class="links">
        Do not have an account.
          <div><a className=" cursor-pointer font-medium ml-2" herf="/">Resister Here</a></div>
        </div>
      </form>
    </div>
  );
};

export default Loginbox;
