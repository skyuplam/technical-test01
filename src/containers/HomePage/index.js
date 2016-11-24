import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet
          title="Home Page"
        />
        <p>Hello, world!</p>
      </article>
    );
  }
}

export default connect()(HomePage);
