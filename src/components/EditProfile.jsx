import { useState } from "react";

import UserCard from "./UserCard";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

function EditProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [isGenderClicked, setIsGenderClicked] = useState(false);

  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          about,
          skills,
          age,
          gender,
          photoURL,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data?.data));
      toast.success("Profile has been saved!");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center my-10 mr-25">
        <div className="card bg-base-200 w-96 shadow-sm p-5 ">
          <h2 className="flex justify-center text-2xl font-semibold">
            Edit Profile
          </h2>
          <div className="py-2.5">
            {/* // ? First Name */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">
                First Name
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>

            {/* // ? Last Name */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">Last Name</legend>
              <input
                type="text"
                className="input  w-full"
                placeholder="Type here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>

            {/* // ? About */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">About</legend>
              <textarea
                className="textarea h-24  w-full"
                placeholder="Bio"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </fieldset>

            {/* // ? Skills */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">Skills</legend>
              <input
                type="text"
                className="input  w-full"
                placeholder="Type here"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </fieldset>

            {/* // ? Age */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">Age</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </fieldset>

            {/* // ? Gender */}
            <div>
              <legend className="fieldset-legend text-[13px] mb-px]">
                Gender
              </legend>
              <select
                className="select appearance-none w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                onClick={() => setIsGenderClicked(true)}
              >
                <option disabled={isGenderClicked}>Choose a Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            {/* // ? Photo */}
            {/* <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">Photo</legend>
              <input type="file" className="file-input  w-full" />
            </fieldset> */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[13px]">Photo URL</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-success text-lg" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
      <UserCard
        user={{ firstName, lastName, about, skills, age, gender, photoURL }}
        isHidden={true}
      />
    </div>
  );
}

export default EditProfile;
