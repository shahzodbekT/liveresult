import { Navbar } from "../../components/Navbar/Navbar";
import { ProfilePic } from "../../components/ProfileComponents/ProfilePic";

export const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-center">Your Profile:</h1>
      <div className="flex flex-row gap-32 m-auto justify-center align-middle mt-52">
        <div>
          <ProfilePic />
        </div>
        <div className="flex flex-col justify-center align-middle">
          <h2 className="text-3xl">{localStorage.getItem("userName")}</h2>
        </div>
      </div>
    </div>
  );
};
