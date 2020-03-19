import React from 'react';
import { homeTitle, appTitle } from '../components';

describe('homeTitle', () => {
  it('should return homeTitle correctly', () => {
    expect(homeTitle()).toEqual(
      <h1> Hello World (logged or not)</h1>,
    );
  });
});

describe('appTitle', () => {
  it('should return appTitle correctly', () => {
    expect(appTitle()).toEqual(
      <h1>You are logged</h1>,
    );
  });
});
