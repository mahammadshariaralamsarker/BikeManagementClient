import { Link } from "react-router-dom";

const FooterLink = ({ fTitle, fLink }: { fTitle: string; fLink: string }) => {
  return (
    <li>
      <Link to={fLink} className="text-white transition hover:opacity-75">
        {fTitle}
      </Link>
    </li>
  );
};

export default FooterLink;
