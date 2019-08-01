import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
        {" | "}
        <Link href="/">
          <a>Latest Posts</a>
        </Link>
      </nav>

      <style jsx>{`
        footer {
          position: absolute;
          width: 100%;
          height: 7vh;
          min-height: 40px;
          bottom: 0;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
