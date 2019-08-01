import React from "react";
import App from "next/app";
import Head from "../components/Head";
import Footer from "../components/Footer";
import blog from "../apis/blog";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let meta = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const response = await blog.get("/meta");
      meta = response.data;
    } catch (e) {
      meta = {};
    }

    return { pageProps, meta };
  }

  render() {
    const { Component, pageProps, meta } = this.props;
    const { title, description, url, ogImage } = meta;

    return (
      <div>
        <Head
          title={title}
          description={description}
          url={url}
          ogImage={ogImage}
        />
        <div className="root-container">
          <div className="component-container">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>

        <style jsx>{`
          .root-container {
            position: relative;
            min-height: 100vh;
          }

          .component-container {
            padding-bottom: 7vh;
          }
        `}</style>

        <style jsx global>{`
          h1,
          h2,
          h3 {
            font-family: Calibri, sans-serif;
          }

          p {
            font-family: Georgia, serif;
          }

          .post-nav-bar,
          .home-header,
          footer {
            background-color: #56a8b0;
          }

          nav {
            color: #ffffff;
          }

          nav a,
          nav i {
            color: inherit;
          }

          nav a:hover,
          nav i:hover {
            color: #dbdbdb;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
