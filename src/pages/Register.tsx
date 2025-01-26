import { useForm, Controller, FieldValues } from "react-hook-form";
import { Card } from "antd";
import { Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/authApi";

export default function Register() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit
  } = useForm({});
  const [register] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const toastId = toast.loading("Registering...");
    try {
      await register(userInfo).unwrap();
      toast.success("Registration Successful", { id: toastId, duration: 3000 });
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className="flex justify-center mt-24">
      <Card className="bg-gray-200 w-72 shadow-lg rounded-2xl">
        <h1 className="text-center text-2xl font-semibold">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-sm font-medium block mb-1">
              Full Name
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  prefix={<UserOutlined />}
                  {...field}
                />
              )}
            />
             
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-1">
              Email Address
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
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
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Input.Password
                  id="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  {...field}
                />
              )}
            />
             
          </div>

          {/* Redirect to Login */}
          <h1 className="p-2">
            Already have an account?{" "}
            <NavLink to="/login" className="text-sky-600">
              Login
            </NavLink>
          </h1>

          {/* Submit Button */}
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}
