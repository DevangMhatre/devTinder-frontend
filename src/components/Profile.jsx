import { useState } from "react";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([""]);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm p-5 ">
        <h2 className="flex justify-center text-2xl font-semibold">
          Edit Profile
        </h2>
        <div className="py-2.5">
          {/* // ? First Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[13px]">First Name</legend>
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
              defaultValue="None"
              className="select appearance-none w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled={true}>Choose a Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          {/* // ? Photo */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[13px]">Photo</legend>
            <input type="file" className="file-input  w-full" />
          </fieldset>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-success text-lg">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
