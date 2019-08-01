import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="post-nav-bar">
      <Link href="/">
        <nav>
          <i className="home icon" />
          <a>Home</a>
        </nav>
      </Link>
      <style jsx>{`
        div {
          height: 4vh;
          min-height: 40px;
          width: 100%;
          display: flex;
          align-items: center;
        }

        nav {
          padding-left: 1vh;
        }

        nav:hover {
          color: #dbdbdb;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
