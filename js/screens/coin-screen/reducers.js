import t from './actionTypes';

// Default state. It should never change
const defaultState = {
  coins: [],
  loading: false,
};

const crypto = (state = defaultState, action) => {
  switch (action.type) {
    case t.UPDATE_COINS:
      return Object.assign({}, defaultState, { coins: action.coins });

    case t.COINS_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });

    case t.COINS_LOADED:
      return Object.assign({}, state, {
        loading: false,
      });

    case t.REQUEST_COINS:
    default:
      return state;
  }
};

export default crypto;
