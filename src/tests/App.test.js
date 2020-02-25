import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Routes from '../routes';

const render = () => shallow(<App />);

describe('<App />', () => {
  it('should return Render component', () => {
    expect(render().find(Routes)).toHaveLength(1);
  });
});
