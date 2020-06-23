import reducer, { initialState } from '../reducer';
import { ON_CHANGE } from '../constants';

describe('reducer', () => {
  it('should return initalState if state isnt defined', () => {
    expect(reducer(undefined, { type: 'gottagofast' }))
      .toBe(initialState);
  });

  describe('ON_CHANGE action dispatch', () => {
    it('should change state value with onChange target date', () => {
      expect(reducer(initialState, {
        type: ON_CHANGE,
        target: {
          name: 'covid-19',
          value: 'cloroquina',
        },
      })
        .getIn(['covid-19'])).toEqual('cloroquina');
    });

    it('should return only state if action type is not defined', () => {
      const state = {
        corona: true,
      };
      expect(reducer(state, { type: 'PAVÃO MISTERIOSO' })).toEqual({
        ...state,
      });
    });
  });
});
