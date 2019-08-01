import React from "react";
import LazyLoad from "react-lazyload";
import Link from "next/link";

const Thumbnail = ({ id, title, image }) => {
  const imageHeight = 250;

  return (
    <div className="thumbnail">
      <Link href={`/post?id=${id}`} as={`/post/${id}`}>
        <a>
          <div className="container">
            <div className="image-container">
              <LazyLoad
                height={imageHeight}
                placeholder={<div className="ui active loader" />}
              >
                <img src={image} alt={title} />
              </LazyLoad>
            </div>
            <div className="title-container">
              <h1>{title}</h1>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .thumbnail {
          position: relative;
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.19),
            -1px 0 0 0 rgba(0, 0, 0, 0.01), 1px 0 0 0 rgba(0, 0, 0, 0.01);
        }

        .thumbnail a {
          color: inherit;
        }

        .thumbnail:hover {
          box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.19),
            -1px 0 0 0 rgba(0, 0, 0, 0.01), 1px 0 0 0 rgba(0, 0, 0, 0.01);
        }

        .container {
          word-wrap: break-word;
          height: 340px;
        }

        .title-container {
          height: 50px;
          overflow: hidden;
          margin: 20px 10px;
        }

        .title-container h1 {
          font-size: 20px;
          height: 100%;
        }

        @media screen and (max-width: 400px) {
          .title-container h1 {
            font-size: 18px;
          }
        }

        .image-container {
          height: ${imageHeight}px;
        }

        .image-container img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
