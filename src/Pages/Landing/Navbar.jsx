import React from "react";
import OptionLanguage from "../../components/Layouts/Modules/OptionLanguage";
import DefaultButton from "../../components/Layouts/Modules/DefaultButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="flex justify-between items-center pr-10 pl-7 py-4">
        <div>
          <img src="/netflix_logo.png" width={105} height={45} />
        </div>
        <div className="flex items-center gap-4">
          <OptionLanguage />
          <DefaultButton text={"Sign In"} onClick={() => navigate("/login")} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
