export type TUser = {
  userEmail: string;
  role: string;
  iat: number;
  exp: number;
};

export type TErrorType = {
  statusCode?: number;
  errorSources?: string[];
  message: string;
  stack?: string;
};

export type TUserData = {
  _id: string;
  address: string;
  city: string;
  createdAt: string;
  email: string;
  image: string;
  name: string;
  phone: string;
  role: "customer" | "admin";
  status: "active" | "deactivate";
  updatedAt: string;
  __v: number;
};

