import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore() {
  const appReducers = (state, action) => {
    return rootReducer(state, action)
  }

  let middleware = [ thunk ]
  const enhancers = compose(
    applyMiddleware(...middleware)
  )
  let store = createStore(appReducers, enhancers)
  return store
}
