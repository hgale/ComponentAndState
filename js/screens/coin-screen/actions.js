// import showErrorMessage from '../../shared/error/actions';
import t from './actionTypes';

const coinAPIBaseURL = 'https://api.coinmarketcap.com';

export function coinsLoading() {
  return {
    type: t.COINS_LOADING,
  };
}

export function coinsLoaded() {
  return {
    type: t.COINS_LOADED,
  };
}

/**
 * About to make a request coins
 */
function requestCoins() {
  return dispatch => {
    dispatch({
      type: t.REQUEST_COINS,
    });
  };
}

/**
 * Store coins object
 */
function updateCoins(coins) {
  return dispatch => {
    dispatch({
      type: t.UPDATE_COINS,
      coins,
    });
  };
}

/**
 * fetch coins from API
 */
export default function fetchCoins() {
  return dispatch => {
    dispatch(requestCoins());
    dispatch(coinsLoading());

    fetch(`${coinAPIBaseURL}/v1/ticker/?limit=30`)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(coinsLoaded());
        dispatch(updateCoins(responseJson));
      })
      .catch(error => {
        dispatch(coinsLoaded());
      });
  };
}
