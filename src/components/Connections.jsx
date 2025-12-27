import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { addConnections } from "../utils/connectionSlice";

function Connections() {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <div className="flex items-center my-10 flex-col">
        <h1 className="text-bold text-white text-3xl mb-5">
          No Connections Found
        </h1>
      </div>
    );

  return (
    <div className="flex items-center my-10 flex-col">
      <h1 className="text-bold text-white text-3xl mb-5">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, about, age, gender, photoURL } =
          connection;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                className="w-20 h-20 rounded-full basis-[10%]"
                src={photoURL}
                alt={firstName + " " + "Photo"}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Connections;
