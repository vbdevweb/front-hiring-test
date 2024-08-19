import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/svg/logo.svg";
import "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
