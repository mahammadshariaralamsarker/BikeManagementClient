import { useForm, Controller } from "react-hook-form";
import { Card } from "antd";
import { Input, Button, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { JwtPayload } from "jwt-decode";

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "customer@gmail.com",
      password: "customer123",
    },
  });
  const [login, { data, error }] = useLoginMutation();
 

  const onSubmit = async (data) => { 
    const res = await login(data).unwrap();
    const token = res.data.token
    const user = verifyToken(token)
    console.log('user>', user._doc);
    dispatch(setUser({user:user._doc,token}))
  };

  return (
    <div className=" bg-gray-100 ">
      <Card className="   shadow-lg rounded-2xl" title="Login">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-1">
              Email Address
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              }}
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
            {errors.email && (
              <Alert
                message={errors.email.message}
                type="error"
                showIcon
                className="mt-2"
              />
            )}
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
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <Input.Password
                  id="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  {...field}
                />
              )}
            />
            {errors.password && (
              <Alert
                message={errors.password.message}
                type="error"
                showIcon
                className="mt-2"
              />
            )}
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
