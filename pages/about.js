import React from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import Error from "./_error";

class About extends React.Component {
  // state = {
  //   user: null
  // };

  // static getInitialProps() {}

  // componentDidMount() {
  //   fetch("https://api.github.com/users/reedbarger")
  //     .then(res => res.json())
  //     .then(user => {
  //       this.setState({ user });
  //     });
  // }

  render() {
    const { userData, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        {/* {JSON.stringify(this.state.user)} */}
        {/* {JSON.stringify(userData)} */}
        {userData.name}
        <a href={userData.url}>My Github Page</a>
        <div className="about">
          <img height="200px" src="/static/javascript.png" alt="JavaScript" />
          <p>A JavaScript programmer</p>
        </div>
      </Layout>
    );
  }
}

About.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/reedbarger");
  console.log(res);
  const statusCode = res.status > 200 ? res.status : false;
  const userData = await res.json();
  // console.log(userData);
  return { statusCode, userData };
};

export default About;
