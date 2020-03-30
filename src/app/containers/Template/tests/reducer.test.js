import { fromJS } from 'immutable';
import reducer, { initialState } from '../reducer';
import { TEMPLATE } from '../constants';

describe('reducer', () => {
  it('should return initalState if state isnt defined', () => {
    expect(reducer(undefined, { type: 'IhavegotthemoveslikeJagger' }))
      .toBe(initialState);
  });

  describe('TEMPLATE action dispatch', () => {
    it('should return state and name equals to Matheus Martins '
    + 'if action type is TEMPLATE', () => {
      expect(reducer(initialState, { type: TEMPLATE })
        .getIn(['name'])).toEqual('Matheus Martins');
    });

    it('should return only state if action type is not TEMPLATE', () => {
      const state = {
        corona: true,
      };
      expect(reducer(state, { type: 'PAVÃO MISTERIOSO' })).toEqual({
        ...state,
      });
    });
  });
});
