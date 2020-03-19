import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import LoggedPagesWrapper from '../../LoggedPagesWrapper';

const render = () => shallow(<App />);

describe('<App />', () => {
  it('should return LoggedPagesWrapper component', () => {
    expect(render().find(LoggedPagesWrapper)).toHaveLength(1);
  });
});
