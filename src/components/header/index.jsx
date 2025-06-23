import { useNavigate } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";
import "./index.scss";
const Header = ({ title }) => {
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };
  return (
    <header className="header">
      <h4>{title}</h4>
      <ChevronsLeft onClick={toBack} />
    </header>
  );
};

export default Header;
