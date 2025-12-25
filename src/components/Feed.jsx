import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import toast from "react-hot-toast";

function Feed() {
  const feeds = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feeds) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      // console.log(res.data.data);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feeds && (
      <div className="flex items-center my-10 flex-col">
        <h1 className="text-bold text-white text-4xl mb-10">Feeds</h1>
        <div>
          <div>
            <UserCard key={feeds[0]._id} user={feeds[0]} />
          </div>
        </div>
      </div>
    )
  );
}

export default Feed;
