import { FETCH_TIMERS_SUCCESS, CREATE_TIMER_SUCCESS } from './types';  
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
  return {
    type: FETCH_TIMERS_SUCCESS,
    payload: timers
  }
}

export function createTimer(timer) {
    const t = newTimer(timer);
    return {
      type: CREATE_TIMER_SUCCESS,
      payload: t
    }
}

// HELPERS
function newTimer(attrs = {}) {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: uuid.v4(), // eslint-disable-line no-undef
    elapsed: 0,
  };

  return timer;
}

