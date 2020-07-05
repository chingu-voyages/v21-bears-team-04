import { ADD_TODO } from './types';

export const todo = () => {
  return { type: ADD_TODO, payload: 'Add to do' };
};
