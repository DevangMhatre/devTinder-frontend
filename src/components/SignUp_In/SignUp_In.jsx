import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

import Email from "./Email";
import Password from "./Password";
import { addUser } from "../../utils/userSlice";
import { BASE_URL } from "../../utils/constants";

function SignUp_In() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginOrSignup = isLoginForm ? "Login" : "Sign Up";

  async function handleSignUp() {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/profile");
    } catch (err) {
      // toast.error(err.response.data);
      // console.error(err.response.data);
    }
  }

  async function handleLogin() {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      toast.error(err.response.data);
      // console.error(err.response.data);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm p-5 ">
        <h2 className="flex justify-center text-2xl font-semibold">
          {isLoginOrSignup}
        </h2>
        <div className="py-2.5">
          {!isLoginForm && (
            <>
              <div className="p-2.5">
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-2.5">
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </div>
            </>
          )}
          <Email emailId={emailId} setEmailId={setEmailId} />
          <Password password={password} setPassword={setPassword} />
        </div>
        <div className="card-actions justify-center">
          <button
            className="btn btn-success text-lg"
            onClick={isLoginForm ? handleLogin : handleSignUp}
          >
            {isLoginOrSignup}
          </button>
        </div>
        <div className="mx-auto mt-4 mb-0.5">
          {isLoginForm ? (
            <p className="font-light">
              New User?
              <Link
                className="ml-1 cursor-pointer font-semibold underline"
                onClick={() => setIsLoginForm((val) => !val)}
                to="/signup"
              >
                {isLoginForm && "Sign Up"}
              </Link>
            </p>
          ) : (
            <p className="font-light">
              Existing User?
              <Link
                className="ml-1 cursor-pointer font-semibold underline"
                onClick={() => setIsLoginForm((val) => !val)}
                to="/login"
              >
                {!isLoginForm && "Login"}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp_In;
