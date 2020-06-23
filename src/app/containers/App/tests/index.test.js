import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import Routes from '../Routes';

const render = () => shallow(<App />);

describe('<App />', () => {
  it('should return LoggedPagesWrapper component', () => {
    expect(render().find(Routes)).toHaveLength(1);
  });
});
