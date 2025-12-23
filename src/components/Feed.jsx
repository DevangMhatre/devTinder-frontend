import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

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
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feeds && (
      <div className="flex items-center my-10 flex-col">
        <h1 className="text-bold text-white text-3xl mb-5">Feeds</h1>
        <div className="flex gap-25">
          {feeds.map((feed) => {
            return (
              <div className="flex">
                <UserCard key={feed._id} user={feed} />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default Feed;
