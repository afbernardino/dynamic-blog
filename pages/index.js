import React from "react";
import HomeHeader from "../components/HomeHeader";
import ThumbnailList from "../components/ThumbnailList";
import blog from "../apis/blog";

export default class extends React.Component {
  static async getInitialProps() {
    let posts = [];
    let header = {};

    try {
      const response = await blog.get("/posts");
      posts = response.data;
    } catch (e) {
      posts = [];
    }

    try {
      const response = await blog.get("/header");
      header = response.data;
    } catch (e) {
      header = {};
    }

    return { posts, header };
  }

  render() {
    const { header, posts } = this.props;
    const { bigTitle, smallTitle, media } = header;
    return (
      <div>
        <HomeHeader bigTitle={bigTitle} smallTitle={smallTitle} media={media} />
        <ThumbnailList posts={posts} />
      </div>
    );
  }
}
