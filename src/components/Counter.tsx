import { useReducer } from 'react';
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../reducer/actions';
import reducer, { init, initalState } from '../reducer/reducer';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initalState, init);

  const increaseAge = () => {
    dispatch(increaseAgeAction());
  };

  const decreaseAge = () => {
    dispatch(decreaseAgeAction());
  };

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value));
  };

  return (
    <>
      <button className="w-[150px] bg-red-500 px-3 py-1" onClick={decreaseAge}>
        Decrease age
      </button>
      <p className="bg-blue-500">Hello! you are {state.age} years old.</p>
      <button className="w-[150px] bg-green-500 px-3 py-1" onClick={increaseAge}>
        Increase age
      </button>
      <button className="w-[150px] bg-yellow-500 px-3 py-1" onClick={() => increaseXAge(3)}>
        Increase X age
      </button>
    </>
  );
};

export default Counter;
