import React from "react";
import { useAtom } from "jotai";
import { languageAtom } from "../jotai/atoms";

const Navbar = () => {
  const [, setLanguage] = useAtom(languageAtom);

  return (
    <div className="Navbar">
      <h1>Netflix Clone</h1>
      <div>
        <button
          className="btn btn-outline mr-2"
          onClick={() => setLanguage("id")}
        >
          Indonesia
        </button>
        <button className="btn btn-outline" onClick={() => setLanguage("en")}>
          English
        </button>
      </div>
    </div>
  );
};

export default Navbar;
