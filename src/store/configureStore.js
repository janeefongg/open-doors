import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger();

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
      )
    )
  )
}
