import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import mySaga from './sagas/sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
  )
)

sagaMiddleware.run(mySaga)

export default store;
