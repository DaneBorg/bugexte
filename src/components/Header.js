import React from "react";
import Link from "./Link";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui segment">
      <div className="ui inverted pointing menu">
        <Link href="/" className="item">
          Home
        </Link>
        <Link href="/A1" className="item">
          Item A1
        </Link>
        <Link href="/A2" className="item">
          Item A2
        </Link>
        <Link href="/A3" className="item">
          Item A3
        </Link>
        <Link href="/A4" className="item">
          Item A4
        </Link>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
