import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../index';


describe('<HomePage />', () => {
  it('should render the Home Page', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <p>Hello, world!</p>
    )).toEqual(true);
  });
});
