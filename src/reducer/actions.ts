type IncreaseAgeAction = { type: 'increase_age' };
type DecreaseAgeAction = { type: 'decrease_age' };
type IncreaseXAgeAction = { type: 'increase_xAge'; payload: number };

export type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction;

export const increaseAgeAction = () => {
  return { type: 'increase_age' } as IncreaseAgeAction;
};

export const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as DecreaseAgeAction;
};

export const increaseXAgeAction = (payload: number) => {
  return { type: 'increase_xAge', payload } as IncreaseXAgeAction;
};
