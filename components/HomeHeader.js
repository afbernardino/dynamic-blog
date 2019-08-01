import React from "react";

const renderMedia = media => {
  if (!media) {
    return null;
  }

  const availableMedia = ["instagram", "facebook", "github", "linkedin"];

  return media.map(({ name, url }) => {
    if (availableMedia.includes(name)) {
      return (
        <div
          key={`header_icon_key_${url}`}
          style={{ display: "inline-table", marginRight: "7px" }}
        >
          <a target="_blank" href={url}>
            <i className={`inverted ${name} icon`} style={{ margin: "0" }} />
          </a>
        </div>
      );
    } else {
      return null;
    }
  });
};

const HomeHeader = props => {
  return (
    <div>
      <div className="home-header">
        <div className="nav-container" />
        <div className="title-container">
          <h1>{props.bigTitle}</h1>
          <h3>{props.smallTitle}</h3>
        </div>
        <div className="media-container">{renderMedia(props.media)}</div>
      </div>

      <style jsx>{`
        .home-header {
          display: flex;
          flex-flow: column;
          width: 100%;
          height: 200px;
          min-width: 320px;
        }

        .nav-container {
          flex-grow: 2;
        }

        .title-container {
          flex-grow: 1;
        }

        .title-container h1 {
          text-align: center;
          font-size: calc(12px + 4vw);
          color: #ffffff;
          letter-spacing: 0.1em;
        }

        .title-container h3 {
          text-align: center;
          font-size: calc(7px + 1vw);
          color: #ffffff;
          letter-spacing: 0.1em;
          margin-top: 0;
        }

        .media-container {
          flex-grow: 1;
          display: flex;
          flex-flow: row;
          justify-content: center;
          width: 100%;
          font-size: calc(8px + 0.9vw);
          text-align: center;
        }

        @media screen and (min-width: 1200px) {
          .title-container h1 {
            font-size: 63px;
            margin-bottom: 0;
          }

          .title-container h3 {
            font-size: 20px;
          }

          .media-container {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeHeader;
