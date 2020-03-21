import React from 'react';
import RedirectPage from '../RedirectPage';
import getRenderComponent from '../getRenderComponent';

const defaultProps = {
  Component: <div>bla</div>,
  routeProps: {
    location: 'bla',
  },
};

describe('getRenderComponent', () => {
  it('should return RedirectPage component, with correct props', () => {
    expect(getRenderComponent(defaultProps.Component)(defaultProps.routeProps))
      .toEqual(
        <RedirectPage Component={defaultProps.Component} routeProps={defaultProps.routeProps} />,
      );
  });
});
