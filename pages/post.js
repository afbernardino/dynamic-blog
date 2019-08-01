import React from "react";
import NavBar from "../components/NavBar";
import Article from "../components/Article";
import blog from "../apis/blog";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    try {
      const response = await blog.get(`/posts/${query.id}`);
      return { post: response.data };
    } catch (e) {
      return { post: {} };
    }
  }

  render() {
    const { title, article } = this.props.post;
    return (
      <div>
        <NavBar />
        <Article title={title} article={article} />
      </div>
    );
  }
}
