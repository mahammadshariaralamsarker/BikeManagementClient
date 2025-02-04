import { Link } from "react-router-dom";

const NavBarLinks = ({ title, dLink }: { title: string; dLink: string }) => {
  return (
    <li>
      <Link
        className="text-secondary font-inter font-semibold transition hover:text-primary text-sm"
        to={dLink}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavBarLinks;
