import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="error-container">
          <h1>Ooops! An error as occurred.</h1>
          <p>
            Please go to the{" "}
            <Link href="/">
              <a>home page</a>
            </Link>
            .
          </p>
        </div>

        <style jsx>{`
          .error-container {
            display: flex;
            flex-direction: column;
            height: 80vh;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}
