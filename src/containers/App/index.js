import React from 'react';
import Helmet from 'react-helmet';
import './App.css';

export function App(props) {
  return (
    <div className="App">
      <Helmet
        title="Demo App"
      />
      {React.Children.toArray(props.children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
