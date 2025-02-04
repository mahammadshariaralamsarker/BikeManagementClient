import { FormEvent } from "react";
import MyButton from "../../components/Shared/MyButton/MyButton";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { Link, useNavigate } from "react-router-dom";
import getInputValue from "../../utils/getnputValue";
import { toast } from "sonner";
import { useUserCreateMutation } from "../../redux/features/auth/AuthApi";
const Signup = () => {
  const [createUser] = useUserCreateMutation();
  const navigate = useNavigate();
  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const toastId = toast.loading("Please Wait...");
    const name = getInputValue({ targetEvent: event, fieldName: "name" });
    const email = getInputValue({ targetEvent: event, fieldName: "email" });
    const password = getInputValue({
      targetEvent: event,
      fieldName: "password",
    });
    const phone = getInputValue({ targetEvent: event, fieldName: "phone" });
    const address = getInputValue({ targetEvent: event, fieldName: "address" });
    const city = getInputValue({ targetEvent: event, fieldName: "city" });
    if (!name || !email || !phone) {
      return toast.error("All Fields are Required", { id: toastId });
    }
    const userInfo = {
      name,
      email,
      password,
      phone,
      address,
      city,
    };
    const res = await createUser(userInfo);
    if (res?.data) {
      toast.success(res?.data?.message, { id: toastId });
      navigate("/login");
    } else {
      toast.error("Something Wrong", { id: toastId });
    }
  };
  return (
    <MyContainer>
      <section className="flex flex-row justify-center w-full min-h-screen items-center">
        <div className="max-w-[500px] w-full border my-4 border-overlyBg rounded-md  px-8 py-8 sm:px-12 ">
          <div className="">
            <h2 className="font-bold text-2xl lg:text-3xl text-center mb-5">
              Create Account
            </h2>
            <form onSubmit={handleSignup} className="space-y-2">
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
                  name="name"
                  className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-secondary"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-secondary"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-secondary"
                >
                  Phone
                </label>

                <input
                  type="text"
                  id="Phone"
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
                  id="City"
                  name="city"
                  className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                />
              </div>
              <div className=" sm:flex sm:items-center">
                <MyButton title="Sign Up" />
              </div>
            </form>
            <p className="text-xs text-center mt-3 text-secondary">
              Already Have an Account ?{" "}
              <Link
                to="/login"
                className="font-semibold hover:underline text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MyContainer>
  );
};

export default Signup;
