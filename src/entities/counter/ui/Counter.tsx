import { Button } from "@shared/ui";
import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h2 data-testid="counter-value">value: {value}</h2>
      <Button data-testid="increment" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        decrement
      </Button>
    </>
  );
};
