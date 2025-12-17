import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import Email from "./Email";
import Password from "./Password";
import { addUser } from "../../utils/userSlice";
import { BASE_URL } from "../../utils/constants";

function Login() {
  const [emailId, setEmailId] = useState("devang@gmail.com");
  const [password, setPassword] = useState("Devang@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      navigate("/feed");
    } catch (err) {
      toast.error(err.response.data);
      // console.error(err.response.data);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm p-5 ">
        <h2 className="flex justify-center text-2xl font-semibold">Login</h2>
        <div className="py-2.5">
          <Email emailId={emailId} setEmailId={setEmailId} />
          <Password password={password} setPassword={setPassword} />
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-success text-lg" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
