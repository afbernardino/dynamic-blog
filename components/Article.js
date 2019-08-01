import React from "react";
import Link from "next/link";

const Article = ({ title, article }) => {
  if (title && article) {
    return (
      <div>
        <article>
          <div className="title-container">
            <h1>{title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: article }} />
        </article>

        <style jsx>{`
          article {
            padding: 3vh 10vw;
            word-wrap: break-word;
          }

          .title-container h1 {
            text-align: center;
            padding-bottom: 20px;
            font-size: 50px;
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          This article does not exist. Please check out the latest articles{" "}
          <Link href="/">
            <a>here</a>
          </Link>
          .
        </p>

        <style jsx>{`
          div {
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
};

export default Article;
