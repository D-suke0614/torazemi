import React from 'react';
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  render() {
    const authorName = "Torahack"
    return (
      <>
        <Article title = {"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()} />
      </>
    )
  }
}


export default Blog
