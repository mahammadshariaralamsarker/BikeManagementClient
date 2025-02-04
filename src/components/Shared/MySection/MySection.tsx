import { ReactNode } from "react";

const MySection = ({ children }: { children: ReactNode }) => {
  return <div className="mt-10 lg:mt-20">{children}</div>;
};

export default MySection;
