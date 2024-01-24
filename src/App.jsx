import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const count = useSelector((state) => state.count);

  return (
    <div className="counter">
      <h1>{count <= 0 ? 0 : count}</h1>
      <div className="btn-group">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
