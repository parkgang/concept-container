import React, { Component } from "react";
import { PostWrapper, Navigator, Post } from "../../components";

export default class PostContainer extends React.Component {
  render() {
    return (
      <PostWrapper>
        <Navigator />
        <Post />
      </PostWrapper>
    );
  }
}
