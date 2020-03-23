const INITIAL_STATE = {
  bla: 'ble',
};

export const templateReducer = (state = INITIAL_STATE, action) => {
  console.log('teste', action);
  if (action.type === 'TEMPLATE') {
    return { ...state, bla: '123' };
  }

  return state;
};

export default templateReducer;
