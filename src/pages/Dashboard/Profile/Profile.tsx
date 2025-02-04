import { ChangeEvent, useState } from "react";
import MyModal from "../../../components/Modals/MyModal";
import {
  useLogedinUserGetQuery,
  useUserInfoUpdateMutation,
} from "../../../redux/features/auth/AuthApi";
import Loader from "../../../components/Loader/Loader";
import MyButton from "../../../components/Shared/MyButton/MyButton";
import uploadImage from "../../../utils/uploadImageToCloudinary";
import { toast } from "sonner";

const Profile = () => {
  const {
    data: loginUserInfo,
    isLoading,
    isFetching,
    refetch,
  } = useLogedinUserGetQuery(undefined);
  const [updateUserInfo] = useUserInfoUpdateMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    password: "",
    image: null,
    phone: "",
    address: "",
    city: "",
  });
  const close = () => {
    setIsOpen(false);
  };

  const handleChangeForm = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const input = e.target as HTMLInputElement;
      const files = input?.files;
      if (files && files[0]) {
        const imageUrl = await uploadImage(files[0]);
        console.log(imageUrl);
        setFormValue((prevState) => ({
          ...prevState,
          [name]: imageUrl ? imageUrl : null,
        }));
      }
    } else {
      setFormValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // handleForm
  const handleForm = async (e: React.FormEvent) => {
    const toastId = toast.loading("Updating...");
    e.preventDefault();
    const updatedUserData = {
      name: formValue?.name ? formValue.name : loginUserInfo?.data?.name,
      password: formValue?.password ? formValue.password : null,
      image: formValue?.image ? formValue.image : loginUserInfo?.data?.image,
      phone: formValue?.phone ? formValue.phone : loginUserInfo?.data?.phone,
      address: formValue?.address
        ? formValue.address
        : loginUserInfo?.data?.address,
      city: formValue?.city ? formValue.city : loginUserInfo?.data?.city,
    };
    console.log("Submit", updatedUserData);
    const res = await updateUserInfo(updatedUserData);
    if (res?.data) {
      refetch();
      setIsOpen(false);
      toast.success(res?.data?.message, { id: toastId });
    } else {
      toast.error("Updated Failed!", { id: toastId });
    }
  };
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <main className="profile-page">
      <MyModal isOpen={isOpen} close={close} isLarge={false}>
        <div>
          <h2 className="text-lg text-center md:text-xl font-bold">
            Update User Info
          </h2>
          <form onSubmit={handleForm} className="space-y-2">
            <div className="w-full">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-secondary"
              >
                Name
              </label>

              <input
                type="text"
                id="Name"
                onChange={handleChangeForm}
                defaultValue={loginUserInfo?.data?.name}
                name="name"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-secondary"
              >
                New Password
              </label>

              <input
                type="password"
                id="Password"
                onChange={handleChangeForm}
                name="password"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Image"
                className="block text-sm font-medium text-secondary"
              >
                Profile Picture
              </label>

              <input
                type="file"
                onChange={handleChangeForm}
                id="Image"
                name="image"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="Number"
                className="block text-sm font-medium text-secondary"
              >
                Mobile Number
              </label>

              <input
                type="text"
                onChange={handleChangeForm}
                defaultValue={loginUserInfo?.data?.phone}
                id="Number"
                name="phone"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Address"
                className="block text-sm font-medium text-secondary"
              >
                Address
              </label>

              <input
                type="text"
                onChange={handleChangeForm}
                defaultValue={loginUserInfo?.data?.address}
                id="Address"
                name="address"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="City"
                className="block text-sm font-medium text-secondary"
              >
                City
              </label>

              <input
                type="text"
                onChange={handleChangeForm}
                defaultValue={loginUserInfo?.data?.city}
                id="city"
                name="city"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>

            <div className=" sm:flex sm:items-center">
              <MyButton title="Update Info" />
            </div>
          </form>
        </div>
      </MyModal>
      <section className="relative block h-[500px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    {loginUserInfo?.data?.image ? (
                      <img
                        alt="..."
                        src={loginUserInfo?.data?.image}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    ) : (
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/dhfvwgwty/image/upload/v1738418586/sadi_avatr_am7po6.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        0
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Total Orders
                      </span>
                    </div>

                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        0
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Total Cancel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {loginUserInfo?.data?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {loginUserInfo?.data?.email}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {loginUserInfo?.data?.address}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  {loginUserInfo?.data?.city}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
