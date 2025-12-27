import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

function Requests() {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <div className="flex items-center my-10 flex-col">
        <h1 className="text-bold text-white text-3xl mb-5">
          No requests found
        </h1>
      </div>
    );

  return (
    <div className="flex items-center my-10 flex-col">
      <h1 className="text-bold text-white text-3xl mb-5">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, about, age, gender, photoURL } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div className="flex flex-1">
              <div className="basis-[15%]">
                <img
                  className="w-20 h-20 rounded-full"
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
            <div className="flex basis-[15%] justify-center items-center gap-5">
              <button
                className="btn btn-error"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Requests;
