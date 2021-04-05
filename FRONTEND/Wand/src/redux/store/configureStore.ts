import reduxImmutableStatInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

function configureStore () {
  const composeEnhancers = compose;

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxImmutableStatInvariant(), thunk))
  );
}

export default configureStore();
