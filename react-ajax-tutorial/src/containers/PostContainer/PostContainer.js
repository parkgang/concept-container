import React, { Component } from "react";
import { PostWrapper, Navigator, Post } from "../../components";
import * as service from "../../services/post";

export default class PostContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      postId: 1,
      // 요청이 응답을 기다리고 있는지 여부를 알려줌
      fetching: false,
      post: {
        title: null,
        body: null,
      },
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async (postId) => {
    // 방법1
    // const post = await service.getPost(postId);
    // console.log(post);
    // const comments = await service.getComments(postId);
    // console.log(comments);

    // 방법2
    const info = await Promise.all([
      service.getPost(postId),
      service.getComments(postId),
    ]);

    console.log(info);
  };

  render() {
    return (
      <PostWrapper>
        <Navigator />
        <Post />
      </PostWrapper>
    );
  }
}
