import React from 'react';
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    // ボタンがクリックされたら、いいね数をカウントアップする
    // () =>  this.countUp() このような関数型の記載でもOK
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  // いいね数が１０になったらカウントを０にする
  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({
        count: 0
      })
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const authorName = "Torahack"
    return (
      <>
        <Article
          title = {"Reactの使い方"}
          isPublished = {this.state.isPublished}
          toggle = {() => this.togglePublished()}
          count = {this.state.count}
        />
      </>
    )
  }
}


export default Blog
