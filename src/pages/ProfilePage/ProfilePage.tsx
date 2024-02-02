import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfilePic } from "../../components/ProfileComponents/ProfilePic";

export const ProfilePage: React.FC = () => {

  return (
    <div>
      <Navbar linkText="Main" path="/main-page" navText="To Main" />
      <div className="flex flex-row gap-32 m-auto justify-center align-middle mt-52">
        <div>
          <ProfilePic />
        </div>
        <div className="flex flex-col justify-center align-middle gap-2">
          <h2 className="text-3xl">{localStorage.getItem("userName")}</h2>
          <span>Registration date: 09/11/2001</span>
          {/* Visual Button */}
        </div>
      </div>
    </div>
  );
};
