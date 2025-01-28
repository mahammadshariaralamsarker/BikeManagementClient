import { useForm, Controller, FieldValues } from "react-hook-form";
import { Card } from "antd";
import { Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues:{
      email:'admin@gmail.com',
      password:'admin123'
    }
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading data");
    try {
      const res = await login(data).unwrap();
      console.log(res);
      const token = res.data.token;
      const user = verifyToken(token) as TUser;
      console.log("user>", user);
      toast.success("login Successful", { id: toastId, duration: 3000 });
      dispatch(setUser({ user: user, token }));
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("something went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className=" flex justify-center mt-24">
      <Card className="bg-gray-200  w-72  shadow-lg rounded-2xl">
        <h1 className="text-center text-2xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-1">
              Email Address
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  prefix={<MailOutlined />}
                  {...field}
                />
              )}
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium block mb-1"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  id="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  {...field}
                />
              )}
            />
            <h1 className="p-2">
              You didn't have a account{" "}
              <NavLink to="/register" className="text-sky-600">
                Register
              </NavLink>
            </h1>
          </div>

          {/* Submit Button */}
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}
