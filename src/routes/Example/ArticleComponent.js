import React, { Component } from 'react';
import { connect } from 'dva';
import { Article } from 'react-weui';
import srcArticle from '../../assets/pic_article.png';
import styles from './Article.less';


@connect(state => ({
  login: state.login,
}))
export default class ArticleComponent extends Component {
  render() {
    return (
      <Article>
        <h1>H1 Heading</h1>
        <section>
          <h2 className="title">H2 Title</h2>
          <section>
            <h3>H3 Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute
            </p>
            <p>
              <img src={srcArticle} />
              <img src={srcArticle} />
            </p>
          </section>
          <section>
            <h3>H3 Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
        </section>
      </Article>
    )
  }
}
