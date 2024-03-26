export interface CounterState {
  counter: {
    value: number;
  };
}

export enum CounterActionTypes {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

export type CounterAction =
  | { type: CounterActionTypes.INCREMENT }
  | { type: CounterActionTypes.DECREMENT };

export interface CustomError extends Error {
  statusText?: string;
}
