import InputField from "@/components/input/InputField";
import useGetProfile from "@/hooks/api/queries/profile/useGetProfile";

const Profile = () => {
  const { data } = useGetProfile();

  const ProfileDetail = data?.data;

  //   console.log(ProfileDetail, "data");

  return (
    <div>
      <h3 className="text-mediumBlue font-medium text-2xl">Admin Profile</h3>
      <section className="bg-white my-10">
        <h3 className="py-5 px-5 font-semibold">Personal Information</h3>
        <hr className="border border-Grey" />

        <main className="py-10 px-5">
          <div className="sm:flex justify-between items-center">
            <InputField
              name="FullName"
              readOnly={true}
              placeholder={ProfileDetail?.name}
              label="Full Name"
              className="sm:w-[45%]"
            />
            <InputField
              name="Email"
              readOnly={true}
              placeholder={ProfileDetail?.email}
              label="Email"
              className="sm:w-[45%]"
            />
          </div>
          <div className="sm:flex justify-between items-center">
            <InputField
              name="adminId"
              readOnly={true}
              placeholder={ProfileDetail?._id}
              label="Admin ID"
              className="sm:w-[45%]"
            />
            <InputField
              name="password"
              readOnly={true}
              type="password"
              placeholder={ProfileDetail?.password}
              label="Admin Password"
              className="sm:w-[45%]"
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Profile;
