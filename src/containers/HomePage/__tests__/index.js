import React from 'react';
import { shallow } from 'enzyme';

import { HomePage, introMsg } from '../index';


describe('<HomePage />', () => {
  it('should render the Home Page', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <p>{introMsg}</p>
    )).toEqual(true);
  });
});
