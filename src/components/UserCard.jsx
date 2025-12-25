import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

function UserCard({ user, isHidden }) {
  const { _id, firstName, lastName, age, gender, about, photoURL } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="bg-base-200">
        <img src={photoURL} alt="profile photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div
          className={`card-actions justify-center my-4 ${isHidden && "hidden"}`}
        >
          <button
            className="btn btn-primary "
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
