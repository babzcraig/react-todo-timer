import { FETCH_TIMERS_SUCCESS } from './types';  
import uuid from 'uuid';

const timers = [
  {
    title: 'Practice squat',
    project: 'Gym Chores',
    id: uuid.v4(),
    elapsed: 5456099,
    runningSince: Date.now(),
  },
  {
    title: 'Bake squash',
    project: 'Kitchen Chores',
    id: uuid.v4(),
    elapsed: 1273998,
    runningSince: null,
  },
];

export function fetchTimers() {
  console.log('action called');
  return {
    type: FETCH_TIMERS_SUCCESS,
    payload: timers
  }
}

// HELPERS
function fetchTimersSuccess(timers) {
  return {
    type: FETCH_TIMERS_SUCCESS,
    payload: timers
  }
}

