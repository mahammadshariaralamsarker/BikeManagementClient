import MyButton from "../../components/Shared/MyButton/MyButton";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import loginImage from "../../assets/images/loginimage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import getInputValue from "../../utils/getnputValue";
import { useLoginMutation } from "../../redux/features/auth/AuthApi";
import { toast } from "sonner";
interface ILogin {
  email: string;
  password: string;
}
const Login = () => {
  const [loginUser] = useLoginMutation();
  const navigate = useNavigate();
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const toastId = "Please Wait..";
    const userInfo: ILogin = {
      email: getInputValue({ targetEvent: event, fieldName: "email" }),
      password: getInputValue({ targetEvent: event, fieldName: "password" }),
    };
    if (!userInfo.email || !userInfo.password) {
      return toast.error("All Fields Are Required", { id: toastId });
    }
    const res = await loginUser(userInfo);
    if (res?.error) {
      return toast.error("Invalid Credentials", { id: toastId });
    }
    if (res.data) {
      toast.success(res?.data?.message, { id: toastId });
      navigate("/");
      console.log("data", res.data);
    }
    // Set Token on Local Storage
    localStorage.setItem("token", res?.data?.data);
  };

  return (
    <MyContainer>
      <section className="bg-white flex justify-center items-center h-screen">
        <div className="flex gap-2 flex-row">
          <article className="w-1/2 relative overflow-hidden hidden md:block rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={loginImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/70 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6 z-20">
                <Link to="/">
                  <h3 className="mt-0.5 text-lg md:text-2xl text-white">
                    🚴‍♂️ Ride Better, Live Better! 🚴‍♀️
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Bikes are more than just a mode of transportation; they
                  represent **freedom, fitness, and adventure.** Whether you're
                  commuting to work, exploring new trails, or simply enjoying a
                  peaceful ride, cycling transforms both your body and mind.
                </p>
              </div>
            </div>
          </article>
          <main className="border border-overlyBg rounded-md md:w-1/2 flex flex-col items-center justify-center px-8 py-8 sm:px-12 ">
            <h2 className="font-bold text-2xl lg:text-3xl mb-5">
              Login Your Account
            </h2>
            <div className="w-full">
              <form onSubmit={handleLogin} className="space-y-2">
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
                <div className=" sm:flex sm:items-center">
                  <MyButton title="sign in" />
                </div>
              </form>
              <p className="text-xs text-center mt-3 text-secondary">
                Dont Have an Account ?{" "}
                <Link
                  to="/sign-up"
                  className="font-semibold hover:underline text-red-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </main>
        </div>
      </section>
    </MyContainer>
  );
};

export default Login;
