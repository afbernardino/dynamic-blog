import React from "react";
import NavBar from "../components/NavBar";
import Article from "../components/Article";
import blog from "../apis/blog";

export default class extends React.Component {
  static async getInitialProps() {
    try {
      const response = await blog.get("/about");
      return { about: response.data };
    } catch (e) {
      return { about: {} };
    }
  }

  render() {
    const { article } = this.props.about;
    return (
      <div>
        <NavBar />
        <Article title="About" article={article} />
      </div>
    );
  }
}
