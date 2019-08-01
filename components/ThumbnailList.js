import React from "react";
import Thumbnail from "./Thumbnail";

const renderThumbnails = posts =>
  posts.map(({ id, title, thumbnailImage }) => {
    return <Thumbnail key={id} id={id} title={title} image={thumbnailImage} />;
  });

const ThumbnailList = props => {
  const posts = props.posts;

  if (Array.isArray(posts) && posts.length > 0) {
    const gridGap = "40px";

    return (
      <div className="thumbnails">
        {renderThumbnails(posts)}
        <style jsx>{`
          .thumbnails {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            grid-gap: ${gridGap};
            max-width: 1080px;
            margin: ${gridGap} auto;
          }

          @media screen and (min-width: 405px) and (max-width: 1100px) {
            .thumbnails {
              margin: ${gridGap} ${gridGap};
            }
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          There are no posts at the moment. Please come back later and check the
          news!
        </p>

        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            height: 70vh;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
};

export default ThumbnailList;
